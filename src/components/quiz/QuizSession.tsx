"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { TimerDisplay } from "@/components/quiz/TimerDisplay";
import { useProgress } from "@/components/providers/ProgressProvider";
import {
  buildAnswerRecord,
  scoreSession,
  shuffleOptions,
  topicBreakdown,
} from "@/lib/quiz";
import { clearSession, saveSession } from "@/lib/storage";
import type { AnswerRecord, Question, TestSession } from "@/lib/types";
import { FULL_TEST_QUESTION_COUNT, PASSING_SCORE, TOPIC_MAP } from "@/lib/constants";

type Props = {
  initialSession: TestSession;
  questions: Question[];
  /** Where to send user after finish */
  resultsPath?: string;
};

export function QuizSession({
  initialSession,
  questions,
  resultsPath = "/practice/results",
}: Props) {
  const router = useRouter();
  const { saveTestResult } = useProgress();
  const [session, setSession] = useState<TestSession>(initialSession);
  const [selected, setSelected] = useState<number | null>(null);
  const [presentation, setPresentation] = useState(() => {
    const q = questions[initialSession.currentIndex];
    return q ? shuffleOptions(q) : { presentedOptions: ["", "", "", ""] as [string, string, string, string], presentedCorrectIndex: 0 };
  });
  const [studyRevealed, setStudyRevealed] = useState(false);
  const [finishing, setFinishing] = useState(false);

  const questionsById = useMemo(
    () => new Map(questions.map((q) => [q.id, q])),
    [questions],
  );

  const orderedQuestions = useMemo(
    () =>
      session.questionIds
        .map((id) => questionsById.get(id))
        .filter((q): q is Question => Boolean(q)),
    [session.questionIds, questionsById],
  );

  const currentQuestion = orderedQuestions[session.currentIndex];
  const isStudy = session.config.mode === "study";
  const total = orderedQuestions.length;

  // Persist session
  useEffect(() => {
    saveSession(session);
  }, [session]);

  // Timer
  useEffect(() => {
    if (session.status !== "in-progress" || session.secondsRemaining == null) return;
    if (session.secondsRemaining <= 0) return;

    const id = window.setInterval(() => {
      setSession((prev) => {
        if (prev.secondsRemaining == null) return prev;
        const next = prev.secondsRemaining - 1;
        if (next <= 0) {
          return { ...prev, secondsRemaining: 0 };
        }
        return { ...prev, secondsRemaining: next };
      });
    }, 1000);

    return () => window.clearInterval(id);
  }, [session.status, session.secondsRemaining == null]);

  const finalize = useCallback(
    (answers: AnswerRecord[]) => {
      if (finishing) return;
      setFinishing(true);

      const scored = scoreSession(answers);
      const breakdown = topicBreakdown(answers, questionsById);
      const finishedAt = new Date().toISOString();

      const completed: TestSession = {
        ...session,
        answers,
        finishedAt,
        status: "completed",
        currentIndex: Math.max(0, total - 1),
      };
      saveSession(completed);

      const isFullLength = total >= FULL_TEST_QUESTION_COUNT;
      saveTestResult(
        {
          id: session.id,
          mode: session.config.mode,
          score: scored.correct,
          total: scored.total,
          passed: isFullLength
            ? scored.correct >= PASSING_SCORE
            : scored.percent >= Math.round((PASSING_SCORE / FULL_TEST_QUESTION_COUNT) * 100),
          finishedAt,
          topicFilter: session.config.topicFilter,
          topicBreakdown: breakdown,
        },
        answers.map((a) => {
          const q = questionsById.get(a.questionId)!;
          return {
            questionId: a.questionId,
            isCorrect: a.isCorrect,
            topic: q.topic,
          };
        }),
      );

      router.push(resultsPath);
    },
    [
      finishing,
      questionsById,
      session,
      total,
      saveTestResult,
      router,
      resultsPath,
    ],
  );

  // Auto-finish when timer hits 0
  useEffect(() => {
    if (
      session.status === "in-progress" &&
      session.secondsRemaining === 0 &&
      session.config.timeLimitMinutes != null
    ) {
      finalize(session.answers);
    }
  }, [session.secondsRemaining, session.status, session.config.timeLimitMinutes, session.answers, finalize]);

  const loadQuestionPresentation = useCallback((q: Question) => {
    setPresentation(shuffleOptions(q));
    setSelected(null);
    setStudyRevealed(false);
  }, []);

  const commitAnswer = useCallback(
    (selectedIndex: number) => {
      if (!currentQuestion || session.status !== "in-progress") return;

      const record = buildAnswerRecord(
        currentQuestion,
        selectedIndex,
        presentation.presentedOptions,
        presentation.presentedCorrectIndex,
      );
      const nextAnswers = [...session.answers, record];
      const nextIndex = session.currentIndex + 1;

      if (nextIndex >= total) {
        finalize(nextAnswers);
        return;
      }

      const nextQ = orderedQuestions[nextIndex];
      setSession((prev) => ({
        ...prev,
        answers: nextAnswers,
        currentIndex: nextIndex,
      }));
      if (nextQ) loadQuestionPresentation(nextQ);
    },
    [
      currentQuestion,
      session,
      presentation,
      total,
      finalize,
      orderedQuestions,
      loadQuestionPresentation,
    ],
  );

  const onSelectOption = (index: number) => {
    if (studyRevealed || session.status !== "in-progress") return;
    setSelected(index);
  };

  const onPrimaryAction = () => {
    if (selected == null || !currentQuestion) return;

    if (isStudy && !studyRevealed) {
      setStudyRevealed(true);
      return;
    }

    commitAnswer(selected);
  };

  const abandon = () => {
    clearSession();
    router.push("/practice");
  };

  if (!currentQuestion) {
    return (
      <Card>
        <p className="text-sm text-[var(--muted)]">No questions available.</p>
        <Button className="mt-4" onClick={() => router.push("/practice")}>
          Back to setup
        </Button>
      </Card>
    );
  }

  const answeredCount = session.answers.length;
  const topicLabel =
    session.config.topicFilter && session.config.topicFilter !== "all"
      ? TOPIC_MAP[session.config.topicFilter]?.shortTitle
      : "Full mix";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-[var(--brand-soft)] px-2.5 py-1 font-medium text-[var(--brand)]">
            {isStudy ? "Study mode" : "Exam simulation"}
          </span>
          <span className="rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[var(--muted-strong)]">
            {topicLabel}
          </span>
          <TimerDisplay secondsRemaining={session.secondsRemaining} />
        </div>
        <button
          type="button"
          onClick={abandon}
          className="text-xs font-medium text-[var(--muted)] underline-offset-2 hover:text-[var(--danger)] hover:underline"
        >
          Exit
        </button>
      </div>

      <ProgressBar current={Math.min(answeredCount + 1, total)} total={total} />

      <Card>
        <QuestionCard
          question={currentQuestion}
          presentedOptions={presentation.presentedOptions}
          selectedIndex={selected}
          revealedCorrectIndex={
            isStudy && studyRevealed ? presentation.presentedCorrectIndex : null
          }
          showExplanation={isStudy && studyRevealed}
          onSelect={onSelectOption}
          disabled={studyRevealed}
        />

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button
            fullWidth
            className="sm:w-auto sm:min-w-[10rem]"
            disabled={selected == null}
            onClick={onPrimaryAction}
          >
            {isStudy && !studyRevealed
              ? "Check answer"
              : answeredCount + 1 >= total
                ? "Finish"
                : "Next question"}
          </Button>
        </div>

        {!isStudy ? (
          <p className="mt-3 text-center text-xs text-[var(--muted)]">
            Exam mode: feedback appears after you finish. No going back.
          </p>
        ) : (
          <p className="mt-3 text-center text-xs text-[var(--muted)]">
            Study mode: check each answer, then continue. No going back.
          </p>
        )}
      </Card>
    </div>
  );
}

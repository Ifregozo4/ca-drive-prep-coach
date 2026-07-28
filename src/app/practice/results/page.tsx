"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { TrafficSign } from "@/components/signs/TrafficSign";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getQuestionMap } from "@/data/questions";
import {
  FULL_TEST_QUESTION_COUNT,
  PASSING_SCORE,
  TOPIC_MAP,
} from "@/lib/constants";
import { loadSession } from "@/lib/storage";
import type { Question, TestSession } from "@/lib/types";

export default function PracticeResultsPage() {
  const [session, setSession] = useState<TestSession | null>(null);
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState<"all" | "missed">("all");

  useEffect(() => {
    const s = loadSession();
    setSession(s && s.status === "completed" ? s : null);
    setReady(true);
  }, []);

  const map = useMemo(() => getQuestionMap(), []);

  if (!ready) {
    return (
      <Card>
        <p className="text-sm text-[var(--muted)]">Loading results…</p>
      </Card>
    );
  }

  if (!session) {
    return (
      <Card className="space-y-3">
        <h1 className="text-lg font-semibold">No results to show</h1>
        <p className="text-sm text-[var(--muted-strong)]">
          Finish a practice test to see your score and review.
        </p>
        <Link href="/practice">
          <Button>Start a practice test</Button>
        </Link>
      </Card>
    );
  }

  const correct = session.answers.filter((a) => a.isCorrect).length;
  const total = session.answers.length;
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
  const isFull = total >= FULL_TEST_QUESTION_COUNT;
  const passed = isFull ? correct >= PASSING_SCORE : percent >= Math.round((PASSING_SCORE / FULL_TEST_QUESTION_COUNT) * 100);

  const reviewItems = session.answers
    .map((answer, index) => {
      const question = map.get(answer.questionId) as Question | undefined;
      return { answer, question, number: index + 1 };
    })
    .filter((item) => item.question)
    .filter((item) => (filter === "missed" ? !item.answer.isCorrect : true));

  return (
    <div className="space-y-6">
      <Card
        className={`border-2 ${
          passed
            ? "border-[var(--success)] bg-[var(--success-soft)]"
            : "border-[var(--danger)] bg-[var(--danger-soft)]"
        }`}
      >
        <p className="text-sm font-medium uppercase tracking-wide opacity-80">
          {session.config.mode === "exam" ? "Exam simulation" : "Study session"}
        </p>
        <h1 className="mt-1 text-3xl font-bold tabular-nums">
          {correct}/{total}{" "}
          <span className="text-lg font-semibold">({percent}%)</span>
        </h1>
        <p className="mt-2 text-lg font-semibold">
          {isFull
            ? passed
              ? `Pass — you reached ${PASSING_SCORE}+ correct`
              : `Not yet — need ${PASSING_SCORE} correct to pass`
            : passed
              ? "Solid topic score"
              : "Keep drilling this area"}
        </p>
        <p className="mt-1 text-sm opacity-90">
          Official-style bar: {PASSING_SCORE}/{FULL_TEST_QUESTION_COUNT} (
          {Math.round((PASSING_SCORE / FULL_TEST_QUESTION_COUNT) * 100)}%).
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Link href="/practice" className="sm:flex-1">
            <Button fullWidth>Take another test</Button>
          </Link>
          <Link href="/" className="sm:flex-1">
            <Button fullWidth variant="secondary">
              Dashboard
            </Button>
          </Link>
        </div>
      </Card>

      <Card>
        <h2 className="text-base font-semibold">By topic</h2>
        <ul className="mt-3 space-y-2">
          {Object.entries(
            session.answers.reduce<Record<string, { c: number; t: number }>>((acc, a) => {
              const q = map.get(a.questionId);
              if (!q) return acc;
              const b = acc[q.topic] ?? { c: 0, t: 0 };
              b.t += 1;
              if (a.isCorrect) b.c += 1;
              acc[q.topic] = b;
              return acc;
            }, {}),
          ).map(([topicId, { c, t }]) => {
            const meta = TOPIC_MAP[topicId as keyof typeof TOPIC_MAP];
            const pct = Math.round((c / t) * 100);
            return (
              <li key={topicId} className="text-sm">
                <div className="flex justify-between gap-2">
                  <span className="font-medium">{meta?.title ?? topicId}</span>
                  <span className="tabular-nums text-[var(--muted-strong)]">
                    {c}/{t} · {pct}%
                  </span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[var(--surface-3)]">
                  <div
                    className="h-full rounded-full bg-[var(--brand)]"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </Card>

      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">Review</h2>
          <div className="flex gap-1 rounded-full bg-[var(--surface-2)] p-1">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                filter === "all" ? "bg-[var(--brand)] text-white" : "text-[var(--muted-strong)]"
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter("missed")}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                filter === "missed"
                  ? "bg-[var(--brand)] text-white"
                  : "text-[var(--muted-strong)]"
              }`}
            >
              Missed only
            </button>
          </div>
        </div>

        {reviewItems.length === 0 ? (
          <Card>
            <p className="text-sm text-[var(--muted-strong)]">
              {filter === "missed"
                ? "Nice work — no missed questions."
                : "Nothing to review."}
            </p>
          </Card>
        ) : (
          reviewItems.map(({ answer, question, number }) => {
            if (!question) return null;
            return (
              <Card key={`${answer.questionId}-${number}`} className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                    Question {number}
                  </p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      answer.isCorrect
                        ? "bg-[var(--success-soft)] text-[var(--success)]"
                        : "bg-[var(--danger-soft)] text-[var(--danger)]"
                    }`}
                  >
                    {answer.isCorrect ? "Correct" : "Incorrect"}
                  </span>
                </div>

                {question.signId ? (
                  <div className="flex justify-center">
                    <TrafficSign signId={question.signId} className="h-20 w-20" />
                  </div>
                ) : null}

                <p className="font-medium leading-snug">{question.prompt}</p>

                <ul className="space-y-1.5 text-sm">
                  {answer.presentedOptions.map((opt, i) => {
                    const isCorrect = i === answer.presentedCorrectIndex;
                    const isPicked = i === answer.selectedIndex;
                    return (
                      <li
                        key={i}
                        className={`rounded-lg border px-3 py-2 ${
                          isCorrect
                            ? "border-[var(--success)] bg-[var(--success-soft)]"
                            : isPicked
                              ? "border-[var(--danger)] bg-[var(--danger-soft)]"
                              : "border-[var(--border)]"
                        }`}
                      >
                        {opt}
                        {isCorrect ? (
                          <span className="ml-2 text-xs font-semibold text-[var(--success)]">
                            Correct answer
                          </span>
                        ) : null}
                        {isPicked && !isCorrect ? (
                          <span className="ml-2 text-xs font-semibold text-[var(--danger)]">
                            Your answer
                          </span>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>

                <div className="rounded-xl bg-[var(--surface-2)] px-3 py-2 text-sm leading-relaxed">
                  <p className="font-semibold">Explanation</p>
                  <p className="mt-1 text-[var(--muted-strong)]">{question.explanation}</p>
                </div>
              </Card>
            );
          })
        )}
      </section>
    </div>
  );
}

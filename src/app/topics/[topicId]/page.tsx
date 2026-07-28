"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TOPIC_MAP, TOPIC_QUIZ_DEFAULT_COUNT } from "@/lib/constants";
import { createSession, selectQuestions } from "@/lib/quiz";
import { clearSession, saveSession } from "@/lib/storage";
import { getQuestionsByTopic } from "@/data/questions";
import type { TestMode, TopicId } from "@/lib/types";
import { accuracy, loadProgress } from "@/lib/storage";
import { useProgress } from "@/components/providers/ProgressProvider";

const TOPIC_IDS = Object.keys(TOPIC_MAP) as TopicId[];

export default function TopicDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { progress } = useProgress();
  const topicId = String(params.topicId ?? "") as TopicId;
  const topic = TOPIC_MAP[topicId];
  const [mode, setMode] = useState<TestMode>("study");
  const [count, setCount] = useState(TOPIC_QUIZ_DEFAULT_COUNT);

  const pool = useMemo(
    () => (topic ? getQuestionsByTopic(topicId) : []),
    [topic, topicId],
  );

  if (!topic || !TOPIC_IDS.includes(topicId)) {
    return (
      <Card className="space-y-3">
        <h1 className="text-lg font-semibold">Topic not found</h1>
        <Link href="/topics">
          <Button variant="secondary">Back to topics</Button>
        </Link>
      </Card>
    );
  }

  const stats = progress.topicStats[topicId];
  const acc = accuracy(stats);
  const maxCount = Math.min(pool.length, 30);
  const quizCount = Math.min(count, maxCount);

  const start = () => {
    const selected = selectQuestions(pool, {
      questionCount: quizCount,
      topicFilter: topicId,
    });
    const session = createSession(selected, {
      mode,
      timeLimitMinutes: null,
      questionCount: selected.length,
      topicFilter: topicId,
    });
    clearSession();
    saveSession(session);
    router.push("/practice/test");
  };

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/topics"
          className="text-xs font-medium text-[var(--brand)] hover:underline"
        >
          ← All topics
        </Link>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">{topic.title}</h1>
        <p className="mt-1 text-sm text-[var(--muted-strong)]">{topic.description}</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card className="py-3 text-center">
          <p className="text-[11px] uppercase text-[var(--muted)]">Questions</p>
          <p className="text-xl font-bold tabular-nums">{pool.length}</p>
        </Card>
        <Card className="py-3 text-center">
          <p className="text-[11px] uppercase text-[var(--muted)]">Attempted</p>
          <p className="text-xl font-bold tabular-nums">{stats?.attempted ?? 0}</p>
        </Card>
        <Card className="py-3 text-center">
          <p className="text-[11px] uppercase text-[var(--muted)]">Accuracy</p>
          <p className="text-xl font-bold tabular-nums">{acc != null ? `${acc}%` : "—"}</p>
        </Card>
      </div>

      <Card className="space-y-4">
        <h2 className="text-base font-semibold">Start a short quiz</h2>

        <div className="grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setMode("study")}
            className={`rounded-xl border p-3 text-left text-sm ${
              mode === "study"
                ? "border-[var(--brand)] bg-[var(--brand-soft)]"
                : "border-[var(--border)]"
            }`}
          >
            <p className="font-semibold">Study mode</p>
            <p className="mt-1 text-xs text-[var(--muted)]">Feedback after each item</p>
          </button>
          <button
            type="button"
            onClick={() => setMode("exam")}
            className={`rounded-xl border p-3 text-left text-sm ${
              mode === "exam"
                ? "border-[var(--brand)] bg-[var(--brand-soft)]"
                : "border-[var(--border)]"
            }`}
          >
            <p className="font-semibold">Quiz mode</p>
            <p className="mt-1 text-xs text-[var(--muted)]">Score + review at the end</p>
          </button>
        </div>

        <label className="block text-sm">
          <span className="font-medium">Number of questions</span>
          <input
            type="range"
            min={5}
            max={maxCount}
            value={quizCount}
            onChange={(e) => setCount(Number(e.target.value))}
            className="mt-2 w-full accent-[var(--brand)]"
          />
          <span className="mt-1 block text-xs text-[var(--muted)]">
            {quizCount} of {pool.length} available
          </span>
        </label>

        <Button fullWidth onClick={start} disabled={pool.length === 0}>
          Start {quizCount}-question quiz
        </Button>
      </Card>

      <Card className="bg-[var(--surface-2)] text-sm text-[var(--muted-strong)]">
        <p className="font-medium text-[var(--foreground)]">Handbook focus</p>
        <p className="mt-1">{topic.handbookFocus}</p>
        <p className="mt-2 text-xs">
          Progress is saved in this browser only
          {typeof window !== "undefined" && loadProgress().updatedAt
            ? ` · last update recorded locally`
            : ""}
          .
        </p>
      </Card>
    </div>
  );
}

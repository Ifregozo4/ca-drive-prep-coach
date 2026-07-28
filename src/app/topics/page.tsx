"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { useProgress } from "@/components/providers/ProgressProvider";
import { TOPICS } from "@/lib/constants";
import { accuracy } from "@/lib/storage";
import { getQuestionsByTopic } from "@/data/questions";

export default function TopicsPage() {
  const { progress, ready } = useProgress();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Topic study</h1>
        <p className="mt-1 text-sm text-[var(--muted-strong)]">
          Short quizzes by handbook area. High-priority topics are marked for extra
          practice.
        </p>
      </div>

      <div className="space-y-3">
        {TOPICS.map((topic) => {
          const count = getQuestionsByTopic(topic.id).length;
          const stats = progress.topicStats[topic.id];
          const acc = ready ? accuracy(stats) : null;

          return (
            <Link key={topic.id} href={`/topics/${topic.id}`} className="block">
              <Card className="transition-colors hover:border-[var(--brand)]">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-semibold">{topic.title}</h2>
                      {topic.priority === "high" ? (
                        <span className="rounded-full bg-[var(--warn-soft)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--warn)]">
                          High-miss focus
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-[var(--muted-strong)]">
                      {topic.description}
                    </p>
                    <p className="mt-2 text-xs text-[var(--muted)]">
                      {count} practice questions · {topic.handbookFocus}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold tabular-nums text-[var(--brand)]">
                      {acc != null ? `${acc}%` : "—"}
                    </p>
                    <p className="text-[11px] text-[var(--muted)]">accuracy</p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

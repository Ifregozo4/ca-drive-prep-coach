"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useProgress } from "@/components/providers/ProgressProvider";
import {
  FULL_TEST_QUESTION_COUNT,
  PASSING_SCORE,
  TOPICS,
} from "@/lib/constants";
import { accuracy } from "@/lib/storage";
import { QUESTION_BANK_SIZE } from "@/data/questions";

export default function DashboardPage() {
  const { progress, ready, resetProgress } = useProgress();

  const tests = progress.completedTests;
  const fullTests = tests.filter((t) => t.total >= FULL_TEST_QUESTION_COUNT);
  const passCount = fullTests.filter((t) => t.passed).length;
  const last = tests[0];

  const topicRows = TOPICS.map((topic) => {
    const stats = progress.topicStats[topic.id];
    const acc = accuracy(stats);
    return { topic, stats, acc };
  }).sort((a, b) => {
    // Weakest first among attempted
    if (a.acc == null && b.acc == null) return 0;
    if (a.acc == null) return 1;
    if (b.acc == null) return -1;
    return a.acc - b.acc;
  });

  const weak = topicRows.filter((r) => r.acc != null && r.acc < 80).slice(0, 3);
  const strong = topicRows
    .filter((r) => r.acc != null && r.acc >= 80)
    .sort((a, b) => (b.acc ?? 0) - (a.acc ?? 0))
    .slice(0, 3);

  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
          Ready for the CA knowledge test?
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted-strong)] sm:text-base">
          Practice with handbook-based questions in a clean study tool. Full tests use{" "}
          <strong className="text-[var(--foreground)]">
            {FULL_TEST_QUESTION_COUNT} questions
          </strong>
          ; passing score is{" "}
          <strong className="text-[var(--foreground)]">
            {PASSING_SCORE} correct
          </strong>
          . Bank size: {QUESTION_BANK_SIZE}+ original practice items.
        </p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <Card className="flex flex-col gap-3 bg-[var(--brand)] text-white border-transparent">
          <div>
            <p className="text-sm font-medium text-white/80">Start studying</p>
            <h2 className="mt-1 text-xl font-bold">Full practice test</h2>
            <p className="mt-1 text-sm text-white/85">
              46 questions · study or exam mode · optional custom timer
            </p>
          </div>
          <Link href="/practice" className="mt-auto">
            <Button
              className="w-full border-0 bg-white text-[var(--brand)] hover:bg-white/90"
              variant="secondary"
            >
              Set up a practice test
            </Button>
          </Link>
        </Card>

        <Card className="flex flex-col gap-3">
          <div>
            <p className="text-sm font-medium text-[var(--muted)]">Focus practice</p>
            <h2 className="mt-1 text-xl font-bold">Topic study</h2>
            <p className="mt-1 text-sm text-[var(--muted-strong)]">
              Drill high-miss areas: signs, right-of-way, speed, parking, DUI.
            </p>
          </div>
          <Link href="/topics" className="mt-auto">
            <Button variant="secondary" fullWidth>
              Browse topics
            </Button>
          </Link>
        </Card>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Tests taken" value={ready ? String(tests.length) : "—"} />
        <Stat
          label="Full tests passed"
          value={ready ? `${passCount}/${fullTests.length || 0}` : "—"}
        />
        <Stat
          label="Last score"
          value={
            ready && last
              ? `${last.score}/${last.total}`
              : ready
                ? "—"
                : "—"
          }
        />
        <Stat
          label="Last result"
          value={
            ready && last
              ? last.passed
                ? "Pass"
                : last.total >= FULL_TEST_QUESTION_COUNT
                  ? "Needs work"
                  : `${Math.round((last.score / last.total) * 100)}%`
              : "—"
          }
        />
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <Card>
          <h2 className="text-base font-semibold">Needs more work</h2>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Based on your answered questions (local only).
          </p>
          <ul className="mt-3 space-y-2">
            {!ready ? (
              <li className="text-sm text-[var(--muted)]">Loading…</li>
            ) : weak.length === 0 ? (
              <li className="text-sm text-[var(--muted-strong)]">
                Complete a few quizzes to see weak topics here.
              </li>
            ) : (
              weak.map(({ topic, acc, stats }) => (
                <li key={topic.id}>
                  <Link
                    href={`/topics/${topic.id}`}
                    className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm hover:border-[var(--brand)]"
                  >
                    <span className="font-medium">{topic.title}</span>
                    <span className="tabular-nums text-[var(--danger)]">
                      {acc}% · {stats?.correct}/{stats?.attempted}
                    </span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </Card>

        <Card>
          <h2 className="text-base font-semibold">Strengths</h2>
          <p className="mt-1 text-xs text-[var(--muted)]">Topics at 80%+ accuracy.</p>
          <ul className="mt-3 space-y-2">
            {!ready ? (
              <li className="text-sm text-[var(--muted)]">Loading…</li>
            ) : strong.length === 0 ? (
              <li className="text-sm text-[var(--muted-strong)]">
                Keep practicing — strengths will show up here.
              </li>
            ) : (
              strong.map(({ topic, acc, stats }) => (
                <li key={topic.id}>
                  <Link
                    href={`/topics/${topic.id}`}
                    className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm hover:border-[var(--brand)]"
                  >
                    <span className="font-medium">{topic.title}</span>
                    <span className="tabular-nums text-[var(--success)]">
                      {acc}% · {stats?.correct}/{stats?.attempted}
                    </span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </Card>
      </section>

      {tests.length > 0 ? (
        <Card>
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-semibold">Recent sessions</h2>
            <button
              type="button"
              onClick={() => {
                if (confirm("Reset all local progress? This cannot be undone.")) {
                  resetProgress();
                }
              }}
              className="text-xs font-medium text-[var(--muted)] underline-offset-2 hover:text-[var(--danger)] hover:underline"
            >
              Reset progress
            </button>
          </div>
          <ul className="mt-3 divide-y divide-[var(--border)]">
            {tests.slice(0, 5).map((t) => (
              <li
                key={t.id}
                className="flex items-center justify-between gap-3 py-2.5 text-sm"
              >
                <div>
                  <p className="font-medium">
                    {t.mode === "exam" ? "Exam" : "Study"} · {t.score}/{t.total}
                  </p>
                  <p className="text-xs text-[var(--muted)]">
                    {new Date(t.finishedAt).toLocaleString()}
                  </p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    t.passed
                      ? "bg-[var(--success-soft)] text-[var(--success)]"
                      : "bg-[var(--danger-soft)] text-[var(--danger)]"
                  }`}
                >
                  {t.total >= FULL_TEST_QUESTION_COUNT
                    ? t.passed
                      ? "PASS"
                      : "NOT YET"
                    : `${Math.round((t.score / t.total) * 100)}%`}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}

      <Card className="bg-[var(--surface-2)]">
        <h2 className="text-sm font-semibold">Quick reference</h2>
        <p className="mt-1 text-sm text-[var(--muted-strong)]">
          Review right-of-way, speed defaults, parking, and sign meanings.
        </p>
        <Link href="/reference" className="mt-3 inline-block">
          <Button variant="secondary">Open cheat sheets</Button>
        </Link>
      </Card>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Card className="py-3">
      <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-1 text-xl font-bold tabular-nums">{value}</p>
    </Card>
  );
}

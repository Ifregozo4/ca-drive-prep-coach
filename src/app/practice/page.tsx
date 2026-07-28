"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  FULL_TEST_QUESTION_COUNT,
  PASSING_SCORE,
  TIMER_PRESETS_MINUTES,
  TOPICS,
} from "@/lib/constants";
import { createSession, selectQuestions } from "@/lib/quiz";
import { clearSession, saveSession } from "@/lib/storage";
import { ALL_QUESTIONS } from "@/data/questions";
import type { PracticeConfig, TestMode, TopicId } from "@/lib/types";

export default function PracticeSetupPage() {
  const router = useRouter();
  const [mode, setMode] = useState<TestMode>("study");
  const [timed, setTimed] = useState(false);
  const [minutes, setMinutes] = useState(45);
  const [customMinutes, setCustomMinutes] = useState("45");
  const [topicFilter, setTopicFilter] = useState<TopicId | "all">("all");

  const start = () => {
    const config: PracticeConfig = {
      mode,
      timeLimitMinutes: timed ? Math.max(1, minutes) : null,
      questionCount: FULL_TEST_QUESTION_COUNT,
      topicFilter,
    };

    const selected = selectQuestions(ALL_QUESTIONS, config);
    if (selected.length < FULL_TEST_QUESTION_COUNT && topicFilter !== "all") {
      // Topic-only full tests may be smaller if bank for topic is smaller — still allow
    }

    const session = createSession(selected, {
      ...config,
      questionCount: selected.length,
    });
    clearSession();
    saveSession(session);
    router.push("/practice/test");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Practice test</h1>
        <p className="mt-1 text-sm text-[var(--muted-strong)]">
          {FULL_TEST_QUESTION_COUNT} questions · pass at {PASSING_SCORE} correct · no
          going back until review
        </p>
      </div>

      <Card className="space-y-5">
        <fieldset>
          <legend className="text-sm font-semibold">Mode</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            <ModeOption
              title="Study mode"
              description="Immediate feedback and explanation after each question."
              selected={mode === "study"}
              onSelect={() => setMode("study")}
            />
            <ModeOption
              title="Exam simulation"
              description="No feedback until the end — closest to test day."
              selected={mode === "exam"}
              onSelect={() => setMode("exam")}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold">Timer</legend>
          <label className="mt-2 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={timed}
              onChange={(e) => setTimed(e.target.checked)}
              className="h-4 w-4 accent-[var(--brand)]"
            />
            Enable timed mode
          </label>

          {timed ? (
            <div className="mt-3 space-y-3">
              <div className="flex flex-wrap gap-2">
                {TIMER_PRESETS_MINUTES.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      setMinutes(m);
                      setCustomMinutes(String(m));
                    }}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      minutes === m
                        ? "bg-[var(--brand)] text-white"
                        : "bg-[var(--surface-2)] text-[var(--muted-strong)]"
                    }`}
                  >
                    {m} min
                  </button>
                ))}
              </div>
              <label className="block text-sm">
                <span className="text-[var(--muted)]">Custom minutes</span>
                <input
                  type="number"
                  min={1}
                  max={180}
                  value={customMinutes}
                  onChange={(e) => {
                    setCustomMinutes(e.target.value);
                    const n = Number(e.target.value);
                    if (!Number.isNaN(n) && n > 0) setMinutes(Math.floor(n));
                  }}
                  className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--foreground)] focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30"
                />
              </label>
            </div>
          ) : (
            <p className="mt-2 text-xs text-[var(--muted)]">Untimed — take your time.</p>
          )}
        </fieldset>

        <label className="block text-sm">
          <span className="font-semibold">Question pool</span>
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value as TopicId | "all")}
            className="mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-[var(--foreground)] focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30"
          >
            <option value="all">All topics (recommended full test)</option>
            {TOPICS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title} only
              </option>
            ))}
          </select>
          <span className="mt-1 block text-xs text-[var(--muted)]">
            Full tests prefer a mix weighted toward high-miss items when using all topics.
          </span>
        </label>

        <Button fullWidth onClick={start}>
          Start {FULL_TEST_QUESTION_COUNT}-question test
        </Button>
      </Card>

      <Card className="bg-[var(--surface-2)] text-sm text-[var(--muted-strong)]">
        <p className="font-medium text-[var(--foreground)]">How scoring works</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            Official format mirrored here: {FULL_TEST_QUESTION_COUNT} questions,{" "}
            {PASSING_SCORE} correct to pass.
          </li>
          <li>Questions are original practice items based on handbook knowledge.</li>
          <li>After finishing, review every item with explanations.</li>
        </ul>
      </Card>
    </div>
  );
}

function ModeOption({
  title,
  description,
  selected,
  onSelect,
}: {
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`rounded-xl border p-3 text-left transition-colors ${
        selected
          ? "border-[var(--brand)] bg-[var(--brand-soft)] ring-2 ring-[var(--brand)]/25"
          : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]"
      }`}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-[var(--muted-strong)]">{description}</p>
    </button>
  );
}

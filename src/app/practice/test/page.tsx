"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { QuizSession } from "@/components/quiz/QuizSession";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ALL_QUESTIONS, getQuestionMap } from "@/data/questions";
import { loadSession } from "@/lib/storage";
import type { Question, TestSession } from "@/lib/types";

export default function PracticeTestPage() {
  const [session, setSession] = useState<TestSession | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const s = loadSession();
    if (s && s.status === "in-progress") {
      setSession(s);
    } else if (s && s.status === "completed") {
      setSession(null);
    }
    setReady(true);
  }, []);

  const questions: Question[] = useMemo(() => {
    if (!session) return [];
    const map = getQuestionMap();
    return session.questionIds
      .map((id) => map.get(id))
      .filter((q): q is Question => Boolean(q));
  }, [session]);

  if (!ready) {
    return (
      <Card>
        <p className="text-sm text-[var(--muted)]">Loading session…</p>
      </Card>
    );
  }

  if (!session || questions.length === 0) {
    return (
      <Card className="space-y-3">
        <h1 className="text-lg font-semibold">No active test</h1>
        <p className="text-sm text-[var(--muted-strong)]">
          Start a practice test from the setup screen. ({ALL_QUESTIONS.length} questions in
          the bank.)
        </p>
        <Link href="/practice">
          <Button>Go to practice setup</Button>
        </Link>
      </Card>
    );
  }

  return <QuizSession initialSession={session} questions={questions} />;
}

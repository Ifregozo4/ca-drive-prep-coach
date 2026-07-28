"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  loadProgress,
  recordCompletedTest,
  resetProgress as resetStoredProgress,
} from "@/lib/storage";
import type { CompletedTestSummary, ProgressState, TopicId } from "@/lib/types";

type ProgressContextValue = {
  progress: ProgressState;
  ready: boolean;
  saveTestResult: (
    summary: CompletedTestSummary,
    answers: { questionId: string; isCorrect: boolean; topic: TopicId }[],
  ) => void;
  resetProgress: () => void;
  refresh: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>({
    version: 1,
    completedTests: [],
    topicStats: {},
    questionStats: {},
    updatedAt: new Date().toISOString(),
  });
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => {
    setProgress(loadProgress());
  }, []);

  useEffect(() => {
    refresh();
    setReady(true);
  }, [refresh]);

  const saveTestResult = useCallback(
    (
      summary: CompletedTestSummary,
      answers: { questionId: string; isCorrect: boolean; topic: TopicId }[],
    ) => {
      const next = recordCompletedTest(summary, answers);
      setProgress(next);
    },
    [],
  );

  const resetProgress = useCallback(() => {
    setProgress(resetStoredProgress());
  }, []);

  const value = useMemo(
    () => ({ progress, ready, saveTestResult, resetProgress, refresh }),
    [progress, ready, saveTestResult, resetProgress, refresh],
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}

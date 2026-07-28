"use client";

import { STORAGE_KEYS } from "./constants";
import type { CompletedTestSummary, ProgressState, TestSession, TopicId } from "./types";

function emptyProgress(): ProgressState {
  return {
    version: 1,
    completedTests: [],
    topicStats: {},
    questionStats: {},
    updatedAt: new Date().toISOString(),
  };
}

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.progress);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as ProgressState;
    if (parsed.version !== 1) return emptyProgress();
    return parsed;
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(state: ProgressState): void {
  if (typeof window === "undefined") return;
  const next = { ...state, updatedAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(next));
}

export function recordCompletedTest(
  summary: CompletedTestSummary,
  answerDetails: { questionId: string; isCorrect: boolean; topic: TopicId }[],
): ProgressState {
  const current = loadProgress();
  const topicStats = { ...current.topicStats };
  const questionStats = { ...current.questionStats };

  for (const a of answerDetails) {
    const t = topicStats[a.topic] ?? { attempted: 0, correct: 0 };
    t.attempted += 1;
    if (a.isCorrect) t.correct += 1;
    topicStats[a.topic] = t;

    const q = questionStats[a.questionId] ?? { attempted: 0, correct: 0 };
    q.attempted += 1;
    if (a.isCorrect) q.correct += 1;
    questionStats[a.questionId] = q;
  }

  const completedTests = [summary, ...current.completedTests].slice(0, 50);
  const next: ProgressState = {
    version: 1,
    completedTests,
    topicStats,
    questionStats,
    lastStudiedTopic: summary.topicFilter && summary.topicFilter !== "all"
      ? summary.topicFilter
      : current.lastStudiedTopic,
    updatedAt: new Date().toISOString(),
  };
  saveProgress(next);
  return next;
}

export function resetProgress(): ProgressState {
  const next = emptyProgress();
  saveProgress(next);
  return next;
}

export function loadSession(): TestSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEYS.activeSession);
    if (!raw) return null;
    return JSON.parse(raw) as TestSession;
  } catch {
    return null;
  }
}

export function saveSession(session: TestSession): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEYS.activeSession, JSON.stringify(session));
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(STORAGE_KEYS.activeSession);
}

export function loadTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEYS.theme);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function saveTheme(theme: "light" | "dark"): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

export function accuracy(stats?: { attempted: number; correct: number } | null): number | null {
  if (!stats || stats.attempted === 0) return null;
  return Math.round((stats.correct / stats.attempted) * 100);
}

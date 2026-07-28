import type {
  AnswerRecord,
  PracticeConfig,
  Question,
  TestSession,
  TopicId,
} from "./types";
import { FULL_TEST_QUESTION_COUNT, PASSING_SCORE } from "./constants";

export function shuffle<T>(items: T[], random = Math.random): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function shuffleOptions(question: Question, random = Math.random) {
  const indexed = question.options.map((text, index) => ({ text, index }));
  const shuffled = shuffle(indexed, random);
  return {
    presentedOptions: shuffled.map((o) => o.text) as [string, string, string, string],
    presentedCorrectIndex: shuffled.findIndex((o) => o.index === question.correctIndex),
  };
}

/**
 * Weighted selection: prefer high-miss tags, then underrepresented topics when building full tests.
 */
export function selectQuestions(
  pool: Question[],
  config: Pick<PracticeConfig, "questionCount" | "topicFilter">,
  random = Math.random,
): Question[] {
  let candidates =
    !config.topicFilter || config.topicFilter === "all"
      ? pool
      : pool.filter((q) => q.topic === config.topicFilter);

  if (candidates.length === 0) {
    candidates = pool;
  }

  const highMiss = candidates.filter((q) => q.difficulty === "high-miss");
  const core = candidates.filter((q) => q.difficulty !== "high-miss");

  const count = Math.min(config.questionCount, candidates.length);
  const highMissTarget = Math.min(highMiss.length, Math.ceil(count * 0.45));
  const selectedHigh = shuffle(highMiss, random).slice(0, highMissTarget);
  const remaining = count - selectedHigh.length;
  const selectedCore = shuffle(core, random).slice(0, remaining);

  let selected = [...selectedHigh, ...selectedCore];

  if (selected.length < count) {
    const used = new Set(selected.map((q) => q.id));
    const filler = shuffle(
      candidates.filter((q) => !used.has(q.id)),
      random,
    ).slice(0, count - selected.length);
    selected = [...selected, ...filler];
  }

  // Light topic balance for full tests
  if ((!config.topicFilter || config.topicFilter === "all") && count >= FULL_TEST_QUESTION_COUNT) {
    selected = balanceTopics(selected, candidates, count, random);
  }

  return shuffle(selected, random).slice(0, count);
}

function balanceTopics(
  selected: Question[],
  pool: Question[],
  count: number,
  random: () => number,
): Question[] {
  const byTopic = new Map<TopicId, Question[]>();
  for (const q of selected) {
    const list = byTopic.get(q.topic) ?? [];
    list.push(q);
    byTopic.set(q.topic, list);
  }

  // Ensure at least a few from high-priority areas when possible
  const minPerTopic = 3;
  const used = new Set(selected.map((q) => q.id));
  const result = [...selected];

  for (const topic of byTopic.keys()) {
    const have = byTopic.get(topic)?.length ?? 0;
    if (have >= minPerTopic) continue;
    const extras = shuffle(
      pool.filter((q) => q.topic === topic && !used.has(q.id)),
      random,
    ).slice(0, minPerTopic - have);
    for (const q of extras) {
      used.add(q.id);
      result.push(q);
    }
  }

  if (result.length > count) {
    return shuffle(result, random).slice(0, count);
  }
  if (result.length < count) {
    const filler = shuffle(
      pool.filter((q) => !used.has(q.id)),
      random,
    ).slice(0, count - result.length);
    return shuffle([...result, ...filler], random);
  }
  return shuffle(result, random);
}

export function createSession(
  questions: Question[],
  config: PracticeConfig,
): TestSession {
  const seconds =
    config.timeLimitMinutes != null && config.timeLimitMinutes > 0
      ? config.timeLimitMinutes * 60
      : null;

  return {
    id: `session-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    config,
    questionIds: questions.map((q) => q.id),
    answers: [],
    startedAt: new Date().toISOString(),
    secondsRemaining: seconds,
    currentIndex: 0,
    status: "in-progress",
  };
}

export function scoreSession(answers: AnswerRecord[]) {
  const correct = answers.filter((a) => a.isCorrect).length;
  const total = answers.length;
  const passed = total >= FULL_TEST_QUESTION_COUNT ? correct >= PASSING_SCORE : correct / total >= PASSING_SCORE / FULL_TEST_QUESTION_COUNT;
  return { correct, total, passed, percent: total === 0 ? 0 : Math.round((correct / total) * 100) };
}

export function buildAnswerRecord(
  question: Question,
  selectedPresentedIndex: number,
  presentedOptions: string[],
  presentedCorrectIndex: number,
): AnswerRecord {
  return {
    questionId: question.id,
    selectedIndex: selectedPresentedIndex,
    correctIndex: question.correctIndex,
    isCorrect: selectedPresentedIndex === presentedCorrectIndex,
    presentedOptions,
    presentedCorrectIndex,
  };
}

export function topicBreakdown(
  answers: AnswerRecord[],
  questionsById: Map<string, Question>,
): Record<string, { correct: number; total: number }> {
  const breakdown: Record<string, { correct: number; total: number }> = {};
  for (const answer of answers) {
    const q = questionsById.get(answer.questionId);
    if (!q) continue;
    const bucket = breakdown[q.topic] ?? { correct: 0, total: 0 };
    bucket.total += 1;
    if (answer.isCorrect) bucket.correct += 1;
    breakdown[q.topic] = bucket;
  }
  return breakdown;
}

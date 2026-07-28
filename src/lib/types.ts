export type TopicId =
  | "traffic-signs"
  | "rules-of-the-road"
  | "safe-driving"
  | "sharing-the-road"
  | "special-situations"
  | "vehicle-equipment"
  | "alcohol-drugs-distracted";

export type Difficulty = "core" | "high-miss";

export interface Question {
  id: string;
  topic: TopicId;
  /** Short prompt shown to the learner */
  prompt: string;
  /** Four multiple-choice options (A–D order after shuffle) */
  options: [string, string, string, string];
  /** Index of the correct option in the original options array (0–3) */
  correctIndex: number;
  /** Educational explanation based on CA handbook rules */
  explanation: string;
  /** Optional traffic-sign visual key */
  signId?: string;
  difficulty?: Difficulty;
  tags?: string[];
}

export type TestMode = "study" | "exam";

export interface PracticeConfig {
  mode: TestMode;
  /** Minutes; null/undefined = untimed */
  timeLimitMinutes: number | null;
  questionCount: number;
  topicFilter?: TopicId | "all";
}

export interface AnswerRecord {
  questionId: string;
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  /** Options order as presented (after shuffle) */
  presentedOptions: string[];
  /** Correct option index within presentedOptions */
  presentedCorrectIndex: number;
}

export interface TestSession {
  id: string;
  config: PracticeConfig;
  questionIds: string[];
  answers: AnswerRecord[];
  startedAt: string;
  finishedAt?: string;
  /** Seconds remaining if timed; null if untimed */
  secondsRemaining: number | null;
  currentIndex: number;
  status: "in-progress" | "completed" | "abandoned";
}

export interface CompletedTestSummary {
  id: string;
  mode: TestMode;
  score: number;
  total: number;
  passed: boolean;
  finishedAt: string;
  topicFilter?: TopicId | "all";
  topicBreakdown: Record<string, { correct: number; total: number }>;
}

export interface TopicStats {
  attempted: number;
  correct: number;
}

export interface ProgressState {
  version: 1;
  completedTests: CompletedTestSummary[];
  topicStats: Partial<Record<TopicId, TopicStats>>;
  /** Per-question attempt history (recent window) */
  questionStats: Record<string, TopicStats>;
  lastStudiedTopic?: TopicId;
  updatedAt: string;
}

export interface TopicMeta {
  id: TopicId;
  title: string;
  shortTitle: string;
  description: string;
  handbookFocus: string;
  priority: "high" | "standard";
}

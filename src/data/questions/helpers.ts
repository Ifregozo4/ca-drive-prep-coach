import type { Difficulty, Question, TopicId } from "@/lib/types";

type Draft = {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
  signId?: string;
  difficulty?: Difficulty;
  tags?: string[];
};

export function q(topic: TopicId, draft: Draft): Question {
  return {
    topic,
    difficulty: draft.difficulty ?? "core",
    ...draft,
  };
}

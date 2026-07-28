import type { Question, TopicId } from "@/lib/types";
import { alcoholDrugsDistractedQuestions } from "./alcohol-drugs-distracted";
import { rulesOfTheRoadQuestions } from "./rules-of-the-road";
import { safeDrivingQuestions } from "./safe-driving";
import { sharingTheRoadQuestions } from "./sharing-the-road";
import { specialSituationsQuestions } from "./special-situations";
import { trafficSignsQuestions } from "./traffic-signs";
import { vehicleEquipmentQuestions } from "./vehicle-equipment";

export const ALL_QUESTIONS: Question[] = [
  ...trafficSignsQuestions,
  ...rulesOfTheRoadQuestions,
  ...safeDrivingQuestions,
  ...sharingTheRoadQuestions,
  ...specialSituationsQuestions,
  ...vehicleEquipmentQuestions,
  ...alcoholDrugsDistractedQuestions,
];

const byId = new Map(ALL_QUESTIONS.map((q) => [q.id, q]));

export function getQuestionById(id: string): Question | undefined {
  return byId.get(id);
}

export function getQuestionsByTopic(topic: TopicId): Question[] {
  return ALL_QUESTIONS.filter((q) => q.topic === topic);
}

export function getQuestionMap(): Map<string, Question> {
  return byId;
}

export const QUESTION_BANK_SIZE = ALL_QUESTIONS.length;

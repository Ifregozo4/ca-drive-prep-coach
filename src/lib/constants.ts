import type { TopicId, TopicMeta } from "./types";

/** Official CA Class C knowledge test format (study tool mirrors this) */
export const FULL_TEST_QUESTION_COUNT = 46;
export const PASSING_SCORE = 38;
export const PASSING_PERCENT = Math.round((PASSING_SCORE / FULL_TEST_QUESTION_COUNT) * 100);

export const TOPIC_QUIZ_DEFAULT_COUNT = 12;

export const STORAGE_KEYS = {
  progress: "ca-drive-prep-coach:progress:v1",
  activeSession: "ca-drive-prep-coach:session:v1",
  theme: "ca-drive-prep-coach:theme",
} as const;

export const APP_NAME = "CA Drive Prep Coach";
export const HANDBOOK_NOTE =
  "Content is based on the official California Driver Handbook (Class C knowledge). This is an independent study tool — not the official DMV test and not affiliated with the California DMV.";

export const TOPICS: TopicMeta[] = [
  {
    id: "traffic-signs",
    title: "Traffic Signs",
    shortTitle: "Signs",
    description: "Shapes, colors, and meanings of regulatory, warning, and guide signs.",
    handbookFocus: "Signs, signals, and road markings",
    priority: "high",
  },
  {
    id: "rules-of-the-road",
    title: "Rules of the Road",
    shortTitle: "Rules",
    description: "Right-of-way, speed limits, turns, lane use, parking, and intersections.",
    handbookFocus: "Laws and rules of the road",
    priority: "high",
  },
  {
    id: "safe-driving",
    title: "Safe Driving Practices",
    shortTitle: "Safe Driving",
    description: "Following distance, scanning, speed management, and defensive habits.",
    handbookFocus: "Safe driving practices",
    priority: "high",
  },
  {
    id: "sharing-the-road",
    title: "Sharing the Road",
    shortTitle: "Sharing",
    description: "Pedestrians, bicyclists, motorcycles, large trucks, and school buses.",
    handbookFocus: "Sharing the road",
    priority: "high",
  },
  {
    id: "special-situations",
    title: "Special Driving Situations",
    shortTitle: "Special",
    description: "Night driving, weather, emergencies, freeways, and mountain roads.",
    handbookFocus: "Special driving situations",
    priority: "standard",
  },
  {
    id: "vehicle-equipment",
    title: "Vehicle Equipment & Registration",
    shortTitle: "Equipment",
    description: "Required equipment, lights, registration, and basic vehicle laws.",
    handbookFocus: "Vehicle equipment and registration",
    priority: "standard",
  },
  {
    id: "alcohol-drugs-distracted",
    title: "Alcohol, Drugs & Distracted Driving",
    shortTitle: "Impairment",
    description: "DUI limits, penalties awareness, drugs, and phone/distraction rules.",
    handbookFocus: "Alcohol, drugs, and distracted driving",
    priority: "high",
  },
];

export const TOPIC_MAP: Record<TopicId, TopicMeta> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t]),
) as Record<TopicId, TopicMeta>;

export const TIMER_PRESETS_MINUTES = [20, 30, 45, 60, 75] as const;

import type { TopicId } from "@/lib/types";

export interface CheatSheet {
  id: string;
  title: string;
  topic: TopicId | "general";
  bullets: string[];
}

export interface SignReference {
  id: string;
  name: string;
  meaning: string;
  category: "regulatory" | "warning" | "guide" | "other";
}

export const CHEAT_SHEETS: CheatSheet[] = [
  {
    id: "right-of-way",
    title: "Right-of-Way Essentials",
    topic: "rules-of-the-road",
    bullets: [
      "First to arrive at a 4-way stop goes first; if simultaneous, yield to the right.",
      "Left turns yield to oncoming traffic and pedestrians.",
      "Yield to pedestrians in marked and many unmarked crosswalks.",
      "Emergency vehicles with lights/siren: pull right and stop when safe.",
      "At T-intersections, the terminating road yields to the through road.",
      "In roundabouts, yield to traffic already in the circle.",
      "Never assume others will yield — drive defensively.",
    ],
  },
  {
    id: "speed-limits",
    title: "Speed Limits (common defaults)",
    topic: "rules-of-the-road",
    bullets: [
      "Basic Speed Law: never drive faster than is safe for conditions.",
      "Residential/business districts: often 25 mph unless posted otherwise.",
      "Alleys: generally 15 mph.",
      "School zones: often 25 mph when children are present / as posted.",
      "Blind railroad crossings (limited sight): 15 mph within 100 feet in specified conditions.",
      "Many freeways: 65 mph (some 70 where posted); trucks may have lower limits.",
      "Two-lane undivided highways: often 55 mph unless posted otherwise.",
    ],
  },
  {
    id: "parking",
    title: "Parking Rules Cheat Sheet",
    topic: "rules-of-the-road",
    bullets: [
      "Parallel park within 18 inches of the curb.",
      "Uphill + curb: wheels away from curb; downhill + curb: wheels toward curb; set parking brake.",
      "No parking within 15 feet of a fire hydrant.",
      "Red curb: no stopping/parking; blue: disabled placard/plates; check signs for green/yellow/white.",
      "Never block driveways, sidewalks, crosswalks, or curb ramps.",
      "Do not park on freeways except emergencies.",
    ],
  },
  {
    id: "signs-shapes",
    title: "Sign Shapes & Colors",
    topic: "traffic-signs",
    bullets: [
      "Octagon = STOP.",
      "Inverted triangle = YIELD.",
      "Round yellow = railroad advance warning.",
      "Pentagon = school zone/crossing.",
      "Diamond yellow = warning of hazards ahead.",
      "Orange = construction / temporary traffic control.",
      "White rectangle = regulatory; green = guide; blue = services; brown = recreation.",
    ],
  },
  {
    id: "dui-phones",
    title: "Alcohol, Drugs & Phones",
    topic: "alcohol-drugs-distracted",
    bullets: [
      "21+: illegal at 0.08% BAC (impairment possible below that).",
      "Under 21: illegal at 0.01% BAC (zero tolerance).",
      "Implied consent: chemical test when lawfully arrested for DUI; refusal has penalties.",
      "Only time sobers you up — not coffee or cold showers.",
      "Handheld phone use while driving is restricted; texting is illegal and dangerous.",
      "Provisional license holders face stricter no-phone rules.",
      "Legal cannabis does not make impaired driving legal.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing the Road",
    topic: "sharing-the-road",
    bullets: [
      "Pass bicyclists with at least 3 feet of space.",
      "Motorcycles get a full lane; check blind spots carefully.",
      "Trucks have large “no-zones” — if you can’t see the driver, they can’t see you.",
      "Never pass a vehicle stopped for pedestrians in a crosswalk.",
      "Stop for school buses with flashing red lights (both directions on undivided roads).",
      "Move over / slow for stopped emergency and tow vehicles.",
    ],
  },
];

export const SIGN_REFERENCES: SignReference[] = [
  {
    id: "stop",
    name: "Stop",
    meaning: "Come to a full stop, then proceed when safe.",
    category: "regulatory",
  },
  {
    id: "yield",
    name: "Yield",
    meaning: "Slow down and give the right-of-way; stop if necessary.",
    category: "regulatory",
  },
  {
    id: "do-not-enter",
    name: "Do Not Enter",
    meaning: "Do not drive into this roadway — wrong direction.",
    category: "regulatory",
  },
  {
    id: "wrong-way",
    name: "Wrong Way",
    meaning: "You are traveling against traffic; stop and exit safely.",
    category: "regulatory",
  },
  {
    id: "no-u-turn",
    name: "No U-Turn",
    meaning: "U-turns are prohibited at this location.",
    category: "regulatory",
  },
  {
    id: "speed-limit",
    name: "Speed Limit",
    meaning: "Maximum speed under ideal conditions; obey Basic Speed Law.",
    category: "regulatory",
  },
  {
    id: "railroad-advance",
    name: "Railroad Advance Warning",
    meaning: "Rail crossing ahead — look, listen, prepare to stop.",
    category: "warning",
  },
  {
    id: "crossbuck",
    name: "Railroad Crossbuck",
    meaning: "Marks the crossing; trains have the right-of-way.",
    category: "other",
  },
  {
    id: "school",
    name: "School Zone",
    meaning: "Watch for children; obey school speed limits when required.",
    category: "warning",
  },
  {
    id: "pedestrian",
    name: "Pedestrian Crossing",
    meaning: "Be ready to slow or stop for people crossing.",
    category: "warning",
  },
  {
    id: "merge",
    name: "Merge",
    meaning: "Traffic lanes combine — adjust speed and merge safely.",
    category: "warning",
  },
  {
    id: "lane-ends",
    name: "Lane Ends",
    meaning: "Your lane ends ahead; merge into the continuing lane.",
    category: "warning",
  },
  {
    id: "slippery",
    name: "Slippery When Wet",
    meaning: "Reduce speed and avoid sudden maneuvers on wet pavement.",
    category: "warning",
  },
  {
    id: "construction",
    name: "Road Work",
    meaning: "Construction zone — slow down and follow temporary controls.",
    category: "warning",
  },
  {
    id: "warning-diamond",
    name: "General Warning",
    meaning: "Hazard or change in the road ahead; prepare to adjust.",
    category: "warning",
  },
];

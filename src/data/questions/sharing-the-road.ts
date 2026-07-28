import { q } from "./helpers";

export const sharingTheRoadQuestions = [
  q("sharing-the-road", {
    id: "sr-001",
    prompt: "When passing a bicyclist, California law requires at least:",
    options: [
      "1 foot of clearance",
      "3 feet of clearance",
      "6 inches of clearance",
      "No specific distance",
    ],
    correctIndex: 1,
    explanation:
      "Give bicyclists at least 3 feet when passing. If you cannot, wait until it is safe to change lanes or pass with adequate space.",
    difficulty: "high-miss",
    tags: ["bicycles"],
  }),
  q("sharing-the-road", {
    id: "sr-002",
    prompt: "Bicyclists are generally allowed to:",
    options: [
      "Ride against traffic on the left side",
      "Ride on the right with traffic and use the full lane when needed for safety",
      "Ignore all stop signs",
      "Ride on freeways where prohibited",
    ],
    correctIndex: 1,
    explanation:
      "Bikes are vehicles with similar rights and responsibilities. They may take the lane when hazards, narrow lanes, or turns make the edge unsafe.",
    difficulty: "high-miss",
    tags: ["bicycles"],
  }),
  q("sharing-the-road", {
    id: "sr-003",
    prompt: "Before opening a car door on the street side, you should:",
    options: [
      "Open it as fast as possible",
      "Check mirrors and blind spots for bikes and scooters (the “Dutch reach” habit helps)",
      "Assume the bike lane is empty",
      "Honk first",
    ],
    correctIndex: 1,
    explanation:
      "Doorings seriously injure cyclists. Look before opening doors into traffic or bike lanes.",
    difficulty: "high-miss",
    tags: ["bicycles", "doors"],
  }),
  q("sharing-the-road", {
    id: "sr-004",
    prompt: "Motorcycles are entitled to:",
    options: [
      "Half a lane only",
      "A full lane width",
      "The shoulder only",
      "Sidewalks in business districts",
    ],
    correctIndex: 1,
    explanation:
      "Treat motorcycles as full vehicles. Do not share their lane, and check carefully for them in blind spots.",
    difficulty: "high-miss",
    tags: ["motorcycles"],
  }),
  q("sharing-the-road", {
    id: "sr-005",
    prompt: "When following a motorcycle, you should:",
    options: [
      "Follow closer because they stop faster always",
      "Allow extra following distance; motorcycles can stop quickly and may be less visible",
      "Flash high beams constantly",
      "Drive alongside them in the same lane",
    ],
    correctIndex: 1,
    explanation:
      "Give motorcycles space. Road hazards that are minor for cars can force sudden motorcycle maneuvers.",
    difficulty: "core",
    tags: ["motorcycles"],
  }),
  q("sharing-the-road", {
    id: "sr-006",
    prompt: "Large trucks have large blind spots called:",
    options: [
      "No-zones",
      "Safe zones",
      "Passing bubbles",
      "Draft pockets you should stay in",
    ],
    correctIndex: 0,
    explanation:
      "If you cannot see the truck driver’s mirrors/face, they likely cannot see you. Avoid lingering alongside or right behind large trucks.",
    difficulty: "high-miss",
    tags: ["trucks"],
  }),
  q("sharing-the-road", {
    id: "sr-007",
    prompt: "When a truck is making a right turn, you should:",
    options: [
      "Squeeze between the truck and the curb",
      "Give it room; trucks swing wide and may need space on the right",
      "Pass on the right quickly",
      "Honk to hurry them",
    ],
    correctIndex: 1,
    explanation:
      "Never cut inside a turning truck. They may appear to move left before turning right.",
    difficulty: "high-miss",
    tags: ["trucks", "turns"],
  }),
  q("sharing-the-road", {
    id: "sr-008",
    prompt: "Pedestrians who are visually impaired and using a white cane or guide dog:",
    options: [
      "Have no special right-of-way",
      "Must be yielded to; stop and take care not to startle or block them",
      "Should be honked at to locate them",
      "May be passed closely in crosswalks",
    ],
    correctIndex: 1,
    explanation:
      "Yield and exercise extra caution. Do not block or honk in ways that confuse guide-dog teams.",
    difficulty: "high-miss",
    tags: ["pedestrians"],
  }),
  q("sharing-the-road", {
    id: "sr-009",
    prompt: "You must yield to pedestrians:",
    options: [
      "Only in painted crosswalks",
      "In marked crosswalks and at many intersections even without marks",
      "Only if they have a walk signal and are running",
      "Never if you have a green light",
    ],
    correctIndex: 1,
    explanation:
      "California protects pedestrians in crosswalks—marked or unmarked at intersections. A green light still requires yielding to those lawfully in the crosswalk.",
    difficulty: "high-miss",
    tags: ["pedestrians", "right-of-way"],
  }),
  q("sharing-the-road", {
    id: "sr-010",
    prompt: "When you see a school bus stopped with red lights flashing on a two-way undivided road, you must:",
    options: [
      "Stop only if children are visible in the roadway",
      "Stop from either direction until the lights stop flashing and children are clear",
      "Slow to 10 mph and pass carefully",
      "Pass if you are late",
    ],
    correctIndex: 1,
    explanation:
      "Stop for flashing red school bus lights from both directions on undivided roads. Remain stopped as required by law.",
    difficulty: "high-miss",
    tags: ["school-bus"],
  }),
  q("sharing-the-road", {
    id: "sr-011",
    prompt: "On a divided highway with a median, if a school bus is stopped on the other side:",
    options: [
      "You usually do not need to stop if the median separates roadways (follow current handbook/roadway rules)",
      "You must always stop regardless of dividers",
      "You must U-turn",
      "You must reverse",
    ],
    correctIndex: 0,
    explanation:
      "If roadways are separated by a divider, traffic on the opposite side generally is not required to stop. When in doubt, slow and be ready to stop for children.",
    difficulty: "high-miss",
    tags: ["school-bus"],
  }),
  q("sharing-the-road", {
    id: "sr-012",
    prompt: "Transit buses re-entering traffic from a stop in some California cities:",
    options: [
      "Never have priority",
      "May require you to yield when they signal to re-enter (yield-to-bus rules in applicable areas)",
      "May drive on sidewalks",
      "Can ignore red lights",
    ],
    correctIndex: 1,
    explanation:
      "In jurisdictions with yield-to-bus laws, yield when a bus signals to leave a stop. Always use caution around buses and passengers.",
    difficulty: "core",
    tags: ["buses"],
  }),
  q("sharing-the-road", {
    id: "sr-013",
    prompt: "Light rail or streetcars may share the roadway. You should:",
    options: [
      "Drive around lowered gates if traffic is light",
      "Never block tracks; yield to trains/streetcars and obey signals",
      "Race them to crossings",
      "Park on the tracks briefly",
    ],
    correctIndex: 1,
    explanation:
      "Trains cannot stop quickly. Keep crossings clear and obey all rail signals and signs.",
    difficulty: "core",
    tags: ["rail", "light-rail"],
  }),
  q("sharing-the-road", {
    id: "sr-014",
    prompt: "When driving near pedestrians in a crosswalk, you may not:",
    options: [
      "Stop and wait",
      "Pass a vehicle that is stopped for pedestrians",
      "Yield",
      "Make eye contact",
    ],
    correctIndex: 1,
    explanation:
      "It is illegal to pass a vehicle stopped at a crosswalk for pedestrians. The pedestrian may be hidden from your view.",
    difficulty: "high-miss",
    tags: ["pedestrians"],
  }),
  q("sharing-the-road", {
    id: "sr-015",
    prompt: "Scooters and slow-moving vehicles require you to:",
    options: [
      "Drive as close as possible",
      "Reduce speed and pass only when safe with adequate clearance",
      "Honk continuously while beside them",
      "Force them off the road",
    ],
    correctIndex: 1,
    explanation:
      "Adjust speed and space. Many vulnerable users are less protected and less visible.",
    difficulty: "core",
    tags: ["vulnerable-users"],
  }),
  q("sharing-the-road", {
    id: "sr-016",
    prompt: "A motorcycle’s turn signals may:",
    options: [
      "Never be trusted",
      "Not cancel automatically on some bikes—verify the rider’s intent",
      "Mean they are always turning left",
      "Replace brake lights",
    ],
    correctIndex: 1,
    explanation:
      "Some motorcycle signals do not auto-cancel. Wait to confirm the maneuver before you pull out or turn.",
    difficulty: "core",
    tags: ["motorcycles"],
  }),
  q("sharing-the-road", {
    id: "sr-017",
    prompt: "When a pedestrian hybrid beacon (HAWK) shows solid red, you should:",
    options: [
      "Proceed without stopping",
      "Stop; proceed only when allowed and pedestrians are clear per signal rules",
      "Treat it as a yield only",
      "Ignore it outside school hours",
    ],
    correctIndex: 1,
    explanation:
      "HAWK signals stop traffic for pedestrians. Obey the dark/flashing/solid phases as designed—stop on solid red and do not proceed until safe/legal.",
    difficulty: "high-miss",
    tags: ["pedestrians", "signals"],
  }),
  q("sharing-the-road", {
    id: "sr-018",
    prompt: "In a shared right-turn lane next to a bike lane, before turning right you should:",
    options: [
      "Ignore bikes because you have a car",
      "Yield to bicyclists going straight and check the bike lane carefully",
      "Speed up to beat the bike",
      "Stop in the bike lane for a long time",
    ],
    correctIndex: 1,
    explanation:
      "Bikes going straight have priority over cars turning across their path. Shoulder-check the bike lane.",
    difficulty: "high-miss",
    tags: ["bicycles", "turns"],
  }),
  q("sharing-the-road", {
    id: "sr-019",
    prompt: "Emergency vehicles may use lights/sirens. While they pass, other drivers should:",
    options: [
      "Race them to the hospital",
      "Pull right and stop, then proceed with caution after they pass",
      "Follow closely as an escort",
      "Block intersections for them without looking",
    ],
    correctIndex: 1,
    explanation:
      "Yield right-of-way, clear a path, and avoid driving into the path of emergency vehicles—including at red lights when unsafe.",
    difficulty: "core",
    tags: ["emergency"],
  }),
  q("sharing-the-road", {
    id: "sr-020",
    prompt: "“Move over” laws for stopped emergency/tow vehicles generally require you to:",
    options: [
      "Slow down and change lanes away from them when safe",
      "Drive closer to look",
      "Stop in the lane beside them",
      "Ignore them on freeways",
    ],
    correctIndex: 0,
    explanation:
      "Give a lane of space when possible; if not, slow significantly. Protect people working beside the road.",
    difficulty: "high-miss",
    tags: ["emergency", "move-over"],
  }),
  q("sharing-the-road", {
    id: "sr-021",
    prompt: "Animals on the road: the safest general approach is to:",
    options: [
      "Swerve wildly into oncoming traffic",
      "Slow down and avoid hitting the animal if you can without causing a worse crash",
      "Speed up to scare them",
      "Flash high beams continuously at night near all fields only",
    ],
    correctIndex: 1,
    explanation:
      "Protect human life first. Controlled slowing is better than a high-speed swerve into other vehicles or fixed objects.",
    difficulty: "core",
    tags: ["animals"],
  }),
  q("sharing-the-road", {
    id: "sr-022",
    prompt: "Funeral processions: you should:",
    options: [
      "Cut through the line to save time",
      "Yield and avoid breaking into the procession",
      "Honk to show respect while passing closely",
      "Drive between vehicles in the procession",
    ],
    correctIndex: 1,
    explanation:
      "Do not cut into a funeral procession. Yield and be patient.",
    difficulty: "core",
    tags: ["processions"],
  }),
  q("sharing-the-road", {
    id: "sr-023",
    prompt: "When parking near a bicycle lane, you must:",
    options: [
      "Park fully in the bike lane if spaces are full",
      "Not block the bike lane; park only where legal",
      "Use the bike lane for loading anytime",
      "Leave doors open into the lane",
    ],
    correctIndex: 1,
    explanation:
      "Keep bike lanes clear except where specifically allowed for brief maneuvers. Look before opening doors.",
    difficulty: "core",
    tags: ["bicycles", "parking"],
  }),
  q("sharing-the-road", {
    id: "sr-024",
    prompt: "Pedestrians waiting at a corner as you approach a right turn should be handled by:",
    options: [
      "Turning tightly across their path if you have green",
      "Yielding and waiting until they have cleared your path",
      "Waving them back while turning",
      "Creeping into the crosswalk first",
    ],
    correctIndex: 1,
    explanation:
      "Right turns are a common pedestrian crash type. Yield fully; do not “squeeze” the turn.",
    difficulty: "high-miss",
    tags: ["pedestrians", "turns"],
  }),
  q("sharing-the-road", {
    id: "sr-025",
    prompt: "A blind spot for cars often hides:",
    options: [
      "Only airplanes",
      "Motorcycles, bicycles, and small cars",
      "Only vehicles with trailers",
      "Nothing if you have one mirror",
    ],
    correctIndex: 1,
    explanation:
      "Always shoulder-check. Motorcycles and bikes are especially easy to miss in mirrors alone.",
    difficulty: "core",
    tags: ["blind-spots"],
  }),
  q("sharing-the-road", {
    id: "sr-026",
    prompt: "When a bus is stopped ahead of you discharging passengers, you should:",
    options: [
      "Pass closely at full speed",
      "Watch for pedestrians crossing from in front of or behind the bus",
      "Assume no one will cross",
      "Honk as you pass",
    ],
    correctIndex: 1,
    explanation:
      "People may cross mid-block near buses. Slow down and be prepared to stop.",
    difficulty: "core",
    tags: ["buses", "pedestrians"],
  }),
  q("sharing-the-road", {
    id: "sr-027",
    prompt: "Golf carts or NEVs may be on some roadways. You should:",
    options: [
      "Expect lower speeds and pass only when safe",
      "Tailgate to move them along",
      "Drive them off the road",
      "Ignore their presence in bike lanes only",
    ],
    correctIndex: 0,
    explanation:
      "Slow-moving vehicles need extra patience and safe passing space.",
    difficulty: "core",
    tags: ["slow-vehicles"],
  }),
  q("sharing-the-road", {
    id: "sr-028",
    prompt: "Sharing the road with farm equipment means:",
    options: [
      "They always pull over immediately",
      "They may be wide/slow; pass only with clear sight distance and legality",
      "You may pass on the shoulder always",
      "They are exempt from all lanes",
    ],
    correctIndex: 1,
    explanation:
      "Do not pass on hills/curves or where prohibited. Wait for a safe, legal opportunity.",
    difficulty: "core",
    tags: ["farm"],
  }),
  q("sharing-the-road", {
    id: "sr-029",
    prompt: "Why is it unsafe to linger beside a large truck?",
    options: [
      "Trucks have no-zones on both sides and need room to maneuver",
      "Trucks always drive too slowly",
      "It improves your fuel economy",
      "It is required by law",
    ],
    correctIndex: 0,
    explanation:
      "Side no-zones hide cars. Pass efficiently when safe and do not camp next to trailers.",
    difficulty: "high-miss",
    tags: ["trucks"],
  }),
  q("sharing-the-road", {
    id: "sr-030",
    prompt: "If a pedestrian is crossing against the light, you should:",
    options: [
      "Hit the gas to assert right-of-way",
      "Still avoid hitting them; yield as needed for safety",
      "Scare them with the horn while accelerating",
      "Ignore them completely",
    ],
    correctIndex: 1,
    explanation:
      "Even if a pedestrian is wrong, you must not strike them. Slow or stop to prevent a crash.",
    difficulty: "high-miss",
    tags: ["pedestrians"],
  }),
];

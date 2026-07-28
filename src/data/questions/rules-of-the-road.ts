import { q } from "./helpers";

export const rulesOfTheRoadQuestions = [
  q("rules-of-the-road", {
    id: "rr-001",
    prompt: "At an intersection with a stop sign, you must stop:",
    options: [
      "Only if other vehicles are coming",
      "Behind the limit line, or if none, before the crosswalk or entering the intersection",
      "Wherever is convenient in the intersection",
      "After you enter the crosswalk",
    ],
    correctIndex: 1,
    explanation:
      "Stop at the painted limit line. If there is no limit line, stop before the crosswalk. If neither is marked, stop before entering the intersection.",
    difficulty: "high-miss",
    tags: ["stop", "intersections"],
  }),
  q("rules-of-the-road", {
    id: "rr-002",
    prompt: "When two vehicles arrive at an uncontrolled intersection at the same time, who has the right-of-way?",
    options: [
      "The larger vehicle",
      "The vehicle on the left",
      "The vehicle on the right",
      "The faster vehicle",
    ],
    correctIndex: 2,
    explanation:
      "Yield to the vehicle on your right when arriving at about the same time at an intersection without signs or signals.",
    difficulty: "high-miss",
    tags: ["right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-003",
    prompt: "When turning left at an intersection, you must yield to:",
    options: [
      "Only pedestrians, not vehicles",
      "Oncoming vehicles going straight or turning right, and to pedestrians",
      "Only vehicles turning right",
      "No one if your light is green",
    ],
    correctIndex: 1,
    explanation:
      "A green light does not remove the duty to yield on a left turn. Yield to oncoming traffic and to pedestrians in the crosswalk.",
    difficulty: "high-miss",
    tags: ["right-of-way", "turns"],
  }),
  q("rules-of-the-road", {
    id: "rr-004",
    prompt: "California’s Basic Speed Law says you must:",
    options: [
      "Always drive the posted speed limit",
      "Never drive faster than is safe for current conditions",
      "Drive at least the posted limit",
      "Match the speed of the fastest car",
    ],
    correctIndex: 1,
    explanation:
      "Even below a posted limit, you can be cited if your speed is unsafe for weather, traffic, visibility, or road conditions. Posted limits are maximums under ideal conditions.",
    difficulty: "high-miss",
    tags: ["speed"],
  }),
  q("rules-of-the-road", {
    id: "rr-005",
    prompt: "Unless otherwise posted, the maximum speed limit in a residential district is generally:",
    options: [
      "15 mph",
      "25 mph",
      "35 mph",
      "45 mph",
    ],
    correctIndex: 1,
    explanation:
      "The prima facie speed limit in business or residential districts is typically 25 mph unless signs post a different limit. Always obey posted signs and the Basic Speed Law.",
    difficulty: "high-miss",
    tags: ["speed"],
  }),
  q("rules-of-the-road", {
    id: "rr-006",
    prompt: "The speed limit in an alley is generally:",
    options: [
      "10 mph",
      "15 mph",
      "25 mph",
      "30 mph",
    ],
    correctIndex: 1,
    explanation:
      "Unless otherwise posted, the speed limit in alleys is 15 mph.",
    difficulty: "high-miss",
    tags: ["speed"],
  }),
  q("rules-of-the-road", {
    id: "rr-007",
    prompt: "When approaching a school zone where children are present, you should:",
    options: [
      "Maintain highway speed if no children are in the street",
      "Drive 25 mph or the posted school zone limit when required; watch carefully for children",
      "Honk continuously",
      "Drive on the sidewalk if safer",
    ],
    correctIndex: 1,
    explanation:
      "School zones often have a 25 mph limit when children are present or during posted times. Be extra alert near schools and crossing guards.",
    difficulty: "high-miss",
    tags: ["speed", "school"],
  }),
  q("rules-of-the-road", {
    id: "rr-008",
    prompt: "You must stop for a school bus with flashing red lights:",
    options: [
      "Only if you are behind the bus",
      "From either direction on undivided roads (unless a physical divider separates you)",
      "Never if children look seated",
      "Only on freeways",
    ],
    correctIndex: 1,
    explanation:
      "Stop for a school bus with red signal lights flashing from either direction unless you are on the opposite side of a divided highway/multilane highway separated by a median or barrier. Remain stopped until the lights stop flashing.",
    difficulty: "high-miss",
    tags: ["school-bus", "right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-009",
    prompt: "When parking uphill on a two-way street with a curb, turn your front wheels:",
    options: [
      "Toward the curb",
      "Away from the curb",
      "Straight, with no turn",
      "Toward the street center only if downhill",
    ],
    correctIndex: 1,
    explanation:
      "Uphill with curb: turn wheels away from the curb (left) so the vehicle rolls into the curb if brakes fail. Downhill: turn toward the curb. Always set the parking brake.",
    difficulty: "high-miss",
    tags: ["parking"],
  }),
  q("rules-of-the-road", {
    id: "rr-010",
    prompt: "When parking downhill with a curb, turn your front wheels:",
    options: [
      "Away from the curb",
      "Toward the curb",
      "Straight ahead",
      "In either direction",
    ],
    correctIndex: 1,
    explanation:
      "Downhill with a curb: turn wheels into the curb so the car won’t roll into traffic. Set the parking brake.",
    difficulty: "high-miss",
    tags: ["parking"],
  }),
  q("rules-of-the-road", {
    id: "rr-011",
    prompt: "It is illegal to park:",
    options: [
      "Within 15 feet of a fire hydrant",
      "Within 3 feet of a private driveway",
      "More than 18 inches from the curb when parallel parking",
      "Both A and C are correct considerations under CA rules (hydrant distance and curb distance)",
    ],
    correctIndex: 3,
    explanation:
      "Do not park within 15 feet of a fire hydrant. When parallel parking, your wheels should be within 18 inches of the curb. Also avoid blocking driveways, sidewalks, and crosswalks.",
    difficulty: "high-miss",
    tags: ["parking"],
  }),
  q("rules-of-the-road", {
    id: "rr-012",
    prompt: "Before changing lanes, you should:",
    options: [
      "Only use the rearview mirror",
      "Signal, check mirrors, and glance over your shoulder at the blind spot",
      "Honk then move over",
      "Rely only on a backup camera",
    ],
    correctIndex: 1,
    explanation:
      "Signal early, check mirrors, and do a head check for blind spots. Change lanes only when there is a safe gap.",
    difficulty: "core",
    tags: ["lane-change"],
  }),
  q("rules-of-the-road", {
    id: "rr-013",
    prompt: "A legal U-turn is generally NOT allowed:",
    options: [
      "At a green light in a business district when safe and not prohibited",
      "On a blind curve or near the crest of a hill where you cannot see 200 feet in either direction",
      "At an intersection with a green arrow if signs allow",
      "In a residential area when no vehicles are near",
    ],
    correctIndex: 1,
    explanation:
      "Do not U-turn where you cannot see clearly for 200 feet in each direction, or where a sign prohibits U-turns, or in other unsafe/illegal situations listed in the handbook.",
    difficulty: "high-miss",
    tags: ["turns", "u-turn"],
  }),
  q("rules-of-the-road", {
    id: "rr-014",
    prompt: "When entering a freeway, you should:",
    options: [
      "Stop at the end of the ramp and wait for a large gap",
      "Use the acceleration lane to match traffic speed and merge safely",
      "Enter at 25 mph regardless of traffic",
      "Honk so others move over",
    ],
    correctIndex: 1,
    explanation:
      "Use the on-ramp/acceleration lane to build speed, signal, find a gap, and merge smoothly without stopping on the ramp if possible.",
    difficulty: "high-miss",
    tags: ["freeway"],
  }),
  q("rules-of-the-road", {
    id: "rr-015",
    prompt: "To exit a freeway safely:",
    options: [
      "Slow down sharply in the through lanes before the exit",
      "Signal, enter the exit lane, then slow down",
      "Stop on the shoulder then reverse to the exit",
      "Cut across multiple lanes at the last second",
    ],
    correctIndex: 1,
    explanation:
      "Plan early, signal, move into the exit lane, then reduce speed on the ramp—not in the high-speed through lanes.",
    difficulty: "core",
    tags: ["freeway"],
  }),
  q("rules-of-the-road", {
    id: "rr-016",
    prompt: "On a multi-lane road, which lane is generally best for steady through travel at the speed of traffic?",
    options: [
      "The far left lane at all times",
      "The right-hand lane (or middle lanes on freeways) as appropriate; left is often for passing",
      "The shoulder",
      "Any lane without signaling",
    ],
    correctIndex: 1,
    explanation:
      "Keep right except to pass when practical. On freeways, left lanes are often used for passing; don’t camp in the far left if you are slower than traffic.",
    difficulty: "core",
    tags: ["lanes"],
  }),
  q("rules-of-the-road", {
    id: "rr-017",
    prompt: "When a traffic officer’s directions conflict with a traffic signal, you should:",
    options: [
      "Obey the signal",
      "Obey the officer",
      "Do whatever nearby drivers do",
      "Stop until both agree",
    ],
    correctIndex: 1,
    explanation:
      "Always follow lawful directions from a police officer or authorized traffic control person even if they differ from signals or signs.",
    difficulty: "high-miss",
    tags: ["right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-018",
    prompt: "You are at a green light but a pedestrian is still in the crosswalk. You should:",
    options: [
      "Proceed carefully around them",
      "Yield and wait until the crosswalk is clear as required",
      "Honk so they hurry",
      "Enter the crosswalk to claim the intersection",
    ],
    correctIndex: 1,
    explanation:
      "Yield to pedestrians in crosswalks. Do not start a turn or proceed in a way that forces them to jump back.",
    difficulty: "high-miss",
    tags: ["pedestrians", "right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-019",
    prompt: "When making a right turn, you should be in:",
    options: [
      "The far left lane",
      "The far right lane (or bike lane only as permitted when preparing to turn)",
      "Any lane if you signal",
      "The center two-way turn lane",
    ],
    correctIndex: 1,
    explanation:
      "Approach right turns from the right-most portion of your roadway. Watch for bikes and pedestrians; signal at least 100 feet before turning in urban areas.",
    difficulty: "core",
    tags: ["turns"],
  }),
  q("rules-of-the-road", {
    id: "rr-020",
    prompt: "How far before a turn should you signal in city/business areas (general rule)?",
    options: [
      "At least 50 feet",
      "At least 100 feet",
      "At least 500 feet",
      "Only while you are turning",
    ],
    correctIndex: 1,
    explanation:
      "Signal continuously during the last 100 feet before turning (and longer on freeways/high-speed roads when needed so others understand your intent).",
    difficulty: "high-miss",
    tags: ["signaling"],
  }),
  q("rules-of-the-road", {
    id: "rr-021",
    prompt: "You may cross a double solid yellow line:",
    options: [
      "To pass a slow car anytime",
      "To turn left into a driveway or street when safe and legal",
      "Whenever traffic is light",
      "Never under any circumstances",
    ],
    correctIndex: 1,
    explanation:
      "You may not pass across double solid yellow lines, but you may turn left across them into or from an alley, private road, or driveway when safe, unless prohibited.",
    difficulty: "high-miss",
    tags: ["markings", "passing"],
  }),
  q("rules-of-the-road", {
    id: "rr-022",
    prompt: "On a two-lane road, you should pass another vehicle:",
    options: [
      "On the left when safe, legal, and not in a no-passing zone",
      "On the right shoulder",
      "At any hill crest",
      "Within 100 feet of a bridge always",
    ],
    correctIndex: 0,
    explanation:
      "Pass on the left when the way is clear, sight distance is adequate, and markings/signs allow. Return when you can see the passed vehicle in your rearview mirror.",
    difficulty: "core",
    tags: ["passing"],
  }),
  q("rules-of-the-road", {
    id: "rr-023",
    prompt: "If you miss your freeway exit, you should:",
    options: [
      "Stop and reverse on the freeway",
      "Continue to the next exit",
      "Make a U-turn on the freeway",
      "Cross the median",
    ],
    correctIndex: 1,
    explanation:
      "Never stop, back up, or cross the median on a freeway. Take the next exit and reroute.",
    difficulty: "high-miss",
    tags: ["freeway"],
  }),
  q("rules-of-the-road", {
    id: "rr-024",
    prompt: "At a four-way stop, the driver who should go first is generally:",
    options: [
      "The largest vehicle",
      "The driver who arrived first; if simultaneous, yield to the right",
      "The driver who waves first",
      "The driver turning left",
    ],
    correctIndex: 1,
    explanation:
      "First to arrive (after stopping) goes first. If two arrive together, yield to the vehicle on the right. If opposite and one turns left, the straight/right-going traffic typically proceeds first.",
    difficulty: "high-miss",
    tags: ["right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-025",
    prompt: "When an emergency vehicle approaches with siren and lights, you should:",
    options: [
      "Speed up to clear the path ahead",
      "Pull to the right and stop if safe",
      "Stop in the left lane",
      "Ignore it if you have a green light",
    ],
    correctIndex: 1,
    explanation:
      "Yield the right-of-way: signal, pull to the right edge, and stop until the emergency vehicle has passed—unless you are in an intersection, then clear it first if safe.",
    difficulty: "high-miss",
    tags: ["emergency", "right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-026",
    prompt: "Within 100 feet of a railroad crossing, you should not:",
    options: [
      "Slow down",
      "Pass another vehicle",
      "Look both ways",
      "Listen for trains",
    ],
    correctIndex: 1,
    explanation:
      "Do not pass within 100 feet of a railroad crossing. Approach carefully, look and listen, and never stop on the tracks.",
    difficulty: "high-miss",
    tags: ["railroad", "passing"],
  }),
  q("rules-of-the-road", {
    id: "rr-027",
    prompt: "If a gate is lowering at a railroad crossing, you should:",
    options: [
      "Drive around the gate if no train is visible",
      "Stop and wait until the gate rises and it is safe",
      "Squeeze under before it fully closes",
      "Cross if the lights have not started",
    ],
    correctIndex: 1,
    explanation:
      "Never drive around lowered gates. Wait for the crossing to clear and the gates to rise fully.",
    difficulty: "high-miss",
    tags: ["railroad"],
  }),
  q("rules-of-the-road", {
    id: "rr-028",
    prompt: "Parallel parking: when finished, your vehicle should generally be:",
    options: [
      "More than 3 feet from the curb",
      "Within 18 inches of the curb",
      "Angled into traffic",
      "Blocking a driveway slightly",
    ],
    correctIndex: 1,
    explanation:
      "Park parallel within 18 inches of the curb, in the direction of traffic, and not blocking access points.",
    difficulty: "high-miss",
    tags: ["parking"],
  }),
  q("rules-of-the-road", {
    id: "rr-029",
    prompt: "You must dim your high beams when approaching an oncoming vehicle within:",
    options: [
      "100 feet",
      "200 feet",
      "500 feet",
      "1000 feet",
    ],
    correctIndex: 2,
    explanation:
      "Dim high beams within 500 feet of an oncoming vehicle. Also dim when following within 300 feet of another vehicle.",
    difficulty: "high-miss",
    tags: ["lights", "night"],
  }),
  q("rules-of-the-road", {
    id: "rr-030",
    prompt: "When following another vehicle at night, dim your high beams within:",
    options: [
      "100 feet",
      "300 feet",
      "700 feet",
      "1000 feet",
    ],
    correctIndex: 1,
    explanation:
      "Use low beams when within 300 feet of the vehicle ahead so you do not blind the driver through mirrors.",
    difficulty: "high-miss",
    tags: ["lights", "night"],
  }),
  q("rules-of-the-road", {
    id: "rr-031",
    prompt: "A center left-turn lane may be used to:",
    options: [
      "Pass slow traffic for several blocks",
      "Start or complete a left turn (or legal U-turn)",
      "Park temporarily during congestion",
      "Drive whenever the right lane is busy",
    ],
    correctIndex: 1,
    explanation:
      "Use the two-way left-turn lane only for left turns/U-turns as allowed—not for passing or through travel.",
    difficulty: "high-miss",
    tags: ["turns", "lanes"],
  }),
  q("rules-of-the-road", {
    id: "rr-032",
    prompt: "If you are in an intersection waiting to turn left and the light turns red, you should:",
    options: [
      "Stay stopped in the intersection until the next green",
      "Complete the turn when safe (you may clear the intersection)",
      "Back up out of the intersection",
      "Make a U-turn instead",
    ],
    correctIndex: 1,
    explanation:
      "If you lawfully entered on green to turn left, you may complete the turn after yielding; do not block the intersection longer than needed and do not reverse.",
    difficulty: "high-miss",
    tags: ["turns", "signals"],
  }),
  q("rules-of-the-road", {
    id: "rr-033",
    prompt: "When driving in fog with low visibility, use:",
    options: [
      "High beams",
      "Low beams (and fog lights if equipped)",
      "Only parking lights",
      "Hazard lights while moving at full speed",
    ],
    correctIndex: 1,
    explanation:
      "High beams reflect off fog and reduce visibility. Use low beams, slow down, and increase following distance.",
    difficulty: "high-miss",
    tags: ["weather", "lights"],
  }),
  q("rules-of-the-road", {
    id: "rr-034",
    prompt: "Blocking an intersection (“blocking the box”) is illegal when:",
    options: [
      "You enter on green but cannot clear the intersection before stopping in it",
      "You wait behind the limit line",
      "You are turning right with space",
      "Traffic is free-flowing",
    ],
    correctIndex: 0,
    explanation:
      "Do not enter an intersection unless you can get all the way through without stopping and blocking cross traffic or crosswalks.",
    difficulty: "high-miss",
    tags: ["intersections"],
  }),
  q("rules-of-the-road", {
    id: "rr-035",
    prompt: "The speed limit when approaching a blind uncontrolled railway crossing, if you cannot see 400 feet in both directions, is generally:",
    options: [
      "10 mph",
      "15 mph",
      "25 mph",
      "35 mph",
    ],
    correctIndex: 1,
    explanation:
      "If you cannot see 400 feet down the tracks in both directions, the limit is 15 mph within 100 feet of the crossing (unless controlled by signals/gates/flagger or otherwise posted).",
    difficulty: "high-miss",
    tags: ["speed", "railroad"],
  }),
  q("rules-of-the-road", {
    id: "rr-036",
    prompt: "When a pedestrian is crossing at a corner with no marked crosswalk, you should:",
    options: [
      "Treat it as if no pedestrian right-of-way exists",
      "Yield as you would at a crosswalk; corners often function as unmarked crosswalks",
      "Wave them across only if you feel like it",
      "Drive closer so they wait",
    ],
    correctIndex: 1,
    explanation:
      "Pedestrians often have the right-of-way at intersections even without painted lines. Yield and do not pass a vehicle stopped for a pedestrian.",
    difficulty: "high-miss",
    tags: ["pedestrians", "right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-037",
    prompt: "Backing up on a shoulder or freeway is:",
    options: [
      "Allowed to reach a missed exit",
      "Dangerous and generally illegal/unsafe on freeways—do not do it",
      "Required when lost",
      "Fine if hazards are on",
    ],
    correctIndex: 1,
    explanation:
      "Never back up on a freeway. Go to the next exit. Backing is also restricted/unsafe in many other roadway situations.",
    difficulty: "core",
    tags: ["freeway"],
  }),
  q("rules-of-the-road", {
    id: "rr-038",
    prompt: "If you see a “LEFT LANE MUST TURN LEFT” sign, and you are in that lane:",
    options: [
      "You may go straight if no one is behind you",
      "You must turn left",
      "You may turn right from that lane",
      "You may U-turn only",
    ],
    correctIndex: 1,
    explanation:
      "Obey mandatory lane control signs and pavement arrows. Get in the correct lane early.",
    difficulty: "core",
    tags: ["lanes", "turns"],
  }),
  q("rules-of-the-road", {
    id: "rr-039",
    prompt: "When parking next to a curb painted white, it usually means:",
    options: [
      "No stopping anytime",
      "Short-time stop only for loading/unloading passengers (check posted signs)",
      "Disabled parking only",
      "24-hour truck loading",
    ],
    correctIndex: 1,
    explanation:
      "White curbs often allow passenger loading/unloading for a short time—always read local signs/plates for exact rules.",
    difficulty: "core",
    tags: ["parking", "curbs"],
  }),
  q("rules-of-the-road", {
    id: "rr-040",
    prompt: "Yellow curbs typically indicate:",
    options: [
      "Unlimited public parking",
      "Loading zone for freight/passengers as posted—limited stopping",
      "Fire hydrant only",
      "Bike parking only",
    ],
    correctIndex: 1,
    explanation:
      "Yellow usually means a loading zone with time and use restrictions. Check signs.",
    difficulty: "core",
    tags: ["parking", "curbs"],
  }),
  q("rules-of-the-road", {
    id: "rr-041",
    prompt: "You should not park within how many feet of a sidewalk ramp for disabled persons?",
    options: [
      "3 feet",
      "3 feet is incorrect; do not block ramps—typically keep clear of curb ramps entirely",
      "50 feet",
      "100 feet",
    ],
    correctIndex: 1,
    explanation:
      "Never block curb ramps or access paths used by people with disabilities. Keep sidewalk ramps fully clear.",
    difficulty: "core",
    tags: ["parking"],
  }),
  q("rules-of-the-road", {
    id: "rr-042",
    prompt: "At a T-intersection without signs, who yields?",
    options: [
      "Traffic on the through road yields to the terminating road",
      "Traffic on the road that ends must yield to traffic on the through road",
      "Whoever is larger goes first",
      "Left-turning traffic always goes first",
    ],
    correctIndex: 1,
    explanation:
      "Drivers on the terminating road yield to vehicles on the continuing through roadway.",
    difficulty: "high-miss",
    tags: ["right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-043",
    prompt: "When may you drive off the paved roadway to pass?",
    options: [
      "Whenever traffic is slow",
      "Never; do not pass by driving off the pavement",
      "Only at night",
      "Only if you signal",
    ],
    correctIndex: 1,
    explanation:
      "Passing by leaving the paved or main-traveled portion of the road is unsafe and illegal.",
    difficulty: "core",
    tags: ["passing"],
  }),
  q("rules-of-the-road", {
    id: "rr-044",
    prompt: "If traffic is slower than the posted limit in the right lane of a multi-lane road, you may:",
    options: [
      "Never leave the right lane",
      "Use the left lane to pass when safe, then return when practicable",
      "Drive on the shoulder to pass",
      "Force others to speed up",
    ],
    correctIndex: 1,
    explanation:
      "Pass on the left when legal and safe, then move right when you can. Don’t weave unnecessarily.",
    difficulty: "core",
    tags: ["lanes", "passing"],
  }),
  q("rules-of-the-road", {
    id: "rr-045",
    prompt: "A right turn against a red light is allowed only after:",
    options: [
      "Slowing to 5 mph",
      "A complete stop, and only if no sign prohibits it and the way is clear",
      "Yielding only to cars, not pedestrians",
      "The light has been red for 3 seconds",
    ],
    correctIndex: 1,
    explanation:
      "Full stop first. Yield to pedestrians and cross traffic. No turn if a sign says “NO TURN ON RED.”",
    difficulty: "high-miss",
    tags: ["signals", "turns"],
  }),
  q("rules-of-the-road", {
    id: "rr-046",
    prompt: "Left turn on red is allowed in California only when:",
    options: [
      "Turning from a two-way street onto a two-way street",
      "Turning from a one-way street onto a one-way street, after stopping, if not prohibited",
      "Anytime you have a green arrow that just ended",
      "In school zones only",
    ],
    correctIndex: 1,
    explanation:
      "Left on red is limited to one-way → one-way situations after a full stop, when safe and not signed otherwise.",
    difficulty: "high-miss",
    tags: ["signals", "turns"],
  }),
  q("rules-of-the-road", {
    id: "rr-047",
    prompt: "What is the purpose of a roundabout?",
    options: [
      "To stop all traffic completely",
      "To keep traffic moving while yielding to vehicles already in the circle",
      "To allow speeding through intersections",
      "To eliminate the need to signal",
    ],
    correctIndex: 1,
    explanation:
      "Yield to traffic in the roundabout (and pedestrians). Enter when there is a safe gap, go counterclockwise, and signal when exiting.",
    difficulty: "high-miss",
    tags: ["right-of-way", "roundabout"],
  }),
  q("rules-of-the-road", {
    id: "rr-048",
    prompt: "When sharing a lane with a bicycle, give at least:",
    options: [
      "1 foot of space",
      "3 feet of space when passing",
      "10 feet of space only at night",
      "No extra space is required",
    ],
    correctIndex: 1,
    explanation:
      "California requires at least 3 feet of clearance when passing a bicyclist (more if needed for safety).",
    difficulty: "high-miss",
    tags: ["bicycles", "passing"],
  }),
  q("rules-of-the-road", {
    id: "rr-049",
    prompt: "If you are involved in a crash, you must stop:",
    options: [
      "Only if someone else stops first",
      "Immediately at the scene without obstructing traffic more than necessary",
      "Only if damage exceeds $10,000",
      "A mile away for safety always",
    ],
    correctIndex: 1,
    explanation:
      "Stop at the scene, help the injured if you can, exchange information, and notify law enforcement when required. Leaving the scene can be a serious crime.",
    difficulty: "core",
    tags: ["collisions"],
  }),
  q("rules-of-the-road", {
    id: "rr-050",
    prompt: "You should use your horn:",
    options: [
      "To express anger",
      "When reasonably necessary to avoid a collision or warn others",
      "At all pedestrians",
      "Every time you pass",
    ],
    correctIndex: 1,
    explanation:
      "Horns are warning devices, not tools for frustration. Use them to prevent crashes when appropriate.",
    difficulty: "core",
    tags: ["safety"],
  }),
  q("rules-of-the-road", {
    id: "rr-051",
    prompt: "Unless otherwise posted, the maximum speed on a two-lane undivided highway is generally:",
    options: [
      "55 mph",
      "65 mph",
      "70 mph",
      "50 mph",
    ],
    correctIndex: 0,
    explanation:
      "Many two-lane undivided highways have a 55 mph maximum unless a different limit is posted. Always follow posted limits and conditions.",
    difficulty: "high-miss",
    tags: ["speed"],
  }),
  q("rules-of-the-road", {
    id: "rr-052",
    prompt: "On many California freeways, the maximum speed limit is:",
    options: [
      "55 mph always",
      "65 mph (sometimes 70 where posted)",
      "80 mph",
      "45 mph",
    ],
    correctIndex: 1,
    explanation:
      "Freeway limits are commonly 65 mph, and some segments are posted 70 mph. Trucks/vehicles with trailers may have lower limits. Obey posted signs.",
    difficulty: "core",
    tags: ["speed", "freeway"],
  }),
];

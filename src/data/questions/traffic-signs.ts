import { q } from "./helpers";

export const trafficSignsQuestions = [
  q("traffic-signs", {
    id: "ts-001",
    prompt: "What does an octagon (8-sided) sign mean?",
    options: [
      "Yield to other traffic",
      "Stop completely before proceeding",
      "Railroad crossing ahead",
      "No passing zone",
    ],
    correctIndex: 1,
    explanation:
      "In California, the octagon is reserved for STOP signs. Come to a full stop behind the limit line, crosswalk, or before entering the intersection, then proceed when safe.",
    signId: "stop",
    difficulty: "high-miss",
    tags: ["shapes", "regulatory"],
  }),
  q("traffic-signs", {
    id: "ts-002",
    prompt: "A triangular sign pointing down (inverted triangle) means:",
    options: [
      "Stop",
      "No U-turn",
      "Yield",
      "Merge",
    ],
    correctIndex: 2,
    explanation:
      "The inverted triangle is the YIELD sign. Slow down, prepare to stop if needed, and give the right-of-way to traffic and pedestrians in or approaching the intersection.",
    signId: "yield",
    difficulty: "high-miss",
    tags: ["shapes", "regulatory"],
  }),
  q("traffic-signs", {
    id: "ts-003",
    prompt: "A round yellow sign with a black “X” and “RR” warns you of:",
    options: [
      "A school zone",
      "A railroad crossing ahead",
      "An emergency vehicle station",
      "A restricted road",
    ],
    correctIndex: 1,
    explanation:
      "The round yellow railroad advance warning sign means a highway-rail grade crossing is ahead. Slow down, look and listen, and be ready to stop if a train is approaching.",
    signId: "railroad-advance",
    difficulty: "high-miss",
    tags: ["railroad", "warning"],
  }),
  q("traffic-signs", {
    id: "ts-004",
    prompt: "What is the usual color of regulatory signs that tell you what you must or must not do?",
    options: [
      "Yellow with black letters",
      "Green with white letters",
      "White with black or red letters/symbols (often rectangular)",
      "Blue with white symbols",
    ],
    correctIndex: 2,
    explanation:
      "Regulatory signs are typically white rectangles with black or red legends (for example, speed limit, Do Not Enter, Keep Right). Red is also used on stop, yield, and wrong-way related signs.",
    difficulty: "core",
    tags: ["colors", "regulatory"],
  }),
  q("traffic-signs", {
    id: "ts-005",
    prompt: "Yellow diamond-shaped signs are used for:",
    options: [
      "Services such as gas and lodging",
      "Warnings of hazards or changes in the road ahead",
      "Route guidance only",
      "Parking regulations",
    ],
    correctIndex: 1,
    explanation:
      "Diamond-shaped yellow signs warn of conditions ahead (curves, intersections, pedestrians, slippery when wet, etc.). Adjust speed and position early.",
    signId: "warning-diamond",
    difficulty: "core",
    tags: ["shapes", "warning"],
  }),
  q("traffic-signs", {
    id: "ts-006",
    prompt: "A red circle with a red slash over a symbol means:",
    options: [
      "The action or vehicle type shown is prohibited",
      "The action is recommended",
      "Proceed with caution only at night",
      "The lane is for buses only during peak hours",
    ],
    correctIndex: 0,
    explanation:
      "A red circle and slash over a symbol means that action is not allowed (for example, no U-turn, no left turn, no trucks).",
    signId: "no-u-turn",
    difficulty: "high-miss",
    tags: ["regulatory", "prohibitions"],
  }),
  q("traffic-signs", {
    id: "ts-007",
    prompt: "What does a solid yellow line next to your lane generally mean?",
    options: [
      "You may pass if the way is clear",
      "Passing is not allowed on your side",
      "The lane ends in 500 feet",
      "The road is one-way only",
    ],
    correctIndex: 1,
    explanation:
      "A solid yellow line on your side of the centerline means do not pass. Broken yellow lines indicate passing is allowed when safe and legal.",
    difficulty: "high-miss",
    tags: ["markings", "passing"],
  }),
  q("traffic-signs", {
    id: "ts-008",
    prompt: "White lane lines separate:",
    options: [
      "Traffic moving in opposite directions",
      "Traffic moving in the same direction",
      "Bike lanes from sidewalks only",
      "Parking spaces from freeways",
    ],
    correctIndex: 1,
    explanation:
      "White lines separate lanes of traffic going the same direction. Yellow lines separate opposite directions (or mark the left edge on divided roads).",
    difficulty: "core",
    tags: ["markings"],
  }),
  q("traffic-signs", {
    id: "ts-009",
    prompt: "A pentagon-shaped (5-sided) yellow or fluorescent yellow-green sign usually indicates:",
    options: [
      "A hospital nearby",
      "A school zone or school crossing",
      "A no-parking zone",
      "A detour",
    ],
    correctIndex: 1,
    explanation:
      "The pentagon shape is used for school signs. Slow down, watch for children, and obey reduced school-zone speed limits when children are present or as posted.",
    signId: "school",
    difficulty: "high-miss",
    tags: ["shapes", "school"],
  }),
  q("traffic-signs", {
    id: "ts-010",
    prompt: "An orange diamond or rectangular construction sign means:",
    options: [
      "Tourist information ahead",
      "Road work / temporary traffic control ahead",
      "Wildlife crossing only",
      "End of freeway",
    ],
    correctIndex: 1,
    explanation:
      "Orange signs mark construction and maintenance zones. Slow down, follow temporary instructions, and watch for workers and equipment.",
    signId: "construction",
    difficulty: "core",
    tags: ["construction"],
  }),
  q("traffic-signs", {
    id: "ts-011",
    prompt: "A “DO NOT ENTER” sign means:",
    options: [
      "You may enter if traffic is light",
      "You are approaching a road or ramp against the flow of traffic",
      "Parking is prohibited",
      "Only commercial vehicles may enter",
    ],
    correctIndex: 1,
    explanation:
      "Do Not Enter means the roadway is restricted against the direction you are facing (often a one-way or freeway off-ramp exit). Do not go past the sign.",
    signId: "do-not-enter",
    difficulty: "high-miss",
    tags: ["regulatory"],
  }),
  q("traffic-signs", {
    id: "ts-012",
    prompt: "A green rectangular sign typically provides:",
    options: [
      "Warning of a hazard",
      "Regulatory orders you must obey",
      "Guidance/direction and distance information",
      "School crossing rules",
    ],
    correctIndex: 2,
    explanation:
      "Green guide signs give route, destination, and distance information to help you navigate.",
    difficulty: "core",
    tags: ["colors", "guide"],
  }),
  q("traffic-signs", {
    id: "ts-013",
    prompt: "Blue signs generally indicate:",
    options: [
      "Construction zones",
      "Motorist services (hospital, rest area, gas, food, lodging)",
      "No-passing zones",
      "Speed limits",
    ],
    correctIndex: 1,
    explanation:
      "Blue signs point to services for drivers such as hospitals, rest areas, and fuel/food/lodging.",
    difficulty: "core",
    tags: ["colors", "services"],
  }),
  q("traffic-signs", {
    id: "ts-014",
    prompt: "A “WRONG WAY” sign tells you:",
    options: [
      "You are driving too slowly",
      "You are going against the correct direction of traffic",
      "Your GPS route is inefficient",
      "The lane is HOV only",
    ],
    correctIndex: 1,
    explanation:
      "Wrong Way means you have entered a roadway against traffic. Stop safely when you can and exit or turn around only when it is safe to do so.",
    signId: "wrong-way",
    difficulty: "high-miss",
    tags: ["regulatory"],
  }),
  q("traffic-signs", {
    id: "ts-015",
    prompt: "What should you do when you see a “MERGE” warning sign?",
    options: [
      "Stop at the end of the ramp and wait for a large gap",
      "Speed up aggressively and force your way in",
      "Adjust speed, watch traffic, and merge when safe, yielding as required",
      "Ignore it if you are already in the through lane",
    ],
    correctIndex: 2,
    explanation:
      "Merge signs warn that lanes come together. Use the acceleration lane if available, match traffic speed when safe, signal, and merge without forcing others to brake hard.",
    signId: "merge",
    difficulty: "high-miss",
    tags: ["warning", "freeway"],
  }),
  q("traffic-signs", {
    id: "ts-016",
    prompt: "Two solid yellow center lines mean:",
    options: [
      "Passing is allowed for both directions",
      "Passing is not allowed for either direction",
      "The road is ending",
      "HOV lanes begin",
    ],
    correctIndex: 1,
    explanation:
      "Double solid yellow lines mean no passing in either direction. You may turn left across them into a driveway or intersection when safe and legal, unless signs prohibit it.",
    difficulty: "high-miss",
    tags: ["markings", "passing"],
  }),
  q("traffic-signs", {
    id: "ts-017",
    prompt: "A broken yellow center line means:",
    options: [
      "No passing either way",
      "Passing is allowed for you when safe if the broken line is on your side / for that direction’s rules",
      "The lane is closed",
      "Pedestrians only",
    ],
    correctIndex: 1,
    explanation:
      "Broken yellow lines separate opposite directions and generally allow passing when the way is clear and it is safe and legal. Always check oncoming traffic and sight distance.",
    difficulty: "core",
    tags: ["markings", "passing"],
  }),
  q("traffic-signs", {
    id: "ts-018",
    prompt: "A brown sign usually points to:",
    options: [
      "Recreation and cultural interest areas",
      "Speed limits",
      "Hospital emergency rooms",
      "Weigh stations",
    ],
    correctIndex: 0,
    explanation:
      "Brown signs guide drivers to parks, historic sites, and other recreational or cultural points of interest.",
    difficulty: "core",
    tags: ["colors"],
  }),
  q("traffic-signs", {
    id: "ts-019",
    prompt: "What does a “NO U-TURN” sign mean?",
    options: [
      "U-turns are allowed only at night",
      "You may not turn your vehicle around to go the opposite direction at that location",
      "Only trucks may U-turn",
      "U-turns are required",
    ],
    correctIndex: 1,
    explanation:
      "No U-turn prohibits turning around to reverse direction where posted. Even without the sign, U-turns are illegal where unsafe or where visibility is limited (for example, on a blind curve).",
    signId: "no-u-turn",
    difficulty: "core",
    tags: ["regulatory", "turns"],
  }),
  q("traffic-signs", {
    id: "ts-020",
    prompt: "A flashing red traffic signal should be treated like:",
    options: [
      "A yield sign",
      "A stop sign",
      "A green light if no one is present",
      "A railroad crossing gate",
    ],
    correctIndex: 1,
    explanation:
      "A flashing red light means stop completely, then go when it is safe—same basic rule as a stop sign.",
    difficulty: "high-miss",
    tags: ["signals"],
  }),
  q("traffic-signs", {
    id: "ts-021",
    prompt: "A flashing yellow traffic signal means:",
    options: [
      "Stop and wait for green",
      "Proceed with caution",
      "The signal is about to turn red; you must stop",
      "Only pedestrians may proceed",
    ],
    correctIndex: 1,
    explanation:
      "Flashing yellow means slow down and proceed carefully through the intersection, yielding to hazards and other road users as required.",
    difficulty: "high-miss",
    tags: ["signals"],
  }),
  q("traffic-signs", {
    id: "ts-022",
    prompt: "A steady yellow traffic light means:",
    options: [
      "Speed up to beat the red",
      "The light will soon be red; stop if you can do so safely",
      "Pedestrians have a walk signal",
      "Turn only right",
    ],
    correctIndex: 1,
    explanation:
      "Steady yellow warns that the signal is changing to red. Stop before the intersection if you can do so safely; do not race through.",
    difficulty: "high-miss",
    tags: ["signals"],
  }),
  q("traffic-signs", {
    id: "ts-023",
    prompt: "A “SPEED LIMIT 65” sign means:",
    options: [
      "You must always drive exactly 65 mph",
      "65 mph is the maximum under ideal conditions; drive slower if needed for safety",
      "You may drive 75 mph if traffic is fast",
      "The minimum speed is 65 mph",
    ],
    correctIndex: 1,
    explanation:
      "Posted speed limits are maximums under good conditions. California’s Basic Speed Law also requires you to never drive faster than is safe for current conditions.",
    signId: "speed-limit",
    difficulty: "high-miss",
    tags: ["speed", "regulatory"],
  }),
  q("traffic-signs", {
    id: "ts-024",
    prompt: "What do crossbuck signs at a railroad crossing indicate?",
    options: [
      "The tracks are abandoned",
      "A railroad crossing; yield to trains",
      "A school bus stop only",
      "A pedestrian overpass",
    ],
    correctIndex: 1,
    explanation:
      "The railroad crossbuck marks the crossing. Trains always have the right-of-way. Stop if lights flash, gates lower, or a train is approaching.",
    signId: "crossbuck",
    difficulty: "core",
    tags: ["railroad"],
  }),
  q("traffic-signs", {
    id: "ts-025",
    prompt: "A lane marked with a diamond symbol is typically:",
    options: [
      "For any vehicle anytime",
      "A carpool (HOV) or restricted lane during posted times",
      "For trucks only",
      "A parking lane",
    ],
    correctIndex: 1,
    explanation:
      "Diamond markings often indicate HOV/carpool or other restricted lanes. Check nearby signs for occupancy requirements and hours of operation.",
    difficulty: "high-miss",
    tags: ["markings", "hov"],
  }),
  q("traffic-signs", {
    id: "ts-026",
    prompt: "What does a “SLIPPERY WHEN WET” warning sign tell you to do?",
    options: [
      "Drive at the posted limit regardless of rain",
      "Slow down and avoid sudden turns or hard braking when the road is wet",
      "Use cruise control for stability",
      "Drive in the left lane only",
    ],
    correctIndex: 1,
    explanation:
      "This warning means traction can be reduced when wet. Reduce speed, increase following distance, and avoid abrupt steering or braking.",
    signId: "slippery",
    difficulty: "core",
    tags: ["warning", "weather"],
  }),
  q("traffic-signs", {
    id: "ts-027",
    prompt: "A two-way left turn center lane (shared center turn lane) is for:",
    options: [
      "Passing slower traffic",
      "Driving long distances in the center",
      "Making left turns (or U-turns where legal) from either direction",
      "Emergency parking only",
    ],
    correctIndex: 2,
    explanation:
      "The two-way left turn lane is for starting or completing left turns (and legal U-turns). Do not use it to pass or travel extended distances.",
    difficulty: "high-miss",
    tags: ["markings", "turns"],
  }),
  q("traffic-signs", {
    id: "ts-028",
    prompt: "What does a “DIVIDED HIGHWAY” warning sign typically indicate?",
    options: [
      "The road ahead separates with a median or barrier",
      "All lanes reverse direction",
      "Parking is allowed on both sides",
      "The speed limit doubles",
    ],
    correctIndex: 0,
    explanation:
      "Divided highway signs warn that opposing traffic will be separated by a median or barrier. Keep right and do not cross the median illegally.",
    difficulty: "core",
    tags: ["warning"],
  }),
  q("traffic-signs", {
    id: "ts-029",
    prompt: "A “PEDESTRIAN CROSSING” warning sign means you should:",
    options: [
      "Honk to clear the crosswalk",
      "Be prepared to slow or stop for people crossing",
      "Speed up to clear the area",
      "Only yield if pedestrians wave",
    ],
    correctIndex: 1,
    explanation:
      "Watch for pedestrians and be ready to yield. In California, you must yield to pedestrians in marked and many unmarked crosswalks.",
    signId: "pedestrian",
    difficulty: "high-miss",
    tags: ["warning", "pedestrians"],
  }),
  q("traffic-signs", {
    id: "ts-030",
    prompt: "What does a “NO PASSING ZONE” pennant-shaped yellow sign mean?",
    options: [
      "Passing is encouraged",
      "You are entering a no-passing zone",
      "Trucks may pass only",
      "The zone ends immediately",
    ],
    correctIndex: 1,
    explanation:
      "The yellow pennant (usually on the left side of the road) marks the beginning of a no-passing zone. Do not pass until the zone ends and conditions allow.",
    difficulty: "core",
    tags: ["passing"],
  }),
  q("traffic-signs", {
    id: "ts-031",
    prompt: "A steady red light means:",
    options: [
      "Stop; you may turn right after stopping if not prohibited and the way is clear (unless a sign forbids it)",
      "Slow to 5 mph and continue",
      "Stop only if other cars are present",
      "Proceed if turning left from a one-way street only without stopping",
    ],
    correctIndex: 0,
    explanation:
      "Stop behind the limit line or crosswalk. After stopping, a right turn on red is allowed unless posted otherwise, yielding to pedestrians and traffic. Left on red is only allowed from one-way to one-way where legal.",
    difficulty: "high-miss",
    tags: ["signals", "turns"],
  }),
  q("traffic-signs", {
    id: "ts-032",
    prompt: "What do broken white lines between lanes mean?",
    options: [
      "Lane changes are prohibited",
      "You may change lanes when safe",
      "Opposite-direction traffic",
      "The road is ending",
    ],
    correctIndex: 1,
    explanation:
      "Broken white lines separate same-direction lanes and allow lane changes when it is safe and legal.",
    difficulty: "core",
    tags: ["markings"],
  }),
  q("traffic-signs", {
    id: "ts-033",
    prompt: "A solid white line between lanes generally means:",
    options: [
      "Lane changes are discouraged; stay in your lane when possible",
      "You must reverse direction",
      "Passing oncoming traffic is allowed",
      "The line is decorative only",
    ],
    correctIndex: 0,
    explanation:
      "Solid white lines discourage lane changes (for example, near intersections). Do not cross double solid white lines.",
    difficulty: "high-miss",
    tags: ["markings"],
  }),
  q("traffic-signs", {
    id: "ts-034",
    prompt: "What does a “LANE ENDS” warning sign tell you?",
    options: [
      "Merge into the continuing lane when safe",
      "Stop at the end of your lane",
      "Speed up and hold position",
      "Use the shoulder as a new lane",
    ],
    correctIndex: 0,
    explanation:
      "Plan ahead, signal, and merge into the open lane cooperatively without cutting others off.",
    signId: "lane-ends",
    difficulty: "core",
    tags: ["warning", "merge"],
  }),
  q("traffic-signs", {
    id: "ts-035",
    prompt: "A red curb typically means:",
    options: [
      "Loading zone for passengers only",
      "No stopping, standing, or parking",
      "Unlimited parking",
      "Taxi parking only",
    ],
    correctIndex: 1,
    explanation:
      "Red curbs mean no stopping or parking (fire lane / emergency access type restrictions). Know other curb colors: blue (disabled), green (limited time), yellow (loading), white (passenger loading—short).",
    difficulty: "high-miss",
    tags: ["parking", "curbs"],
  }),
  q("traffic-signs", {
    id: "ts-036",
    prompt: "A blue curb usually indicates parking for:",
    options: [
      "Any vehicle for 24 hours",
      "Disabled persons with proper placard/plates",
      "Commercial trucks only",
      "Police vehicles only",
    ],
    correctIndex: 1,
    explanation:
      "Blue curbs reserve parking for people with disabilities who display a valid placard or specialty plates.",
    difficulty: "core",
    tags: ["parking", "curbs"],
  }),
  q("traffic-signs", {
    id: "ts-037",
    prompt: "What does a “STOP AHEAD” warning sign mean?",
    options: [
      "There is a stop sign ahead; be prepared to stop",
      "You must stop immediately where the sign is",
      "The road is closed",
      "Only trucks stop ahead",
    ],
    correctIndex: 0,
    explanation:
      "This warns of a stop sign you may not yet see (hill, curve, or obstruction). Reduce speed early.",
    difficulty: "core",
    tags: ["warning"],
  }),
  q("traffic-signs", {
    id: "ts-038",
    prompt: "Guide signs on freeways that show exits are often:",
    options: [
      "Yellow diamonds",
      "Green rectangles with white lettering",
      "Red octagons",
      "Orange pennants",
    ],
    correctIndex: 1,
    explanation:
      "Freeway guide/exit signs are typically green with white text to help you plan lane position before the exit.",
    difficulty: "core",
    tags: ["guide", "freeway"],
  }),
  q("traffic-signs", {
    id: "ts-039",
    prompt: "A “NARROW BRIDGE” sign means:",
    options: [
      "The bridge is closed",
      "The roadway narrows on the bridge; slow and use caution",
      "Only one car may use the highway that day",
      "You must stop before every bridge",
    ],
    correctIndex: 1,
    explanation:
      "Reduce speed, stay in your lane, and watch for oncoming traffic where the bridge is narrower than the approach road.",
    difficulty: "core",
    tags: ["warning"],
  }),
  q("traffic-signs", {
    id: "ts-040",
    prompt: "What does a “SIGNAL AHEAD” warning sign indicate?",
    options: [
      "A traffic signal is ahead; be ready to stop",
      "Cell service improves ahead",
      "You must turn on emergency signals",
      "The road becomes a freeway",
    ],
    correctIndex: 0,
    explanation:
      "Prepare for a traffic light that may require you to stop, especially if sight distance is limited.",
    difficulty: "core",
    tags: ["warning", "signals"],
  }),
  q("traffic-signs", {
    id: "ts-041",
    prompt: "Horizontal rectangular white signs with black lettering are commonly used for:",
    options: [
      "Warnings of curves",
      "Regulations such as speed limits and lane use",
      "Park recreation only",
      "Railroad crossbucks",
    ],
    correctIndex: 1,
    explanation:
      "Many regulatory messages use white rectangular signs (speed limit, keep right, lane control).",
    difficulty: "core",
    tags: ["regulatory"],
  }),
  q("traffic-signs", {
    id: "ts-042",
    prompt: "What should you do at a dark (non-functioning) traffic signal?",
    options: [
      "Treat it as if it were green if you arrived first",
      "Treat the intersection as an all-way stop",
      "Drive through as fast as possible",
      "Wait for a police officer only",
    ],
    correctIndex: 1,
    explanation:
      "If signals are out, stop as you would at an all-way stop: stop, then proceed in turn when safe, yielding appropriately.",
    difficulty: "high-miss",
    tags: ["signals", "right-of-way"],
  }),
  q("traffic-signs", {
    id: "ts-043",
    prompt: "A “SOFT SHOULDER” sign means:",
    options: [
      "The shoulder may not support vehicles well; avoid driving on it",
      "The shoulder is for high-speed travel",
      "Parking is free",
      "Bicycles must use the shoulder only",
    ],
    correctIndex: 0,
    explanation:
      "Soft shoulders can cause a vehicle to pull off the pavement or get stuck. Stay on the paved roadway unless an emergency requires otherwise.",
    difficulty: "core",
    tags: ["warning"],
  }),
  q("traffic-signs", {
    id: "ts-044",
    prompt: "What does a bike lane marking (solid white line and bicycle symbol) mean for drivers of cars?",
    options: [
      "You may drive in it to pass anytime",
      "Do not drive in it except when permitted (e.g., to turn or park where allowed)",
      "It is a breakdown lane for cars",
      "It is only decorative",
    ],
    correctIndex: 1,
    explanation:
      "Bike lanes are for bicyclists. Motorists generally must not drive in them except when preparing for a turn, entering/leaving the roadway, or where otherwise allowed—and must yield to bikes.",
    difficulty: "high-miss",
    tags: ["markings", "bicycles"],
  }),
  q("traffic-signs", {
    id: "ts-045",
    prompt: "A “HILL” or steep grade warning sign means you should:",
    options: [
      "Shift to a lower gear when going down a long steep grade to help control speed",
      "Always use cruise control downhill",
      "Coast in neutral to save fuel",
      "Speed up to clear the hill quickly",
    ],
    correctIndex: 0,
    explanation:
      "On long downgrades, a lower gear helps engine braking so brakes do not overheat. Never coast in neutral.",
    difficulty: "core",
    tags: ["warning", "hills"],
  }),
];

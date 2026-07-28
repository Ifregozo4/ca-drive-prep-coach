import { q } from "./helpers";

export const safeDrivingQuestions = [
  q("safe-driving", {
    id: "sd-001",
    prompt: "A good rule for following distance in good conditions is the:",
    options: [
      "One-second rule",
      "Three-second rule (or more)",
      "Ten-second rule always",
      "Car-length-only rule",
    ],
    correctIndex: 1,
    explanation:
      "Use at least a 3-second following distance in good conditions. Increase it for speed, rain, night, heavy traffic, or large vehicles.",
    difficulty: "high-miss",
    tags: ["following-distance"],
  }),
  q("safe-driving", {
    id: "sd-002",
    prompt: "To measure a 3-second following distance, you should:",
    options: [
      "Count “one-one-thousand…” when the vehicle ahead passes a fixed point until you reach it",
      "Estimate based on car lengths only at highway speed",
      "Stay close enough to read their bumper sticker",
      "Match their speed with no gap",
    ],
    correctIndex: 0,
    explanation:
      "Pick a landmark. When the vehicle ahead passes it, count seconds until you reach the same point. Adjust gap to at least 3 seconds.",
    difficulty: "core",
    tags: ["following-distance"],
  }),
  q("safe-driving", {
    id: "sd-003",
    prompt: "Scanning far ahead while driving helps you:",
    options: [
      "Only improve fuel economy",
      "Identify hazards early and plan smooth responses",
      "Avoid using mirrors",
      "Drive faster than traffic",
    ],
    correctIndex: 1,
    explanation:
      "Look well ahead (not just at the car in front), check mirrors regularly, and keep your eyes moving to spot problems early.",
    difficulty: "core",
    tags: ["scanning"],
  }),
  q("safe-driving", {
    id: "sd-004",
    prompt: "If someone is tailgating you, the safest response is usually to:",
    options: [
      "Brake hard to warn them",
      "Increase your following distance ahead and change lanes when safe, or gently slow to encourage them to pass",
      "Speed up well above the limit",
      "Stop in the lane",
    ],
    correctIndex: 1,
    explanation:
      "Avoid confrontations. Create space ahead so you can brake gradually if needed, and let the tailgater pass when safe.",
    difficulty: "high-miss",
    tags: ["following-distance", "aggression"],
  }),
  q("safe-driving", {
    id: "sd-005",
    prompt: "Total stopping distance includes:",
    options: [
      "Only brake lag",
      "Perception distance + reaction distance + braking distance",
      "Only the length of your vehicle",
      "Only tire tread depth",
    ],
    correctIndex: 1,
    explanation:
      "You need time to see a hazard, decide, move your foot, and then stop the vehicle. Speed multiplies braking distance significantly.",
    difficulty: "high-miss",
    tags: ["stopping"],
  }),
  q("safe-driving", {
    id: "sd-006",
    prompt: "When driving in heavy rain, a major risk is:",
    options: [
      "Hydroplaning (tires riding on water with loss of traction)",
      "Improved traction",
      "Shorter stopping distances",
      "Better visibility with high beams",
    ],
    correctIndex: 0,
    explanation:
      "Slow down, avoid cruise control on wet roads, and ease off the accelerator if you hydroplane—do not slam the brakes or jerk the wheel.",
    difficulty: "high-miss",
    tags: ["weather"],
  }),
  q("safe-driving", {
    id: "sd-007",
    prompt: "Seat belts should be worn:",
    options: [
      "Only on freeways",
      "By the driver and all passengers as required by law",
      "Only if the airbag is broken",
      "Only in the front seat",
    ],
    correctIndex: 1,
    explanation:
      "California requires proper restraint use. Belts work with airbags; airbags are supplemental, not a replacement for belts.",
    difficulty: "core",
    tags: ["restraints"],
  }),
  q("safe-driving", {
    id: "sd-008",
    prompt: "Children under 2 years old generally must ride:",
    options: [
      "In a rear-facing child restraint unless they exceed height/weight limits of the seat",
      "On a passenger’s lap",
      "In the front seat with an airbag",
      "Without a car seat if the trip is short",
    ],
    correctIndex: 0,
    explanation:
      "California child passenger rules require appropriate child restraints by age/size. Young children ride rear-facing until they outgrow the seat’s limits. Check current handbook details for exact thresholds.",
    difficulty: "high-miss",
    tags: ["child-safety"],
  }),
  q("safe-driving", {
    id: "sd-009",
    prompt: "The safest place for a child restraint is generally:",
    options: [
      "The front passenger seat",
      "The back seat",
      "On the driver’s lap",
      "Facing an active frontal airbag",
    ],
    correctIndex: 1,
    explanation:
      "The rear seat is safer for children. Never place a rear-facing seat in front of an active airbag.",
    difficulty: "core",
    tags: ["child-safety"],
  }),
  q("safe-driving", {
    id: "sd-010",
    prompt: "If your accelerator sticks, you should:",
    options: [
      "Reach down immediately to grab the pedal while looking away from the road",
      "Shift to neutral, steer safely, brake firmly, and pull off when safe—then turn off the engine",
      "Turn off the engine while at high speed before steering",
      "Open the door and drag your foot",
    ],
    correctIndex: 1,
    explanation:
      "Shift to neutral to remove power to the wheels, brake, and steer to a safe place. Then shut off the engine.",
    difficulty: "high-miss",
    tags: ["emergencies"],
  }),
  q("safe-driving", {
    id: "sd-011",
    prompt: "If a tire blows out, you should:",
    options: [
      "Brake hard immediately",
      "Hold the wheel firmly, ease off the gas, and steer straight as you slow gradually",
      "Swerve to the left",
      "Accelerate to maintain control",
    ],
    correctIndex: 1,
    explanation:
      "Don’t slam the brakes. Grip the wheel, gently decelerate, and pull off when under control.",
    difficulty: "high-miss",
    tags: ["emergencies"],
  }),
  q("safe-driving", {
    id: "sd-012",
    prompt: "Driving “defensively” means:",
    options: [
      "Assuming others may make mistakes and leaving yourself an out",
      "Always insisting on your right-of-way",
      "Driving as fast as conditions allow",
      "Using your horn frequently",
    ],
    correctIndex: 0,
    explanation:
      "Watch for errors by others, manage space and speed, and avoid situations where a crash is likely even if you are “in the right.”",
    difficulty: "core",
    tags: ["mindset"],
  }),
  q("safe-driving", {
    id: "sd-013",
    prompt: "When should you use your headlights?",
    options: [
      "Only after sunset",
      "From 30 minutes after sunset to 30 minutes before sunrise, and anytime you cannot see clearly (including windshield wipers on in many cases)",
      "Only on freeways",
      "Never in rain",
    ],
    correctIndex: 1,
    explanation:
      "Use headlights at night and when visibility is poor. If wipers are required due to weather, headlights are generally required as well.",
    difficulty: "high-miss",
    tags: ["lights"],
  }),
  q("safe-driving", {
    id: "sd-014",
    prompt: "Cruise control is a poor choice when:",
    options: [
      "Roads are dry and empty",
      "Roads are wet, icy, or in heavy traffic where speeds change often",
      "You are on a long dry freeway",
      "Visibility is excellent",
    ],
    correctIndex: 1,
    explanation:
      "On slippery roads or in stop-and-go traffic, manual speed control is safer than cruise control.",
    difficulty: "core",
    tags: ["weather", "equipment"],
  }),
  q("safe-driving", {
    id: "sd-015",
    prompt: "Looking at least 10–15 seconds ahead in the city roughly means looking:",
    options: [
      "At your hood ornament",
      "About a block ahead",
      "Only at the vehicle next to you",
      "At the rearview mirror exclusively",
    ],
    correctIndex: 1,
    explanation:
      "Aim your visual lead far enough ahead to spot red lights, turning cars, and pedestrians early. On highways, look farther (quarter mile+ when possible).",
    difficulty: "core",
    tags: ["scanning"],
  }),
  q("safe-driving", {
    id: "sd-016",
    prompt: "If you begin to skid, you should:",
    options: [
      "Slam the brakes and turn away from the skid",
      "Ease off the gas and steer in the direction you want the front of the car to go",
      "Close your eyes",
      "Shift to park while moving",
    ],
    correctIndex: 1,
    explanation:
      "Stay calm, avoid hard braking if possible, and steer smoothly to regain traction. Threshold/ABS braking techniques differ—know your vehicle.",
    difficulty: "high-miss",
    tags: ["skids"],
  }),
  q("safe-driving", {
    id: "sd-017",
    prompt: "With ABS (antilock brakes) in an emergency stop, you should:",
    options: [
      "Pump the brakes hard repeatedly",
      "Press firmly and steer; do not pump ABS brakes",
      "Never brake",
      "Turn the key off",
    ],
    correctIndex: 1,
    explanation:
      "ABS is designed for firm, continuous pressure. You may feel pulsing—keep pressure and steer around hazards.",
    difficulty: "high-miss",
    tags: ["braking"],
  }),
  q("safe-driving", {
    id: "sd-018",
    prompt: "Fatigue is dangerous because it:",
    options: [
      "Improves reaction time",
      "Slows reactions and can cause microsleeps",
      "Only affects night driving on dirt roads",
      "Is solved by turning up the radio forever",
    ],
    correctIndex: 1,
    explanation:
      "If you are drowsy, stop in a safe place and rest. Fatigue-related impairment can be severe.",
    difficulty: "core",
    tags: ["fatigue"],
  }),
  q("safe-driving", {
    id: "sd-019",
    prompt: "When entering traffic from a curb or driveway, you must:",
    options: [
      "Assume others will stop",
      "Yield to all approaching traffic and pedestrians",
      "Honk and go",
      "Enter at highway speed immediately",
    ],
    correctIndex: 1,
    explanation:
      "Drivers entering a roadway must yield to traffic already on it and to pedestrians on the sidewalk/crosswalk areas.",
    difficulty: "core",
    tags: ["right-of-way"],
  }),
  q("safe-driving", {
    id: "sd-020",
    prompt: "Keeping space on both sides of your vehicle is called:",
    options: [
      "Tailgating",
      "Managing a space cushion / lane positioning for escape paths",
      "Drafting",
      "Blocking",
    ],
    correctIndex: 1,
    explanation:
      "Avoid driving in other vehicles’ blind spots when possible and maintain side space so you can steer away from hazards.",
    difficulty: "core",
    tags: ["space"],
  }),
  q("safe-driving", {
    id: "sd-021",
    prompt: "If an oncoming car is in your lane, you should:",
    options: [
      "Stay put and flash lights only",
      "Slow down, flash lights/horn, and steer right toward the shoulder if needed",
      "Swerve left into their original lane immediately",
      "Speed up to intimidate them",
    ],
    correctIndex: 1,
    explanation:
      "Move right—not left—because the other driver may correct back into their lane. Slow and warn when possible.",
    difficulty: "high-miss",
    tags: ["emergencies"],
  }),
  q("safe-driving", {
    id: "sd-022",
    prompt: "Before starting any trip, a quick vehicle check should include:",
    options: [
      "Tires, lights, mirrors, and clear windows",
      "Only the radio presets",
      "Only fuel brand",
      "Nothing if the car is new",
    ],
    correctIndex: 0,
    explanation:
      "Check tires/air, lights, windows, mirrors, and that the path is clear. Proper adjustment prevents mid-drive surprises.",
    difficulty: "core",
    tags: ["precheck"],
  }),
  q("safe-driving", {
    id: "sd-023",
    prompt: "When driving at night, if an oncoming driver fails to dim high beams, you should:",
    options: [
      "Look toward the right edge of your lane and use it as a guide",
      "Stare into their lights to “teach them a lesson”",
      "Turn on your high beams in retaliation",
      "Stop in your lane",
    ],
    correctIndex: 0,
    explanation:
      "Avoid looking directly into bright lights. Use the right edge line to stay on path and slow if needed.",
    difficulty: "high-miss",
    tags: ["night"],
  }),
  q("safe-driving", {
    id: "sd-024",
    prompt: "Large trucks take longer to stop than cars. You should:",
    options: [
      "Cut in closely after passing",
      "Avoid lingering in front of them; leave extra space when merging in front",
      "Draft closely behind for fuel savings",
      "Assume they can stop in the same distance as you",
    ],
    correctIndex: 1,
    explanation:
      "Trucks need more stopping distance. Don’t cut in sharply; make sure you can see the truck’s cab in your mirror before moving over after passing.",
    difficulty: "high-miss",
    tags: ["trucks", "space"],
  }),
  q("safe-driving", {
    id: "sd-025",
    prompt: "The “covering the brake” technique is useful when:",
    options: [
      "You anticipate a possible stop (school zone, congested area, yellow light decision)",
      "You want to wear out brake pads faster",
      "Driving on empty dry freeways only",
      "Parking on level ground",
    ],
    correctIndex: 0,
    explanation:
      "Resting your foot over the brake (without braking) shortens reaction time when a stop is likely.",
    difficulty: "core",
    tags: ["braking"],
  }),
  q("safe-driving", {
    id: "sd-026",
    prompt: "If smoke comes from under the hood while driving, you should:",
    options: [
      "Continue to your destination",
      "Signal, pull off safely, turn off the engine, and get everyone clear—use an extinguisher only if safe",
      "Open the hood immediately while moving",
      "Pour water on an oil fire",
    ],
    correctIndex: 1,
    explanation:
      "Get off the road safely, shut off the engine, and keep people away. Opening a hot hood carelessly can make flames worse.",
    difficulty: "core",
    tags: ["emergencies"],
  }),
  q("safe-driving", {
    id: "sd-027",
    prompt: "When stalled on railroad tracks and a train is approaching, you should:",
    options: [
      "Stay in the car and call for help",
      "Get everyone out and move away from the tracks at an angle toward the approaching train’s direction of travel (away from debris path)",
      "Try to outrun the train in reverse",
      "Lie down between the rails",
    ],
    correctIndex: 1,
    explanation:
      "Evacuate immediately. Move away from the tracks and toward the direction of the train so debris is less likely to hit you if impact occurs.",
    difficulty: "high-miss",
    tags: ["railroad", "emergencies"],
  }),
  q("safe-driving", {
    id: "sd-028",
    prompt: "A safe gap when merging onto a freeway is one that lets you:",
    options: [
      "Force others to brake hard",
      "Enter at a similar speed without causing others to slow sharply",
      "Stop on the freeway",
      "Enter at 25 mph always",
    ],
    correctIndex: 1,
    explanation:
      "Match speed, signal, and merge into a gap that doesn’t require emergency braking by others.",
    difficulty: "core",
    tags: ["freeway", "space"],
  }),
  q("safe-driving", {
    id: "sd-029",
    prompt: "Why should you keep both hands on the wheel (approximately 9 and 3 or 8 and 4)?",
    options: [
      "It looks official",
      "Better control and reduced injury risk from airbags compared with some older hand positions",
      "It is required only for trucks",
      "It disables traction control",
    ],
    correctIndex: 1,
    explanation:
      "Modern guidance prefers positions that maximize control and reduce arm injury if an airbag deploys. Avoid hard hands at the top of the wheel.",
    difficulty: "core",
    tags: ["control"],
  }),
  q("safe-driving", {
    id: "sd-030",
    prompt: "Increasing speed from 20 to 60 mph multiplies kinetic energy and greatly increases:",
    options: [
      "Fuel quality only",
      "Braking distance and crash forces",
      "Tire pressure automatically",
      "Following distance requirements to zero",
    ],
    correctIndex: 1,
    explanation:
      "Stopping distance rises quickly with speed. Small speed increases can mean much longer stops and more severe crashes.",
    difficulty: "high-miss",
    tags: ["speed", "stopping"],
  }),
];

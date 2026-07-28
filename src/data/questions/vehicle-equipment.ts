import { q } from "./helpers";

export const vehicleEquipmentQuestions = [
  q("vehicle-equipment", {
    id: "ve-001",
    prompt: "Your vehicle must have a working:",
    options: [
      "Horn, windshield wipers, mirrors as required, and brakes",
      "Only a radio",
      "Only a GPS unit",
      "Only high beams",
    ],
    correctIndex: 0,
    explanation:
      "California requires certain equipment to be present and functional, including brakes, horn, lights, and wipers when needed for weather.",
    difficulty: "core",
    tags: ["equipment"],
  }),
  q("vehicle-equipment", {
    id: "ve-002",
    prompt: "It is illegal to drive with a windshield that:",
    options: [
      "Is slightly tinted legally",
      "Is so damaged or obstructed that it impairs the driver’s view",
      "Has a current registration sticker",
      "Is clean",
    ],
    correctIndex: 1,
    explanation:
      "You must be able to see clearly. Cracks, stickers, or objects that block the driver’s view are unsafe and can be illegal.",
    difficulty: "core",
    tags: ["windshield"],
  }),
  q("vehicle-equipment", {
    id: "ve-003",
    prompt: "Mufflers must:",
    options: [
      "Be removed for better sound",
      "Prevent excessive or unusual noise and be properly installed",
      "Always include flame effects",
      "Be optional on cars",
    ],
    correctIndex: 1,
    explanation:
      "Vehicles need an adequate muffler. Modified exhausts that are excessively loud can violate the law.",
    difficulty: "core",
    tags: ["exhaust"],
  }),
  q("vehicle-equipment", {
    id: "ve-004",
    prompt: "License plates in California must be:",
    options: [
      "Readable, properly mounted, and free of illegal covers that obscure them",
      "Hidden for privacy",
      "Displayed only in the rear window",
      "Optional on new cars for 30 days always",
    ],
    correctIndex: 0,
    explanation:
      "Plates must be clearly visible. Obstructing plates can lead to citations.",
    difficulty: "core",
    tags: ["registration"],
  }),
  q("vehicle-equipment", {
    id: "ve-005",
    prompt: "Proof of financial responsibility (insurance) must be:",
    options: [
      "Carried/available as required when driving",
      "Optional if you are careful",
      "Only for cars over 10 years old",
      "Only on freeways",
    ],
    correctIndex: 0,
    explanation:
      "California requires liability coverage (or other allowed proof). You must show evidence when requested after a stop or crash as required by law.",
    difficulty: "high-miss",
    tags: ["insurance"],
  }),
  q("vehicle-equipment", {
    id: "ve-006",
    prompt: "Headlights must be used:",
    options: [
      "Only in rural areas",
      "During darkness and when visibility is poor / when wipers are in continuous use as required",
      "Never with taillights",
      "Only if other cars have them on",
    ],
    correctIndex: 1,
    explanation:
      "Lights help you see and be seen. Use them at night and in bad weather per handbook rules.",
    difficulty: "core",
    tags: ["lights"],
  }),
  q("vehicle-equipment", {
    id: "ve-007",
    prompt: "A red rear reflector or taillight helps:",
    options: [
      "Cool the engine",
      "Make your vehicle visible from the rear at night",
      "Charge the battery only",
      "Signal left turns only",
    ],
    correctIndex: 1,
    explanation:
      "Working rear lights/reflectors are critical so others can see you and judge your position.",
    difficulty: "core",
    tags: ["lights"],
  }),
  q("vehicle-equipment", {
    id: "ve-008",
    prompt: "Turn signals must be used:",
    options: [
      "Only when a police officer is watching",
      "When turning, changing lanes, or pulling away from a curb as required",
      "Only on freeways",
      "Only at night",
    ],
    correctIndex: 1,
    explanation:
      "Signal your intentions early so others can react. Hand signals are allowed if light signals fail.",
    difficulty: "core",
    tags: ["signals"],
  }),
  q("vehicle-equipment", {
    id: "ve-009",
    prompt: "Bald tires are dangerous because they:",
    options: [
      "Improve rain performance",
      "Reduce traction, especially on wet roads, and increase blowout risk",
      "Are required for smog checks",
      "Lower insurance automatically",
    ],
    correctIndex: 1,
    explanation:
      "Adequate tread helps channel water and maintain grip. Replace worn tires.",
    difficulty: "core",
    tags: ["tires"],
  }),
  q("vehicle-equipment", {
    id: "ve-010",
    prompt: "The parking brake should be used:",
    options: [
      "Never if you have an automatic transmission",
      "When parking, especially on grades, as an added safeguard",
      "Only when the foot brake fails on the freeway at speed as first choice without slowing",
      "To make turns sharper",
    ],
    correctIndex: 1,
    explanation:
      "Set the parking brake when parked. It is also a backup if service brakes have problems—but learn correct emergency use.",
    difficulty: "core",
    tags: ["brakes"],
  }),
  q("vehicle-equipment", {
    id: "ve-011",
    prompt: "Objects hanging from the rearview mirror are a problem when they:",
    options: [
      "Look stylish",
      "Obstruct the driver’s view",
      "Are air fresheners under 1 ounce always legal regardless of view",
      "Match the seat color",
    ],
    correctIndex: 1,
    explanation:
      "Keep the windshield clear of view obstructions. Safety first.",
    difficulty: "core",
    tags: ["view"],
  }),
  q("vehicle-equipment", {
    id: "ve-012",
    prompt: "If your brake warning light stays on while driving, you should:",
    options: [
      "Ignore it until the next service interval months later",
      "Have the braking system checked promptly; it may indicate a serious problem",
      "Drive faster to charge the system",
      "Disconnect the battery",
    ],
    correctIndex: 1,
    explanation:
      "Warning lights signal malfunctions. Get brakes inspected before relying on the vehicle for long trips.",
    difficulty: "core",
    tags: ["brakes", "warnings"],
  }),
  q("vehicle-equipment", {
    id: "ve-013",
    prompt: "Window tint laws exist to:",
    options: [
      "Ensure adequate visibility and allow others (including officers) to see into the vehicle as required",
      "Maximize privacy above all else",
      "Reduce registration fees",
      "Eliminate the need for mirrors",
    ],
    correctIndex: 0,
    explanation:
      "Excessive tint can be illegal and unsafe. Follow California limits for front side windows and windshield areas.",
    difficulty: "core",
    tags: ["tint"],
  }),
  q("vehicle-equipment", {
    id: "ve-014",
    prompt: "Registration tabs must be:",
    options: [
      "Current and properly displayed on the rear plate as required",
      "Kept in the glove box only",
      "Hidden",
      "Optional for hybrids",
    ],
    correctIndex: 0,
    explanation:
      "Keep registration current and display tags correctly to avoid citations.",
    difficulty: "core",
    tags: ["registration"],
  }),
  q("vehicle-equipment", {
    id: "ve-015",
    prompt: "A smog check may be required:",
    options: [
      "Never in California",
      "When registering or renewing certain vehicles as required by law",
      "Only for motorcycles under 50cc",
      "Only if you drive out of state",
    ],
    correctIndex: 1,
    explanation:
      "Many vehicles need periodic smog certification for registration. Exemptions exist for some newer/electric/older vehicles—check current rules.",
    difficulty: "core",
    tags: ["smog", "registration"],
  }),
  q("vehicle-equipment", {
    id: "ve-016",
    prompt: "Cargo should be secured because unsecured loads can:",
    options: [
      "Improve handling",
      "Fall onto the roadway and cause crashes; you can be liable",
      "Only matter for trucks over 80,000 lbs",
      "Be ignored under 5 mph",
    ],
    correctIndex: 1,
    explanation:
      "Secure all loads. Flying debris is dangerous and can result in citations and civil liability.",
    difficulty: "high-miss",
    tags: ["cargo"],
  }),
  q("vehicle-equipment", {
    id: "ve-017",
    prompt: "Side mirrors should be adjusted so that:",
    options: [
      "You mainly see the side of your own car",
      "You maximize the view of adjacent lanes with minimal blind spots (still do head checks)",
      "They point at the sky",
      "They are folded while driving on freeways",
    ],
    correctIndex: 1,
    explanation:
      "Proper mirror setup reduces blind spots, but head checks remain necessary before lane changes.",
    difficulty: "core",
    tags: ["mirrors"],
  }),
  q("vehicle-equipment", {
    id: "ve-018",
    prompt: "Driving without functioning brake lights is dangerous because:",
    options: [
      "Others cannot tell when you are slowing or stopping",
      "It improves aerodynamics",
      "It is only a daytime issue",
      "ABS will flash instead",
    ],
    correctIndex: 0,
    explanation:
      "Brake lights communicate your intentions. Fix outages immediately.",
    difficulty: "core",
    tags: ["lights"],
  }),
];

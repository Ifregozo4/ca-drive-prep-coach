import { q } from "./helpers";

export const alcoholDrugsDistractedQuestions = [
  q("alcohol-drugs-distracted", {
    id: "ad-001",
    prompt: "For drivers 21 or older, it is illegal to drive with a BAC of:",
    options: [
      "0.02% or higher",
      "0.08% or higher",
      "0.15% or higher only",
      "1.0% or higher",
    ],
    correctIndex: 1,
    explanation:
      "The adult illegal per se limit is 0.08% BAC. You can still be impaired and arrested below 0.08% if your driving shows impairment.",
    difficulty: "high-miss",
    tags: ["bac", "dui"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-002",
    prompt: "For drivers under 21, California’s zero tolerance policy makes it illegal to drive with a BAC of:",
    options: [
      "0.08% or higher only",
      "0.01% or higher",
      "0.05% or higher only",
      "Any amount is legal if you feel fine",
    ],
    correctIndex: 1,
    explanation:
      "Drivers under 21 can face DUI-related actions at 0.01% BAC or higher. Do not drink and drive at any age.",
    difficulty: "high-miss",
    tags: ["bac", "under21"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-003",
    prompt: "If you refuse a chemical test when lawfully arrested for DUI, under implied consent you may face:",
    options: [
      "No consequences",
      "License suspension/revocation and other penalties",
      "Only a warning letter",
      "A free retest next year only",
    ],
    correctIndex: 1,
    explanation:
      "By driving in California, you consent to chemical testing when lawfully arrested for DUI. Refusal brings administrative license actions and can be used against you.",
    difficulty: "high-miss",
    tags: ["implied-consent"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-004",
    prompt: "Alcohol affects driving by:",
    options: [
      "Improving night vision",
      "Slowing reaction time, reducing coordination, and impairing judgment",
      "Increasing safe risk-taking",
      "Only affecting walking, not driving",
    ],
    correctIndex: 1,
    explanation:
      "Even small amounts can impair critical driving skills. Judgment is often affected before you “feel drunk.”",
    difficulty: "core",
    tags: ["impairment"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-005",
    prompt: "Coffee, cold showers, and exercise sober you up:",
    options: [
      "Immediately and completely",
      "They do not sober you up; only time reduces BAC",
      "If combined with energy drinks",
      "If you eat a large meal afterward only",
    ],
    correctIndex: 1,
    explanation:
      "Myths about sobering up quickly are false. The liver needs time to metabolize alcohol.",
    difficulty: "high-miss",
    tags: ["myths"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-006",
    prompt: "Prescription and over-the-counter drugs:",
    options: [
      "Cannot affect driving if labeled “safe”",
      "Can impair driving; read warnings and consult a doctor/pharmacist",
      "Are illegal to use any time before driving",
      "Only matter if combined with soda",
    ],
    correctIndex: 1,
    explanation:
      "Many legal drugs cause drowsiness or slow reactions. You can be cited for driving under the influence of drugs, including some prescriptions.",
    difficulty: "high-miss",
    tags: ["drugs"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-007",
    prompt: "Marijuana and driving:",
    options: [
      "Is always safe if recreational use is legal in CA",
      "Can impair coordination and judgment; do not drive while impaired",
      "Improves focus for lane keeping",
      "Is only an issue when combined with alcohol above 0.08%",
    ],
    correctIndex: 1,
    explanation:
      "Legal possession does not make impaired driving legal. Drug-impaired driving is enforced in California.",
    difficulty: "high-miss",
    tags: ["drugs", "marijuana"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-008",
    prompt: "Holding and operating a handheld phone while driving is:",
    options: [
      "Legal for adults if at a red light only always",
      "Generally prohibited; use hands-free as allowed by law",
      "Required for navigation",
      "Legal under 25 mph",
    ],
    correctIndex: 1,
    explanation:
      "California restricts handheld phone use while driving. Hands-free devices are the compliant approach, but even hands-free talking can distract—minimize interactions.",
    difficulty: "high-miss",
    tags: ["phones"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-009",
    prompt: "Texting while driving is:",
    options: [
      "Allowed with one thumb",
      "Illegal and extremely dangerous",
      "Fine if using voice-to-text only without thinking",
      "Legal on freeways",
    ],
    correctIndex: 1,
    explanation:
      "Reading or writing texts takes eyes and mind off the road. It is illegal and a major crash cause.",
    difficulty: "high-miss",
    tags: ["phones", "texting"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-010",
    prompt: "Drivers under 18 with provisional licenses generally may not use a phone while driving:",
    options: [
      "Even hands-free (with limited emergency exceptions)",
      "Only if texting",
      "Only on freeways",
      "Whenever they want with parent permission",
    ],
    correctIndex: 0,
    explanation:
      "Provisional license holders face stricter phone rules—typically no phone use while driving except certain emergencies. Check current handbook details.",
    difficulty: "high-miss",
    tags: ["phones", "provisional"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-011",
    prompt: "The best way to handle a difficult phone call while driving is to:",
    options: [
      "Multi-task carefully",
      "Pull off the road to a safe place and stop",
      "Hold the phone low so officers cannot see",
      "Speed so the trip ends sooner",
    ],
    correctIndex: 1,
    explanation:
      "If a call needs attention, stop safely first. Driving deserves your full focus.",
    difficulty: "core",
    tags: ["phones"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-012",
    prompt: "Distracted driving includes:",
    options: [
      "Only phones",
      "Anything that takes eyes, hands, or mind off driving (eating, grooming, passengers, devices)",
      "Only texting",
      "Only adjusting the radio above volume 10",
    ],
    correctIndex: 1,
    explanation:
      "Visual, manual, and cognitive distractions all raise crash risk. Minimize non-driving tasks.",
    difficulty: "core",
    tags: ["distraction"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-013",
    prompt: "Designated drivers should:",
    options: [
      "Drink less than others but still some alcohol",
      "Consume no alcohol or impairing drugs",
      "Drink only beer",
      "Start drinking after arriving home later",
    ],
    correctIndex: 1,
    explanation:
      "A true designated driver stays sober for the entire outing.",
    difficulty: "core",
    tags: ["prevention"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-014",
    prompt: "Open containers of alcohol in the passenger area of a vehicle are:",
    options: [
      "Legal for passengers always",
      "Generally illegal in the passenger compartment; keep sealed and preferably in the trunk",
      "Legal if the driver is sober",
      "Legal on freeways only",
    ],
    correctIndex: 1,
    explanation:
      "California restricts open alcoholic beverage containers in the vehicle passenger area. Know the rules for trunks and living areas of RVs/limos as exceptions may apply.",
    difficulty: "high-miss",
    tags: ["open-container"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-015",
    prompt: "Drowsy driving can be as dangerous as drunk driving because it:",
    options: [
      "Improves focus",
      "Slows reactions and can cause unintentional sleep",
      "Only happens after 24 hours awake",
      "Is fixed by opening a window permanently",
    ],
    correctIndex: 1,
    explanation:
      "If you are sleepy, stop and rest. Microsleeps at highway speed are deadly.",
    difficulty: "core",
    tags: ["fatigue"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-016",
    prompt: "A BAC of 0.08% means:",
    options: [
      "You are guaranteed safe to drive",
      "There are 0.08 grams of alcohol per 100 ml of blood—illegal for 21+ drivers per se",
      "You had exactly one drink",
      "Impairment is impossible",
    ],
    correctIndex: 1,
    explanation:
      "BAC measures alcohol concentration. Impairment can begin at lower levels. Food, weight, and time all affect BAC.",
    difficulty: "core",
    tags: ["bac"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-017",
    prompt: "Combining alcohol with other depressant drugs is especially dangerous because:",
    options: [
      "Effects cancel out",
      "Impairment can multiply unpredictably",
      "It sobers you faster",
      "It is required for some prescriptions",
    ],
    correctIndex: 1,
    explanation:
      "Polydrug use can severely impair driving and increase overdose risk. Never mix and drive.",
    difficulty: "high-miss",
    tags: ["drugs", "alcohol"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-018",
    prompt: "If a friend who has been drinking wants to drive, you should:",
    options: [
      "Let them if they “feel fine”",
      "Arrange another ride; take keys if needed to prevent them from driving impaired",
      "Have them drink coffee then drive in 10 minutes",
      "Follow them closely home",
    ],
    correctIndex: 1,
    explanation:
      "Stopping an impaired friend from driving can save lives. Use rideshares, taxis, sober drivers, or stay put.",
    difficulty: "core",
    tags: ["prevention"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-019",
    prompt: "Even hands-free phone conversations can be risky because:",
    options: [
      "They never distract",
      "They create cognitive distraction that reduces attention to the road",
      "They are more illegal than handheld in all cases for adults",
      "They drain the battery only",
    ],
    correctIndex: 1,
    explanation:
      "Mental workload from conversations can cause inattention blindness. Keep calls short or wait until parked.",
    difficulty: "core",
    tags: ["phones", "distraction"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-020",
    prompt: "Programming a GPS while the vehicle is moving is:",
    options: [
      "Best practice",
      "A dangerous distraction; set destinations before you drive or when safely stopped",
      "Required by law",
      "Fine if done under 5 seconds",
    ],
    correctIndex: 1,
    explanation:
      "Looking away to enter addresses is similar to texting risk. Set navigation before moving.",
    difficulty: "high-miss",
    tags: ["distraction", "gps"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-021",
    prompt: "Emotional distraction (anger, crying, excitement) can:",
    options: [
      "Improve hazard detection",
      "Impair judgment and attention similarly to other distractions",
      "Only matter for new drivers",
      "Be cured by speeding",
    ],
    correctIndex: 1,
    explanation:
      "If emotions overwhelm you, pull over until you can focus. Road rage multiplies risk.",
    difficulty: "core",
    tags: ["distraction", "emotions"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-022",
    prompt: "After a DUI conviction, possible consequences include:",
    options: [
      "Only a small fine with no license impact",
      "Fines, license suspension, ignition interlock, education programs, and possible jail",
      "A free upgrade to a commercial license",
      "Automatic dismissal if insured",
    ],
    correctIndex: 1,
    explanation:
      "DUI penalties are serious and escalate with prior offenses or high BAC/injury crashes. Never drive impaired.",
    difficulty: "core",
    tags: ["dui", "penalties"],
  }),
];

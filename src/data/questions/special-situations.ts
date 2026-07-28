import { q } from "./helpers";

export const specialSituationsQuestions = [
  q("special-situations", {
    id: "ss-001",
    prompt: "On mountain roads, when two vehicles meet on a steep narrow road and cannot pass, who typically should back up?",
    options: [
      "The vehicle going uphill",
      "The vehicle going downhill (usually more control backing downhill is harder—uphill traffic often has the right-of-way)",
      "Whoever arrives last",
      "The smaller car always",
    ],
    correctIndex: 1,
    explanation:
      "On narrow mountain roads, the downhill driver usually yields by backing up because the uphill driver may have difficulty restarting. Use turnouts when provided.",
    difficulty: "high-miss",
    tags: ["mountains"],
  }),
  q("special-situations", {
    id: "ss-002",
    prompt: "When driving down a long mountain grade, you should:",
    options: [
      "Ride the brakes continuously",
      "Shift to a lower gear and use engine braking",
      "Coast in neutral",
      "Turn off the engine",
    ],
    correctIndex: 1,
    explanation:
      "Lower gears help control speed so brakes do not overheat and fade.",
    difficulty: "high-miss",
    tags: ["mountains", "braking"],
  }),
  q("special-situations", {
    id: "ss-003",
    prompt: "If you experience brake failure, you should:",
    options: [
      "Pump the brakes (if non-total failure), downshift, use the parking brake carefully, and find an escape path",
      "Jump out immediately while moving",
      "Turn off the ignition at high speed first",
      "Accelerate to a stop",
    ],
    correctIndex: 0,
    explanation:
      "Pumping may build pressure on some systems. Downshift, use the parking brake gradually, and steer to a safe area.",
    difficulty: "high-miss",
    tags: ["emergencies"],
  }),
  q("special-situations", {
    id: "ss-004",
    prompt: "In dense fog, if you cannot see well enough to continue safely, you should:",
    options: [
      "Stop in the travel lane with lights off",
      "Pull completely off the road, turn on hazard lights, and wait",
      "Speed up to get through faster",
      "Use only parking lights while moving",
    ],
    correctIndex: 1,
    explanation:
      "Do not stop in a travel lane. Exit the roadway fully when possible and make your vehicle visible.",
    difficulty: "high-miss",
    tags: ["fog"],
  }),
  q("special-situations", {
    id: "ss-005",
    prompt: "Flash floods: if water is flowing across the roadway, you should:",
    options: [
      "Drive through if it looks shallow",
      "Turn around; do not drive into flood water",
      "Follow the car ahead closely",
      "Gun the engine to push through",
    ],
    correctIndex: 1,
    explanation:
      "Only inches of moving water can float a vehicle. “Turn around, don’t drown.”",
    difficulty: "high-miss",
    tags: ["floods"],
  }),
  q("special-situations", {
    id: "ss-006",
    prompt: "When driving in snow or ice, you should:",
    options: [
      "Use sudden steering inputs",
      "Accelerate and brake gently; increase following distance greatly",
      "Use high speeds for momentum",
      "Use cruise control for consistency",
    ],
    correctIndex: 1,
    explanation:
      "Smooth inputs prevent skids. Leave much more space and slow well before turns and stops.",
    difficulty: "core",
    tags: ["ice", "snow"],
  }),
  q("special-situations", {
    id: "ss-007",
    prompt: "If your vehicle starts to hydroplane, you should:",
    options: [
      "Brake hard and turn sharply",
      "Ease off the accelerator and steer straight until traction returns",
      "Accelerate",
      "Shift to reverse",
    ],
    correctIndex: 1,
    explanation:
      "Reducing speed gently helps tires regain contact with the road. Avoid abrupt inputs.",
    difficulty: "high-miss",
    tags: ["rain"],
  }),
  q("special-situations", {
    id: "ss-008",
    prompt: "Desert driving: a key concern is:",
    options: [
      "Overheating and dehydration; carry water and watch temperature gauges",
      "Too much humidity only",
      "Ice on every road",
      "No need for headlights at dusk",
    ],
    correctIndex: 0,
    explanation:
      "Heat stresses engines and people. Maintain coolant, watch gauges, and keep emergency water.",
    difficulty: "core",
    tags: ["desert"],
  }),
  q("special-situations", {
    id: "ss-009",
    prompt: "If you have a tire blowout on the freeway, first:",
    options: [
      "Brake as hard as possible",
      "Grip the wheel, ease off gas, and carefully move to the shoulder when controlled",
      "Steer left across traffic",
      "Exit the vehicle while still moving",
    ],
    correctIndex: 1,
    explanation:
      "Control the vehicle first. Hard braking can cause a skid after a blowout.",
    difficulty: "high-miss",
    tags: ["blowout", "freeway"],
  }),
  q("special-situations", {
    id: "ss-010",
    prompt: "When stalled on a freeway, if you can safely exit the vehicle you should stand:",
    options: [
      "Directly behind the car",
      "Away from traffic, well off the roadway, and call for help",
      "In the adjacent lane to flag cars",
      "On the center median always",
    ],
    correctIndex: 1,
    explanation:
      "Being outside near traffic is dangerous. Get to a safe location away from lanes when possible and use hazards/triangles if available and safe.",
    difficulty: "core",
    tags: ["freeway", "stall"],
  }),
  q("special-situations", {
    id: "ss-011",
    prompt: "Night driving is more dangerous mainly because:",
    options: [
      "Speeds are lower",
      "Visibility is reduced and glare can hide hazards",
      "There are fewer impaired drivers",
      "Signs disappear",
    ],
    correctIndex: 1,
    explanation:
      "Slow down if needed, keep windows clean, and use appropriate beams. Watch for pedestrians and animals.",
    difficulty: "core",
    tags: ["night"],
  }),
  q("special-situations", {
    id: "ss-012",
    prompt: "If you are blinded by sun glare, you should:",
    options: [
      "Speed up to pass through it",
      "Slow down and use the lane edge as a guide until you can see",
      "Close your eyes briefly",
      "Stop in the lane",
    ],
    correctIndex: 1,
    explanation:
      "Reduce speed and increase following distance. Keep sunglasses/visor ready and windshield clean.",
    difficulty: "core",
    tags: ["glare"],
  }),
  q("special-situations", {
    id: "ss-013",
    prompt: "Construction zones require you to:",
    options: [
      "Maintain normal speed always",
      "Obey temporary signs, slow down, and watch for workers/equipment",
      "Ignore flaggers if you have GPS routing",
      "Use the shoulder as an extra lane",
    ],
    correctIndex: 1,
    explanation:
      "Fines may be higher in work zones. Follow cones, signs, and flaggers carefully.",
    difficulty: "high-miss",
    tags: ["construction"],
  }),
  q("special-situations", {
    id: "ss-014",
    prompt: "A flagger in a construction zone:",
    options: [
      "May be ignored if you see green ahead",
      "Must be obeyed",
      "Only controls trucks",
      "Is advisory only",
    ],
    correctIndex: 1,
    explanation:
      "Flaggers legally control traffic in work zones. Stop or proceed as directed.",
    difficulty: "core",
    tags: ["construction"],
  }),
  q("special-situations", {
    id: "ss-015",
    prompt: "If an earthquake occurs while you are driving, you should:",
    options: [
      "Stop under a bridge for cover",
      "Pull to the side clear of overpasses/power lines/trees when safe and stay in the vehicle until shaking stops if that is safest",
      "Speed to get home",
      "Leave the car in a travel lane and run",
    ],
    correctIndex: 1,
    explanation:
      "Avoid stopping under overpasses or wires when possible. Stay calm and proceed carefully after shaking stops, watching for road damage.",
    difficulty: "core",
    tags: ["earthquake"],
  }),
  q("special-situations", {
    id: "ss-016",
    prompt: "When driving through a tunnel, you should:",
    options: [
      "Remove sunglasses if needed, turn on headlights if required, and watch speed",
      "Stop to take photos",
      "Change lanes frequently",
      "Use high beams on other drivers",
    ],
    correctIndex: 0,
    explanation:
      "Eyes need time to adjust. Maintain lane position and obey tunnel rules/lights.",
    difficulty: "core",
    tags: ["tunnels"],
  }),
  q("special-situations", {
    id: "ss-017",
    prompt: "If you must drive through a small amount of standing water (when safe and shallow), you should:",
    options: [
      "Drive fast to spray it away",
      "Proceed slowly and test brakes gently afterward",
      "Use cruise control",
      "Shift to neutral mid-puddle",
    ],
    correctIndex: 1,
    explanation:
      "Water can reduce braking effectiveness. Dry brakes with light pressure after leaving water. Avoid flooded roads.",
    difficulty: "core",
    tags: ["water"],
  }),
  q("special-situations", {
    id: "ss-018",
    prompt: "Black ice is dangerous because:",
    options: [
      "It is easy to see",
      "It is a thin, hard-to-see ice film that can cause sudden loss of traction",
      "It only forms above 50°F",
      "It improves grip",
    ],
    correctIndex: 1,
    explanation:
      "Be especially careful on bridges and overpasses in cold weather. Slow down and avoid sudden inputs.",
    difficulty: "core",
    tags: ["ice"],
  }),
  q("special-situations", {
    id: "ss-019",
    prompt: "If your hood flies open while driving, you should:",
    options: [
      "Look through the gap under the hood or out the window, slow, and pull off safely",
      "Stop instantly in the lane",
      "Reach outside to close it while moving",
      "Accelerate",
    ],
    correctIndex: 0,
    explanation:
      "You may still see under the hood edge or from the side. Slow carefully and get off the road.",
    difficulty: "core",
    tags: ["emergencies"],
  }),
  q("special-situations", {
    id: "ss-020",
    prompt: "When crossing railroad tracks in traffic, make sure:",
    options: [
      "You have enough room to clear the tracks completely without stopping on them",
      "You stop on the tracks if the light turns red ahead",
      "You follow the car ahead with no gap",
      "You shift to neutral on the tracks",
    ],
    correctIndex: 0,
    explanation:
      "Never get trapped on the tracks. If traffic is backed up, wait before the crossing until you can fully clear it.",
    difficulty: "high-miss",
    tags: ["railroad"],
  }),
  q("special-situations", {
    id: "ss-021",
    prompt: "High winds can be especially hazardous for:",
    options: [
      "Only sedans",
      "High-profile vehicles, trailers, and when passing large trucks",
      "Vehicles with full tanks only",
      "Parking lots exclusively",
    ],
    correctIndex: 1,
    explanation:
      "Grip the wheel firmly, slow down, and give trucks/trailers extra room; wind blasts can shove vehicles sideways.",
    difficulty: "core",
    tags: ["wind"],
  }),
  q("special-situations", {
    id: "ss-022",
    prompt: "If you are being chased by another driver aggressively, you should:",
    options: [
      "Go home immediately so they learn your address",
      "Drive to a police station or safe public place; do not stop in isolated areas; call 911 when safe",
      "Get out and confront them",
      "Brake-check them",
    ],
    correctIndex: 1,
    explanation:
      "Avoid escalation. Seek help in a populated, safe location and involve law enforcement.",
    difficulty: "core",
    tags: ["road-rage"],
  }),
  q("special-situations", {
    id: "ss-023",
    prompt: "On slippery roads, leaving more space is critical because:",
    options: [
      "Tires grip better when wet",
      "Stopping distance increases significantly",
      "ABS removes all risk",
      "Speed limits increase automatically",
    ],
    correctIndex: 1,
    explanation:
      "Double or triple following distance in poor traction. Smooth inputs prevent skids.",
    difficulty: "core",
    tags: ["weather", "space"],
  }),
  q("special-situations", {
    id: "ss-024",
    prompt: "If smoke or heavy fog reduces freeway visibility suddenly, a safe choice is:",
    options: [
      "Keep highway speed using the car ahead’s lights only",
      "Slow gradually, increase space, use low beams, and exit if needed",
      "Use high beams",
      "Stop where you are in a travel lane",
    ],
    correctIndex: 1,
    explanation:
      "Chain-reaction crashes happen in low visibility. Reduce speed early and leave the freeway if conditions are too dangerous.",
    difficulty: "high-miss",
    tags: ["fog", "freeway"],
  }),
  q("special-situations", {
    id: "ss-025",
    prompt: "When driving in a dust storm, you should:",
    options: [
      "Speed to exit the dust faster",
      "Pull off the road as far as possible, stop, turn off lights if you might be mistaken for a moving vehicle guidance (follow handbook: often lights on while fully off-road—use judgment), and wait for it to pass",
      "Follow the centerline closely at full speed",
      "Use only hazard lights while moving at 65",
    ],
    correctIndex: 1,
    explanation:
      "Dust storms can drop visibility to near zero. Get off the roadway completely rather than driving blind. Follow current handbook guidance for light use when stopped off-road.",
    difficulty: "core",
    tags: ["dust"],
  }),
];

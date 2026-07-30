/**
 * Expansion batch: ~100 additional original practice items.
 * Content is based on rules commonly tested from the official California
 * Driver Handbook (Class C). These are original study questions — not
 * official DMV exam items.
 */
import { q } from "./helpers";

export const expansion100Questions = [
  // ——— Traffic Signs & Markings (+15) ———
  q("traffic-signs", {
    id: "ts-046",
    prompt: "A white rectangular sign with black lettering that says “KEEP RIGHT” means:",
    options: [
      "You may choose any lane",
      "Stay to the right of a median, island, or obstruction",
      "Trucks must exit",
      "Parking is on the right only",
    ],
    correctIndex: 1,
    explanation:
      "Keep Right directs traffic to the right of a divider, gore area, or obstruction. Follow the sign rather than straddling the island.",
    difficulty: "core",
    tags: ["regulatory", "lanes"],
  }),
  q("traffic-signs", {
    id: "ts-047",
    prompt: "What does a yellow pennant-shaped sign on the left side of the road typically mark?",
    options: [
      "The start of a no-passing zone",
      "A hospital entrance",
      "The end of a freeway",
      "A bike route only",
    ],
    correctIndex: 0,
    explanation:
      "The yellow no-passing pennant (usually facing you on the left) marks the beginning of a no-passing zone. Do not pass until the zone ends and it is safe and legal.",
    difficulty: "high-miss",
    tags: ["passing", "warning"],
  }),
  q("traffic-signs", {
    id: "ts-048",
    prompt: "A fluorescent yellow-green diamond or pentagon sign is often used for:",
    options: [
      "Construction only",
      "Pedestrian, bicycle, and school-related warnings (high visibility)",
      "Speed limits on freeways",
      "Parking regulations",
    ],
    correctIndex: 1,
    explanation:
      "Fluorescent yellow-green is used for school, pedestrian, and bicycle warning signs to increase visibility. Slow down and scan carefully.",
    difficulty: "core",
    tags: ["colors", "school", "pedestrians"],
  }),
  q("traffic-signs", {
    id: "ts-049",
    prompt: "What does a “NO TURN ON RED” sign mean?",
    options: [
      "You may turn on red after a full stop",
      "You must wait for a green signal before turning; right (or left, where applicable) on red is prohibited",
      "Only trucks may turn on red",
      "You may turn on red between midnight and 6 a.m. only",
    ],
    correctIndex: 1,
    explanation:
      "When posted, you may not turn during the red signal even after stopping. Wait for green (or a green arrow, as applicable).",
    difficulty: "high-miss",
    tags: ["signals", "turns"],
  }),
  q("traffic-signs", {
    id: "ts-050",
    prompt: "Chevron signs (arrowheads pointing left or right) warn you to:",
    options: [
      "Stop immediately",
      "Follow a sharp curve or change in direction of the road",
      "Merge onto a freeway only",
      "Park on the shoulder",
    ],
    correctIndex: 1,
    explanation:
      "Chevrons guide you through a sharp curve or alignment change. Reduce speed before the curve and stay in your lane.",
    difficulty: "core",
    tags: ["warning", "curves"],
  }),
  q("traffic-signs", {
    id: "ts-051",
    prompt: "A “ROAD NARROWS” warning sign means:",
    options: [
      "The pavement ends",
      "The roadway width decreases ahead; adjust position and speed",
      "You must turn around",
      "Only one direction of traffic remains forever",
    ],
    correctIndex: 1,
    explanation:
      "Prepare for less room side-to-side. Move away from the edge if needed and watch for oncoming traffic on two-way roads.",
    difficulty: "core",
    tags: ["warning"],
  }),
  q("traffic-signs", {
    id: "ts-052",
    prompt: "Double solid white lines between lanes mean:",
    options: [
      "Lane changes are allowed anytime",
      "Lane changes are prohibited; do not cross",
      "Passing oncoming traffic is allowed",
      "HOV rules only",
    ],
    correctIndex: 1,
    explanation:
      "Double solid white lines separate lanes of traffic going the same direction and mean you must not change lanes across them.",
    difficulty: "high-miss",
    tags: ["markings"],
  }),
  q("traffic-signs", {
    id: "ts-053",
    prompt: "A green arrow signal means:",
    options: [
      "Yield, then turn when safe (same as a yield sign)",
      "You may turn in the direction of the arrow; oncoming traffic should be stopped for protected turns",
      "The light will never turn red",
      "Only pedestrians may move",
    ],
    correctIndex: 1,
    explanation:
      "A green arrow is a protected movement for the direction shown. Still watch for pedestrians and vehicles running signals.",
    difficulty: "high-miss",
    tags: ["signals", "turns"],
  }),
  q("traffic-signs", {
    id: "ts-054",
    prompt: "What does a “TWO-WAY TRAFFIC” warning sign indicate?",
    options: [
      "You are entering a road with traffic in both directions",
      "The road is one-way only",
      "Parking is allowed on both sides",
      "Bicycles are prohibited",
    ],
    correctIndex: 0,
    explanation:
      "This warns that the roadway carries two-way traffic (for example, after a divided section ends). Keep right and watch for oncoming vehicles.",
    difficulty: "core",
    tags: ["warning"],
  }),
  q("traffic-signs", {
    id: "ts-055",
    prompt: "A “DIP” warning sign means:",
    options: [
      "A low place in the road; slow down",
      "A free car wash",
      "The road is closed",
      "Increase speed to clear the dip",
    ],
    correctIndex: 0,
    explanation:
      "Slow before a dip to maintain control and avoid bottoming out or losing traction, especially when the dip may hold water.",
    difficulty: "core",
    tags: ["warning"],
  }),
  q("traffic-signs", {
    id: "ts-056",
    prompt: "What do raised pavement markers (Botts’ dots / reflective markers) help with?",
    options: [
      "Only decorating the road",
      "Lane guidance, especially at night or in rain, by reflecting light and providing tactile feedback",
      "Replacing the need for headlights",
      "Allowing higher speed limits automatically",
    ],
    correctIndex: 1,
    explanation:
      "Markers help you see lane lines and curves. Some are reflective; do not drive over them unnecessarily when they mark a lane boundary you should respect.",
    difficulty: "core",
    tags: ["markings"],
  }),
  q("traffic-signs", {
    id: "ts-057",
    prompt: "A “DETOUR” sign (often orange) means:",
    options: [
      "Continue straight regardless of barriers",
      "Follow the temporary route around a closed road section",
      "The trip is canceled",
      "Only emergency vehicles may proceed",
    ],
    correctIndex: 1,
    explanation:
      "Detour signs guide you around construction or closures. Follow the marked temporary path and temporary speed limits.",
    difficulty: "core",
    tags: ["construction"],
  }),
  q("traffic-signs", {
    id: "ts-058",
    prompt: "What does a “END SCHOOL ZONE” sign mean?",
    options: [
      "You must continue at 15 mph for 1 mile",
      "The reduced school-zone speed restriction ends; return to the otherwise posted or prima facie limit when safe",
      "Children will never be present again",
      "You may ignore all crosswalks",
    ],
    correctIndex: 1,
    explanation:
      "When the school zone ends, resume the normal limit for that road — still obey the Basic Speed Law and watch for pedestrians.",
    difficulty: "core",
    tags: ["school", "speed"],
  }),
  q("traffic-signs", {
    id: "ts-059",
    prompt: "A lane-control signal with a red “X” over a lane means:",
    options: [
      "The lane is open",
      "Do not drive in that lane",
      "HOV only for motorcycles",
      "The lane is for parking",
    ],
    correctIndex: 1,
    explanation:
      "Overhead lane signals: green arrow = open, yellow “X” = prepare to leave, red “X” = closed/do not use.",
    difficulty: "high-miss",
    tags: ["signals", "lanes"],
  }),
  q("traffic-signs", {
    id: "ts-060",
    prompt: "What does a “RAMP METER” (freeway entrance signal) require?",
    options: [
      "Enter the freeway without stopping anytime",
      "Stop on red and proceed when the light turns green (usually one vehicle per green unless posted otherwise)",
      "Only trucks must stop",
      "Ignore it if traffic is light",
    ],
    correctIndex: 1,
    explanation:
      "Ramp meters control freeway entry flow. Stop on red and go on green as posted—typically one car per green unless signs allow more.",
    difficulty: "high-miss",
    tags: ["freeway", "signals"],
  }),

  // ——— Rules of the Road (+25) ———
  q("rules-of-the-road", {
    id: "rr-053",
    prompt: "Unless otherwise posted, the speed limit in a business district is generally:",
    options: ["15 mph", "25 mph", "35 mph", "45 mph"],
    correctIndex: 1,
    explanation:
      "Prima facie speed in business or residential districts is typically 25 mph unless signs post a different limit. Always follow posted limits and the Basic Speed Law.",
    difficulty: "high-miss",
    tags: ["speed"],
  }),
  q("rules-of-the-road", {
    id: "rr-054",
    prompt: "When you are involved in a collision, you must exchange with the other party:",
    options: [
      "Only first names",
      "Driver license information, vehicle registration info, insurance information, and current address as required",
      "Social Security numbers only",
      "Nothing if damage looks minor",
    ],
    correctIndex: 1,
    explanation:
      "California requires stopping and exchanging required identification and financial responsibility information. Notify law enforcement when required and assist injured persons if you can safely do so.",
    difficulty: "high-miss",
    tags: ["collisions"],
  }),
  q("rules-of-the-road", {
    id: "rr-055",
    prompt: "You may not park within how many feet of a fire station driveway on the same side of the street?",
    options: ["5 feet", "15 feet", "20 feet", "50 feet"],
    correctIndex: 1,
    explanation:
      "Do not park within 15 feet of a fire station driveway on the same side (and other fire-access related restrictions apply). Keep emergency access clear.",
    difficulty: "high-miss",
    tags: ["parking"],
  }),
  q("rules-of-the-road", {
    id: "rr-056",
    prompt: "When parallel parking on a two-way street, you should park:",
    options: [
      "Facing against traffic if it is easier",
      "In the direction of traffic flow, wheels within 18 inches of the curb",
      "In the center of the lane",
      "On the left curb on a two-way street always",
    ],
    correctIndex: 1,
    explanation:
      "Park with traffic, not against it, and keep within 18 inches of the curb unless angled parking is marked.",
    difficulty: "high-miss",
    tags: ["parking"],
  }),
  q("rules-of-the-road", {
    id: "rr-057",
    prompt: "A “safety zone” is:",
    options: [
      "Any parking lot",
      "A space set aside for pedestrians, marked by raised buttons or markers, that vehicles must not drive through",
      "The HOV lane",
      "The area behind a school bus only",
    ],
    correctIndex: 1,
    explanation:
      "Safety zones protect pedestrians (often near streetcar/transit loading areas). Do not drive through a safety zone.",
    difficulty: "high-miss",
    tags: ["pedestrians", "definitions"],
  }),
  q("rules-of-the-road", {
    id: "rr-058",
    prompt: "If you approach a curve or the top of a hill and cannot see oncoming traffic for at least 200 feet, you should:",
    options: [
      "Pass slower vehicles quickly",
      "Not pass; wait until sight distance is adequate and passing is legal",
      "Use the shoulder to pass",
      "Flash high beams and pass",
    ],
    correctIndex: 1,
    explanation:
      "Do not pass where you cannot see far enough ahead (including near crests and curves) or where markings prohibit passing.",
    difficulty: "high-miss",
    tags: ["passing"],
  }),
  q("rules-of-the-road", {
    id: "rr-059",
    prompt: "When a school bus is stopped on a multi-lane highway with a center divider and red lights are flashing on the other side of the divider, you:",
    options: [
      "Must always stop",
      "Generally are not required to stop if you are on the opposite side of a divided highway",
      "Must U-turn and stop behind the bus",
      "Must reverse",
    ],
    correctIndex: 1,
    explanation:
      "On a divided highway, traffic on the opposite side of a median/divider generally need not stop for a school bus. Still watch for children and slow if needed.",
    difficulty: "high-miss",
    tags: ["school-bus"],
  }),
  q("rules-of-the-road", {
    id: "rr-060",
    prompt: "You must turn on headlights when:",
    options: [
      "Only driving after midnight",
      "From 30 minutes after sunset until 30 minutes before sunrise, and any time you cannot see person/vehicle clearly at 1000 feet; also generally when windshield wipers are required",
      "Only in tunnels",
      "Never in rain if streetlights are on",
    ],
    correctIndex: 1,
    explanation:
      "Use headlights during darkness and poor visibility. California also requires headlights when weather conditions require continuous use of windshield wipers.",
    difficulty: "high-miss",
    tags: ["lights"],
  }),
  q("rules-of-the-road", {
    id: "rr-061",
    prompt: "When may you drive in a bicycle lane?",
    options: [
      "Anytime to pass traffic",
      "Within 200 feet of making a turn, when parking where allowed, or to enter/leave the roadway — yielding to bicyclists",
      "Only on freeways",
      "Never under any circumstance",
    ],
    correctIndex: 1,
    explanation:
      "Motor vehicles may enter a bike lane only for limited purposes (e.g., preparing to turn within 200 feet) and must not interfere with bicyclists.",
    difficulty: "high-miss",
    tags: ["bicycles", "lanes"],
  }),
  q("rules-of-the-road", {
    id: "rr-062",
    prompt: "At an uncontrolled T-intersection, traffic on the terminating road must:",
    options: [
      "Take the right-of-way automatically",
      "Yield to traffic on the through road",
      "Honk and go",
      "Always stop for 5 seconds",
    ],
    correctIndex: 1,
    explanation:
      "Drivers on the road that ends yield to vehicles on the continuing roadway.",
    difficulty: "high-miss",
    tags: ["right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-063",
    prompt: "When exiting a driveway onto a street, you must:",
    options: [
      "Assume others will stop for you",
      "Stop and yield to pedestrians on the sidewalk and to vehicles on the roadway",
      "Enter at the posted highway speed immediately",
      "Only yield to vehicles on the left",
    ],
    correctIndex: 1,
    explanation:
      "Entering from a driveway or alley requires yielding to sidewalk users and roadway traffic.",
    difficulty: "core",
    tags: ["right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-064",
    prompt: "It is illegal to leave a child or dependent person unattended in a motor vehicle when:",
    options: [
      "Only on freeways",
      "Conditions present a significant risk to their health or safety (California law restricts leaving children unsupervised in vehicles)",
      "The windows are cracked open slightly always making it legal",
      "You will return within one hour always making it legal",
    ],
    correctIndex: 1,
    explanation:
      "Never leave children or dependent persons in a vehicle when it is unsafe (heat, cold, inability to get help). California specifically restricts leaving children 6 or younger without proper supervision in certain situations.",
    difficulty: "high-miss",
    tags: ["child-safety"],
  }),
  q("rules-of-the-road", {
    id: "rr-065",
    prompt: "If you are driving slower than the flow of traffic on a multi-lane highway, you should:",
    options: [
      "Drive in the far left lane",
      "Use the right lane (or a lane other than the far left) when practicable",
      "Stop on the shoulder periodically",
      "Weave between lanes to keep up",
    ],
    correctIndex: 1,
    explanation:
      "Keep right except to pass when practical. The left lane is often for passing; slower traffic should not camp there.",
    difficulty: "core",
    tags: ["lanes"],
  }),
  q("rules-of-the-road", {
    id: "rr-066",
    prompt: "A solid yellow line on your side with a broken yellow line on the other side means:",
    options: [
      "You may pass if safe; oncoming traffic may not",
      "You may not pass; oncoming traffic may pass if safe",
      "Neither direction may pass",
      "Both directions may pass",
    ],
    correctIndex: 1,
    explanation:
      "The solid line on your side means no passing for you. The broken line on the other side allows that direction to pass when safe.",
    difficulty: "high-miss",
    tags: ["markings", "passing"],
  }),
  q("rules-of-the-road", {
    id: "rr-067",
    prompt: "When making a left turn from a two-way street onto a one-way street, you should turn into:",
    options: [
      "Any lane",
      "The left lane of the one-way street (the lane closest to the left curb), unless signs/markings direct otherwise",
      "The far right lane only",
      "The parking lane only",
    ],
    correctIndex: 1,
    explanation:
      "Turn into the nearest lane going in your direction on the one-way street, then change lanes if needed when safe.",
    difficulty: "high-miss",
    tags: ["turns"],
  }),
  q("rules-of-the-road", {
    id: "rr-068",
    prompt: "You should not stop on a freeway except:",
    options: [
      "To make a phone call anytime",
      "In an emergency or when directed by law enforcement / traffic control",
      "To check a map in a travel lane",
      "To pick up hitchhikers in the carpool lane",
    ],
    correctIndex: 1,
    explanation:
      "Freeway shoulders and lanes are dangerous places to stop. Pull fully off only when necessary for emergencies, and use hazards when appropriate.",
    difficulty: "core",
    tags: ["freeway"],
  }),
  q("rules-of-the-road", {
    id: "rr-069",
    prompt: "When a traffic signal is green but you are turning left, oncoming traffic has:",
    options: [
      "No right-of-way ever",
      "The right-of-way if going straight or turning right; you must yield",
      "To stop because your green means protected left always",
      "To reverse for you",
    ],
    correctIndex: 1,
    explanation:
      "A circular green is not a protected left. Yield to oncoming vehicles and pedestrians before turning.",
    difficulty: "high-miss",
    tags: ["right-of-way", "turns"],
  }),
  q("rules-of-the-road", {
    id: "rr-070",
    prompt: "Parking is illegal in front of a public or private driveway:",
    options: [
      "Only during business hours",
      "Anytime you would block the driveway",
      "Only if a red curb is painted",
      "Only for more than 30 minutes",
    ],
    correctIndex: 1,
    explanation:
      "Do not block driveways. Even brief obstruction can be illegal and unsafe.",
    difficulty: "core",
    tags: ["parking"],
  }),
  q("rules-of-the-road", {
    id: "rr-071",
    prompt: "The minimum amount of liability insurance California requires you to carry is often summarized as:",
    options: [
      "No insurance is required",
      "At least the state-minimum bodily injury and property damage liability limits (or other allowed proof of financial responsibility)",
      "Only collision coverage",
      "Only comprehensive coverage",
    ],
    correctIndex: 1,
    explanation:
      "Drivers must maintain financial responsibility (commonly liability insurance at or above legal minimums). Limits can change—verify current amounts in the official handbook/DMV materials.",
    difficulty: "high-miss",
    tags: ["insurance"],
  }),
  q("rules-of-the-road", {
    id: "rr-072",
    prompt: "When two vehicles meet on a steep narrow road where neither can pass, the vehicle that should usually yield by backing up is:",
    options: [
      "The vehicle going uphill",
      "The vehicle going downhill",
      "The newer vehicle",
      "The vehicle with more passengers",
    ],
    correctIndex: 1,
    explanation:
      "On narrow mountain roads, the downhill driver typically backs up because uphill traffic may have difficulty restarting. Use turnouts when available.",
    difficulty: "high-miss",
    tags: ["mountains", "right-of-way"],
  }),
  q("rules-of-the-road", {
    id: "rr-073",
    prompt: "You must stop before crossing a sidewalk when exiting an alley because:",
    options: [
      "Sidewalks are decorative",
      "Pedestrians on the sidewalk have the right-of-way",
      "It recharges the battery",
      "Only bicycles use sidewalks",
    ],
    correctIndex: 1,
    explanation:
      "Stop before the sidewalk and yield to pedestrians, then proceed carefully into the street yielding to traffic.",
    difficulty: "core",
    tags: ["right-of-way", "pedestrians"],
  }),
  q("rules-of-the-road", {
    id: "rr-074",
    prompt: "A white cane or yellow/orange identification cane generally indicates a pedestrian who:",
    options: [
      "Is jogging",
      "Is blind or has low vision; yield and exercise extra caution",
      "Has the right to ignore signals",
      "Is directing traffic",
    ],
    correctIndex: 1,
    explanation:
      "Yield to pedestrians who are blind or visually impaired. Do not honk in a way that confuses them; stop and allow safe crossing.",
    difficulty: "high-miss",
    tags: ["pedestrians"],
  }),
  q("rules-of-the-road", {
    id: "rr-075",
    prompt: "When you see emergency vehicle lights behind you and hear a siren, if you are in an intersection you should:",
    options: [
      "Stop in the middle of the intersection",
      "Clear the intersection, then pull to the right and stop",
      "Speed up through multiple blocks",
      "Make a U-turn immediately",
    ],
    correctIndex: 1,
    explanation:
      "Do not block the intersection. Proceed through if needed, then pull right and stop when safe.",
    difficulty: "high-miss",
    tags: ["emergency"],
  }),
  q("rules-of-the-road", {
    id: "rr-076",
    prompt: "Using a vehicle to “block” or impede a person in a way that endangers them (road rage) is:",
    options: [
      "A good teaching tool",
      "Dangerous and can lead to criminal charges as well as crashes",
      "Required if you were cut off",
      "Legal under 25 mph",
    ],
    correctIndex: 1,
    explanation:
      "Never use your vehicle to intimidate others. Avoid conflict, give space, and report dangerous driving when appropriate.",
    difficulty: "core",
    tags: ["road-rage"],
  }),
  q("rules-of-the-road", {
    id: "rr-077",
    prompt: "When parking uphill without a curb, turn your front wheels:",
    options: [
      "Toward the side of the road (right), so the vehicle rolls away from traffic if brakes fail",
      "Toward traffic",
      "Straight with no set brake",
      "Left always",
    ],
    correctIndex: 0,
    explanation:
      "Uphill or downhill without a curb: turn wheels toward the side of the road (right) so the car rolls away from traffic if it moves. Always set the parking brake.",
    difficulty: "high-miss",
    tags: ["parking"],
  }),

  // ——— Safe Driving (+15) ———
  q("safe-driving", {
    id: "sd-031",
    prompt: "Looking ahead, to the sides, and in mirrors regularly is part of:",
    options: [
      "Target fixation only",
      "An orderly visual search / defensive scanning pattern",
      "Distracted driving",
      "Optional for empty roads only",
    ],
    correctIndex: 1,
    explanation:
      "Continuous scanning helps you detect hazards early. Avoid staring at one point; check mirrors about every 5–8 seconds in traffic.",
    difficulty: "core",
    tags: ["scanning"],
  }),
  q("safe-driving", {
    id: "sd-032",
    prompt: "If you must drive through a heavy downpour, a safe practice is to:",
    options: [
      "Use high beams and cruise control",
      "Slow down, increase following distance, and use low beams",
      "Follow the vehicle ahead by one car length at highway speed",
      "Drive on the shoulder",
    ],
    correctIndex: 1,
    explanation:
      "Rain reduces traction and visibility. Slow down, leave more space, and avoid sudden inputs. High beams reflect and worsen visibility in rain/fog.",
    difficulty: "high-miss",
    tags: ["weather"],
  }),
  q("safe-driving", {
    id: "sd-033",
    prompt: "Children under 8 years old generally must be secured in:",
    options: [
      "Any seat belt in the front seat",
      "A car seat or booster in the back seat until they are 8 or at least 4'9\" tall (with limited exceptions)",
      "No restraint if a parent holds them",
      "The cargo area",
    ],
    correctIndex: 1,
    explanation:
      "California child passenger rules require appropriate child restraints. Children under 8 generally ride in the back in a car seat or booster until height requirements are met. Check the current handbook for exact exceptions.",
    difficulty: "high-miss",
    tags: ["child-safety"],
  }),
  q("safe-driving", {
    id: "sd-034",
    prompt: "The risk of death in a crash rises sharply as speed increases because:",
    options: [
      "Airbags stop working above 30 mph",
      "Crash energy increases with the square of speed; stopping distance also grows quickly",
      "Tires get better traction at high speed",
      "Other drivers always yield",
    ],
    correctIndex: 1,
    explanation:
      "Higher speed means much more kinetic energy and longer stopping distances. Small speed increases can greatly worsen crash outcomes.",
    difficulty: "high-miss",
    tags: ["speed"],
  }),
  q("safe-driving", {
    id: "sd-035",
    prompt: "When driving behind a large truck, if you cannot see the truck’s side mirrors, you should assume:",
    options: [
      "The driver can still see you clearly",
      "You are in a blind spot (no-zone) and should change position",
      "You should follow even closer",
      "Trucks have no blind spots",
    ],
    correctIndex: 1,
    explanation:
      "If you can’t see the driver’s mirrors, the driver likely can’t see you. Avoid lingering in no-zones.",
    difficulty: "high-miss",
    tags: ["trucks", "space"],
  }),
  q("safe-driving", {
    id: "sd-036",
    prompt: "A safe response when you feel drowsy on a long drive is to:",
    options: [
      "Open the window and keep driving for hours",
      "Stop in a safe place and rest or change drivers",
      "Increase speed to arrive sooner",
      "Drink alcohol to relax",
    ],
    correctIndex: 1,
    explanation:
      "Fatigue causes microsleeps and slow reactions. The only reliable fix is sleep/rest—not caffeine alone as a long-term solution.",
    difficulty: "core",
    tags: ["fatigue"],
  }),
  q("safe-driving", {
    id: "sd-037",
    prompt: "Before backing up, you should:",
    options: [
      "Rely only on the rearview camera without looking",
      "Check surroundings, look over your shoulders, and back slowly",
      "Honk continuously while reversing at speed",
      "Back up as fast as possible to clear the space",
    ],
    correctIndex: 1,
    explanation:
      "Cameras help but have limits. Physically check blind areas, especially for children and obstacles.",
    difficulty: "core",
    tags: ["backing"],
  }),
  q("safe-driving", {
    id: "sd-038",
    prompt: "If your vehicle starts to skid sideways, you should:",
    options: [
      "Slam the brakes and close your eyes",
      "Ease off the accelerator and steer toward the direction you want the front of the car to go",
      "Turn the wheel opposite the skid and accelerate hard",
      "Shift to park while moving",
    ],
    correctIndex: 1,
    explanation:
      "Steer smoothly into the intended path, avoid overcorrecting, and do not slam the brakes unless ABS technique requires firm pressure for emergency stopping.",
    difficulty: "high-miss",
    tags: ["skids"],
  }),
  q("safe-driving", {
    id: "sd-039",
    prompt: "Keeping a space cushion means:",
    options: [
      "Driving with no gaps so others cannot cut in",
      "Maintaining room ahead, behind, and to the sides so you have time and space to avoid hazards",
      "Only using cruise control",
      "Driving in other vehicles’ blind spots",
    ],
    correctIndex: 1,
    explanation:
      "Space management is core defensive driving. Leave yourself an “out” whenever possible.",
    difficulty: "core",
    tags: ["space"],
  }),
  q("safe-driving", {
    id: "sd-040",
    prompt: "When approaching a stale green light (green for a long time), you should:",
    options: [
      "Speed up to “make” the light",
      "Be prepared for it to turn yellow; cover the brake and decide early whether you can stop safely",
      "Look only at the car ahead",
      "Assume it will stay green",
    ],
    correctIndex: 1,
    explanation:
      "Anticipate the yellow. Avoid the dilemma zone by managing speed early rather than racing a red.",
    difficulty: "core",
    tags: ["signals", "scanning"],
  }),
  q("safe-driving", {
    id: "sd-041",
    prompt: "Overcorrecting after drifting off the pavement can cause a crash. A better response is to:",
    options: [
      "Yank the wheel hard back onto the road immediately at full speed",
      "Ease off the gas, steer straight, and gently return to the pavement when under control",
      "Brake lock and spin the wheel",
      "Accelerate hard on the gravel",
    ],
    correctIndex: 1,
    explanation:
      "Stay calm, avoid hard braking/steering, and re-enter the roadway gradually when the vehicle is stable.",
    difficulty: "high-miss",
    tags: ["emergencies"],
  }),
  q("safe-driving", {
    id: "sd-042",
    prompt: "Why should windows and mirrors be clean before driving?",
    options: [
      "Only for aesthetics",
      "Clear vision is essential for hazard detection day and night",
      "It is optional if you know the route",
      "Dirty glass improves contrast",
    ],
    correctIndex: 1,
    explanation:
      "Glare, film, and dirt hide pedestrians, bikes, and brake lights. Clean glass and properly aimed mirrors are basic safety equipment.",
    difficulty: "core",
    tags: ["precheck"],
  }),
  q("safe-driving", {
    id: "sd-043",
    prompt: "When a vehicle is passing you, you should:",
    options: [
      "Speed up to block them",
      "Maintain lane position and speed (or slightly ease off if needed for safety); do not accelerate",
      "Drift left",
      "Brake hard",
    ],
    correctIndex: 1,
    explanation:
      "Help others pass safely. Do not race a passer; let them complete the pass and return to the lane.",
    difficulty: "core",
    tags: ["passing"],
  }),
  q("safe-driving", {
    id: "sd-044",
    prompt: "Driving with only your parking lights on at night is:",
    options: [
      "Recommended in cities",
      "Not a substitute for headlights; use proper headlights when required",
      "Safer than headlights",
      "Required on freeways",
    ],
    correctIndex: 1,
    explanation:
      "Parking lights are for parking visibility, not for night driving. Use low or high beams as appropriate.",
    difficulty: "high-miss",
    tags: ["lights", "night"],
  }),
  q("safe-driving", {
    id: "sd-045",
    prompt: "If an oncoming driver is in your lane on a two-lane road, you should generally:",
    options: [
      "Steer left into their lane",
      "Slow, warn (horn/lights), and move right toward the shoulder if needed",
      "Maintain speed and close your eyes",
      "Stop in the center of the lane without signaling",
    ],
    correctIndex: 1,
    explanation:
      "Move right—not left—because the other driver may correct back. Reduce speed and warn when possible.",
    difficulty: "high-miss",
    tags: ["emergencies"],
  }),

  // ——— Sharing the Road (+15) ———
  q("sharing-the-road", {
    id: "sr-031",
    prompt: "Bicyclists must:",
    options: [
      "Ignore stop signs",
      "Follow the same basic vehicle laws (stop signs, signals, direction of traffic) with some bicycle-specific rules",
      "Always ride against traffic",
      "Only use sidewalks on freeways",
    ],
    correctIndex: 1,
    explanation:
      "Bicycles are legal vehicles on most roadways. Riders have rights and responsibilities similar to drivers.",
    difficulty: "core",
    tags: ["bicycles"],
  }),
  q("sharing-the-road", {
    id: "sr-032",
    prompt: "When turning left across a bike lane, you should:",
    options: [
      "Ignore bikes because turning vehicles have priority always",
      "Yield to bicyclists in the lane and only cross when clear",
      "Speed up to beat the cyclist",
      "Stop in the bike lane for several minutes",
    ],
    correctIndex: 1,
    explanation:
      "Do not cut off cyclists. Check the bike lane and mirrors/shoulder before turning across their path.",
    difficulty: "high-miss",
    tags: ["bicycles", "turns"],
  }),
  q("sharing-the-road", {
    id: "sr-033",
    prompt: "Motorcyclists often adjust lane position to avoid hazards. You should:",
    options: [
      "Share their lane to save space",
      "Give them a full lane and extra following distance",
      "Pass them with inches of clearance",
      "Honk whenever you see them",
    ],
    correctIndex: 1,
    explanation:
      "Motorcycles are entitled to a full lane. Road debris and wind affect them more than cars.",
    difficulty: "high-miss",
    tags: ["motorcycles"],
  }),
  q("sharing-the-road", {
    id: "sr-034",
    prompt: "A truck making a right turn may swing left first. You should:",
    options: [
      "Pass on the right between the truck and the curb",
      "Stay back and give the truck room to complete the turn",
      "Pull alongside the cab",
      "Honk so the truck stops mid-turn",
    ],
    correctIndex: 1,
    explanation:
      "Never squeeze inside a turning truck. If you can’t see the driver, assume they can’t see you.",
    difficulty: "high-miss",
    tags: ["trucks"],
  }),
  q("sharing-the-road", {
    id: "sr-035",
    prompt: "When pedestrians are in a crosswalk, you must:",
    options: [
      "Proceed if you have a green light and they should hurry",
      "Yield and not pass other vehicles stopped for the pedestrians",
      "Wave them across while inching forward",
      "Use the horn to clear the crosswalk",
    ],
    correctIndex: 1,
    explanation:
      "Yield to pedestrians in crosswalks. Passing a car stopped for a pedestrian is illegal and dangerous.",
    difficulty: "high-miss",
    tags: ["pedestrians"],
  }),
  q("sharing-the-road", {
    id: "sr-036",
    prompt: "Light rail vehicles / streetcars:",
    options: [
      "Can stop as quickly as cars",
      "Need long stopping distances; never block tracks and obey rail signals",
      "Always yield to cars",
      "May be passed by driving around lowered gates",
    ],
    correctIndex: 1,
    explanation:
      "Trains and light rail cannot stop quickly. Keep crossings clear and never drive around gates.",
    difficulty: "core",
    tags: ["rail"],
  }),
  q("sharing-the-road", {
    id: "sr-037",
    prompt: "“Move Over” laws require drivers approaching stopped emergency or tow vehicles with flashing lights to:",
    options: [
      "Stop in the lane next to them",
      "Slow down and change lanes away from them when safe; if not possible, slow significantly",
      "Drive closer to offer help while at full speed",
      "Ignore them on freeways",
    ],
    correctIndex: 1,
    explanation:
      "Protect people working on the roadside. Give a lane of space when you can; otherwise reduce speed.",
    difficulty: "high-miss",
    tags: ["emergency", "move-over"],
  }),
  q("sharing-the-road", {
    id: "sr-038",
    prompt: "When a bus is signaling to re-enter traffic from a stop in a city with yield-to-bus rules, you should:",
    options: [
      "Accelerate to pass before it moves",
      "Yield when required so the bus can re-enter safely",
      "Block the bus",
      "Drive on the sidewalk to go around",
    ],
    correctIndex: 1,
    explanation:
      "In applicable California jurisdictions, yield to transit buses re-entering traffic when they signal. Always watch for passengers crossing.",
    difficulty: "core",
    tags: ["buses"],
  }),
  q("sharing-the-road", {
    id: "sr-039",
    prompt: "Pedestrians who suddenly enter the roadway outside a crosswalk:",
    options: [
      "Should be hit if they are “wrong”",
      "Must still be avoided; slow or stop to prevent a crash",
      "Have no duty of care from drivers",
      "May be closely passed to teach a lesson",
    ],
    correctIndex: 1,
    explanation:
      "Even if a pedestrian is not in a crosswalk, you must not strike them. Defensive driving prioritizes preventing injury.",
    difficulty: "high-miss",
    tags: ["pedestrians"],
  }),
  q("sharing-the-road", {
    id: "sr-040",
    prompt: "When sharing the road with farm or slow equipment, you should:",
    options: [
      "Pass on a blind hill",
      "Wait for a safe, legal passing opportunity with clear sight distance",
      "Pass on the shoulder at high speed",
      "Tailgate until they pull over",
    ],
    correctIndex: 1,
    explanation:
      "Slow-moving vehicles need patience. Pass only where legal and visibility is sufficient.",
    difficulty: "core",
    tags: ["slow-vehicles"],
  }),
  q("sharing-the-road", {
    id: "sr-041",
    prompt: "Before opening your door into traffic or a bike lane, a good habit is to:",
    options: [
      "Open it as wide and fast as possible",
      "Check mirrors and blind spots (the “Dutch reach” with the far hand helps)",
      "Assume no cyclists are present at night",
      "Open the door without looking if hazards are on",
    ],
    correctIndex: 1,
    explanation:
      "Doorings seriously injure cyclists and scooter riders. Look before you open.",
    difficulty: "high-miss",
    tags: ["bicycles", "doors"],
  }),
  q("sharing-the-road", {
    id: "sr-042",
    prompt: "Large trucks take longer to stop. Cutting in front of a truck closely is dangerous because:",
    options: [
      "Trucks have superior short stopping distances",
      "The truck may not be able to stop in time if you brake",
      "It is required in HOV lanes",
      "Trucks are not allowed to brake",
    ],
    correctIndex: 1,
    explanation:
      "Leave extra room when merging in front of trucks. If you can’t see the whole cab in your mirror after passing, you may be too close.",
    difficulty: "high-miss",
    tags: ["trucks"],
  }),
  q("sharing-the-road", {
    id: "sr-043",
    prompt: "When driving near a school, you should expect:",
    options: [
      "No children if it is not a posted holiday",
      "Unpredictable pedestrian movement, crossing guards, and reduced speed zones",
      "Freeway speeds",
      "That buses never stop",
    ],
    correctIndex: 1,
    explanation:
      "School areas require extra caution. Obey crossing guards and school speed limits when in effect.",
    difficulty: "core",
    tags: ["school", "pedestrians"],
  }),
  q("sharing-the-road", {
    id: "sr-044",
    prompt: "Scooters and e-bikes may be less visible. You should:",
    options: [
      "Pass with the same clearance as for any vulnerable user and scan carefully",
      "Ignore them in bike lanes",
      "Drive closely to force them aside",
      "Use high beams while next to them at night always",
    ],
    correctIndex: 0,
    explanation:
      "Treat micromobility users as vulnerable road users: space, patience, and careful scanning at intersections.",
    difficulty: "core",
    tags: ["vulnerable-users"],
  }),
  q("sharing-the-road", {
    id: "sr-045",
    prompt: "If a funeral procession is passing through an intersection with a lead vehicle, you should:",
    options: [
      "Cut into the middle of the procession",
      "Yield and not break into the line",
      "Honk to show respect while turning through them",
      "Race to the front",
    ],
    correctIndex: 1,
    explanation:
      "Do not cut into a funeral procession. Be patient and yield appropriately.",
    difficulty: "core",
    tags: ["processions"],
  }),

  // ——— Special Situations (+10) ———
  q("special-situations", {
    id: "ss-026",
    prompt: "On ice or snow, which is safest?",
    options: [
      "Sudden steering and hard braking",
      "Gentle inputs, lower speed, and much longer following distance",
      "Cruise control for steady speed",
      "High gear only for more power",
    ],
    correctIndex: 1,
    explanation:
      "Smooth driving preserves traction. Increase space dramatically and brake earlier.",
    difficulty: "core",
    tags: ["ice", "snow"],
  }),
  q("special-situations", {
    id: "ss-027",
    prompt: "If flood water is across the road, the safest choice is to:",
    options: [
      "Drive through if other cars made it",
      "Turn around; do not enter flood water",
      "Follow closely behind a truck for a wake",
      "Speed up to minimize time in water",
    ],
    correctIndex: 1,
    explanation:
      "Moving water can float vehicles in inches. “Turn around, don’t drown.”",
    difficulty: "high-miss",
    tags: ["floods"],
  }),
  q("special-situations", {
    id: "ss-028",
    prompt: "In thick fog, using high beams will usually:",
    options: [
      "Improve long-distance vision",
      "Reflect off the fog and reduce your ability to see",
      "Signal others to speed up",
      "Dry the road",
    ],
    correctIndex: 1,
    explanation:
      "Use low beams in fog. Slow down and increase following distance; pull off fully if you cannot continue safely.",
    difficulty: "high-miss",
    tags: ["fog"],
  }),
  q("special-situations", {
    id: "ss-029",
    prompt: "When your brakes get wet and feel less effective after a deep puddle, you should:",
    options: [
      "Ignore it",
      "Dry them by applying light brake pressure at low speed when safe",
      "Remove the fuse for the ABS",
      "Shift to neutral and coast at highway speed",
    ],
    correctIndex: 1,
    explanation:
      "Light braking can help dry brake components. Test brakes gently after water exposure.",
    difficulty: "core",
    tags: ["brakes", "water"],
  }),
  q("special-situations", {
    id: "ss-030",
    prompt: "If you have a blowout, hard braking immediately is risky because:",
    options: [
      "It always helps",
      "It can cause loss of control; grip the wheel, ease off gas, and slow gradually",
      "It inflates the tire",
      "It is required by law",
    ],
    correctIndex: 1,
    explanation:
      "Control the vehicle first. Sudden braking with a destroyed tire can create a skid or spin.",
    difficulty: "high-miss",
    tags: ["blowout"],
  }),
  q("special-situations", {
    id: "ss-031",
    prompt: "In a construction zone, fines for certain violations may be:",
    options: [
      "Waived automatically",
      "Increased; obey reduced speeds and worker instructions",
      "Only applied to commercial drivers",
      "Optional if GPS routes through the zone",
    ],
    correctIndex: 1,
    explanation:
      "Work zones are high-risk. Follow temporary signs, cones, and flaggers; slow down for workers.",
    difficulty: "high-miss",
    tags: ["construction"],
  }),
  q("special-situations", {
    id: "ss-032",
    prompt: "If stalled on railroad tracks with a train approaching, you should:",
    options: [
      "Stay in the car and call for help while remaining on the tracks",
      "Evacuate everyone and move away from the tracks at an angle toward the approaching train’s direction of travel",
      "Lie down between the rails",
      "Try to push the car while standing on the tracks",
    ],
    correctIndex: 1,
    explanation:
      "Get clear of the tracks immediately. Moving toward the train’s approach direction helps you avoid debris thrown forward by impact.",
    difficulty: "high-miss",
    tags: ["railroad", "emergencies"],
  }),
  q("special-situations", {
    id: "ss-033",
    prompt: "Night driving requires lower speeds when:",
    options: [
      "You can see less far than your stopping distance at the current speed",
      "The road is empty",
      "You have high beams on empty roads only and always drive the limit",
      "Streetlights are present, so speed never matters",
    ],
    correctIndex: 0,
    explanation:
      "Never “outdrive” your headlights. If you cannot stop within the distance you can see, you are going too fast.",
    difficulty: "high-miss",
    tags: ["night", "speed"],
  }),
  q("special-situations", {
    id: "ss-034",
    prompt: "Strong crosswinds are especially hazardous when:",
    options: [
      "Driving a low sports car only",
      "Passing large trucks/trailers or driving high-profile vehicles",
      "Parked in a garage",
      "Using low beams",
    ],
    correctIndex: 1,
    explanation:
      "Wind blasts beside trucks can shove vehicles. Grip the wheel, slow down, and give extra space.",
    difficulty: "core",
    tags: ["wind"],
  }),
  q("special-situations", {
    id: "ss-035",
    prompt: "If you are being followed too closely in the left lane of a multi-lane road, a safe option is to:",
    options: [
      "Brake-check the tailgater",
      "Change lanes when safe and let them pass; do not escalate",
      "Block them indefinitely",
      "Throw objects",
    ],
    correctIndex: 1,
    explanation:
      "Avoid road rage. Create space and allow faster traffic to go by when safe.",
    difficulty: "core",
    tags: ["road-rage", "space"],
  }),

  // ——— Vehicle Equipment & Registration (+10) ———
  q("vehicle-equipment", {
    id: "ve-019",
    prompt: "Your horn should be used:",
    options: [
      "To express anger in traffic",
      "As a warning device when reasonably necessary to avoid a collision",
      "At every pedestrian",
      "In place of turn signals",
    ],
    correctIndex: 1,
    explanation:
      "Horns warn others of danger. Using them to scold other drivers is inappropriate and can escalate conflict.",
    difficulty: "core",
    tags: ["equipment"],
  }),
  q("vehicle-equipment", {
    id: "ve-020",
    prompt: "A driver must ensure that seat belts are used:",
    options: [
      "Only by minors",
      "As required by law for the driver and passengers",
      "Only on freeways",
      "Only if airbags are missing",
    ],
    correctIndex: 1,
    explanation:
      "Belt use is required. Drivers can be responsible for unbelted minors. Airbags supplement belts; they do not replace them.",
    difficulty: "core",
    tags: ["restraints"],
  }),
  q("vehicle-equipment", {
    id: "ve-021",
    prompt: "Driving with a broken taillight is unsafe mainly because:",
    options: [
      "It improves fuel economy",
      "Other drivers may not see you or know when you are braking",
      "It is only a cosmetic issue",
      "ABS will compensate fully",
    ],
    correctIndex: 1,
    explanation:
      "Working lights communicate your presence and intentions. Repair lighting defects promptly.",
    difficulty: "core",
    tags: ["lights"],
  }),
  q("vehicle-equipment", {
    id: "ve-022",
    prompt: "Registration cards should be:",
    options: [
      "Destroyed after purchase",
      "Kept available as required (often in the vehicle) and plates/tabs kept current",
      "Hidden permanently",
      "Optional for cars under 5 years old",
    ],
    correctIndex: 1,
    explanation:
      "Keep registration current and carry/keep proof as required. Display license plates properly with valid tabs.",
    difficulty: "core",
    tags: ["registration"],
  }),
  q("vehicle-equipment", {
    id: "ve-023",
    prompt: "Objects that block the driver’s view through the windshield are:",
    options: [
      "Fine if they are small stickers anywhere",
      "Unsafe and may be illegal if they obstruct vision",
      "Required for navigation",
      "Helpful for sun glare always",
    ],
    correctIndex: 1,
    explanation:
      "Keep the driver’s view clear. Large stickers, hanging items, and cracks in the critical vision area create hazards.",
    difficulty: "core",
    tags: ["windshield"],
  }),
  q("vehicle-equipment", {
    id: "ve-024",
    prompt: "Tire tread that is worn smooth is dangerous in rain because:",
    options: [
      "It channels water better",
      "It cannot evacuate water well, increasing hydroplaning risk",
      "It reduces stopping distance",
      "It is required for smog checks",
    ],
    correctIndex: 1,
    explanation:
      "Adequate tread helps maintain grip on wet roads. Replace worn tires and keep proper inflation.",
    difficulty: "high-miss",
    tags: ["tires"],
  }),
  q("vehicle-equipment", {
    id: "ve-025",
    prompt: "If your ABS warning light stays on, you should:",
    options: [
      "Assume brakes work perfectly forever",
      "Have the system inspected; ABS may not function even if normal braking still works",
      "Pump the brakes harder as a permanent fix",
      "Disconnect the battery while driving",
    ],
    correctIndex: 1,
    explanation:
      "Warning lights indicate faults. Get brake systems checked promptly.",
    difficulty: "core",
    tags: ["brakes", "warnings"],
  }),
  q("vehicle-equipment", {
    id: "ve-026",
    prompt: "An unsecured load that falls onto the roadway can result in:",
    options: [
      "No consequences if unintentional",
      "Crashes, citations, and civil liability",
      "A free pass if under 10 pounds",
      "Only a warning for commercial drivers",
    ],
    correctIndex: 1,
    explanation:
      "Secure cargo. Flying or fallen loads endanger everyone behind you.",
    difficulty: "high-miss",
    tags: ["cargo"],
  }),
  q("vehicle-equipment", {
    id: "ve-027",
    prompt: "Hand signals may be used:",
    options: [
      "Never in California",
      "When vehicle signal lights fail or as an additional clear signal",
      "Only by bicyclists, never drivers",
      "Only on freeways",
    ],
    correctIndex: 1,
    explanation:
      "Standard hand signals: left arm out for left turn, out and up for right, out and down for stop/slow. Know them if lights fail.",
    difficulty: "core",
    tags: ["signals"],
  }),
  q("vehicle-equipment", {
    id: "ve-028",
    prompt: "A smog inspection may be required when:",
    options: [
      "Registering or renewing registration for vehicles subject to the program",
      "Only selling a bicycle",
      "Never for gasoline cars",
      "Only for electric vehicles",
    ],
    correctIndex: 0,
    explanation:
      "Many California vehicles need periodic smog certification. Exemptions exist for some newer, electric, or other categories—check current DMV/BAR rules.",
    difficulty: "core",
    tags: ["smog", "registration"],
  }),

  // ——— Alcohol, Drugs & Distracted Driving (+10) ———
  q("alcohol-drugs-distracted", {
    id: "ad-023",
    prompt: "For commercial drivers, driving with a BAC of 0.04% or higher is:",
    options: [
      "Always legal",
      "Illegal under commercial rules",
      "Required for long trips",
      "Only illegal at 0.08%",
    ],
    correctIndex: 1,
    explanation:
      "Commercial drivers are held to stricter BAC limits (0.04%). Alcohol and commercial driving do not mix.",
    difficulty: "high-miss",
    tags: ["bac", "commercial"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-024",
    prompt: "Even one drink can affect driving by:",
    options: [
      "Improving reaction time",
      "Reducing judgment and coordination for some people",
      "Only affecting walking",
      "Making night vision better",
    ],
    correctIndex: 1,
    explanation:
      "Impairment can begin below the illegal per se limit. The safest choice is not to drive after drinking.",
    difficulty: "core",
    tags: ["impairment"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-025",
    prompt: "If you are under 21 and drive with a BAC of 0.01% or higher, you can face:",
    options: [
      "No penalties because it is under 0.08%",
      "License actions and other penalties under zero-tolerance rules",
      "Only a verbal warning forever",
      "A free retest of the handbook only",
    ],
    correctIndex: 1,
    explanation:
      "California’s zero-tolerance policy for drivers under 21 starts at 0.01% BAC. Do not drink and drive at any age.",
    difficulty: "high-miss",
    tags: ["under21", "bac"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-026",
    prompt: "Medications that cause drowsiness should be handled by:",
    options: [
      "Driving anyway if prescribed",
      "Reading warnings and avoiding driving if impaired; ask a doctor/pharmacist",
      "Combining with alcohol to sleep better later",
      "Doubling the dose for longer effect then driving",
    ],
    correctIndex: 1,
    explanation:
      "Legal drugs can still make driving unsafe. You can be cited for drug-impaired driving, including some prescriptions.",
    difficulty: "high-miss",
    tags: ["drugs"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-027",
    prompt: "Holding a phone and looking at it while driving is risky mainly because it creates:",
    options: [
      "Only manual distraction",
      "Visual, manual, and cognitive distraction together",
      "Better situational awareness",
      "Legal protection from tickets",
    ],
    correctIndex: 1,
    explanation:
      "Phones pull eyes, hands, and mind away from driving. Hands-free is safer legally in many cases but still cognitively demanding.",
    difficulty: "high-miss",
    tags: ["phones", "distraction"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-028",
    prompt: "Eating, grooming, or arguing while driving are examples of:",
    options: [
      "Efficient multitasking required by law",
      "Distractions driving that increases crash risk",
      "Advanced driver training",
      "Only problems for new drivers under 18",
    ],
    correctIndex: 1,
    explanation:
      "Any non-driving task that competes for attention raises risk. Pull over for complex tasks.",
    difficulty: "core",
    tags: ["distraction"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-029",
    prompt: "After drinking, the only reliable way to sober up is:",
    options: [
      "Cold shower",
      "Time for the body to metabolize alcohol",
      "Coffee",
      "Exercise for 10 minutes",
    ],
    correctIndex: 1,
    explanation:
      "Myths about quick sobering are false. Plan a sober ride in advance.",
    difficulty: "high-miss",
    tags: ["myths"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-030",
    prompt: "Open containers of alcohol in the passenger area are generally:",
    options: [
      "Legal for passengers if the driver is sober",
      "Prohibited; keep sealed containers and store properly (e.g., trunk) per law",
      "Required for designated drivers",
      "Legal on all freeways",
    ],
    correctIndex: 1,
    explanation:
      "California restricts open alcoholic beverages in the vehicle passenger compartment. Know exceptions for certain vehicles like some limousines/RVs living areas.",
    difficulty: "high-miss",
    tags: ["open-container"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-031",
    prompt: "Implied consent means that if you drive in California and are lawfully arrested for DUI, you:",
    options: [
      "May refuse all tests with no consequences",
      "Have agreed to chemical testing; refusal brings separate penalties",
      "Only must take a test if you feel impaired",
      "Can choose a test next week",
    ],
    correctIndex: 1,
    explanation:
      "Refusal can lead to license suspension and other consequences beyond the DUI case itself.",
    difficulty: "high-miss",
    tags: ["implied-consent"],
  }),
  q("alcohol-drugs-distracted", {
    id: "ad-032",
    prompt: "Using a GPS or playlist should be set up:",
    options: [
      "While weaving through traffic",
      "Before you drive, or only when safely stopped",
      "In the first 5 seconds after entering a freeway",
      "By staring at the phone on your lap",
    ],
    correctIndex: 1,
    explanation:
      "Programming devices while moving is a dangerous distraction similar to texting risk. Set destinations when parked.",
    difficulty: "high-miss",
    tags: ["distraction", "gps"],
  }),
];

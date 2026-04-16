let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
}

// STATE 1: Welcome
function welcoming() {
  let aReturn = [];
  currentState = serviceChoice;
  aReturn.push("Welcome to Quiet Oasis Spa!");
  aReturn.push(
    "Which service would you like today? (1) Full Body Massage  (2) Anti-Aging  (3) Facial  (4) Herbal Body Wrap  (5) Manicure  (6) Pedicure  (7) Waxing"
  );
  return aReturn;
}

// STATE 2: Service selection
function serviceChoice(sInput) {
  let aReturn = [];
  const input = sInput.toLowerCase().trim();

  if (
    input === "1" ||
    input.includes("full body") ||
    input.includes("massage")
  ) {
    currentState = massageIntensity;
    aReturn.push(
      "Wonderful! For your Full Body Massage, would you prefer a light, medium, or deep pressure?"
    );
  } else if (
    input === "2" ||
    input.includes("anti") ||
    input.includes("aging")
  ) {
    currentState = skinConcern;
    aReturn.push(
      "Excellent choice! What is your primary skin concern? (1) Fine lines  (2) Dark spots  (3) Firmness"
    );
  } else if (input === "3" || input.includes("facial")) {
    currentState = skinType;
    aReturn.push(
      "Great! What is your skin type? (1) Normal  (2) Oily  (3) Dry  (4) Combination"
    );
  } else if (
    input === "4" ||
    input.includes("herbal") ||
    input.includes("wrap")
  ) {
    currentState = wrapScent;
    aReturn.push(
      "Lovely! For your Herbal Body Wrap, would you like (1) Lavender  (2) Eucalyptus  or (3) Rose?"
    );
  } else if (input === "5" || input.includes("manicure")) {
    currentState = nailFinish;
    aReturn.push(
      "Perfect! Would you like a (1) Classic manicure  (2) Gel manicure  or (3) Nail art?"
    );
  } else if (input === "6" || input.includes("pedicure")) {
    currentState = nailFinish;
    aReturn.push(
      "Wonderful! Would you like a (1) Classic pedicure  (2) Spa pedicure  or (3) Gel pedicure?"
    );
  } else if (input === "7" || input.includes("wax")) {
    currentState = waxArea;
    aReturn.push(
      "Of course! Which area would you like waxed? (1) Eyebrows  (2) Upper lip  (3) Legs  (4) Arms  (5) Bikini"
    );
  } else {
    aReturn.push(
      "I didn't quite catch that. Please choose a service: (1) Full Body Massage  (2) Anti-Aging  (3) Facial  (4) Herbal Body Wrap  (5) Manicure  (6) Pedicure  (7) Waxing"
    );
  }
  return aReturn;
}

// STATE 3a: Massage intensity
function massageIntensity(sInput) {
  let aReturn = [];
  currentState = addOn;
  aReturn.push(
    "Perfect. Would you like to add a hot stone upgrade or aromatherapy to your massage? (yes / no)"
  );
  return aReturn;
}

// STATE 3b: Skin concern (Anti-aging)
function skinConcern(sInput) {
  let aReturn = [];
  currentState = addOn;
  aReturn.push(
    "Noted! Would you like to add an eye treatment or collagen mask to your session? (yes / no)"
  );
  return aReturn;
}

// STATE 3c: Skin type (Facial)
function skinType(sInput) {
  let aReturn = [];
  currentState = addOn;
  aReturn.push(
    "Got it! Would you like to add a steam treatment or vitamin C serum boost? (yes / no)"
  );
  return aReturn;
}

// STATE 3d: Wrap scent
function wrapScent(sInput) {
  let aReturn = [];
  currentState = addOn;
  aReturn.push(
    "Beautiful choice! Would you like to add a scalp massage or exfoliating scrub? (yes / no)"
  );
  return aReturn;
}

// STATE 3e: Nail finish (Manicure & Pedicure)
function nailFinish(sInput) {
  let aReturn = [];
  currentState = addOn;
  aReturn.push(
    "Lovely! Would you like to add a hand/foot massage or paraffin wax treatment? (yes / no)"
  );
  return aReturn;
}

// STATE 3f: Wax area
function waxArea(sInput) {
  let aReturn = [];
  currentState = addOn;
  aReturn.push(
    "Thank you! Would you like to add a soothing aloe treatment after your wax? (yes / no)"
  );
  return aReturn;
}

// STATE 4: Add-on
function addOn(sInput) {
  let aReturn = [];
  currentState = bookingTime;
  if (sInput.toLowerCase().startsWith("y")) {
    aReturn.push(
      "Wonderful, we'll include that for you! What time would you prefer? Morning (9am–12pm), Afternoon (12pm–4pm), or Evening (4pm–7pm)?"
    );
  } else {
    aReturn.push(
      "No problem! What time would you prefer? Morning (9am–12pm), Afternoon (12pm–4pm), or Evening (4pm–7pm)?"
    );
  }
  return aReturn;
}

// STATE 5: Booking time
function bookingTime(sInput) {
  let aReturn = [];
  currentState = welcoming;
  aReturn.push(
    "Your appointment has been booked. We look forward to seeing you at Quiet Oasis! Please arrive 10 minutes early to relax and unwind before your treatment."
  );
  return aReturn;
}
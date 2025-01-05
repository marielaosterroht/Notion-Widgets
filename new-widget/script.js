const moonEmojis = {
  "new moon": "🌑",
  "waxing crescent": "🌒",
  "first quarter": "🌓",
  "waxing gibbous": "🌔",
  "full moon": "🌕",
  "waning gibbous": "🌖",
  "last quarter": "🌗",
  "waning crescent": "🌘"
};

// Function to calculate the moon phase
function calculateMoonPhase(date) {
  // Date of the known new moon (Jan 6, 2000)
  const knownNewMoon = new Date(2000, 0, 6);
  const diffTime = date - knownNewMoon;
  const daysSinceNewMoon = diffTime / (1000 * 60 * 60 * 24);  // Convert ms to days

  // The lunar cycle is about 29.53 days
  const lunarCycle = 29.53058867;
  const phaseIndex = (daysSinceNewMoon % lunarCycle) / lunarCycle;

  // Determine the moon phase based on the phase index
  if (phaseIndex < 0.02) {
    return { phase: "new moon", emoji: moonEmojis["new moon"] };
  } else if (phaseIndex < 0.25) {
    return { phase: "waxing crescent", emoji: moonEmojis["waxing crescent"] };
  } else if (phaseIndex < 0.27) {
    return { phase: "first quarter", emoji: moonEmojis["first quarter"] };
  } else if (phaseIndex < 0.50) {
    return { phase: "waxing gibbous", emoji: moonEmojis["waxing gibbous"] };
  } else if (phaseIndex < 0.52) {
    return { phase: "full moon", emoji: moonEmojis["full moon"] };
  } else if (phaseIndex < 0.75) {
    return { phase: "waning gibbous", emoji: moonEmojis["waning gibbous"] };
  } else if (phaseIndex < 0.77) {
    return { phase: "last quarter", emoji: moonEmojis["last quarter"] };
  } else {
    return { phase: "waning crescent", emoji: moonEmojis["waning crescent"] };
  }
}

function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleString('en-US', options);
  document.getElementById('current-date').textContent = formattedDate;
}

function updateMoonPhase() {
  const now = new Date();
  const { phase, emoji } = calculateMoonPhase(now);

  document.getElementById('moon-phase').textContent = `Phase: ${phase}`;
  document.getElementById('moon-image').textContent = emoji || "❓";
}

function initializeWidget() {
  updateMoonPhase();
  updateDate();
}

initializeWidget();

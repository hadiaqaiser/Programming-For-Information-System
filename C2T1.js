// Limit is 15 kg
const LIMIT_KG = 15;

// Check button → tells if overweight
function checkBaggage() {
  let w = parseFloat(document.getElementById("weight").value);

  if (isNaN(w)) {
    alert("Enter a number.");
  } else if (w > LIMIT_KG) {
    alert(`Overweight by ${(w - LIMIT_KG).toFixed(1)} kg`);
  } else {
    alert("OK: within 15 kg limit.");
  }
}

// Fix button → set weight back to 15 if over
function fixWeight() {
  let w = parseFloat(document.getElementById("weight").value);

  if (isNaN(w)) {
    alert("Enter a number first.");
  } else if (w > LIMIT_KG) {
    document.getElementById("weight").value = LIMIT_KG;
    alert("Fixed! Now 15 kg.");
  } else {
    alert("Already fine, no change needed.");
  }
}
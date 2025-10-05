// Exercise 1 — Baggage checker

const LIMIT_KG = 15; // airline limit

// Show/hide remove fields
function toggleRemoval(show) {
  document.getElementById('removed').style.display = show ? 'inline-block' : 'none';
  document.getElementById('remB').style.display = show ? 'inline-block' : 'none';
}

// Check baggage weight
let check = () => {
  const w = parseFloat(document.getElementById('weight').value);
  if (isNaN(w)) {
    alert('Enter baggage weight (kg).');
    toggleRemoval(false);
    return;
  }

  if (w > LIMIT_KG) {
    alert(`Overweight by ${(w - LIMIT_KG).toFixed(1)} kg. Remove some to proceed.`);
    toggleRemoval(true);
  } else {
    alert('OK: within 15 kg limit.');
    toggleRemoval(false);
  }
};

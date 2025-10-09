// Ex1 — Baggage checker

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

// Remove some baggage weight
let remove = () => {
  const w = parseFloat(document.getElementById('weight').value);
  const r = parseFloat(document.getElementById('removed').value);

  if (isNaN(w)) {
    alert('Enter the current weight first.');
    return;
  }

  if (isNaN(r) || r <= 0) {
    alert('Enter how many kg to remove.');
    return;
  }

  const newW = Math.max(0, w - r);
  document.getElementById('weight').value = newW.toFixed(1);

  if (newW > LIMIT_KG) {
    alert(`Still overweight by ${(newW - LIMIT_KG).toFixed(1)} kg.`);
    toggleRemoval(true);
  } else {
    alert('Great — weight is OK now.');
    toggleRemoval(false);
  }
};
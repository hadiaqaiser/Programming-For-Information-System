// Exercise 3 — List based multiple sums

// Parse space/comma separated numbers into array
function parseNumList(str) {
  if (!str || !str.trim()) return [];
  return str.split(/[\s,]+/).map(s => parseFloat(s)).filter(n => !isNaN(n));
}

// 1) Sum of values in l divisible by a or b
let listEuler1 = (a, b, l) => {
  let sum = 0;
  for (const x of l) {
    if (x % a === 0 || x % b === 0) {
      sum += x;
    }
  }
  return sum;
};

// 2) a is list (length 2 expected)
let listEuler2 = (a, l) => {
  let sum = 0;
  for (const x of l) {
    if (a.some(m => m !== 0 && x % m === 0)) {
      sum += x;
    }
  }
  return sum;
};

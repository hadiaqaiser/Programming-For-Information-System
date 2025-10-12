// Goal 1: If input is bad, show: "corrupt : <original-input>"
// Goal 2: "Fix & compute": drop bad tokens, compute sum if possible; else "corrupt : <original-input>"

// Given in the prompt — kept simple and used to detect bad numbers
let parse = (i) => {
  let o = parseInt(i);
  if (isNaN(o)) throw ("NaN");
  return o;
};

// Small helpers
const norm = (s) => s.trim().replace(/\s+/g, " ");       // normalize spaces
const splitTokens = (s) => s.trim().split(/\s+/).filter(Boolean);

// Computes sum of numbers in `multiples` divisible by any factor in `factors`
function sumByFactors(factors, multiples) {
  let sum = 0;
  for (let m of multiples) {
    for (let f of factors) {
      if (f !== 0 && m % f === 0) { // ignore 0 to avoid divide-by-zero
        sum += m;
        break;
      }
    }
  }
  return sum;
}

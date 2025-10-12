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

/* -------------------------------
   Version 1: Strict — prepend "corrupt" on any error
   Examples:
     "2 3 5 67" → "corrupt : 2 3 5 67"
     "3 5 hello: 1 2 3" → "corrupt : 3 5 hello: 1 2 3"
-------------------------------- */
function processCorrupt() {
  let input = prompt("Enter: factors : multiples\nEx: 3 5 : 10 15 20");
  if (!input) return;

  const original = norm(input);

  // Must have a colon
  if (!original.includes(":")) {
    alert(`corrupt : ${original}`);
    return;
  }

  // Split parts
  const [leftRaw, rightRaw] = original.split(":");
  const left = norm(leftRaw);
  const right = norm(rightRaw);

  // Try parsing ALL tokens strictly (any NaN => corrupt)
  try {
    const factors = splitTokens(left).map(parse);
    const multiples = splitTokens(right).map(parse);

    // If parse succeeded everywhere, compute like ex4
    const sum = sumByFactors(factors, multiples);
    alert(`${sum} : ${left} : ${right}`);
  } catch (_) {
    // Any bad token => corrupt
    alert(`corrupt : ${original}`);
  }
}

/* -------------------------------------------
   Version 2: "Fix & compute"
   - Drop bad (non-numeric) tokens and compute.
   - If colon missing OR no valid factors OR no valid multiples → "corrupt".
   Example:
     "3 5 hello: 1 2 3 4 5 6 7 8 9"
       → 23 : 3 5 hello: 1 2 3 4 5 6 7 8 9
     "2 3 5 67"
       → corrupt : 2 3 5 67
-------------------------------------------- */
function processCorruptFixed() {
  let input = prompt("Enter: factors : multiples\nEx: 3 5 : 10 15 20");
  if (!input) return;

  const original = norm(input);

  // Must have a colon to be fixable at all
  if (!original.includes(":")) {
    alert(`corrupt : ${original}`);
    return;
  }

  const [leftRaw, rightRaw] = original.split(":");
  const left = norm(leftRaw);
  const right = norm(rightRaw);

  // Keep only numeric tokens; drop the rest
  const safeParse = (t) => {
    const n = parseInt(t);
    return isNaN(n) ? null : n;
  };
  const factorsNums = splitTokens(left).map(safeParse).filter(n => n !== null);
  const multiplesNums = splitTokens(right).map(safeParse).filter(n => n !== null);

  // If nothing usable, still corrupt
  if (factorsNums.length === 0 || multiplesNums.length === 0) {
    alert(`corrupt : ${original}`);
    return;
  }

  const sum = sumByFactors(factorsNums, multiplesNums);

  // Important: echo the ORIGINAL string (including any bad tokens) in the tail,
  // per the examples provided.
  alert(`${sum} : ${left} : ${right}`);
}

// Expose to HTML buttons
window.processCorrupt = processCorrupt;
window.processCorruptFixed = processCorruptFixed;
// Ex3 — List based multiple sums

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

// 3) a is list (any length)
let listEuler3 = (a, l) => listEuler2(a, l);

// Hook functions for buttons
let eulerlist = () => {
  let a = parseInt(document.getElementById('a1').value, 10);
  let b = parseInt(document.getElementById('b1').value, 10);
  let l = parseNumList(document.getElementById('l').value);

  if (isNaN(a)) a = 2;
  if (isNaN(b)) b = 3;
  if (l.length === 0) l = [1,2,3,4,5,6,7,9,10,10,10];

  alert(`Sum = ${listEuler1(a, b, l)}`);
};

let euler2Lists = () => {
  let a = parseNumList(document.getElementById('aList').value);
  let l = parseNumList(document.getElementById('mList').value);

  if (a.length === 0) a = [2,3];
  if (l.length === 0) l = [1,2,3,4,5,6,7,9,10,10,10];

  alert(`Sum = ${listEuler2(a.slice(0, 2), l)}`);
};

let euler2Lists1 = () => {
  let a = parseNumList(document.getElementById('aList').value);
  let l = parseNumList(document.getElementById('mList').value);

  if (a.length === 0) a = [2,3,5];
  if (l.length === 0) l = [1,2,3,4,5,6,7,9,10,10,10];

  alert(`Sum = ${listEuler3(a, l)}`);
};
// Ex2 — Project Euler #1 + custom

// Q1: sum of all multiples of 3 or 5 below 1000
let euler1 = () => {
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  alert(`Sum below 1000 = ${sum}`);
};


// Custom: sum of multiples of A or B below N
let eulerCustom = () => {
  const a = parseInt(document.getElementById('a').value, 10);
  const b = parseInt(document.getElementById('b').value, 10);
  const n = parseInt(document.getElementById('n').value, 10);

  if ([a, b, n].some(x => isNaN(x))) {
    alert('Enter A, B and N as whole numbers.');
    return;
  }

  if (n <= 0) {
    alert('N must be > 0.');
    return;
  }

  let sum = 0;
  for (let i = 1; i < n; i++) {
    if ((a !== 0 && i % a === 0) || (b !== 0 && i % b === 0)) {
      sum += i;
    }
  }

  alert(`Sum below ${n} = ${sum}`);
};
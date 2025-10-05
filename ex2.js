// Exercise 2 — Project Euler #1 + custom

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

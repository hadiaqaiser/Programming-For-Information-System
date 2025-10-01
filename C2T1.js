// Sum of multiples of k below limit in O(1)
function sumBelow(limit, k) {
  const m = Math.floor((limit - 1) / k);
  return k * m * (m + 1) / 2;
}

// Project Euler #1: sum of multiples of 3 or 5 below 1000
let euler1 = () => {
  const limit = 1000, a = 3, b = 5;
  const ans = sumBelow(limit, a) + sumBelow(limit, b) - sumBelow(limit, 15);
  alert(`Euler #1 answer (below 1000): ${ans}`); // 233168
};
function gcd(x, y) { return y ? gcd(y, x % y) : Math.abs(x); }
function lcm(x, y) { return Math.abs(x * y) / gcd(x, y); }
function sumBelow(limit, k) {
  const m = Math.floor((limit - 1) / k);
  return k * m * (m + 1) / 2;
}

// Custom version: sum of multiples of a or b below n
let eulerCustom = () => {
  const a = parseInt(document.getElementById("a").value, 10);
  const b = parseInt(document.getElementById("b").value, 10);
  const n = parseInt(document.getElementById("n").value, 10);

  if (![a, b, n].every(Number.isInteger) || a <= 0 || b <= 0 || n <= 0) {
    alert("Please enter positive integers for a, b, n.");
    return;
  }

  const ans = sumBelow(n, a) + sumBelow(n, b) - sumBelow(n, lcm(a, b));
  alert(`Sum of multiples of ${a} or ${b} below ${n}: ${ans}`);
};
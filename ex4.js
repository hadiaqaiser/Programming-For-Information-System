// Reads: "factors : multiples"
// //  Shows: "sum : factors : multiples"

function processFactorsMultiples() {
  // Ask user for input
  let input = prompt("Enter: factors : multiples\nEx: 3 5 : 10 15 20");

    // Check if valid
  if (!input || !input.includes(":")) {
    alert("Wrong format. Use: factors : multiples");
    return;
  }

  // Split around ":" → [factorsPart, multiplesPart]
  let parts = input.split(":");
  let factors = parts[0].trim().split(/\s+/).map(Number);
  let multiples = parts[1].trim().split(/\s+/).map(Number);
  
  // Find sum of multiples divisible by any factor
  let sum = 0;
  for (let m of multiples) {
    for (let f of factors) {
      if (f !== 0 && m % f === 0) {
        sum += m;
        break; // avoid double counting
      }
    }
  }

  // Show result
  alert(`${sum} : ${factors.join(" ")} : ${multiples.join(" ")}`);
}
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

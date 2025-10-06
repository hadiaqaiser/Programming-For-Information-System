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


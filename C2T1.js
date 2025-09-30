// 1) Set the weight limit once (easy to change later)
const LIMIT_KG = 15;

// 2) This runs when the button is clicked
function checkBaggage() {
  // 3) Read the value from the input box
  const value = document.getElementById('weight').value;

  // 4) Turn text into a number
  const weight = parseFloat(value);

  // 5) If not a number, tell the user and stop
  if (isNaN(weight)) {
    alert('Please enter a valid number.');
    return;
  }

  // 6) Compare to the limit and alert the result
  if (weight > LIMIT_KG) {
    // 7) Show how much it’s over (1 decimal place)
    alert(`Overweight by ${(weight - LIMIT_KG).toFixed(1)} kg`);
  } else {
    alert('OK: within 15 kg limit.');
    //sdfasdfasdfasd
  }
}

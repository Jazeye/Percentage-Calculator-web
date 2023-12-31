myCalulation = () => {
  let a = document.getElementById("score").value;
  let b = document.getElementById("totalMark").value;
  let c = (a / b) * 100;
  document.getElementById("answer").innerHTML = c;
};

mySGPA = () => {
  // Get user inputs
  let a = parseFloat(document.getElementById("sem").value); // Convert to number
  let b = parseFloat(document.getElementById("totalsgpa").value); // Convert to number

  // Check if inputs are valid numbers
  if (isNaN(a) || isNaN(b) || a < 1 || a > 6) {
    document.getElementById("answer").innerHTML = "Invalid input";
    return;
  }

  // Map the user input to corresponding values
  const valueMapping = { 1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60 };
  let mappedValue = valueMapping[a];

  // Check if mapping exists
  if (mappedValue === undefined) {
    document.getElementById("answer").innerHTML = "Invalid input";
    return;
  }

  // Perform calculations
  let c = (b / mappedValue) * 100;

  // Display the result
  document.getElementById("answer").innerHTML = c;
};


myPercentage = () => {
  let a = document.getElementById("score").value;
  let b = document.getElementById("totalMark").value;
  let c = a /100* b;
  document.getElementById("answer").innerHTML = c;
};
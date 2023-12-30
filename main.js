myCalulation = () => {
  let a = document.getElementById("score").value;
  let b = document.getElementById("totalMark").value;
  let c = (a / b) * 100;
  document.getElementById("answer").innerHTML = c;
};

mySGPA = () => {
  
  let a = document.getElementById("sem").value;
  let b = document.getElementById("totalsgpa").value;
  let c = (e / b) * 100;
  document.getElementById("answer").innerHTML = c;
};

myPercentage = () => {
  let a = document.getElementById("score").value;
  let b = document.getElementById("totalMark").value;
  let c = (a /100 ) * b;
  document.getElementById("answer").innerHTML = c;
};
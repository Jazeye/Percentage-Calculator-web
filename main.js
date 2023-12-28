myCalulation = () => {
  let a = document.getElementById("score").value;
  let b = document.getElementById("totalMark").value;
  let c = (a / b) * 100;
  document.getElementById("answer").innerHTML = c;
};

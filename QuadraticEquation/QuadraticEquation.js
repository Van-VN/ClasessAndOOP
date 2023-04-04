class QuadraticEquation {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.delta;
  }
  getDiscriminant() {
    this.delta = this.b ** 2 - 4 * this.a * this.c;
    return this.delta;
  }
  getRoot1() {
    if (this.delta >= 0) {
      return (-this.b + Math.sqrt(this.delta)) / (2 * this.a);
    }
  }
  getRoot2() {
    if (this.delta >= 0) {
      return (-this.b - Math.sqrt(this.delta)) / (2 * this.a);
    }
  }
}

function calc() {
  let Arr = [];
  let num = document.getElementById("inputNum").value;
  num = num.split(" ");
  num.forEach((item) => Arr.push(parseInt(item)));
  console.log(Arr);
  let quadEquation = new QuadraticEquation(Arr[0], Arr[1], Arr[2]);
  quadEquation.getDiscriminant();
  if (quadEquation.delta > 0) {
    document.getElementById(
      "result"
    ).innerHTML = `The equation has two roots ${quadEquation.getRoot1()} and ${quadEquation.getRoot2()}`;
  } else if (quadEquation.delta === 0) {
    document.getElementById(
      "result"
    ).innerHTML = `The equation has one root ${quadEquation.getRoot1()}`;
  } else if (quadEquation.delta < 0) {
    document.getElementById(
      "result"
    ).innerHTML = `The equation has no real roots`;
  } else {
    document.getElementById("result").innerHTML = `Error!!!!!`;
  }
}

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key) {
    case "Enter":
      calc();
      break;
  }
});

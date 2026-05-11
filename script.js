let calculator = document.createElement("div");
calculator.id = "calculator";
document.body.appendChild(calculator);

let calcBody = document.createElement("div");
calcBody.id = "buttonBox";

let displayBox = document.getElementById("display-box");

calculator.appendChild(displayBox);
calculator.appendChild(calcBody);

calcBody.appendChild(document.getElementById("first-row"));
calcBody.appendChild(document.getElementById("second-row"));
calcBody.appendChild(document.getElementById("third-row"));
calcBody.appendChild(document.getElementById("fourth-row"));
calcBody.appendChild(document.getElementById("fifth-row"));
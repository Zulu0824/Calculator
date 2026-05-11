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

//Adding functionality to buttons 

let x;
let operator;
let reset = true; //Governs if the number button being pressed gets assigned to x or y after an operator is pressed
let newNum; //For after you use AC(backspace) button

function clear() {
displayBox.textContent = "";
x = undefined;
y = undefined;
operator = undefined;
reset = true;
}

function calculate() {
    let y = parseFloat(displayBox.textContent);
    if(operator === "+") displayBox.textContent = x + y;
    if(operator === "-") displayBox.textContent = x - y;
    if(operator === "x") displayBox.textContent = x * y;
    if(operator === "/") displayBox.textContent = x / y;
}

document.querySelectorAll(".num").forEach(num => {
    num.addEventListener("click", function () {
        if(reset === true) {
            displayBox.textContent = num.textContent;
            reset = false;
        } else {
            displayBox.textContent += num.textContent;
        }
    });
});

document.querySelectorAll(".op").forEach(op => {
    op.addEventListener("click", function() {
        if(x !== undefined) {
            calculate();
        }
        x = parseFloat(displayBox.textContent);
        operator = op.textContent;
        reset= true;
    });
});

document.querySelector(".equals").addEventListener("click", function() {
    if (x !== undefined) {
        calculate();
    }
    x = parseFloat(displayBox.textContent);
    operator = undefined;
    reset = true;
}); //Adds functionality to the equals sign button

document.getElementById("clearBtn").addEventListener("click", clear);

document.querySelector(".dec").addEventListener("click", function() {
    if(displayBox.textContent.includes(".")) return;
    displayBox.textContent += "."
}) //Adds functionality to decimal button and also restricts to one decimal point

document.getElementById("backSpaceBtn").addEventListener("click", function() {
    if(reset === false) {
        newNum = displayBox.textContent.slice(0 , -1);
        displayBox.textContent = newNum;
    }
}); //Adds functionality to AC button

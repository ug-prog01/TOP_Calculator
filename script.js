let numbers = document.querySelectorAll("div .number");
let operators = document.querySelectorAll("div .operator");
let backspace = document.querySelector("div .backspace");
let add = document.querySelector("div .add");
let subtract = document.querySelector("div .subtract");
let multiply = document.querySelector("div .multiply");
let divide = document.querySelector("div .divide");
let evaluate = document.querySelector("div .evaluate");
let screen = document.querySelector("div #screen");

let currentNumber = [];
let prevNumber = [];
let expressionOperator;

function updateScreen(value) {
	console.log(value);
	if (value.length == 0) {
		screen.innerText = "0";
	}
	else {
		screen.innerText = value;
	}
}

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		event.stopPropagation();
		currentNumber.push(number.innerText);
		updateScreen(currentNumber.join(''));
	});
})

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		event.stopPropagation();
		prevNumber = currentNumber;
		currentNumber = [];
		if (expressionOperator === undefined) {
			console.log('oops');
		}
		expressionOperator = operator;
		updateScreen(operator.innerText);
	});
})

backspace.addEventListener("click", (event) => {
	event.stopPropagation();
	currentNumber.pop();
	updateScreen(currentNumber.join(''));
});

evaluate.addEventListener("click", () => {
	let result = 0;
	let num1 = parseInt(currentNumber.join(''));
	let num2 = parseInt(prevNumber.join(''));
	switch (expressionOperator.classList.value.split(" ")[expressionOperator.classList.length - 1]) {
		case "add":
			result = num2 + num1;
			break;
		case "subtract":
			result = num2 - num1;
			break;
		case "multiply":
			result = num2 * num1;
			break;
		case "divide":
			result = num2 / num1;
			break;
	}
	currentNumber = (result + "").split('');
	updateScreen(currentNumber.join(''));
});

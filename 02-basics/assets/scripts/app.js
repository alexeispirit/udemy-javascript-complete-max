const defaltResult = 0;
let currentResult = defaltResult;

function add(a, b) {
  const result = a + b;
  alert(`The result is ${result}`);
}

add(1, 2);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaltResult}  + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);

const defaltResult = 0;
let currentResult = defaltResult;

function add(a, b) {
  const result = a + b;
  return result;
}

// currentResult = ((currentResult + 10) * 3) / 2 - 1;
currentResult = add(1, 2);

let calculationDescription = `(${defaltResult}  + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);

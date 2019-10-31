const defaltResult = 0;
let currentResult = defaltResult;

function add() {
  currentResult += userInput.value;
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);

const display = document.getElementById('display');
let num1 = "";
let num2 = "";
let operator = "";

function updateDisplay(value) {
  if (value === '.') {
      if (!operator && !num1.includes('.')) {
          num1 += value;
          display.value = num1;
      } else if (operator && !num2.includes('.')) {
          num2 += value;
          display.value = num2;
      }
  } else {
      if (!operator) {
          num1 += value;
          display.value = num1;
      } else {
          num2 += value;
          display.value = num2;
      }
  }
}

function setOperator(value) {
  if (num1) {
      operator = value;
  }
}

function calculate() {
  let result;
  switch (operator) {
      case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
      case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
      case '/':
          if (num2 === "0") {
              display.value = "Error"; 
              return;
          }
          result = parseFloat(num1) / parseFloat(num2);
          break;
      case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
      case '%':
          result = parseFloat(num1) % parseFloat(num2);
          break;
      case 'pw':
          result = parseFloat(num1) ** parseFloat(num2);
          break;
      default:
          result = "";
  }
  display.value = result;
  num1 = result.toString();
  num2 = "";
  operator = "";
}

function clearAll() {
  num1 = "";
  num2 = "";
  operator = "";
  display.value = "0";
}

function clearEntry() {
  if (num2) {
    num2 = "";
  } else if (operator) {
    operator = "";
  } else {
    num1 = "";
  }
  display.value = "0";
}
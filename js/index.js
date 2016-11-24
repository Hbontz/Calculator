var inputBtns, operators, decimal, i, value, inputScreen, inputView, calc, lastCharacter, valCE, valAC, equalBtn, decimalFlag, operatorParams;

inputBtns = document.querySelectorAll('button');
operators = ['+', '-', 'x', '÷', '%'];
decimal = false;

for (i = 0; i < inputBtns.length; i++) {
  inputBtns[i].onclick = function(e) {
    e.preventDefault();
    value = this.innerHTML;
    inputScreen = document.querySelector('.inputScreen');
    inputView = inputScreen.innerHTML;

    if (value == 'CE') {
      valCE(value);
      decimal = false;
    } else if (value == 'AC') {
      valAC(value);
      decimal = false;
    } else if (value == '=') {
      equalBtn(value);
      decimal = false;
    } else if (operators.indexOf(value) > -1) {
      operatorParams(value);
      decimal = false;
    } else if (value == '.') {
      decimalFlag(value);
    } else {
      inputScreen.innerHTML += value;
    }
  };
}
valCE = function(val) {
  inputScreen.innerHTML = inputView.replace(/.$/, '');
};
valAC = function(val) {
  inputScreen.innerHTML = '';
};
equalBtn = function(val) {
  calc = inputView;
  lastCharacter = calc.charAt(calc.length - 1);
  calc = calc.replace(/x/g, '*').replace(/÷/g, '/');
  if (operators.indexOf(lastCharacter) > -1 || lastCharacter == '.') {
    calc = calc.replace(/.$/, '');
  }
  if (calc) {
    inputScreen.innerHTML = eval(calc);
  }
};
decimalFlag = function(val) {
  if (!decimal) {
    inputScreen.innerHTML += value;
    decimal = true;
  }
};
operatorParams = function(val) {
  var lastChar = inputView.charAt(inputView.length - 1);
  if (inputView != '' && operators.indexOf(lastChar) == -1) {
    inputScreen.innerHTML += value;
  } else if (inputView == '' && value == '-') {
    inputScreen.innerHTML += value;
  }
};
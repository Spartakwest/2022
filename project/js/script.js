"use strict";
let displayDigit = document.querySelector('.display-digit');
let btnNumbers = document.querySelectorAll(".btn--number");
let btnOrange = document.querySelectorAll('.btn--orange');
let ac = document.querySelector('#ac');
console.log(ac);
//рахуємо знаки дій
let counter = 0;
// створюємо два числа, над якими проходитиме дія
let str1 = '';
let str2 = '';
let str3 = [];
let result = 0;

// відстежуємо нажимання на цифри
for (let elem of btnNumbers) {
  elem.addEventListener('click', function num() {
    if (counter == 0) {
      str1 += elem.textContent;
      displayDigit.textContent = str1;
    } else if (counter == 1) {
      str2 += elem.textContent;
      displayDigit.textContent = str2;
    } else if (counter >= 2) {
      counter = 1;
      str1 = result;
      result = 0;
      str2 = '';
      str3.shift();
      num()
    }

  })
}
// відстежуємо нажимання на знаки
for (let elem of btnOrange) {
  elem.addEventListener('click', () => {
    if (str1 != '' && str3.length <= 1) {
      counter += 1;
      str3.push(elem.textContent);
      console.log(str3);
      if (counter == 2) {
        if (str3[0] == '+') {
          result = +str1 + +str2;
          displayDigit.textContent = result;
        } else if (str3[0] == '-') {
          result = +str1 - +str2;
          displayDigit.textContent = result;
        } else if (str3[0] == '/') {
          result = +str1 / +str2;
          displayDigit.textContent = result;
        } else if (str3[0] == 'x') {
          result = +str1 * +str2;
          displayDigit.textContent = result;
        }
        else if (str3[1] == '=') {
          alert('!')
          displayDigit.textContent = result;
        }

      }
    }
  })
}
ac.addEventListener('click', () => {
  str1 = '';
  str2 = '';
  str3 = [];
  result = 0;
  displayDigit.textContent = result;
})
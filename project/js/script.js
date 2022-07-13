"use strict";
//* знаходимо наші елементи
// знаходимо екран
let displayDigit = document.querySelector('.display-digit');
// знаходимо цифри
let btnNumbers = document.querySelectorAll(".btn--number");
// знаходимо оражеві знаки
let btnOrange = document.querySelectorAll('.btn--orange');
// знаходимо кнопку стерти все
let ac = document.querySelector('#ac');
// знаходимо кнопку із відсотками
let interest = document.querySelector('#interest');
// знаходимо знак кому
let coma = document.querySelector('#coma');
// знаходимо знак зміни знаку
let change = document.querySelector('#change')
// знаходимо дорівнює
let dor = document.querySelector('#dor')

// об'являємо змінні та масиви
let num1 = '';
let num2 = '';
let sign1 = '';
let sign2 = '';
let arr1 = [];
let arr2 = [];
let formatter = new Intl.NumberFormat('ua');


// функція обнулення
function clearAll() {
  num1 = '';
  num2 = '';
  sign1 = '';
  sign2 = '';
  arr1 = [];
  arr2 = [];
  displayDigit.textContent = '0';
}
// console.log(arr2.length);

// функція обмеження цифр
function limitation(num) {
  if (num.length <= 9) {
    return num;
  } else {
    return num.split('').splice(0, 9).join('')
  }
}

// вішаємо функцію обнулення на ac
ac.addEventListener('click', clearAll);

// слухаємо кнопки цифри
for (let elem of btnNumbers) {
  elem.addEventListener('click', () => {
    if (arr2.length === 0) {
      num1 += elem.textContent;
      displayDigit.textContent = formatter.format(limitation(num1));
    } else if (arr2.length === 1) {
      num2 += elem.textContent;
      displayDigit.textContent = limitation(num2);
    }
  })
}

// cлухаємо знаки
for (let elem of btnOrange) {

  elem.addEventListener('click', () => {
    if (num1 != '' && arr1.length == 0) {
      sign1 = elem.dataset.sign;
      arr1.push(Number(num1));
      arr2.push(sign1)
      console.log(arr1, arr2);
      // alert('1')
    } else if (arr1.length == 1) {
      sign2 = elem.dataset.sign;
      arr1.push(Number(num2));
      arr2.push(sign2);
      // alert('2')
      // console.log(arr1, arr2);
      let result = 0;
      if (arr2[0] == '+') {
        result = arr1[0] + arr1[1];
      } else if (arr2[0] == '-') {
        result = arr1[0] - arr1[1];
      } else if (arr2[0] == '*') {
        result = arr1[0] * arr1[1];
      } else if (arr2[0] == '/') {
        result = arr1[0] / arr1[1];
      }
      displayDigit.textContent = result;
      arr1[0] = result;
      num2 = '';
      arr1.pop();
      arr2.shift();
      // console.log(arr1, arr2);
    }


  })
}

// слухаємо дорівнює
dor.addEventListener('click', function () {
  if (num1 != '' && arr1.length === 0) {
    displayDigit.textContent = limitation(num1);
    // alert('=1')
  } else if (num2 != '' && arr2.length == 1) {
    arr1.push(Number(num2));
    let result = 0;
    if (arr2[0] == '+') {
      result = arr1[0] + arr1[1];
    } else if (arr2[0] == '-') {
      result = arr1[0] - arr1[1];
    } else if (arr2[0] == '*') {
      result = arr1[0] * arr1[1];
    } else if (arr2[0] == '/') {
      result = arr1[0] / arr1[1];
    }
    displayDigit.textContent = result;
    num1 = result;
    num2 = '';
    arr1 = [];
    arr2.shift();
    // console.log(num1, num2, arr1, arr2);
  }
})
displayDigit.addEventListener('change', () => {
  alert('Змфі')
})

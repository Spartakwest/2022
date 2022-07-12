"use strict";


let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btm');
let sum = 0;

btn.addEventListener('click', function () {
  for (let input of inputs) {
    sum += Number(input);
  }

  console.log(sum);
});
// В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма введенных чисел:
"use strict";


; (function (determinant) {
  // визначаємо основні елементи
  let div = document.querySelector(determinant);
  let inp = div.querySelector('#inp');
  let result = div.querySelector('.result');
  let btn = div.querySelector('#btn');
  let a = '';

  // функція рандомного числа від 1 до 100
  function getRandom() {
    return Math.floor(Math.random() * 100) + 1;
  };

  btn.addEventListener('click', function () {
    inp.focus();
    if (a == '') {
      a = getRandom();
    }
    if (inp.value == a) {
      result.textContent = 'ваш результат: вірно, ви вгадали';
      inp.value = '';
      a = '';
    } else if (inp.value < a) {
      result.textContent = 'ваш результат: невірно, введіть більше число';
      inp.value = '';
    } else if (inp.value > a) {
      result.textContent = 'ваш результат: невірно, введіть менше число';
      inp.value = '';
    }
  })



})('.div1');
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
  inp.addEventListener('input', function (event) {
    console.log(event.key);
  })
  btn.addEventListener('click', function () {
    inp.focus();
    if (a == '') {
      inp.placeholder = 'Введіть число від 1 до 100';
      inp.style.backgroundColor = '#2c51a2';
      a = getRandom();
    }
    if (inp.value == a) {
      inp.style.backgroundColor = '#2c9b95';
      inp.placeholder = 'Ви вгадали';
      inp.value = '';
      a = '';
    } else if (inp.value < a && inp.value >= 1) {
      inp.placeholder = 'введіть більше число >>>';
      inp.style.backgroundColor = '#f55c44';
      inp.value = '';
    } else if (inp.value > a && inp.value <= 100) {
      inp.placeholder = 'введіть менше число <<<';
      inp.style.backgroundColor = '#f55c44';
      inp.value = '';
    } else if (inp.value > 100 || inp.value < 1) {
      console.log('11s');
      inp.placeholder = 'Ой нє, ти шось не то ввів';
      inp.style.backgroundColor = '#000';
      inp.value = '';
    }
  })



})('.div1');
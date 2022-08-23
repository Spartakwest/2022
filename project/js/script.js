"use strict";


; (function (determinant) {
  // визначаємо основні елементи
  let div = document.querySelector(determinant);
  let inp = div.querySelector('#inp');
  let btns = div.querySelectorAll('.btn');
  let btnCheck = div.querySelector('.btn-2');
  let clear = div.querySelector('.clear');
  let a = '';
  let b = '';



  for (let btn of btns) {
    btn.addEventListener('click', function () {
      inp.style.fontSize = '25vw';
      if ((b >= 1 && b <= 100) || b == '') {
        b += btn.value;
        inp.textContent = b;
      }

    })
  }

  // функція рандомного числа від 1 до 100
  function getRandom() {
    return Math.floor(Math.random() * 100) + 1;
  };

  btnCheck.addEventListener('click', function () {
    if (a == '') {
      inp.textContent = 'Введіть число від 1 до 100';
      inp.style.backgroundColor = '#2c51a2';
      inp.style.color = 'white';
      a = getRandom();
    }
    if (b == a) {
      inp.style.backgroundColor = '#a5bc48';
      inp.style.color = 'white';
      inp.style.fontSize = '12vw';
      inp.textContent = 'Ви вгадали';
      b = '';
      a = '';
    } else if (b < a && b >= 1) {
      inp.textContent = 'введіть більше число >>>';
      inp.style.backgroundColor = '#4568bc';
      inp.style.color = 'white';
      inp.style.fontSize = '12vw';
      b = '';
    } else if (b > a && b <= 100) {
      inp.textContent = 'введіть менше число <<<';
      inp.style.backgroundColor = '#4568bc';
      inp.style.color = 'white';
      inp.style.fontSize = '12vw';
      b = '';
    } else if (b > 100 || b < 1) {
      inp.textContent = 'Ой нє, ти шось не то ввів';
      inp.style.backgroundColor = '#f57051';
      inp.style.color = 'white';
      inp.style.fontSize = '12vw';
      b = '';
    }
  })

  clear.addEventListener('click', function () {
    b = '';
    inp.textContent = 'Введіть число від 1 до 100';
    inp.style.backgroundColor = 'white';
    inp.style.fontSize = '12vw';
    inp.style.color = '#4568bc';
  })



})('.div1');

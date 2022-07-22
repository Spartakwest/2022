"use strict";



/////////////////////
// Task Задача 1
//?Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
let div1 = document.querySelector('.div1');
let p1 = div1.querySelector('#p');
let btn1 = div1.querySelector('#btn');

btn1.addEventListener('click', function () {
  setInterval(function () {
    p1.textContent = Number(p1.textContent) + 1;
  }, 1000)
})
/////////////////////
// Task Задача 2
//?Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.
let div2 = document.querySelector('.div2');
let p2 = div2.querySelector('#p');
let btn2 = div2.querySelector('#btn');

btn2.addEventListener('click', function () {
  let timerId = setInterval(function () {
    p2.textContent = Number(p2.textContent) - 1;
    if (p2.textContent == 0) {
      clearInterval(timerId);
    }
  }, 1000)
})
/////////////////////
// Task Задача 3
//?Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
let div3 = document.querySelector('.div3');
let inp3 = div3.querySelector('#inp');

inp3.addEventListener('blur', function () {
  setInterval(function () {
    inp3.value = Number(inp3.value) ** 2;

  }, 1000)
})
/////////////////////
// Task Задача 4
//?Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.
let div4 = document.querySelector('.div4');
let inp4 = div4.querySelector('#inp');
let p4 = div4.querySelector('#p');

inp4.addEventListener('blur', function () {
  p4.textContent = inp4.value;
  let timerId2 = setInterval(function () {
    p4.textContent = p4.textContent - 1;
    if (p4.textContent <= 0) {
      clearInterval(timerId2)
    }
  }, 1000)
})
/////////////////////
// Task Задача 5
//?Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

"use strict";


/////////////////////
// Task Задача 4
//?Даны 3 абзаца с текстом. По нажатию на первый абзац запишите в его текст число 1, по нажатию на второй абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3.
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
elem1.addEventListener('click', function () {
  elem1.innerHTML = 1;
});
elem2.addEventListener('click', function () {
  elem2.innerHTML = 2;
});
elem3.addEventListener('click', function () {
  elem3.innerHTML = 3;
});
/////////////////////
// Task Задача 5
//?Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.
let p51 = document.querySelector('#p51');
let btn51 = document.querySelector('#btn51');
btn51.addEventListener('click', function () {
  p51.innerHTML = Number(p51.innerHTML) ** 2
})
/////////////////////
// Task Задача 6
//?Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
let p61 = document.querySelector('#p61');
let btn61 = document.querySelector("#btn61");
btn61.addEventListener('click', function () {
  p61.innerHTML = Number(p61.innerHTML) + 1
})
/////////////////////
// Task Задача 7
//?Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
let p71 = document.querySelector('#p71');
let btn71 = document.querySelector('#btn71');
btn71.addEventListener('click', function () {
  p71.innerHTML = p71.innerHTML + '!'
})
/////////////////////
// Task Задача 8
//?Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.
let p81 = document.querySelector('#p81');
let btn81 = document.querySelector('#btn81');
btn81.addEventListener('click', function () {
  p81.innerHTML = '!' + p81.innerHTML
})
/////////////////////
// Task Задача 9
//?Дан абзац и кнопка. По нажатию на кнопку запишите в абзац текст '<i>hello</i>'.
let p91 = document.querySelector('#p91');
let btn91 = document.querySelector('#btn91');
console.log(p91, btn91);
btn91.addEventListener('click', function () {
  p91.innerHTML = '<i>hello</i>'
})
/////////////////////
// Task Задача 10
//?Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца, оберните этот текст в теги <b> и запишите новый текст обратно в абзац.
let p101 = document.querySelector('#p101');
let btn101 = document.querySelector("#btn101");
btn101.addEventListener('click', function () {
  let a = p101.innerHTML;
  p101.innerHTML = `<b>${a}</b>`
})
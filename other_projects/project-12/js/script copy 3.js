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

/////////////////////
// Task Задача 1
//?Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.
let i1 = document.querySelector("#i1");
let btni1 = document.querySelector('#btni1');
btni1.addEventListener('click', function () {
  alert(i1.type)
})
/////////////////////
// Task Задача 2
//?Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.
let i2 = document.querySelector('#i2');
let btni2 = document.querySelector("#btni2");
console.log(i2, btni2);
btni2.addEventListener('click', function () {
  i2.type = "submit"
})
/////////////////////
// Task Задача 3
//?Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.
let a1 = document.querySelector('#a1');
let btna1 = document.querySelector('#btna1');
let pa1 = document.querySelector('#pa1');
btna1.addEventListener('click', function () {
  pa1.innerHTML = a1.href
  alert('готово')
})
/////////////////////
// Task Задача 4
//?Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.
let a2 = document.querySelector("#a2");
let btna2 = document.querySelector('#btna2');
btna2.addEventListener('click', function () {
  a2.innerHTML = a2.innerHTML + "(" + a2.href + ")"
})
/////////////////////
// Task Задача 5
//?Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
let img1 = document.querySelector('#img1');
let btnimg1 = document.querySelector('#btnimg1');
let pimg1 = document.querySelector('#pimg1');
btnimg1.addEventListener('click', function () {
  pimg1.innerHTML = img1.src
})
/////////////////////
// Task Задача 6
//?Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.
let img2 = document.querySelector('#img2');
let btnimg2 = document.querySelector("#btnimg2");
btnimg2.addEventListener('click', function () {
  img2.width = 300
})
/////////////////////
// Task Задача 7
//?Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.
let img3 = document.querySelector('#img3');
let btnimg3 = document.querySelector('#btnimg3');
btnimg3.addEventListener('click', function () {
  img3.width = img3.width * 2
})
/////////////////////
// Task Задача 8
//?Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.
let a = 'https://i.pinimg.com/736x/b1/3b/81/b13b81d79fe91e35008feeaf4c5b04d7.jpg';
let b = 'https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg';
let img41 = document.querySelector('#img41');
let btnimg41 = document.querySelector('#btnimg41');
let img42 = document.querySelector('#img42');
let btnimg42 = document.querySelector('#btnimg42');
btnimg41.addEventListener('click', function () {
  img41.src = a
})
btnimg42.addEventListener('click', function () {
  img42.src = b
})
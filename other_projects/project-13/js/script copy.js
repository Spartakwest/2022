"use strict";


/////////////////////
// Task Задача 1
//?Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.
let parent = document.querySelector('#parent');
let elems1 = parent.getElementsByClassName('www');
let elems2 = parent.getElementsByClassName('ggg');
for (let elem of elems1) {
  // alert(elem.innerHTML);
}

/////////////////////
// Task Задача 1
//?Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
let elem = document.getElementById('elem');
elem.addEventListener('click', () => {
  elem.innerHTML = elem.innerHTML + elem.dataset.text;
})
/////////////////////
// Task Задача 2
//?Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.
let divs = document.getElementsByClassName('dat');
for (let elem of divs) {
  elem.addEventListener('click', () => {
    elem.innerHTML += elem.dataset.num
  })
}
/////////////////////
// Task Задача 3
//?Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано.
let div1 = document.querySelector('#div1');
let btn = div1.querySelector('#btn');
btn.dataset.counter = 0;
btn.addEventListener('click', () => {
  btn.dataset.counter = Number(btn.dataset.counter) + 1;
});
btn.addEventListener('dblclick', () => {
  alert(btn.dataset.counter)
})
/////////////////////
// Task Задача 4
//?В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
let div2 = document.querySelector('#div2');
let elem3 = div2.querySelector('#elem');
elem3.addEventListener('blur', () => {
  if (elem3.value.length == Number(elem3.dataset.length)) {
    alert('все добре')
  } else {
    alert('помилка')
  }
})
/////////////////////
// Task Задача 5
//?В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
let div3 = document.querySelector('#div3');
let elem4 = div3.querySelector('#elem');
elem4.addEventListener('blur', () => {
  if (elem4.value.length >= Number(elem4.dataset.min) && elem4.value.length <= Number(elem4.dataset.max)) {
    alert('супер')
  } else {
    alert('ух, ні не добре')
  }
})
/////////////////////
// Task Задача 6
//?Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.
let div4 = document.querySelector('#div4');
let elem5 = div4.querySelector('#elem');
elem5.addEventListener('click', () => {
  elem5.innerHTML = elem5.innerHTML + '- віртість покупки: ' + (Number(elem5.dataset.productPrice) * Number(elem5.dataset.productAmount))
})
/////////////////////
// Task Задача 7
//?Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.
let div5 = document.querySelector('#div5');
let parent1 = div5.children;
let pnum = 0;
for (let elem of parent1) {
  pnum += 1;
  // elem.setAttribute('data-number') = pnum;
}

/////////////////////
// Task Задача 1
//?Напишите код, который покажет разницу между lastChild и lastElementChild.
let div6 = document.querySelector('#div6');
let elem6 = div6.querySelector('#elem1');
console.log(elem6.lastChild);
console.log(elem6.lastElementChild);
/////////////////////
// Task Задача 4
//?Переберите циклом все узлы этого дива и выведите их в консоль.
let div7 = document.querySelector('#div7');
let elem7 = div7.querySelector('#elem');
for (let elem of elem7.childNodes) {
  console.log(elem.nodeName);
}

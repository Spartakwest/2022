"use strict";



/////////////////////
// Task Задача 1
//?Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение 'text'.
let elem1 = document.querySelectorAll('.elem1');
let belem1 = document.querySelector('#belem1');
belem1.addEventListener('click', function () {
  for (let elem of elem1) {
    elem.innerHTML = 'text'
  }
})
/////////////////////
// Task Задача 2
//?Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
let elem2 = document.querySelectorAll('.elem2');
let belem2 = document.querySelector('#belem2');
belem2.addEventListener('click', () => {
  let counter = 0;
  for (let elem of elem2) {
    counter += 1
    elem.innerHTML = elem.innerHTML + counter
  }
})
/////////////////////
// Task Задача 3
//?Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
let elem3 = document.querySelectorAll('.elem3');
let pelem3 = document.querySelector('#pelem3');
let belem3 = document.querySelector('#belem3');
belem3.addEventListener('click', function () {
  let sum = 0;
  for (let elem of elem3) {
    sum += Number(elem.value);
  }
  pelem3.innerHTML = pelem3.innerHTML + ' ' + sum
})


/////////////////////
// Task Задача 1
//?Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
function func() {
  this.value = Number(this.value) + 1;
}
let input1 = document.querySelectorAll('.input1');
for (let elem of input1) {
  elem.addEventListener('blur', func)
}
/////////////////////
// Task Задача 2
//?Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
let p1 = document.querySelectorAll('.p1');
for (let elem of p1) {
  elem.addEventListener('click', square);
}
function square() {
  this.innerHTML = Number(this.innerHTML) ** 2
}
/////////////////////
// Task Задача 1
//?Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
let a1 = document.querySelector('#a1');
a1.addEventListener('click', function linker() {
  a1.innerHTML = a1.innerHTML + '(' + a1.href + ')'
  a1.removeEventListener('click', linker)
})
/////////////////////
// Task Задача 2
//?Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function counter() {
  btn1.value = Number(btn1.value) + 1
  if (btn1.value == 10) {
    btn1.removeEventListener('click', counter)
  }
})
/////////////////////
// Task Задача 1
//?Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
let p2 = document.querySelectorAll('.p2');

for (let elem of p2) {
  elem.addEventListener('click', function oblate() {
    this.innerHTML = this.innerHTML + '!';
    this.removeEventListener('click', oblate)
  });
}
/////////////////////
// Task Задача 1
//?Получите значение его атрибута value.
let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');
// alert(value)
/////////////////////
// Task Задача 2
//?Получите значение его атрибута class.
let el2 = document.querySelector('#el2');
let classes = el2.getAttribute('class');
// alert(classes);
/////////////////////
// Task Задача 3,4
//?Змінти значення value i class
let in1 = document.querySelector('#in1');
in1.setAttribute('value', 'mandargora');
in1.setAttribute('class', 'classWoles')
/////////////////////
// Task Задача 5
//?видалити атрибут value
in1.removeAttribute('value')
/////////////////////
// Task Задача 6
//?визначити наявність атрибута
// alert(in1.hasAttribute('class'))
/////////////////////
// Task Задача 1
//?Дан инпут с каким-то начальным значением. Дана также кнопка. По нажатию на кнопку определите, было ли изменено пользователем начальное значение инпута.
let in2 = document.querySelector('#in2');
in2.addEventListener('blur', () => {
  if (in2.value == in2.getAttribute('value')) {
    alert('дані не змінено')
  } else {
    alert('змінено!')
  }
})

/////////////////////
// Task Задача 2
//?Дан инпут с каким-то начальным значением. Пусть пользователь меняет это значение. Сделайте рядом с инпутом кнопку, по нажатию на которую value инпута вернется в изначальное значение.
let in3 = document.querySelector('#in3');
let bin3 = document.querySelector('#bin3');
bin3.addEventListener('click', function () {
  in3.value = in3.getAttribute('value')
})
/////////////////////
// Task Задача 1
//?Узнайте количество его классов.
let pp1 = document.querySelector('#pp1');
// alert(pp1.classList.length)
let classNames = pp1.classList;
for (elem of classNames) {
  // alert(elem);
}
/////////////////////
// Task Задача 3
//?Добавьте ему класс xxx.
pp1.classList.add('xxx');
for (let elem of classNames) {
  // alert(elem)
}
/////////////////////
// Task Задача 4
//?Удалите у него класс www и класс zzz.
pp1.classList.remove('zzz');
for (let elem of classNames) {
  // alert(elem);
}
/////////////////////
// Task Задача 5
//?Проверьте наличие у него класса ggg.
// alert(pp1.classList.contains('ggg'))

/////////////////////
// Task Задача 6
//?Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
let ipp1 = document.querySelector('#ipp1');
let bpp1 = document.querySelector('#bpp1');
bpp1.addEventListener('click', () => {
  ipp1.classList.toggle('mandargora')
})
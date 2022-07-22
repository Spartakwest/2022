"use strict";



/////////////////////
// Task Задача 1
//?Вставьте ему в конец li с текстом 'item'.
let div1 = document.querySelector('.div1');
let ol1 = div1.querySelector('#elem')
let li1 = document.createElement('li');
li1.textContent = 'item';
ol1.appendChild(li1);
/////////////////////
// Task Задача 2
//?Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
let div2 = document.querySelector('.div2');
let ol2 = div2.querySelector('#elem');
let btn2 = div2.querySelector('#button');


btn2.addEventListener('click', function () {
  let li2 = document.createElement('li');
  li2.textContent = 'item';
  ol2.appendChild(li2);
})
/////////////////////
// Task Задача 1
//?Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
let div3 = document.querySelector('.div3');
let ol3 = div3.querySelector('#elem');
let btn3 = div3.querySelector('#button');

let li3;

btn3.addEventListener('click', function () {
  li3 = document.createElement('li');
  li3.innerHTML = 'item3';
  ol3.appendChild(li3);
})

ol3.addEventListener('click', function (event) {
  let li = event.target.closest('li');
  if (li) {
    event.target.textContent += '!';
  }

})
/////////////////////
// Task Задача 
//?Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
let div4 = document.querySelector('.div4');
let ul4 = div4.querySelector('#elem');
let counter4 = 0;

for (let i = 1; i <= 10; i++) {
  let li4 = document.createElement('li');
  li4.innerHTML = ++counter4;
  ul4.appendChild(li4);
}
/////////////////////
// Task Задача 1
//?Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
let div5 = document.querySelector('.div5');
let p5 = div5.querySelector('#p');

for (let i = 1; i <= 5; i++) {
  let inp = document.createElement('input');
  div5.appendChild(inp);
  inp.addEventListener('blur', function () {
    p5.innerHTML += inp.value;
  })
}
/////////////////////
// Task Задача 1
//?Сделайте так, чтобы любая li удалялась по клику на нее.
let div6 = document.querySelector('.div6');
let ul6 = div6.querySelector('#ul');

ul6.addEventListener('click', function (event) {
  let li = event.target.closest('li');
  if (li) {
    li.remove();
  }
})
/////////////////////
// Task Задача 2
//?Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
let div7 = document.querySelector('.div7');
let ul7 = div7.querySelector('#parent');
let btn7 = div7.querySelector('#button');

btn7.addEventListener('click', function () {
  ul7.lastElementChild.remove()
})
/////////////////////
// Task Задача 1
//?Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
let div8 = document.querySelector('.div8');
let ul8 = div8.querySelector('#elem');

let li81 = document.createElement('li');
li81.innerHTML = 'start';
let li82 = document.createElement('li');
li82.innerHTML = 'finish';

ul8.append(li82);
ul8.prepend(li81);
/////////////////////
// Task Задача 2
//?Вставьте перед этим элементом элемент с текстом 'new'.
let div9 = document.querySelector('.div9');
let ul9 = div9.querySelector('#parent');
let elem9 = div9.querySelector('#elem');

let li9 = document.createElement('li');
li9.innerHTML = 'new';

ul9.insertBefore(li9, elem9);

li9.addEventListener('click', function () {
  this.innerHTML += '!'
})


/////////////////////
// Task Задача 1
//?Вставьте перед ним абзац с текстом '!!!'.
let div10 = document.querySelector('.div10');
let div101 = div10.querySelector('#elem');

let p10 = document.createElement('p');
p10.innerHTML = '!!!';

div101.insertAdjacentElement('beforeBegin', p10)

/////////////////////
// Task Задача 2,3,4
//?Вставьте после него абзац с текстом '!!!'.
let div11 = document.querySelector('.div11');
let div111 = div11.querySelector('#elem');

let p11 = document.createElement('p');
p11.textContent = '!!!2';

div111.insertAdjacentElement('afterEnd', p11);

let p112 = document.createElement('p');
p112.innerHTML = '!!!3';

div111.insertAdjacentElement('afterBegin', p112)

let p113 = document.createElement('p');
p113.textContent = "!!!4";

div111.insertAdjacentElement('beforeEnd', p113);
/////////////////////
// Task Задача 5
//?
let div12 = document.querySelector('.div12');
let div121 = div12.querySelector('#elem');

div121.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div> ')
/////////////////////
// Task Задача 1
//?Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
let div13 = document.querySelector('.div13');
let inp13 = div13.querySelector('#inp');
let btn13 = div13.querySelector('#btn');
let clone13 = inp13.cloneNode(true);

btn13.addEventListener('click', () => {
  let clone13 = inp13.cloneNode(true);
  div13.prepend(clone13)
})
/////////////////////
// Task Задача 1,2
//?Проверьте, является ли этот элемент элементом с классом www.Дан элемент. Проверьте, является ли этот элемент абзацем.
let div14 = document.querySelector('.div14');
let div141 = div14.querySelector('#elem');

console.log(div141.matches('.www'));
console.log(div141.matches('p'));
/////////////////////
// Task Задача 3
//?Проверьте, является ли элемент из elem2 потомком элемента из elem1.
let div15 = document.querySelector('.div15');
let div151 = div15.querySelector('#elem1');
let div152 = div15.querySelector('#elem2');

console.log(div151.contains(div152));
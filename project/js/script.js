"use strict";


/////////////////////
// Task Задача 1
//?Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
let div1 = document.querySelector('#div1');
let bdiv1 = document.querySelector('#bdiv1');
bdiv1.addEventListener('click', function () {
  div1.style.width = "200px";
  div1.style.height = '200px';
  div1.style.border = '1px solid black'
})
/////////////////////
// Task Задача 2
//?Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.
let div2 = document.querySelector('#div2');
let bdiv2 = document.querySelector('#bdiv2');
bdiv2.addEventListener('click', () => {
  div2.style.fontSize = '20px';
  div2.style.borderTop = '1px solid red';
  div2.style.backgroundColor = 'yellow'
})
/////////////////////
// Task Задача 3
//?Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.
let li1 = document.querySelectorAll('.li1');
let bli1 = document.querySelector('#bli1');
bli1.addEventListener('click', () => {
  for (let elem of li1) {
    elem.style.cssFloat = 'left';
  }
})


/////////////////////
// Task Задача 2
//?Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).
let p1 = document.querySelector('#p1');
let toCrossOut = document.querySelector('#toCrossOut');
let bolded = document.querySelector('#bolded');
let colored = document.querySelector('#colored');
toCrossOut.addEventListener('click', () => {
  p1.classList.toggle('toCrossOut');
});
bolded.addEventListener('click', () => {
  p1.classList.toggle('bolded');
});
colored.addEventListener('click', () => {
  p1.classList.toggle('colored')
})

/////////////////////
// Task Задача 1
//?Найдите первого потомка этого элемента и сделайте его текст красного цвета.
let elem = document.querySelector('#elementus');
elementus.firstElementChild.style.color = 'red';
//////////////The separator/////////////
elementus.lastElementChild.style.color = 'green';
//////////////The separator/////////////
let elems = elementus.children;
for (let elem of elems) {
  elem.innerHTML = elem.innerHTML + '!'
}

/////////////////////
// Task Задача 4
//?Найдите его родителя и задайте ему красную границу.
let li2 = document.querySelector('#li2');
li2.parentElement.style.border = '1px solid red';
/////////////////////
// Task Задача 5
//?Найдите его родителя его родителя и задайте ему красную границу.
li2.parentElement.parentElement.style.border = '1px solid green'
/////////////////////
// Task Задача 6
//?Найдите ближайшего родителя этого элемента, являющегося тегом div.
let s1 = document.querySelector('#s1');
let parent = s1.closest('div');
// alert(parent.className)

/////////////////////
// Task Задача 7
//?Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.
let s2 = document.querySelector('#s2');
let parent2 = s2.closest('.www');
// alert(parent2.className)

/////////////////////
// Task Задача 8
//?Найдите его соседа сверху и добавьте ему в конец текст '!'.
let li3 = document.querySelector('#li3');
let sibling1 = li3.previousElementSibling;
sibling1.innerHTML = sibling1.innerHTML + "!";
/////////////////////
// Task Задача 9
//?Найдите его соседа снизу и добавьте ему в конец текст '!'.
let sibling2 = li3.nextElementSibling;
sibling2.innerHTML = sibling2.innerHTML + '!';
/////////////////////
// Task Задача 10
//?Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
let sibling3 = sibling2.nextElementSibling;
sibling3.innerHTML = sibling3.innerHTML + '!';
/////////////////////
// Task Задача 11
//?Поменяйте местами текст его соседа сверху и текст его соседа снизу.
[sibling1.innerHTML, sibling2.innerHTML] = [sibling2.innerHTML, sibling1.innerHTML]
/////////////////////
// Task Задача 1
//?Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.
let div3 = document.getElementById('div3');
div3.innerHTML = 'привітик'
/////////////////////
// Task Задача 2
//?Получите все теги li по имени тега и сделайте их текст красного цвета.
let lis = document.getElementsByTagName('li');
for (let elem of lis) {
  elem.style.color = 'red';
}
//////////////The separator/////////////
let www = document.getElementsByClassName('www');
for (let elem of www) {
  elem.innerHTML = 'хо-хо-хо'
}
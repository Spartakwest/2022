"use strict";



/////////////////////
// Task Задача 1
//?Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
let div1 = document.querySelector('.div1');

div1.addEventListener('click', function (event) {
  if (event.target.matches('li')) {
    event.target.textContent += '!';
  } else if (event.target.matches('ul')) {
    event.target.innerHTML += '<li>new</li>'
  }
})
/////////////////////
// Task Задача 1
//?
let div2 = document.querySelector('.div2');
let parent2 = div2.querySelector('#parent');
let button2 = div2.querySelector('button');
let block2 = div2.querySelector('#block');

button2.addEventListener('click', function (event) {
  block2.classList.add('active');
  event.stopPropagation();
});
parent2.addEventListener('click', function () {
  block2.classList.remove('active');
});
/////////////////////
// Task Задача 1
//?Повторите приведенное решение. Убедитесь, что новые li также будут реагировать на клик.
let div3 = document.querySelector('.div3');
let ul3 = div3.querySelector('#ul');
let btn3 = div3.querySelector('#btn');

btn3.addEventListener('click', function () {
  let item = document.createElement('li');
  item.innerHTML = 'item';
  ul3.appendChild(item);
})
ul3.addEventListener('click', function (event) {
  let li = event.target.closest('li');
  if (li) {
    li.innerHTML += '!';
  }
})
/////////////////////
// Task Задача 1
//?Пусть теперь в одной и во второй функции мы будем выводить value инпута. Определите, что выведется в строчках кода, отмеченных комментариями:
let div4 = document.querySelector('.div4');
let inp4 = div4.querySelector('#inp');

function parent4() {
  console.log(this.value); // что выведет?
  let child = () => {
    console.log(this.value);
  }
  child();
};

inp4.addEventListener('blur', parent4);
/////////////////////
// Task Задача 1
//?С помощью метода call и функции func выведите на экран value каждого из инпутов.
let div5 = document.querySelector('.div5');
let inp51 = div5.querySelector('#elem1');
let inp52 = div5.querySelector('#elem2');
let inp53 = div5.querySelector('#elem3');

function func5(surname, name) {
  console.log(this.value + ', ' + surname
    + ' ' + name);
}
func5.call(inp51, 'Віктор', 'Миколайович');
func5.call(inp52);
func5.call(inp53);
/////////////////////
// Task Задача 1
//?Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.
let div6 = document.querySelector('.div6');
let inp6 = div6.querySelector('#inp');
let arr = ['Віктор', 'Слободян']

func6.apply(inp6, arr)

function func6(name, surname) {
  console.log(this.value + name + surname);
}
/////////////////////
// Task Задача 1
//?Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.
let div7 = document.querySelector('.div7');
let inp7 = div7.querySelector('#inp');

function func7(name, surname) {
  console.log(this.value + ', ' + name + ' ' + surname);
}

func7 = func7.bind(inp7);

func7('Віктор', 'МиКолайович')
/////////////////////
// Task Задача
//?Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
let counter = 0;
let timerId1 = setInterval(() => {
  counter += 1;
  console.log('Привіт');
  if (counter > 10) {
    clearInterval(timerId1)
  }
}, 3000);

/////////////////////
// Task Задача 1
//?Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
let i = 100;
let timerId2 = setInterval(() => {
  console.log(--i);

  if (i <= 90) {
    clearInterval(timerId2)
  }
}, 1000);
/////////////////////
// Task Задача 1
//?Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
let a = 10;
let timerId3 = setInterval(() => {
  console.log(--a);
  if (a == 0) {
    clearInterval(timerId3)
  }
}, 1000)

/////////////////////
// Task Задача 1
//?Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100
let div8 = document.querySelector('.div8');
let btn8 = div8.querySelector('#btn');

btn8.addEventListener('click', function func() {
  let i = 100;
  let timerId = setInterval(() => {
    console.log(i--);
    if (i == 85) {
      clearInterval(timerId);
    }
  }, 1000)
  btn8.removeEventListener('click', func)
})
/////////////////////
// Task Задача 1
//?Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.
let div9 = document.querySelector('.div9');
let btn91 = div9.querySelector('#btn1');
let btn92 = div9.querySelector('#btn2');
let timerId9;


function functor() {
  let i = 100;
  timerId9 = setInterval(() => {
    console.log(i--);
    if (i == 0) {
      clearInterval(timerId9);
    }
  }, 1000);
  btn91.removeEventListener('click', functor);
}

btn91.addEventListener('click', functor
);
btn92.addEventListener('click', () => {
  clearInterval(timerId9);
  btn91.addEventListener('click', functor)
})
/////////////////////
// Task Задача 1
//?Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду уменьшалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода, используя изученный в данном уроке способ.
let div10 = document.querySelector('.div10');
let btn10 = div10.querySelector('#elem')


btn10.addEventListener('click', function () {
  setInterval(function (self) {
    self.value--;
  }, 1000, this);
});
"use strict";


/////////////////////
// Task Задача 1
//?Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:
// let div = document.querySelector('.div');

// document.addEventListener('mousemove', (event) => {
//   div.textContent = event.clientX + ':' + event.clientY
// })

/////////////////////
// Task Задача 1
//?Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.
let div1 = document.querySelector('.div1');
let elem = div1.querySelector('#elem');
let p1 = div1.querySelector('#p')

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);
p1.addEventListener('', func)

function func(event) {
  if (event.type == 'click') {
    elem.style.backgroundColor = 'green';
    p1.textContent = 'вітаю';
    console.log(event.type);
  } else if (event.type == 'dblclick') {
    elem.style.backgroundColor = 'red'
  }
}

//////////////The separator/////////////
let div3 = document.querySelector('.div3');
let div31 = div3.querySelector('#div31');

div31.addEventListener('click', function (event) {
  console.log(this);
  console.log(event.target);
})
/////////////////////
// Task Задача 1
//?Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.
let div4 = document.querySelector('.div4');
let ul4 = div4.querySelector('#elem');

ul4.addEventListener('click', function (event) {
  console.log(event.target.tagName);
  if (event.target.tagName == 'LI') {
    event.target.textContent += "!";
  } else if (event.target.tagName == 'UL') {
    ul4.innerHTML += '<li>text</li>';
  }
})


/////////////////////
// Task Задача 1
//?Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
let div5 = document.querySelector('.div5');
let p5 = div5.querySelector('#p');
let inp5 = div5.querySelector('#inp');

inp5.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    p5.textContent = inp5.value;
    inp5.value = '';
  }
})
/////////////////////
// Task Задача 1
//?Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
let div6 = document.querySelector('.div6');
let p6 = div6.querySelector('#p');

p6.addEventListener('click', function (event) {
  if (event.altKey) {
    p6.style.color = 'red';
  }
})
/////////////////////
// Task Задача 2
//?Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
let div7 = document.querySelector('.div7');
let ul7 = div7.querySelector('#elem');


ul7.addEventListener('click', (event) => {
  if (event.target.tagName == 'LI') {
    if (event.ctrlKey) {
      event.target.textContent += 1;
    } else if (event.shiftKey) {
      event.target.innerHTML += 2;
    }
  }
})


/////////////////////
// Task Задача 1
//?Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
let div8 = document.querySelector('.div8');
let a8 = div8.querySelector('#a');

a8.addEventListener('click', (event) => {
  event.preventDefault();
  event.target.textContent += event.target.href;
})
/////////////////////
// Task Задача 2
//?Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
let div9 = document.querySelector('.div9');
let inp91 = div9.querySelector('#inp1');
let inp92 = div9.querySelector('#inp2');
let p9 = div9.querySelector('#p');
let a9 = div9.querySelector('#a');


let num1 = inp91.value;
let num2 = inp92.value;

a9.addEventListener('click', (event) => {
  event.preventDefault();
  p9.textContent = Number(inp91.value) + Number(inp92.value);
})
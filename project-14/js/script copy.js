"use strict";


/////////////////////
// Task Задача 14
//?Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
let div14 = document.querySelector('.div14');
let ps14 = div14.querySelectorAll('p');
for (let elem of ps14) {
  elem.addEventListener('click', () => {
    elem.textContent = Number(elem.textContent) ** 2;
  })
}

/////////////////////
// Task Задача 15
//?Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
let div15 = document.querySelector('.div15');
let inp15 = div15.querySelector('#inp');
let pDate = div15.querySelector('#pDate');

let arrDate = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', "п'ятниця", 'субота'];
let date;
function getDate([day, month, year]) {
  date = new Date(year, month - 1, day);
  return date;
}

inp15.addEventListener('blur', () => {
  let dateInp = inp15.value.split('.');
  getDate(dateInp);
  pDate.textContent = 'день тижня: ' + arrDate[date.getDay()];
})
/////////////////////
// Task Задача 16
//?Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
let div16 = document.querySelector('.div16');
let inp16 = div16.querySelector('#inp');
let btnPlus = document.querySelector('#btnPlus');
let btnMinus = document.querySelector('#btnMinus');




btnPlus.addEventListener('click', () => {
  inp16.value = Number(inp16.value) + 1
})
btnMinus.addEventListener('click', () => {
  if (inp16.value > 0) {
    inp16.value = Number(inp16.value) - 1;
  }
})
/////////////////////
// Task Задача 17
//?Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
let div17 = document.querySelector('.div17');
let ps17 = div17.querySelectorAll('.p');
let inp17 = div17.querySelector('#inp');

let counter = 0;

for (let elem of ps17) {
  elem.addEventListener('click', () => {
    counter += 1;
    inp17.value = counter;
  })
}
/////////////////////
// Task Задача 18
//?На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
let div18 = document.querySelector(".div18");
let divs = div18.querySelectorAll('.div');
for (let elem of divs) {
  elem.textContent = elem.textContent.slice(6, 17) + '...'
}
/////////////////////
// Task Задача 19
//?Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
let div19 = document.querySelector('.div19');
let inp19 = div19.querySelector('#inp');
inp19.addEventListener('blur', () => {
  if (inp19.value >= 1 && inp19.value <= 100) {
    inp19.style.backgroundColor = 'green';
  } else {
    inp19.style.backgroundColor = 'red';
  }
})
/////////////////////
// Task Задача 20
//?Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
let div20 = document.querySelector('.div20');
let inp20 = div20.querySelector('#inp');
let btn20 = div20.querySelector('#btn');
let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

function getRandom() {
  return Math.floor(Math.random() * 62);
}

btn20.addEventListener('click', () => {
  let str = '';
  for (let i = 0; i < 8; i++) {
    str += symbols[getRandom()];
  }
  inp20.value = str;
})
/////////////////////
// Task Задача 21
//?Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
let div21 = document.querySelector('.div21');
let inp21 = div21.querySelector('#inp');
let btn21 = div21.querySelector('#btn');

function getRandomMax(max) {
  return Math.floor(Math.random() * max);
}

btn21.addEventListener('click', () => {
  let strArr = inp21.value.split('');
  let newStrArr = [];
  while (strArr.length != 0) {
    newStrArr.push(strArr.splice(getRandomMax(strArr.length), 1))
  }
  inp21.value = newStrArr.join('')
})
/////////////////////
// Task Задача 22
//?Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
let div22 = document.querySelector('.div22');
let inp22 = div22.querySelector('#inp');
let btn22 = div22.querySelector('#btn');
let p22 = div22.querySelector('#p');

function FaranCel(tempFaran) {
  let a = ((tempFaran - 32) / 1.8);
  if (Number.isInteger(a)) {
    return a;
  } else {
    return a.toFixed(2);
  }
}

btn22.addEventListener('click', () => {
  p22.textContent = 'температура в Цельсіях: ' + FaranCel(inp22.value);
})
/////////////////////
// Task Задача 23
//?Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
let div23 = document.querySelector('.div23');
let inp23 = div23.querySelector('#inp');
let btn23 = div23.querySelector('#btn');
let p23 = div23.querySelector('#p');

btn23.addEventListener('click', () => {
  let a = Number(inp23.value);
  let factorial = 1;
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
  p23.textContent = 'факторіал - ' + factorial;
})
/////////////////////
// Task Задача 24
//?Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.

let div24 = document.querySelector('.div24');
let inpa = document.querySelector('#inpa');
let inpb = document.querySelector('#inpb');
let inpc = document.querySelector('#inpc');
let btn24 = div24.querySelector('#btn')
let p24 = div24.querySelector('#p');

btn24.addEventListener('click', () => {
  let a = Number(inpa.value);
  let b = Number(inpb.value);
  let c = Number(inpc.value);
  let d = b ** 2 - (4 * a * c);
  let ds = Math.sqrt(d);

  let x1 = (-b + ds) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  if (d > 0) {
    p24.textContent = 'Корені квадратного рівняння: x1 = ' + x1 + ' i x2 = ' + x2;
  } else if (d == 0) {
    p24.textContent = 'Корінь квадратного рівняння: x = ' + x1;
  } else if (d < 0) {
    p24.textContent = 'У даного квадратного рівняння немає коренів';
  }

})


/////////////////////
// Task Задача 1
//?Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
let div1 = document.querySelector('.div1');
let tea1 = document.querySelector('#textarea1');
let p1 = div1.querySelector('#p');

tea1.addEventListener('blur', () => {
  p1.textContent += tea1.value;
})


/////////////////////
// Task Задача 1
//?Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
let div2 = document.querySelector('.div2');
let btn2 = div2.querySelector('#btn');
let inp2 = div2.querySelector('#inp');

btn2.addEventListener('click', () => {
  inp2.disabled = true;
})
/////////////////////
// Task Задача 2
//?Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
let div3 = document.querySelector('.div3');
let btn31 = div3.querySelector('#btn1');
let btn32 = div3.querySelector('#btn2');
let inp3 = div3.querySelector('#inp');

btn31.addEventListener('click', () => {
  inp3.disabled = true;
})
btn32.addEventListener('click', () => {
  inp3.disabled = false;
})

/////////////////////
// Task Задача 3
//?Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
let div4 = document.querySelector('.div4');
let btn4 = div4.querySelector('#btn');
let inp4 = div4.querySelector('#inp');

btn4.addEventListener('click', () => {
  if (inp4.disabled) {
    alert('Інпут заблокований!')
  } else {
    alert('Інпут працює')
  }
})


/////////////////////
// Task Задача 1
//?Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
let div5 = document.querySelector('.div5');
let check1 = div5.querySelector('#check');
let btn51 = div5.querySelector('#btn1');
let btn52 = div5.querySelector('#btn2');

btn51.addEventListener('click', () => {
  check1.checked = true;
})
btn52.addEventListener('click', () => {
  check1.checked = false;
})
/////////////////////
// Task Задача 2
//?Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
let div6 = document.querySelector('.div6');
let check2 = div6.querySelector('#check');
let btn6 = div6.querySelector('#btn');
let p6 = div6.querySelector('#p');

btn6.addEventListener('click', () => {
  if (check2.checked) {
    p6.textContent = 'Добрий вечір ми з України';
  } else {
    p6.innerHTML = 'допобачення євробачення'
  }
})
/////////////////////
// Task Задача 2
//?Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
let div7 = document.querySelector('.div7');
let check3 = div7.querySelector('#check');
let btn7 = div7.querySelector('#btn');

btn7.addEventListener('click', () => {
  check3.checked = !check3.checked
})
"use strict";



/////////////////////
// Task Задача 1
//?Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
let inp = document.querySelector('#inp');
let pinp = document.querySelector('#pinp');
inp.addEventListener('blur', () => {
  pinp.innerHTML += inp.value
})
/////////////////////
// Task Задача 2
//?Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
let div2 = document.querySelector('#div2');
let inputs2 = div2.querySelectorAll('input[type="text"]');
// console.log(inputs2);
let bint2 = div2.querySelector('#bint2');
// console.log(bint2);
let pint2 = div2.querySelector('#pint2')
bint2.addEventListener('click', () => {
  let sum = 0;
  for (let input of inputs2) {
    sum += +input.value;
  }
  pint2.innerHTML = sum;
})
/////////////////////
// Task Задача 3
//?Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа
let div3 = document.querySelector('#div3');
let inp3 = div3.querySelector('#inp');
inp3.addEventListener('blur', () => {
  let digits = inp3.value.split('');
  let sum = 0;
  for (let digit of digits) {
    sum += +digit;
  }
  console.log(sum);
})
/////////////////////
// Task Задача 4
//?Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
let div4 = document.querySelector('#div4');
let inp4 = div4.querySelector('#inp');
inp4.addEventListener('blur', () => {
  let digits = inp4.value.split(',');
  let sum = 0;
  for (let digit of digits) {
    sum += +digit;
  }
  let agr = sum / digits.length;
  console.log(agr);
})
/////////////////////
// Task Задача 5
//?Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
let div5 = document.querySelector('#div5');
let inp51 = div5.querySelector('#inp1');
let inp52 = div5.querySelector('#inp2');
let inp53 = div5.querySelector('#inp3');
let inp54 = div5.querySelector('#inp4');
inp51.addEventListener('blur', () => {
  let name = inp51.value.split(' ');
  inp52.value = name[0];
  inp53.value = name[1];
  inp54.value = name[2];
})
/////////////////////
// Task Задача 6
//?Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
let div6 = document.querySelector('#div6');
let inp6 = div6.querySelector('#inp');
inp6.addEventListener('blur', () => {
  let arr = inp6.value.split(' ');
  let arr2 = []
  for (let elem of arr) {
    elem = elem.slice(0, 1).toUpperCase() + elem.slice(1);
    arr2.push(elem);
    // console.log(elem);
  }
  // console.log(arr2);
  inp6.value = arr2.join(' ');
})
/////////////////////
// Task Задача 7
//?Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
let div7 = document.querySelector('#div7');
let inp7 = div7.querySelector('#inp');
let pinp7 = div7.querySelector('#pinp');
inp7.addEventListener('blur', () => {
  let strArr = inp7.value.split(' ');
  pinp7.innerHTML += ' ' + strArr.length;
})
/////////////////////
// Task Задача 8
//?Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
let div8 = document.querySelector('#div8');
let inp8 = div8.querySelector('#inp');
inp8.addEventListener('blur', () => {
  inp8.value = inp8.value.split('.').reverse().join('-');
})
/////////////////////
// Task Задача 9
//?Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
let div9 = document.querySelector('#div9');
let inp9 = div9.querySelector('#inp');
let binp9 = div9.querySelector('#binp');
binp9.addEventListener('click', () => {
  alert(inp9.value == inp9.value.split('').reverse().join(''));
})
/////////////////////
// Task Задача 10
//?Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
let div10 = document.querySelector('#div10');
let inp10 = div10.querySelector('#inp');
inp10.addEventListener('blur', () => {
  let flag = false;
  let digits = inp10.value.split('');
  for (let digit of digits) {
    if (digit == 3) {
      flag = true;
    }
  }
  alert(flag)
})
/////////////////////
// Task Задача 11
//?Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
let div11 = document.querySelector('#div11');
let paragraphs = div11.querySelectorAll('.p');
let btn11 = div11.querySelector('#btn');
// console.log(paragraphs);
btn11.addEventListener('click', () => {
  let counter = 0;
  for (let elem of paragraphs) {
    counter += 1;
    elem.innerHTML += counter;
  }
})
/////////////////////
// Task Задача 12
//?Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
let div12 = document.querySelector('#div12');
let as = div12.querySelectorAll('a');
for (let a of as) {
  a.innerHTML += '(' + a.href + ')';
}
/////////////////////
// Task Задача 13
//?Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
let div13 = document.querySelector('#div13');
let as2 = div13.querySelectorAll('a');
for (let a of as2) {
  // console.log(a.innerHTML);
  if (a.href.startsWith('http://')) {
    console.log('w');
    a.innerHTML += " &rarr;"
  }
}
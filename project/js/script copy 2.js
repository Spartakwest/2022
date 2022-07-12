"use strict";


/////////////////////
// Task Задача 6
//?Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы. 
let element = document.querySelector('#elem');
for (let elem of element.childNodes) {
  if (elem.nodeType == 1 || elem.nodeType == 3) {
    console.log(elem);
  }
}
console.log('наступне');
for (let elem of element.childNodes) {
  if (elem.nodeType == 1) {
    console.log(elem.innerHTML);
  } else {
    console.log(elem.data);
  }
}
console.log('виводжу тести коментаріїв та текстів');
for (let elem of element.childNodes) {
  if (elem.nodeType == 3 || elem.nodeType == 8) {
    console.log(elem.data);
  }
}
console.log('виводжу тестові вузли та едементи');
for (let elem of element.childNodes) {
  if (elem.nodeType == 1) {
    console.log(elem.innerHTML);
  } else if (elem.nodeType == 3) {
    console.log(elem.data);
  }
}
/////////////////////
// Task Задача 10
//?Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип.
for (let elem of element.childNodes) {
  if (elem.nodeType == 1) {
    elem.innerHTML += elem.nodeType;
  } else {
    elem.data += elem.nodeType
  }
}
for (let elem of element.childNodes) {
  // alert(elem.textContent)
}
/////////////////////
// Task Задача 1
//?Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.
// знаходжу всі елементи лі і закидаю в псевдомасив
let arr = document.querySelectorAll('li');
// виводжу всі елементи лі через цикл
// пишу функцію, яка повертатиме суму цифр числа
function sum(str) {
  arr = str.split('');
  let sum = 0;
  for (let elem of arr) {
    sum += +elem
  }
  return sum;
}
let suma = 0;
for (let elem of arr) {
  if (sum(elem.textContent) === 6) {
    suma += +elem.textContent
  }
}
console.log(suma);
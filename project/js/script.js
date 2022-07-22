"use strict";




/////////////////////
// Task Задача 1
//?Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.
let div1 = document.querySelector('.div1');
let arr1 = [1, 2, 3, 4, 5];

for (let elem of arr1) {
  let p = document.createElement('p');
  p.textContent = elem;
  p.addEventListener('click', function () {
    p.textContent += '!'
  })

  div1.appendChild(p);
}
/////////////////////
// Task Задача 1,2
//?Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
let div2 = document.querySelector('.div2');
let ul2 = div2.querySelector('#elem')
let arr2 = [1, 2, 3, 4, 5];

for (let item of arr2) {
  let li = document.createElement('li');
  li.innerHTML = item;
  li.addEventListener('click', function func1() {
    alert(this.innerHTML)
    if (this.innerHTML.indexOf('!') == '-1')
      this.textContent += '!'
  })
  ul2.appendChild(li)
}
/////////////////////
// Task Задача 1
//?Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
let div3 = document.querySelector('.div3');
let tab3 = document.querySelector('#tab3')

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.innerHTML = 'x'
    tr.appendChild(td)
  }
  tab3.appendChild(tr)
}

/////////////////////
// Task Задача 4
//?Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
let div4 = document.querySelector('.div4');
let inp41 = div4.querySelector('#inp1');
let inp42 = div4.querySelector('#inp2');
let tab4 = div4.querySelector('#tab');
let btn4 = div4.querySelector('#btn');




btn4.addEventListener('click', function () {
  let a = Number(inp41.value);
  let b = Number(inp42.value);
  for (let i = 0; i < a; i++) {
    let tr = document.createElement('tr');
    console.log(tr);
    for (let j = 0; j < b; j++) {
      let td = document.createElement('td');
      td.innerHTML = 'x';
      tr.appendChild(td);
    }
    tab4.appendChild(tr);
  }
})
/////////////////////
// Task Задача 1
//?Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
let div5 = document.querySelector('.div5');
let tab5 = div5.querySelector('#tab');

for (let i = 0, k = 2; i < 5; i++) {
  let tr = document.createElement('tr');
  for (let j = 0; j < 5; j++) {
    let td = document.createElement('td');
    td.innerHTML = k;
    k += 2;
    tr.append(td);
  }
  tab5.append(tr);
}
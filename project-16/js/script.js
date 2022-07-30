"use strict";

/////////////////////
// Task Задача 1
//?Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.

/////////////////////
// Task Задача 2
//?Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.
let div1 = document.querySelector('.div1');
let elem1 = div1.querySelector('#elem1');

function appendText(elem, text) {
  elem.append(text);
}
appendText(elem1, 'text');

let ps1 = div1.querySelectorAll('p');

for (let p of ps1) {
  appendText(p, 'red')
}

/////////////////////
// Task Задача 3
//?Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.
let div2 = document.querySelector('.div2');
let inp2 = div2.querySelector('#inp');

function setValue(input, text) {
  input.value = text;
}

setValue(inp2, 'привіт');

/////////////////////
// Task Задача 1
//?Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
let div3 = document.querySelector('.div3');
let ps3 = div3.querySelectorAll('p');

function appendText2(arr, text) {
  for (let elem of arr) {
    elem.textContent += text;
    console.log();
  }
}

appendText2(ps3, 'green');


/////////////////////
// Task Задача 
//?Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.
let div4 = document.querySelector('.div4');
let ul4 = div4.querySelector('#ul');

// створюємо функцію appendElem
function appendElem2(elem, text) {
  // створюємо новий li
  let li = document.createElement('li');


  // додаємо текст
  li.textContent = text;

  // дадаємо li із текстом в ul
  elem.appendChild(li)
    ;
}

appendElem2(ul4, 'Варвара')


/////////////////////
// Task Задача 3
//?Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.
let arr4 = ['Віктор', "Мар'яна", 'Тетяна', 'Василина'];

for (let elem of arr4) {
  appendElem2(ul4, elem);
}

/////////////////////
// Task Задача 1
//?Допишите код представленной выше заготовки функции. Потестируйте работу готовой функции.
let div5 = document.querySelector('.div5');

// пишемо функцію сворення таблички та додавання її до DOM елемента
function createTable(rows, cols, parent) {
  let table = document.createElement('table');
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      let td = document.createElement('td');
      tr.appendChild(td);
    };
    table.appendChild(tr);
  };
  parent.appendChild(table)
};

// перевряємо нашу функцію
createTable(4, 5, div5);
/////////////////////
// Task Задача 1
//?Переделайте вашу функцию createTable в соответствии с описанным в теории.
function createTable2(rows, cols) {
  let table = document.createElement('table');
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      let td = document.createElement('td');
      tr.appendChild(td);
    };
    table.appendChild(tr);
  };
  return table;
};

let tab5 = createTable2(3, 4);
div5.appendChild(tab5);
/////////////////////
// Task Задача 1
//?створити функцію яка буде сворювати таблицю і заповнювати її даними із двохвимірного масиву
let div6 = document.querySelector('.div6');

function createTableByArr(arr) {
  let table = document.createElement('table');
  for (let subArr of arr) {
    let tr = document.createElement('tr');
    for (let elem of subArr) {
      let td = document.createElement('td');
      td.textContent = elem;
      tr.appendChild(td);
    };
    table.appendChild(tr);
  }
  return table;
};

let arr6 = [[1, 2, 3], [4, 5, 6],
[7, 8, 9]];

div6.appendChild(createTableByArr(arr6));

/////////////////////
// Task Задача 1
//?Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.
; (function (div, input1, input2, input3, btn) {
  let div1 = document.querySelector(div);
  let inp1 = div1.querySelector(input1);
  let inp2 = div1.querySelector(input2);
  let inp3 = div1.querySelector(input3);
  let btn1 = div1.querySelector(btn);

  btn1.addEventListener('click', function () {
    console.log(Number(inp1.value) + Number(inp2.value) + Number(inp3.value));
  })
})('.div7', '#inp1', '#inp2', '#inp3', '#btn');

/////////////////////
// Task Задача 1
//?Экспортируйте наружу одну из переменных и две любые функции.
; (function () {
  let str1 = 'переменная модуля';
  window.str1 = str1;
  window.func1 = func1;
  window.func2 = func2;

  let str2 = 'переменная модуля';
  let str3 = 'переменная модуля';

  function func1() {
    alert('функция модуля');
  }
  function func2() {
    alert('функция модуля');
  }
  function func3() {
    alert('функция модуля');
  }
})();
console.log(str1);
func1();
func2();
/////////////////////
// Task Задача 2
//?Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.
; (function () {
  let obj = {};
  let str1 = 'переменная модуля';
  let str2 = 'переменная модуля';
  let str3 = 'переменная модуля';
  obj.str1 = str1;
  obj.str2 = str2;
  obj.str3 = str3;

  obj.func1 = function func1() {
    alert('функция модуля');
  }
  obj.func2 = function func2() {
    alert('функция модуля');
  }
  obj.func3 = function func3() {
    alert('функция модуля');
  }
  obj.func4 = function func4() {
    alert('функция модуля');
  }
  obj.func5 = function func5() {
    alert('функция модуля');
  }
  window.obj = obj;
})();

console.log(obj.str1);
//////////////The separator/////////////
; (function () {
  let str = 'переменная модуля';

  function func() {
    alert('функция модуля');
  }

  window.func1 = func;
})();
let sam1 = 'rablik'
func1();
let object = { sam1, sam2: 'sam2', sam3: 'sam3' };
console.log(object.sam1);

/////////////////////
// Task Задача 1
//?Оформите этот код в виде модуля. Эспортируйте наружу все функции, кроме вспомогательной.
; (function () {
  function avg1(arr) {
    return sum(arr, 1) / arr.length;
  }

  function avg2(arr) {
    return sum(arr, 2) / arr.length;
  }

  function avg3(arr) {
    return sum(arr, 3) / arr.length;
  }

  // вспомогательная функция
  function sum(arr, pow) {
    let res = 0;

    for (let elem of arr) {
      res += elem ** pow;
    }

    return res;


  }
  window.avg = { avg1, avg2, avg3 }
})();
console.log(avg.avg2([1, 2, 3, 4, 5]));
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
/////////////////////
// Task Задача 1
//?Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
let div6 = document.querySelector('.div6');
let tab6 = div6.querySelector('#tab');
let arr6 = [[1, 2, 3], [4, 5, 6],
[7, 8, 9], [10, 11, 12]];


for (let subArr of arr6) {
  let tr = document.createElement('tr');
  for (let elem of subArr) {
    let td = document.createElement('td');
    td.textContent = elem ** 2;
    tr.appendChild(td);
  }
  tab6.appendChild(tr)
}
/////////////////////
// Task Задача 1
//?Выведите элементы этого массива в виде HTML таблицы.
let div7 = document.querySelector('.div7');
let tab7 = div7.querySelector('#tab');
let employees = [
  {
    name: 'employee1', age: 30, salary:
      400
  },
  {
    name: 'employee2', age: 31, salary:
      500
  },
  {
    name: 'employee3', age: 32, salary:
      600
  },
];

for (let elem of employees) {
  let tr = document.createElement('tr');

  let td1 = document.createElement('td');
  td1.textContent = elem.name;
  tr.append(td1);

  let td2 = document.createElement('td');
  td2.textContent = elem.age;
  td2.addEventListener('click', () => {
    td2.textContent = Number(td2.textContent) + 1;
  })
  tr.append(td2);

  let td3 = document.createElement('td');
  td3.textContent = elem.salary;
  td3.addEventListener('click', () => {
    td3.textContent = Number(td3.textContent) + (Number(td3.textContent) * 0.1);
  })
  tr.append(td3);

  tab7.append(tr);
}
/////////////////////
// Task Задача 1
//?Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
let div8 = document.querySelector('.div8');
let tab8 = div8.querySelector('#tab');
let btn8 = div8.querySelector('#btn');

btn8.addEventListener('click', function () {
  let tr = document.createElement('tr');
  for (let i = 1; i <= 3; i++) {
    let td = document.createElement('td');
    td.textContent = i;
    tr.append(td)
  }
  tab8.append(tr)
})
/////////////////////
// Task Задача 2
//?Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
let div9 = document.querySelector('.div9');
let tab9 = div9.querySelector('#tab');
let btn9 = div9.querySelector('#btn');
let counter = 2;

btn9.addEventListener('click', function () {
  let trs = div9.querySelectorAll('#tab tr');


  let tr = document.createElement('tr');
  counter++;
  console.log(counter);
  for (let i = 1; i <= counter; i++) {
    let td = document.createElement('td');
    tr.append(td);
  }
  tab9.append(tr);
  for (let tr of trs) {
    let td = document.createElement('td');
    tr.append(td)
  }
})
/////////////////////
// Task Задача 1
//?Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
let div10 = document.querySelector('.div10');
let tab10 = div10.querySelector('#tab');
let btn10 = div10.querySelector('#btn');
let tds10 = div10.querySelectorAll('#tab td');

btn10.addEventListener('click', function () {
  for (let td of tds10) {
    td.textContent = Number(td.textContent) * 2;
  }
})
/////////////////////
// Task Задача 1
//?Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
let div11 = document.querySelector('.div11');
let ul11 = div11.querySelector('#ul');
let btn11 = div11.querySelector('#btn');

btn11.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = 'new'
  ul11.append(li);
})
ul11.addEventListener('click', function (event) {
  event.target.remove();
})
/////////////////////
// Task Задача 1
//?Самостоятельно, не подсматривая в мой код, решите описанную задачу.
let div12 = document.querySelector('.div12');
let p12 = div12.querySelector('#p');
let a12 = div12.querySelector('#a12');
// console.log(a12);

a12.addEventListener('click', function (event) {
  p12.remove();
  event.preventDefault();
})
/////////////////////
// Task Задача 1
//?Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
let div13 = document.querySelector('.div13');
let ul13 = div13.querySelector('#ul');
let lis13 = div13.querySelectorAll('#ul li');

for (let li of lis13) {
  let a = document.createElement('a');
  a.href = '';
  a.textContent = ' remove';
  a.addEventListener('click', function (event) {
    li.remove();
    event.preventDefault();
  })
  li.append(a)
}
/////////////////////
// Task Задача 2
//?Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
let div14 = document.querySelector('.div14');
let tab14 = div14.querySelector('#tab');
let trs14 = div14.querySelectorAll('#tab tr');
console.log(trs14);

for (let tr of trs14) {
  let td = document.createElement('td');
  let a = document.createElement('a');
  a.href = '';
  a.textContent = 'remove';
  a.addEventListener('click', function (event) {
    tr.remove();
    event.preventDefault();
  })
  td.append(a);
  tr.append(td)
}
/////////////////////
// Task Задача 1
//?Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
let div15 = document.querySelector('.div15');
let p15 = div15.querySelector('#p');
let inp15 = div15.querySelector('#inp');

inp15.addEventListener('input', function () {
  p15.textContent = this.value;
})
/////////////////////
// Task Задача 2
//?Самостоятельно, не подсматривая в мой код, решите описанную задачу.
let div16 = document.querySelector('.div16');
let p16 = div16.querySelector('#p');

p16.addEventListener('click', function func() {
  let input = document.createElement('input');
  input.value = p16.textContent;
  input.addEventListener('blur', function () {
    p16.textContent = input.value;
    input.remove()
  })
  p16.parentElement.append(input);

})
/////////////////////
// Task Задача 1
//?Самостоятельно, не подсматривая в мой код, решите описанную задачу.
let div17 = document.querySelector('.div17');
let p17 = div17.querySelector('#p');

p17.addEventListener('click', function func17() {
  let input = document.createElement('input');
  input.value = p17.textContent;
  p17.textContent = '';
  p17.appendChild(input);

  input.addEventListener('blur', function () {
    p17.textContent = this.value;
    p17.addEventListener('click', func17)
  })


  p17.removeEventListener('click', func17)

})
/////////////////////
// Task Задача 1
//?Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.
let div18 = document.querySelector('.div18');
let lis18 = div18.querySelectorAll('#ul li');

for (let li of lis18) {
  li.addEventListener('click', function func18(event) {
    let input = document.createElement('input');
    input.value = event.target.textContent;
    li.textContent = '';

    li.appendChild(input);
    input.addEventListener('blur', function () {
      event.target.textContent = this.value;
      li.addEventListener('click', func18)
    })
    li.removeEventListener('click', func18)
  })
}
/////////////////////
// Task Задача 2
//?Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.
let div19 = document.querySelector('.div19');
let tds19 = div19.querySelectorAll('#tab td')

for (let td of tds19) {
  td.addEventListener('click', function func19() {
    let input = document.createElement('input');
    input.value = td.textContent;
    td.textContent = '';
    td.appendChild(input);

    input.addEventListener('blur', function () {
      td.textContent = this.value;
      td.addEventListener('click', func19);

    })
  })
  td.removeEventListener('click', func19)
}
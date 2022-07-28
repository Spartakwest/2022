"use strict";




/////////////////////
// Task Задача 1
//?Добавьте ссылку на удаление в конец каждого абзаца.Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.
let div1 = document.querySelector('.div1');
let parent1 = div1.querySelector('#parent');

let ps1 = div1.querySelectorAll('#parent p');
let spans1 = div1.querySelectorAll('#parent span')

for (let elem of ps1) {
  let remove = document.createElement('a');
  remove.href = '';
  remove.innerHTML = 'remove';
  remove.addEventListener('click', (event) => {
    elem.remove();
    event.preventDefault();
  })
  elem.append(remove)
}

for (let elem of spans1) {
  elem.addEventListener('click', function func1(event) {
    let input = document.createElement('input');
    input.value = elem.textContent;
    elem.textContent = '';
    elem.appendChild(input);
    input.addEventListener('blur', function (event) {
      elem.textContent = this.value;
      elem.addEventListener('click', func1)
    })
    elem.removeEventListener('click', func1)
  })
}
/////////////////////
// Task Задача 2
//?Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.
let div2 = document.querySelector('.div2');
let ps2 = div2.querySelectorAll('#parent p');

for (let elem of ps2) {
  let span = document.createElement('span');
  span.textContent = elem.textContent;
  elem.textContent = '';
  span.addEventListener('click', function func2(event) {
    let input = document.createElement('input');
    input.value = span.textContent;
    span.textContent = '';
    span.appendChild(input);
    input.addEventListener('blur', function () {
      span.textContent = this.value;
      span.addEventListener('click', func2)
    })
    span.removeEventListener('click', func2)
  })
  elem.appendChild(span);
  let remove = document.createElement('a');
  remove.href = '';
  remove.textContent = ' remove';
  remove.addEventListener('click', function (event) {

    elem.remove();
    event.preventDefault();
  })
  elem.appendChild(remove)
}
/////////////////////
// Task Задача 1,2
//?Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).
let div3 = document.querySelector('.div3');
let ps3 = div3.querySelectorAll('p');

for (let elem of ps3) {
  let span = document.createElement('span');
  span.textContent = elem.textContent;
  elem.textContent = '';
  elem.appendChild(span);


  let underline = document.createElement('a');
  underline.href = '';
  underline.textContent = ' перекреслити';
  underline.addEventListener('click', function (event) {
    span.classList.add('underline');
    event.preventDefault();
    this.remove();
  })
  elem.appendChild(underline)
}
/////////////////////
// Task Задача 3,4
//?Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.
let div4 = document.querySelector('.div4');
let trs4 = div4.querySelectorAll('tr');

for (let elem of trs4) {
  let td = document.createElement('td');
  let a = document.createElement('a');
  a.href = '';
  a.textContent = 'пофарбувати';
  td.appendChild(a);
  elem.appendChild(td);
  let counter = 0;
  a.addEventListener('click', function (event) {
    if (counter == 0) {
      elem.classList.add('green');
      event.preventDefault();
      counter += 1;
    } else {
      elem.classList.remove('green');
      event.preventDefault();
      counter = 0;
    }

  })
}
/////////////////////
// Task Задача 1
//?Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.
let div5 = document.querySelector('.div5');
let p5 = div5.querySelector('#p');
let btn5 = div5.querySelector('#btn');

let func5 = function () {
  let counter = 0;
  return function () {
    if (counter == 0) {
      counter += 1;
      p5.classList.add('hidden');
    } else {
      counter = 0;
      p5.classList.remove('hidden')
    }
  }
}();

btn5.addEventListener('click', func5)
/////////////////////
// Task Задача 1
//?Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
let div6 = document.querySelector('.div6');
let btns6 = div6.querySelectorAll('button');

for (let btn of btns6) {
  btn.addEventListener('click', function () {
    let p = div6.querySelector('#' + this.dataset.p);
    p.classList.toggle('hidden')
  })
}
/////////////////////
// Task Задача 2
//?Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
let div7 = document.querySelector('.div7');
let ps7 = div7.querySelectorAll('p');
let btns7 = div7.querySelectorAll('button');

for (let i = 0; i < btns7.length; i++) {
  btns7[i].addEventListener('click', () => {
    ps7[i].classList.toggle('hidden')
  })
}
/////////////////////
// Task Задача 3
//?Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
let div8 = document.querySelector('.div8');
let btns8 = div8.querySelectorAll('button');

for (let btn of btns8) {
  btn.addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('hidden')
  })
}


/////////////////////
// Task Задача 1,2
//?Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
let div9 = document.querySelector('.div9');
let ul9 = div9.querySelector('#ul');

ul9.addEventListener('click', function (event) {
  let li = event.target.closest('li');
  if (li) {
    li.classList.toggle('active')
  }
})
/////////////////////
// Task Задача 1
//?Разберите мой код, а затем самостоятельно повторите решение этой задачи.
let div10 = document.querySelector('.div10');
let ul10 = div10.querySelector('#ul');
let color = 'color1';

ul10.addEventListener('click', function (event) {
  let li = event.target.closest('li');
  if (li) {
    if (color == 'color1') {
      color = 'color2';
    } else {
      color = 'color1'
    }
    li.classList.add(color)
  }
})
//////////////The separator/////////////

/////////////////////
// Task Задача 1
//?Дан массив. Выведите его элементы в виде списка ul.

/////////////////////
// Task Задача 2
//?Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.

/////////////////////
// Task Задача 3
//?Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.

/////////////////////
// Task Задача 4
//?Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.

/////////////////////
// Task Задача 5
//?Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.
let div11 = document.querySelector('.div11');
let arr11 = ['Віктор', "Мар'яна", 'Тетяна'];
let ul11 = document.createElement('ul');
let input11 = document.createElement('input');


function del(elem) {
  // створюємо кнопку видалення
  let a1 = document.createElement('a');
  a1.href = '';
  a1.textContent = ' видалити';
  a1.addEventListener('click', function (event) {
    this.parentElement.remove();
    event.preventDefault();
  });
  elem.appendChild(a1);
  // створюємо кнопку перекреслення
  let a2 = document.createElement('a');
  a2.href = '';
  a2.textContent = ' перекреслити';
  a2.addEventListener('click', function (event) {
    this.previousElementSibling.previousElementSibling.classList.toggle('cross');
    event.preventDefault();
  });
  elem.appendChild(a2)
}


for (let i = 0; i < arr11.length; i++) {
  let li = document.createElement('li');
  let span = document.createElement('span')
  span.textContent = arr11[i];
  li.appendChild(span);
  del(li);
  ul11.appendChild(li);


};

ul11.addEventListener('click', function func11(event) {
  let span = event.target.closest('span');
  if (span) {
    let input = document.createElement('input');
    input.value = span.textContent;
    span.textContent = '';
    span.appendChild(input);
    input.addEventListener('blur', () => {
      span.textContent = input.value;
      ul11.addEventListener('click', func11)
    })
    ul11.removeEventListener('click', func11)
  }
})

input11.addEventListener('blur', function () {
  let li = document.createElement('li');
  let span = document.createElement('span')
  span.textContent = this.value;
  li.appendChild(span)
  del(li);
  input11.insertAdjacentElement('beforeBegin', li)
});

ul11.appendChild(input11);
div11.appendChild(ul11);

/////////////////////
// Task Задача 6
//?Выведите этих работников в HTML таблице.

/////////////////////
// Task Задача 7
//?Добавьте ячейкам созданной таблицы возможность редактирования.

/////////////////////
// Task Задача 8
//?Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

/////////////////////
// Task Задача 9
//?Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.
//оголошення змінних
let div12 = document.querySelector('.div12');
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
let tab12 = document.createElement('table');
let inp121 = div12.querySelector('#inp1');
let inp122 = div12.querySelector('#inp2');
let inp123 = div12.querySelector('#inp3');
let btn12 = div12.querySelector('#btn')


// запускаємо цикл, яким проходимо елементи масиву
for (let elem of employees) {
  // створюємо ряди
  let tr = document.createElement('tr');
  for (let key in elem) {
    // створюємо сели
    let td = document.createElement('td');
    td.textContent = elem[key];

    //додаємо можливість редагувати сели
    change(td);

    // дадаємо сели в ряди
    tr.appendChild(td);

  }
  // дадаємо кнопку видалити
  del2(tr);
  // додаємо ряди в табличку
  tab12.appendChild(tr);
}

// створюємо функцію можливості редагування клітинок
function change(elem) {
  elem.addEventListener('click', function func12() {
    let input = document.createElement('input');
    input.value = this.textContent;
    this.textContent = '';
    input.addEventListener('blur', () => {
      this.textContent = input.value;
      this.addEventListener('click', func12)
    })
    this.appendChild(input);
    this.removeEventListener('click', func12)
  })
}


// додаємо табличку в дівчик
div12.prepend(tab12);

// пишемо функцію яка додаватиме в ряд ще один сел із силкою на видалення ряду

function del2(elem) {
  let td = document.createElement('td');
  let a = document.createElement('a');
  a.href = '';
  a.textContent = 'видалити';
  a.addEventListener('click', function (event) {
    elem.remove();
    event.preventDefault();
  });
  td.appendChild(a);
  elem.appendChild(td);
}

// дадаємо функціонал кнопці
btn12.addEventListener('click', function () {
  let tr = document.createElement('tr');
  let inps = div12.querySelectorAll('input');
  for (let i = 0; i < 3; i++) {
    let td = document.createElement('td');
    td.textContent = inps[i].value;
    inps[i].value = '';
    change(td);
    tr.appendChild(td);
  }
  del2(tr);
  tab12.appendChild(tr)
})
/////////////////////
// Task Задача 1
//? Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор.
function setText(selector, text) {
  let elem = document.querySelector(selector);
  elem.textContent = text;
}
/////////////////////
// Task Задача 2
//?Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.
let div13 = document.querySelector('.div13');

function setAttr(selector, atreb, text) {
  let elem = div13.querySelector(selector);
  elem.setAttribute(atreb, text);
};

setAttr('#elem1', 'id', 'elem3');
/////////////////////
// Task Задача 1
//?Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
let div14 = document.querySelector('.div14');

function appendText(selector, text) {
  let elems = div14.querySelectorAll(selector);
  for (let elem of elems) {
    elem.append(text);
  }
}

appendText('p', 'Віктор')
/////////////////////
// Task Задача
//?Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.

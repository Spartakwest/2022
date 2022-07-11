"use strict";


/////////////////////
// Task Задача 1
//?Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.
let first = document.querySelector('#elem1');
let second = document.querySelector('#elem2');
let thirth = document.querySelector('#elem3');
console.log(first, second, thirth);
/////////////////////
// Task Задача 2
//?Получите ссылку на первый абзац из дива с id, равным block.
let elem1 = document.querySelector('#block p');
console.log(elem1);
/////////////////////
// Task Задача 3
//?Получите ссылку на первый абзац из дива с классом block.
let elem2 = document.querySelector('.block p');
console.log(elem2);
/////////////////////
// Task Задача 4
//?Получите ссылку на первый абзац с классом www.
let elem3 = document.querySelector('.www');
console.log(elem3);
/////////////////////
// Task Задача 1
//?Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.
let btn1 = document.querySelector('#button1');
let btn2 = document.querySelector('#button2');
let btn3 = document.querySelector('#button3');
btn1.addEventListener('click', function () {
  alert('нажата кнопка 1')
})
btn2.addEventListener('click', function () {
  alert('2')
});
btn3.addEventListener('click', function () {
  alert('3')
})
/////////////////////
// Task Задача 1
//?Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение. 
let btndb = document.querySelector('#btndb');
btndb.addEventListener('dblclick', function () { alert('ов, кнопка нажата 2 рази!') });
/////////////////////
// Task Задача 2
//?Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.
let btnover = document.querySelector('#btnover');
btnover.addEventListener('mouseover', function () {
  alert('ти на мане навів мишку')
})
/////////////////////
// Task Задача 3
//?Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.
let btnout = document.querySelector('#btnout');
btnout.addEventListener('mouseout', function () {
  alert('ой забрав з мене ти мишку')
})

/////////////////////
// Task Задача 1
//?Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
function func1() {
  alert(1);
}
function func2() {
  alert(2);
}
let btnOne = document.querySelector('#button-1');
let btnTwo = document.querySelector('#button-2');
btnOne.addEventListener('click', func1);
btnTwo.addEventListener('click', func2);

/////////////////////
// Task Задача 1
//?Привяжите эту функцию ко всем 5-ти абзацам.
function func() {
  alert('message');
}
let el1 = document.querySelector('#elem-1');
let el2 = document.querySelector('#elem-2');
let el3 = document.querySelector('#elem-3');
let el4 = document.querySelector('#elem-4');
let el5 = document.querySelector('#elem-5');
el1.addEventListener('click', func);
el2.addEventListener('click', func);
el3.addEventListener('click', func);
el4.addEventListener('click', func);
el5.addEventListener('click', func);

/////////////////////
// Task Задача 1
//?Привяжите все эти функции к нашему абзацу.
function func3() {
  alert('3');
}
let elem = document.querySelector('#elem');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3)
/////////////////////
// Task Задача 2
//?Дана кнопка. Привяжите к ней три анонимных обработчика двойного клика по ней. Пусть первый обработчик выводит число 1, второй обработчик - число 2, а третий - число 3.
let btndbl = document.querySelector('#btn-1');
btndbl.addEventListener('dblclick', function () {
  alert('1')
});
btndbl.addEventListener('dblclick', function () {
  alert('2')
});
btndbl.addEventListener('dblclick', function () {
  alert('3')
})
/////////////////////
// Task Задача 1
//?Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
let one = document.querySelector('#one');
let seven = document.querySelector('#seven');
let sum = document.querySelector('#sum');
function suma() {
  alert(Number(one.innerHTML) + Number(seven.innerHTML));
}
sum.addEventListener('click', suma);
/////////////////////
// Task Задача 2
//?Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let btnp1 = document.querySelector('#btnp1');
let btnp2 = document.querySelector('#btnp2');
btnp1.addEventListener('click', function () {
  alert(p1.innerHTML)
});
btnp2.addEventListener('click', function () {
  alert(p2.innerHTML)
})
/////////////////////
// Task Задача 3
//?Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.
let p31 = document.querySelector('#p31');
let btnp311 = document.querySelector('#btnp311');
let btnp312 = document.querySelector('#btnp312');
btnp311.addEventListener('click', function () {
  p31.innerHTML = 'привіт'
})
btnp312.addEventListener('click', function () {
  p31.innerHTML = 'папа'
})
/////////////////////
// Task Задача
//?
"use strict";


/////////////////////
// Task Задача 1
//?Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута. После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том, что выведется новый текст инпута.
let i1 = document.querySelector('#i1');
let btni1 = document.querySelector('#btni1');
btni1.addEventListener('click', function () {
  alert(i1.value)
})
/////////////////////
// Task Задача 2
//?Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
let i2 = document.querySelector('#i2');
let btni2 = document.querySelector('#btni2');
btni2.addEventListener('click', function () {
  i2.value = 'Віктор'
})
/////////////////////
// Task Задача 3
//?Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.
let i3 = document.querySelector('#i3');
let btni3 = document.querySelector('#btni3');
let pi3 = document.querySelector('#pi3');
btni3.addEventListener('click', function () {
  pi3.innerHTML = pi3.innerHTML + i3.value
})
/////////////////////
// Task Задача 4
//?Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
let i41 = document.querySelector('#i41');
let i42 = document.querySelector('#i42');
let btni4 = document.querySelector('#btni4');
btni4.addEventListener('click', function () {
  i42.value = Number(i41.value) ** 2
})
/////////////////////
// Task Задача 5
//?Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.
let i51 = document.querySelector('#i51');
let i52 = document.querySelector('#i52');
let btni5 = document.querySelector('#btni5');
btni5.addEventListener('click', function () {
  [i52.value, i51.value] = [i51.value, i52.value]
})
/////////////////////
// Task Задача 6
//?Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.
let in1 = document.querySelector('#in1');
let in2 = document.querySelector('#in2');
let in3 = document.querySelector('#in3');
let in4 = document.querySelector('#in4');
let in5 = document.querySelector('#in5');
let pin1 = document.querySelector('#pin1');
let btnin1 = document.querySelector('#btnin1');
btnin1.addEventListener('click', function () {
  pin1.innerHTML = (+in1.value + +in2.value + +in3.value + +in4.value + +in5.value) / 5
})

/////////////////////
// Task Задача 1
//?Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
let focus = document.querySelector('#focus');
focus.addEventListener('focus', function () {
  focus.value = '1';
})
focus.addEventListener('blur', function () {
  focus.value = '2'
})
/////////////////////
// Task Задача 2
//?Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.
let focus2 = document.querySelector('#focus2');
focus2.addEventListener('blur', function () {
  alert(Number(focus2.value) ** 2)
})
/////////////////////
// Task Задача 3
//?Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.
let focus3 = document.querySelector('#focus3');
focus3.addEventListener('focus', function () {
  focus3.value = ''
})
/////////////////////
// Task Задача 1
//?Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
let div11 = document.querySelector('#div11');
let btn11 = document.querySelector('#btn11');
btn11.addEventListener('click', function () {
  alert(div11.className)
})
/////////////////////
// Task Задача 2
//?Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
let div2 = document.querySelector('#div2');
let bdiv2 = document.querySelector('#bdiv2');
bdiv2.addEventListener('click', () => div2.className = 'mandata')

/////////////////////
// Task Задача 3
//?Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
let div3 = document.querySelector('#div3');
let bdiv3 = document.querySelector('#bdiv3');
function arr(str) {
  console.log(str.split(' '));
};
bdiv3.addEventListener('click', () => {
  arr(div3.className)
})
/////////////////////
// Task Задача 1
//?Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.
console.log(document.querySelector('#image').src);


/////////////////////
// Task Задача 1
//?Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
let this1 = document.querySelector('#this1');

this1.addEventListener('focus', function () {
  this.value = 1;
});
this1.addEventListener('blur', function () {
  this.value = 2;
})
/////////////////////
// Task Задача 2
//?Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
let bthis1 = document.querySelector('#bthis1');
bthis1.addEventListener('click', function () {
  this.value = Number(this.value) + 1
}
)
/////////////////////
// Task Задача 3
//?Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
let par1 = document.querySelector("#par1");
let par2 = document.querySelector("#par2");
let par3 = document.querySelector("#par3");
let par4 = document.querySelector("#par4");
let par5 = document.querySelector("#par5");
par1.addEventListener('click', oblate);
par2.addEventListener('click', oblate);
par3.addEventListener('click', oblate);
par4.addEventListener('click', oblate);
par5.addEventListener('click', oblate);
function oblate() {
  this.innerHTML = this.innerHTML + '!'
}
/////////////////////
// Task Задача 4
//?Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.
let blur1 = document.querySelector('#blur1');
let blur2 = document.querySelector('#blur2');
let blur3 = document.querySelector('#blur3');
function square() {
  alert(Number(this.value) ** 2)
}
blur1.addEventListener('blur', square);
blur2.addEventListener('blur', square);
blur3.addEventListener('blur', square);


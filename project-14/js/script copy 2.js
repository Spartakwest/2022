"use strict";


/////////////////////
// Task Задача 1
//?Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
let div1 = document.querySelector('.div1');
let radios1 = div1.querySelectorAll('input[type="radio"]');
let p1 = div1.querySelector('#p');
let btn1 = div1.querySelector('#btn');
btn1.addEventListener('click', () => {
  for (let radio of radios1) {
    if (radio.checked) {
      p1.textContent = 'Значення: ' + radio.value
    }
  }
})
/////////////////////
// Task Задача 1
//?Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
let div2 = document.querySelector('.div2');
let p2 = div2.querySelector('#p');
let inp2 = div2.querySelector('#inp');
let btn2 = div2.querySelector('#btn');

inp2.addEventListener('change', () => {
  p2.textContent = inp2.value
})
btn2.addEventListener('click', () => {
  inp2.value = 'змінено'
})
/////////////////////
// Task Задача 2
//?Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
let div3 = document.querySelector('.div3');
let check3 = div3.querySelector('#check');
check3.addEventListener('change', () => {
  alert(check3.checked)
})
/////////////////////
// Task Задача 4
//?Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.
let div4 = document.querySelector('.div4');
let inp4 = div4.querySelector('#inp');


inp4.addEventListener('change', () => {
  if (inp4.value.length < 5) {
    inp4.style.border = '1px solid green';
  } else {
    inp4.style.border = '1px solid red'
  }
})
/////////////////////
// Task Задача 1
//?Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
let div5 = document.querySelector('.div5');
let inp5 = div5.querySelector('#inp');
let btn5 = div5.querySelector('#btn');


inp5.addEventListener('input', () => {
  if (inp5.value.length >= 5) {
    alert('введено 5 символів або більше')
  }
})
btn5.addEventListener('click', () => {
  inp5.value = 'змінено'
})
/////////////////////
// Task Задача 2
//?Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
let div6 = document.querySelector('.div6');
let inp6 = div6.querySelector('#inp');
let p6 = div6.querySelector('#p');



inp6.addEventListener('input', () => {
  if (inp6.value.length <= 5) { p6.textContent = 'ще можна ввести ' + (5 - inp6.value.length) + ' символ(ів)' } else {
    p6.textContent = 'введено на ' + (inp6.value.length - 5) + ' символів більше'
  }

})
/////////////////////
// Task Задача 1
//?Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.
let div7 = document.querySelector('.div7');
let inp71 = div7.querySelector('#inp1');
let inp72 = div7.querySelector('#inp2');

inp71.addEventListener('input', () => {
  if (inp71.value.length == 2) {
    inp72.focus();
  }
})
inp72.addEventListener('input', () => {
  if (inp72.value.length == 2) {
    !inp72.blur();
  }
})


/////////////////////
// Task Задача 1
//?Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
let div8 = document.querySelector('.div8');
let select8 = div8.querySelector('#select');
let btn8 = div8.querySelector('#btn');
let p8 = div8.querySelector('#p');



btn8.addEventListener('click', () => {
  p8.innerHTML = select8.value;
})
/////////////////////
// Task Задача 2
//?Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.
let div9 = document.querySelector('.div9');
let select9 = div9.querySelector('#select');

select9.addEventListener('change', () => {
  let a = Number(select9.value);
  console.log(a / 4);
  if ((a % 4 == 0) || (a % 400 == 0) || (a % 100 == 0)) {
    alert('це високосний рік');
  } else {
    alert('це звичайний рік')
  }
})
/////////////////////
// Task Задача 3
//?Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
let div10 = document.querySelector('.div10');
let select10 = div10.querySelector('#select');

select10.addEventListener('change', () => {
  if (select10.value <= 5) {
    alert('Вибрано робочий день')
  } else {
    alert('Вибрано вихідний день')
  }
})


/////////////////////
// Task Задача 1
//?Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий месяц.
let div11 = document.querySelector('.div11');
let select11 = div11.querySelector('#select');
let date = new Date();

select11.value = date.getMonth();


/////////////////////
// Task Задача 1
//?Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
let div12 = document.querySelector('.div12');
let select12 = div12.querySelector('#select');
let inp12 = div12.querySelector('#inp');

inp12.addEventListener('blur', () => {
  select12.selectedIndex = Number(inp12.value)
})
/////////////////////
// Task Задача 2
//?Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.
let div13 = document.querySelector('.div13');
let select13 = div13.querySelector('#select');

select13.selectedIndex = date.getDay();
/////////////////////
// Task Задача 1
//?Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
let div14 = document.querySelector('.div14');
let select14 = div14.querySelector('#select');

for (let option of select14) {
  option.innerHTML += ' ' + option.value
}

/////////////////////
// Task Задача 1
//?Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.

let div15 = document.querySelector('.div15');
let select15 = div15.querySelector('#select');

for (let option of select15) {
  if (option.selected) {
    option.text += '!';
  } else {
    option.text += '?'
  }
}
/////////////////////
// Task Задача 2
//?Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
let div16 = document.querySelector('.div16');
let select16 = div16.querySelector('#select');
let lastOpt16 = select16[select16.length - 1];
let btn16 = div16.querySelector('#btn');

btn16.addEventListener('click', () => {
  lastOpt16.selected = true;
})
/////////////////////
// Task Задача 3
//?Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
let div17 = document.querySelector('.div17');
let select17 = div17.querySelector('#select');
let btn17 = div17.querySelector('#btn');

btn17.addEventListener('click', () => {
  alert(select17[select17.selectedIndex].text)
})
/////////////////////
// Task Задача 4
//?Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
let div18 = document.querySelector('.div18');
let select18 = div18.querySelector('#select');
let btn18 = div18.querySelector('#btn');

btn18.addEventListener('click', () => {
  select18[select18.selectedIndex].text += '!'
})
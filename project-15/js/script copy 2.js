"use strict";




/////////////////////
// Task Задача 5
//?Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
let div5 = document.querySelector('.div5');
let inp5 = div5.querySelector('#inp');
let btn5 = div5.querySelector('#btn');
let p5 = div5.querySelector('#p');

btn5.addEventListener('click', function () {
  p5.textContent = inp5.value;
  let timerId = setInterval(function () {
    p5.textContent = Number(p5.textContent) - 1;
    if (p5.textContent == 0) {
      clearInterval(timerId);
    }
  }, 1000)
})
/////////////////////
// Task Задача 6
//?Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
let div6 = document.querySelector('.div6');
let p6 = div6.querySelector('#p');
let btn61 = div6.querySelector('#btn1');
let btn62 = div6.querySelector('#btn2');

let timerId6;

btn61.addEventListener('click', function () {
  timerId6 = setInterval(function () {
    p6.textContent = Number(p6.textContent) + 1;
  }, 1000)
});
btn62.addEventListener('click', function () {
  clearInterval(timerId6);
})
/////////////////////
// Task Задача 7
//?Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
let div7 = document.querySelector('.div7');
let p7 = div7.querySelector('#p');

setInterval(function () {
  if (p7.style.color == 'green') {
    p7.style.color = 'red';
  } else {
    p7.style.color = 'green'
  }
}, 1000)
/////////////////////
// Task Задача 8
//?Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце:
let div8 = document.querySelector('.div8');
let p8 = div8.querySelector('#p');


setInterval(function () {
  let date = new Date();
  p8.textContent = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds()
}, 1000)
/////////////////////
// Task Задача 1
//?Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
let div9 = document.querySelector('.div9');
let p9 = div9.querySelector('#p');

setTimeout(function () {
  p9.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi at
  fuga culpa reprehenderit sequi odio, minima deserunt temporibus. Quia
  excepturi aspernatur nisi non eaque ut quidem perferendis, voluptatibus
  quos?`
}, 10000)
/////////////////////
// Task Задача 2
//?Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды выведите число 3. И так далее до бесконечности.
let i = 0;
function timer() {

  setTimeout(function () {
    console.log(i++);
    timer();
  }, 1000);

}
timer();
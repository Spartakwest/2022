"use strict";



/////////////////////
// Task Задача 1
//?Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
let inp = document.querySelector('#inp');
let pinp = document.querySelector('#pinp');
inp.addEventListener('blur', () => {
  pinp.innerHTML += inp.value
})
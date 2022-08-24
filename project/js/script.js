"use strict";


; (function (determinant) {
  let div = document.querySelector(determinant);
  let header = div.querySelector('.header');
  let tds = div.querySelectorAll('td');
  let arr = [];

  // функція рандомних чисел від 1 до 100
  function getRandom() {
    return Math.ceil(Math.random() * 100) + 1
  }
  // функція, яка записує 10 рандомних чисел
  for (let i = 1; i <= 10; i++) {
    arr.push(getRandom());
  }
  console.log(arr);

  for (let number of arr) {
    tds[number - 1].style.backgroundColor = 'red'
  }

  for (let td of tds) {
    td.addEventListener('click', function () {
      td.style.backgroundColor = 'green'
    })
  }
})('.div1');
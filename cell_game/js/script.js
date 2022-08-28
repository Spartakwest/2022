"use strict";


; (function (determinant) {
  let div = document.querySelector(determinant);
  let header = div.querySelector('.header');
  let tds = div.querySelectorAll('td');
  let arr = [];
  let counter = div.querySelector('#counter');

  // функція рандомних чисел від 1 до 100
  function getRandom() {
    return Math.ceil(Math.random() * 100) + 1
  }
  // функція, яка записує 10 рандомних чисел
  while (arr.length <= 9) {
    let a = getRandom();
    if (!arr.includes(a))
      arr.push(a);
  }
  console.log(arr);


  for (let td of tds) {
    td.addEventListener('click', function () {
      if (arr.includes(Number(td.getAttribute('id').substring(td.getAttribute('id').indexOf('_') + 1)))) {
        td.style.backgroundColor = 'green'
        counter.textContent = Number(counter.textContent) - 1;
      } else {
        td.style.backgroundColor = 'red'
      }

    })
  }
})('.div1');
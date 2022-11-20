"use strict";
// В качестве первого этапа сделаем так, чтобы по нажатию на кнопку текст из текстареа добавлялся в массив и при этом в меню добавлялась ссылка для этой записи.
let newItem = document.querySelector('.newItem');
let save = document.querySelector('.save');
let textarea = document.querySelector('.textarea');
let list = document.querySelector('.list');
let text = '';
let pMode = document.querySelector('.mode');
let arr = [
  'text 1', 'text 2', 'text 3',
];


newItem.addEventListener('click', function () {
  pMode.textContent = 'створення';
  textarea.value = '';
  save.dataset.mode = 'create';
  textarea.classList.remove('update');
  textarea.classList.add('create')
});

list.addEventListener('click', function (event) {
  let lis = document.querySelectorAll('.item');
  for (let elem of lis) {
    elem.classList.remove('active');
  }
  let li = event.target.closest('li');
  if (li) {
    pMode.textContent = 'редагування';
    textarea.classList.remove('create');
    textarea.classList.add('update');
    save.setAttribute('data-mode', 'update')
    li.classList.add('active');
    textarea.value = arr[li.dataset.key - 1]
  }
})

save.addEventListener('click', function () {
  let mode = this.dataset.mode;
  if (mode == 'create') {
    arr.push(textarea.value);
    let li = document.createElement('li');
    li.textContent = 'запис ' + arr.length;
    li.classList.add('item');
    li.setAttribute('data-key', arr.length)
    list.appendChild(li);
    console.log(arr);
  } else if (mode == 'update') {
    let active = document.querySelector('.active');
    let number = active.dataset.key;
    arr[Number(number) - 1] = textarea.value;
  }
})
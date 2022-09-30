"use strict";
// Оголошення змінних
let now = new Date();
let counter = 1;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
// визначення функції кнопок
prev.addEventListener('click', function(){
    counter -= 1;
    render();
})
next.addEventListener('click', function(){
    counter += 1;
    render();
})


let ul = document.querySelector('.list__item');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад' ,'Грудень'];


// функції

// функація виділення сьогоднішнього дня




// визначення місяця та року
function render(){
    function stilization(elem){
    if(elem.innerHTML == now.getDate() && endMonth.getMonth() == now.getMonth() && endMonth.getFullYear() == now.getFullYear()){
        elem.style.color = 'red';
    } else {
        elem.style.color = 'green';
    }
}
    let endMonth = new Date(now.getFullYear(), now.getMonth() + counter, 0);
// обнулення
    month.textContent = '';
    year.textContent = '';
    ul.innerHTML = '';
    month.textContent = months[endMonth.getMonth()];
    year.textContent = endMonth.getFullYear();
    for(let i = 1; i <= endMonth.getDate(); i ++){
        let li = document.createElement('li');
        li.textContent = i;
        stilization(li);
        ul.appendChild(li);
        // console.log(now.getDate(), endMonth.getMonth(), endMonth.getDate())
}
}

render();



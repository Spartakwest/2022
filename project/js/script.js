"use strict";

let display = document.querySelector('.display');

let table = document.querySelector('.table');
let str = '';

table.addEventListener('click', function (event){
    let td = event.target.closest('td');

    if(td){
        console.log(td.innerHTML);
       str += td.innerHTML;
}
display.value = str;
}
)

"use strict";

let display = document.querySelector('.display');

let table = document.querySelector('.table');
let str = '';
let caps = document.querySelector('.caps');

table.addEventListener('click', function (event){
    let td = event.target.closest('td');

    if(td && !(td.classList.contains('ac'))){
        console.log(td.innerHTML);
        if(caps.classList.contains('smart')){
            str += td.innerHTML.toUpperCase();}
            else {
              str += td.innerHTML
          }
      } else{
        console.log('else')
        if(td.classList.contains('clear')){
            str = '';
        } else if(td.classList.contains('caps')){
            caps.classList.toggle('smart')
        }
    }

    display.value = str;
}
)

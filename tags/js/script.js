"use strict";

let menu = document.querySelector('.menu');
let menuItems = menu.children;
let tabs = document.querySelectorAll('.tab');

for(let j = 0; j < 3; j ++){
    menuItems[j].addEventListener('click', function(){
        for(let i = 0; i < 3; i ++){
            menuItems[i].classList.remove('active');
            tabs[i].classList.remove('active')
        }
    menuItems[j].classList.add('active');
    tabs[j].classList.add('active')
    });
}

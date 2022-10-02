"use strict";

let toggles = document.querySelectorAll('.toggle');

for(let toggle of toggles){
    let spoiler = toggle.parentElement.nextElementSibling;
    toggle.addEventListener('click', function(){
        spoiler.classList.toggle('active')
    })
}

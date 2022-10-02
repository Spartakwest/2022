"use strict";

let links = document.querySelectorAll('.link')

for(let i = 0; i < links.length; i ++){
    links[i].addEventListener('click', function() {
        if(links[i].closest('.tab').classList.contains('active')){
           links[i].closest('.tab').classList.toggle('active')
        } else {
            for(let i = 0; i < links.length; i ++){
            links[i].closest('.tab').classList.remove('active')
        };
            links[i].closest('.tab').classList.add('active');
        }


    })
    }

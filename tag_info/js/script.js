"use strict";

let input = document.querySelector('.input');
let info = document.querySelector('.info')
// база даних
let base = {
'p':'параграф, лінійний тег забезпечує виведення тексту на екран',
'i':'курсиво',
'b':'жирний',
'h':'заголовки',
'img':'картинка'
};
// масив із ключами
let keys = Object.keys(base);


input.addEventListener('keydown', function(event){
    let tag = input.value;
    if(event.key == 'Enter'){
        if(keys.includes(input.value)){
            info.innerHTML = base[tag];
        } else{
            info.innerHTML = 'інформація про даний тег відсутна в базі даних'
        }
    }
})

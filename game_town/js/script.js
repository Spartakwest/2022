"use strict";

let field = document.querySelector('.field');
let message = document.querySelector('.message');
let cities = [];

// реалізація гри в міста
// перший вхід
// користувач пише перше місто і якщо масив пустий то потрібно вписати місто в масив, але з маленької літери
// дальше повідомленням вивести знизу введене місто
function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

field.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        // умова якщо масив пустий
        if(cities.length == 0){
           cities.push(String(field.value).toLowerCase());
           message.textContent = capFirst(String(cities[0]));
           field.value = '';
        } else if(cities.length != 0){
            let newItem = String(field.value).toLowerCase();
            field.value = '';
            let lastWord = String(cities[cities.length - 1]);
            console.log(lastWord);
            if(newItem[0] == lastWord[lastWord.length - 1] && !(cities.includes(newItem))){
                cities.push(newItem);
                message.textContent = capFirst(String(cities[cities.length - 1]));
            } else if(cities.includes(newItem)){
                message.textContent = 'Ви ввели назву, яка вже була, будь ласка, введіть іншу'
            } else if(newItem[0] != lastWord[lastWord.length - 1]){
                message.textContent = 'Введіть, будь ласка, назву, яка починається на : ' + '`' + lastWord[lastWord.length - 1] + '`';
            }
        }

    }
})

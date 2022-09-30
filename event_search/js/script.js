"use strict";

let input = document.querySelector('#input');
let table = document.querySelector('#table');

let data = {
    1998:[['31.07.1998','день народження','народився Слободян Віктор Миколайович']],
    2000:[['21.06.2000','подія', 'опис події'], ['01.02.2000','подія', 'опис події'], ['16.09.2000','подія', 'опис події']],
     2001:[['20.03.2001','подія', 'опис події'], ['28.09.2001','подія', 'опис події'], ['30.10.2001','подія', 'опис події']],
      2002:[['20.03.2002','подія', 'опис події'], ['28.09.2002','подія', 'опис події']]}
let keys = Object.keys(data);
console.log(data[2000]);

function getTable(obj, key){
    if(keys.includes(key)){
        // отримуємо масив із подіями по конкретному році
        let events = obj[key];
        // запускаємо цикл для перевірки і записування всіх подій
        for(let i = 0; i < events.length; i ++){
            // мадюємо таблицю
        // створюємо ряд
        let tr = document.createElement('tr');
        // створюємо клітинки
        let date = document.createElement('td');
        let occasion = document.createElement('td');
        let description = document.createElement('td');
        [date.textContent, occasion.textContent, description.textContent] = events[i];
        tr.appendChild(date);
        tr.appendChild(occasion);
        tr.appendChild(description);
        table.appendChild(tr);
        console.log('work')}
    }
    else{
        let tr = document.createElement('tr');
        tr.innerHTML = 'немає такої дати(спробуй 2000, 2001, 2002)';
        table.appendChild(tr);
    }

}
input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        table.innerHTML = '';
        getTable(data, input.value)
    }
})

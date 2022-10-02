"use strict";

let elem = document.querySelector('.elem');
let list = document.querySelector('.list');

let archiv = ['Ivano-Frankivsk', 'Lviv','Kyiv','Vinnytsia','Donetsk','Luhansk','Kharkiv','Cherkasy','Chernigiv','Sumy','Odesa','Zaporizhia','Dnipro','Kherson','Mykolaiv','Volynsk','Rivne','Zakarpattia','Chernivtsi','Zhytomyr','Ternopil','Kirovograd','Krym','Poltava']



elem.addEventListener('input', function(){
    list.innerHTML = '';
    let newArchiv = archiv.filter(function(city){
        if(city.startsWith(elem.value)){
            return true;
        } else {
            return false;
        };
    });
    if(elem.value != ''){for(let i = 0; i < newArchiv.length; i ++){
        let li = document.createElement('li');
        li.textContent = newArchiv[i];
        li.addEventListener('click',function (event){
            let lic = event.target.closest('li');
            if(lic){elem.value = lic.textContent;};
            list.textContent = ''
        })
        list.appendChild(li);
    };}
})

"use strict";

let date = document.querySelector('#birthday');
let prognos = document.querySelector('.prognos');
let zodiak = document.querySelector('.zodiak');
let dayHoroskop = document.querySelector('.dayHoroskop');
let radio = document.querySelectorAll('.radio');
let horoskops = ['Вас очікує професійний розвиток, в сімейному стані все гуд, радій життю і не псіхуй! А шо? так зірки сказали','нова ера прийде скоро в Ваше життя, не переживайте нічого особливого просто діарея', 'ну тримайтеся, робота буде напружена, але ви справитеся', 'очікуте гараздів', 'очікуйте всіх благ', 'скоро буде просто, почекайте і Ви будете приємно вражені','остерігайтеся коронавірусників, може бути погано', 'не ний все буде гуд'];

// день та місяць

// створюю масив знаків зодіаку
function getZodiak(day, month){
    let a = '';
    if((day >= 21 && day <= 31) && month == 3 || (day <= 20 && day >= 1) && month == 4){
        a = 'Овен';
    } else if((day >= 21 && day <= 30) && month == 4 || (day <= 21 && day >= 1) && month == 5){
        a = 'Телець';
    } else if((day >= 22 && day <= 31) && month == 5 || (day <= 21 && day >= 1) && month == 6){
        a = 'Близнята';
    } else if((day >= 22 && day <= 30) && month == 6 || (day <= 22 && day >= 1) && month == 7){
        a = 'Рак';
    } else if((day >= 23 && day <= 31) && month == 7 || (day <= 22 && day >= 8) && month == 8){
        a = 'Лев';
    } else if((day >= 23 && day <= 31) && month == 8 || (day <= 23 && day >= 1) && month == 9){
        a = 'Діви';
    } else if((day >= 24 && day <= 30) && month == 9 || (day <= 23 && day >= 1) && month == 10){
        a = 'Терези';
    } else if((day >= 24 && day <= 31) && month == 10 || (day <= 22 && day >= 1) && month == 11){
        a = 'Скорпіон';
    } else if((day >= 23 && day <= 30) && month == 11 || (day <= 21 && day >= 1) && month == 12){
        a = 'Стрілець';
    } else if((day >= 22 && day <= 31) && month == 12 || (day <= 20 && day >= 1) && month == 1){
        a = 'Козеріг';
    } else if((day >= 21 && day <= 31) && month == 1 || (day <= 18 && day >= 1) && month == 2){
        a = 'Водолій';
    } else if((day >= 19 && day <= 29) && month == 2 || (day <= 20 && day >= 1) && month == 3){
        a = 'Риби';
    } else {
        a = 'не визначено'
    }
    zodiak.textContent = a;
};

function getDay(day){
    let dayNow = day.value;
    if(dayNow == 'today'){
        dayHoroskop.textContent = 'Ваш гороскоп на сьогодні:'
    } else if(dayNow == 'tomorrow'){
        dayHoroskop.textContent = 'Ваш гороскоп на завтра:'
    } else if(dayNow == 'yesterday'){
        dayHoroskop.textContent = 'Вчора Вас очікувало:'
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
};
function getRandomHoroskop(horoskop){
    prognos.textContent = horoskops[getRandomInt(horoskops.length)]
}

date.addEventListener('keydown', function (event){
if(event.key == 'Enter'){
    let [day, month, year] = date.value.split('.');
    for(let i = 0; i < 3; i ++){
        if(radio[i].checked){
            getDay(radio[i]);
        }
    }
    getRandomHoroskop();

    getZodiak(day, month);
}
})

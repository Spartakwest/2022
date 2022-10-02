"use strict";
// оголошення змінних
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timer = document.querySelector('.timer');
let text = document.querySelector('.text');

// функції
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
let prognos = [['все буде добре', 'good'], ['все буде погано', 'bad'], ['якось буде не переживай', 'good'], ['очікуй погіршення стану справ', 'bad'], ['надіє є, а тому сьогодні тебе очікує приємний сюрприз', 'good'], ['з хати карще не виходити, але якщо вийдеш то нічого страшного не станеться', 'good'], ['все сумно', 'bad'], ['очікуй на приємні новини', 'good'], ['сьогодні поганий день, але не засмучуся, все так не буде, буде гірше', 'bad'], ['сьогодні чудовий день, варто починат  ходити в спортзал', 'good'], ['ну як сказати, краще промовчати, нічого хорошого...', 'bad'], ['а що то в двері стукає? а нє... здалося... очійкуй гостей', 'good'], ['остерійгася, ходить коронавірус, поширюється серед населення', 'bad'], ['хм... nfdsdsfgfdlalerdsfw... очікуй похмілля', 'bad'], ['Надприродньо чудовий день, краще сьогодні започаткувати свою компанію по виробництву біткойнів, благополучно мало б вийти. Ну або просто можеш почистити зуби, теж вийде непогано', 'good'], ['зима близько, холод наближається', 'bad'], ['о нов - о нов - о нов нов нов - погана новина, все дуже погано, але ти не засмучуся)', 'bad'], ['скоро буде покращення', 'good'], ['скоро буде погіршення', 'bad'], ['ну 20 передбачення нічого не передбачує, але ти можеш самостійно передбачити собі щось смачненьке', 'good'],];


start.addEventListener('click', function (){
    let timerId = setInterval(function(){
        timer.textContent = getRandomInt(1, 20);
    }, 100);
    start.classList.remove('activ');
    stop.classList.add('activ');
    stop.addEventListener('click', function(){
        stop.classList.remove('activ')
        clearInterval(timerId);
        text.textContent = prognos[Number(timer.innerHTML) - 1][0];
        if(prognos[Number(timer.innerHTML) - 1][1] == 'good'){
            text.classList.add('green');
        } else {
            text.classList.add('red');
        }
    })
})

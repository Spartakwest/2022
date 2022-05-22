"use strict";

let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b);

let a1 = 5 * (7 - 4);
let b1 = 1 + 2 + 7;
console.log(a > b);

let a2 = 2 ** 4;
let b2 = 4 ** 2;
console.log(a != b);

let age = 14;
if (age >= 14 && age <= 90) {
  console.log("yes");
}

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

let names = prompt("Хто там?");
if (names) {
  if (names == "Адмін") {
    let password = prompt("Введіть пароль:");
    if (password) {
      if (password == "я головний" || password == "Я головний") {
        alert("Вітаю, давно Вас чекав)");
      } else {
        alert("Пароль не вірний");
      }
    } else {
      alert("Відмінено");
    }
  } else {
    alert("Я Вас не знаю!!!");
  }
} else {
  alert("Відмінено");
}

let adult = confirm("Ти уже дорослий?");
if (adult) {
  alert("Ох ти, що, Старіна");
} else {
  alert("маленький ще)");
}
// Задача 1

let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 2

let num3 = 1;
let num4 = 2;

if (num3 + num4 === 3) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 3

let num5 = "1";
let num6 = "2";

if (Number(num5) + Number(num6) === 3) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 4

let num7 = "1";
let num8 = "2";

if (Number(num7) + Number(num8) === 3) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 5

let numq = 123;

if (Number(String(numq)[0]) === 1) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 6

let numw = 123;

if (String(numw)[0] == 1) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 7

let nume = 123;

if (String(nume)[0] == 1) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 8

let numr = 123;
let first = String(numr)[0];

if (Number(first) === 1) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 9

let numt = 12;

if (String(numt).length === 2) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 10

let numy = 12;
let str = String(numy);

if (str.length === 2) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 11

let numu = 12;

if (String(numu).length === 2) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 12

let numa = 12;

if (String(numa).length == String(2)) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 13

let nums = 12;

if (String(nums).length === 2) {
  console.log("+++");
} else {
  console.log("---");
}

// Задача 14

let num = "123033";
/* берем в кавычки, чтобы 
	обращаться к цифрам */

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
  console.log("суммы равны");
} else {
  console.log("суммы не равны");
}

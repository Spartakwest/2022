"use strict";

let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj).length);

let test = 12;
let test1 = 12;
if (test != test1) {
  console.log("правильно");
} else {
  console.log("не правильно");
}

let a = "3";
if (a == 3) {
  console.log("так");
} else {
  console.log("ні");
}

let b = "3";
if (b === 3) {
  console.log("так");
} else {
  console.log("ні");
}

let c = 6;
if (c > 1 && c < 6) {
  console.log("c вірне");
} else {
  console.log("c не вірне");
}

let d1 = 11;
let d2 = 12;
if (d1 < 0 || d2 < 0) {
  console.log("одне із чисел менше нуля");
} else {
  console.log("обидва числа більші, ніж нуль");
}

let num = 3;

if ((num > 5 && num < 10) || num == 20) {
  console.log("вірно");
} else {
  console.log("невірно");
}

let num1 = 11;
let num2 = 12;
if (!(num1 >= 0 || num2 <= 10)) {
  console.log("вірно");
} else {
  console.log("невірно");
}

let e = true;
if (e == true) {
  console.log("e правильне");
} else {
  console.log("e не правильне");
}

let e1 = false;
if (e1 == true) {
  console.log("e правильне");
} else {
  console.log("e не правильне");
}

let test2 = 3 * "a";

if (test2 == true) {
  console.log("верно");
} else {
  console.log("неверно");
}

let test3 = true;
if (test3) {
  console.log("yes");
} else {
  console.log("no");
}

let test4 = true;
if (!test4) {
  console.log("yes");
} else {
  console.log("no");
}

let test5 = -1;
if (test5) {
  console.log("yes");
} else {
  console.log("no");
}

let test6 = 11;
if (test6 == 11) {
}

let test7 = 12;
if (test7) console.log("yes 7");
else console.log("no 7");

let day = 32;
if (day > 0 && day <= 10) {
  console.log("перша декада");
} else if (day > 10 && day <= 20) {
  console.log("друга декада");
} else if (day > 20 && day <= 31) {
  console.log("третя декада");
} else {
  console.log("неіснуюча дата");
}

let num3 = 67;
if (num3 >= 10 && num3 <= 99) {
  let numStr = String(num3);
  let sum = Number(numStr[0]) + Number(numStr[1]);
  if (sum <= 9) {
    console.log("сума цифр числа одноцифрова");
  } else {
    console.log("сума цифр числа двохзначна");
  }
} else {
  console.log("дане число не в діапазоні від 10 до 99");
}

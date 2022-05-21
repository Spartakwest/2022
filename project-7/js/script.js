"use strict";

let age = 17;
let result;

if (age >= 18) {
  if (age <= 23) {
    result = "от 18 до 23";
  } else {
    result = "больше 23";
  }
} else {
  result = "меньше 18";
}

console.log(result);

let min = 55;
if (min >= 1 && min <= 19) {
  console.log("first");
} else if (min >= 20 && min <= 39) {
  console.log("second");
} else if (min >= 40 && min <= 59) {
  console.log("thirth");
}

let arr = [1, 5, 3, 5];
if (arr.length == 3) {
  let sum = arr[1] + arr[2] + arr[0];
  console.log(sum);
} else {
  console.log("у масиві не 3 числа");
}

let str = "12345";
let last = str[str.length - 1];

if (last == 5) {
  console.log("!");
}

let num = 123456;
let numStr = String(num);
if (numStr[numStr.length - 1] == 0) {
  console.log("yes");
} else {
  console.log("no");
}

let num1 = 1457;
if (num1 % 2 == 0) {
  console.log("число парне");
} else {
  console.log("чиcло непарне");
}

let month = 7;
if (month >= 3 && month <= 5) {
  console.log("spring");
} else if (month > 5 && month < 9) {
  console.log("summer");
} else if (month > 8 && month < 12) {
  console.log("autumn");
} else if (month == 12 || (month >= 1 && month < 3)) {
  console.log("winter");
}

let str1 = "abcde";
if (str1[0] == "a") {
  console.log("так");
} else {
  console.log("ні");
}

let number = 12345;
let a = String(number)[0];
if (a == 1 || a == 2 || a == 3) {
  console.log("yes");
} else {
  console.log("no");
}

let number1 = 357;
let a1 = String(number1);
let sum1 = Number(a1[0]) + Number(a1[2]) + Number(a1[1]);
console.log(sum1);

let six = 123123;
let asix = String(six);
let sixsum1 = Number(asix[0]) + Number(asix[1]) + Number(asix[2]);
let sixsum2 = Number(asix[3]) + Number(asix[4]) + Number(asix[5]);
if (sixsum1 == sixsum2) {
  console.log("Yes, equal");
} else {
  console.log("No, not equal");
}

let num2 = 1;
switch (num2) {
  case 1:
    console.log("весна");
    break;
  case 2:
    console.log("літо");
    break;
  case 3:
    console.log("осінь");
    break;
  case 4:
    console.log("зима");
    break;
  default:
    console.log("помилка");
    break;
}

let num3 = 5;
let audit = num3 >= 0 ? 1 : -1;
console.log(audit);

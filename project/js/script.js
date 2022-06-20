"use strict";

//task Задача 1
//? Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать НОД этих двух чисел. При решении задачи старайтесь использовать вспомогательные функции, в том числе полученные нами ранее в теоретической части.
// todo реалізація функції getGreatestCommonDivisor
function getGreatestCommonDivisor(num1, num2) {
  let divisors1 = getDivisors(num1);
  let divisors2 = getDivisors(num2);
  let divisors = getCommonDivisors(divisors1, divisors2);
  let divisor = divisors[divisors.length - 1];
  return divisor;
}
// todo функція, яка повертає спільні дільники
function getCommonDivisors(arr1, arr2) {
  let arr = [];
  for (let elem of arr1) {
    if (inArray(elem, arr2)) {
      if (arr.indexOf(elem) == -1) {
        arr.push(elem);
      }
    }
  }
  return arr;
}
// todo функція, яка перевіряє наявність елемента в масиві
function inArray(elem, arr) {
  return arr.indexOf(elem) != -1;
}
// todo функція повертає всі дільники
function getDivisors(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(getDivisors(12));
console.log(getGreatestCommonDivisor(12, 13));

/////////////////////
// task Задача 2
//? Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, называются взаимно простыми. Говоря другими словами, два числа можно назвать взаимно простыми, если их НОД равен единице.
// ?Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые они или нет.
// todo потрібно реалізувати функцію, яка провірятиме числа на взаємну простоту користуємося попередніми функціями
// TODO need to implement a function that will check numbers on mutual simplicity We use the previous functions
function isMutualSimplicity(num1, num2) {
  if (getGreatestCommonDivisor(num1, num2) == 1) {
    return "Так";
  } else {
    return "Ні";
  }
}
console.log(isMutualSimplicity(12, 15));

/////////////////////
// task Задача 1
//?Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функции getRandomInt скопируйте из учебника.
//скопійований код із підручника
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// todo потрібно реалізувати функцію, яка повертає випадковий елемент із масива
function getElemArray(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}
console.log(getElemArray([1, 3, 6, 9]));

/////////////////////
// Task Задача 2
//?Используя созданную функцию, найдите сумму трех случайных элементов из массива.
let arr = [1, 2, 3, 4, 5];
console.log(getElemArray(arr) + getElemArray(arr) + getElemArray(arr));

/////////////////////
// Task Задача 1
//?Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функции getRandomInt скопируйте из учебника.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// todo реалізуємо функцію shuffle, яка приймає масив і поевертає перемішаний масив
function shuffle(arr) {
  let result = [];
  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
}
console.log(shuffle([1, 2, 3, 4, 5]));

/////////////////////
// Task Задача 2
//?Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и возвращающую массив, заполненный целыми числами из этого диапазона.
function range(num1, num2) {
  let arr = [];
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(range(3, 17));

/////////////////////
// Task Задача 3
//?Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из заданного диапазона. При этом числа не должны повторяться. Для решения задачи используйте комбинацию функций range и shuffle.
//todo спочатку напишемо функцію яка повертатиме масив в діапазоні але з рандомним порядком із використанням аписаних раніше функцій, при цьому ці функції перепишемо заново
function rangeRand(num1, num2) {
  return shuffle(range(num1, num2));
}
//todo пишемо функцію shuffle заново
function shuffle(arr) {
  let result = [];
  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
}
//todo функція range
function range(num1, num2) {
  let result = [];
  for (let i = num1; i <= num2; i++) {
    result.push(i);
  }
  return result;
}
//todo переписуємо функцію рандомного числа із діапазону
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomInt(1,5));
console.log(rangeRand(1, 7));

/////////////////////
// Task Задача 1
//?Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функций getRandomInt и shuffle скопируйте из учебника.
//todo організовуємо функцію randoms, яка прийматиме в параметри масив і довжину, а повертатиме підмасив із цього масива довжиною вказаною як други й параметр
function randoms(arr, length) {
  return shuffle(arr).splice(0, length);
}
//*
function shuffle(arr) {
  let result = [];
  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
}
//*
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randoms([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/////////////////////
// Task Задача 1
//? написати функцію, яка видаватеме масив щасливих квитків
function getLuckyTickets() {
  let result = [];
  for (let i = 1001; i <= 999999; i++) {
    if (isLucky(i)) {
      result.push(i);
    }
  }
  return result;
}
//todo пишемо функцію яка буде перевіряти чи номер квитка щасливий
function isLucky(num) {
  let str = normalizeNum(num);
  sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
  sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
  return sum1 == sum2;
}
// console.log(isLucky(1001));
//todo пишемо функцію нормалізації числа
function normalizeNum(num) {
  let str = String(num);
  if (str.length == 5) {
    str = "0" + str;
  } else if (str.length == 4) {
    str = "00" + str;
  }
  return str;
}
// console.log(normalizeNum(1234));
console.log(getLuckyTickets());

"use strict";

// Сделайте функцию, выводящую на экран ваше имя.
function func() {
  console.log("Віктор Слободян");
}
func();

// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
function func() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}
func();

// Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.
function func(num) {
  console.log(num ** 3);
}
func(3);

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.
function func(num) {
  if (num >= 0) {
    console.log("+++");
  } else {
    console.log("---");
  }
}
func(3);

// Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
function func(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  console.log(sum);
}
func(3, 4, 5);

// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// С помощью созданной вами функции выведите на экран сумму значений эти переменных.
function func(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);

// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
function func(num) {
  return num ** 3;
}
let result = func(3);
console.log(result);

// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.
function func(num) {
  return num ** 2;
}
let result = func(3) + func(4);
console.log(result);

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
function sqrt(num) {
  return Math.sqrt(num);
}
function round(num) {
  return num.toFixed(3);
}
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
let result = round(sqrt(2));
console.log(result);

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
function sqrt(num) {
  return Math.sqrt(num);
}
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.
let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(result);
// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
function round(num) {
  return num.toFixed(3);
}
// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.

// Что выведется на экран в результате выполнения следующего кода:
function func(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(func(5));
// Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.

// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
function district(num) {
  let i = 1;
  while (true) {
    num = num / 2;
    if (num < 10) {
      return i;
    }
    i++;
  }
}
console.log(district(59));

// Дана следующая функция:
// function func(num1, num2) {
// 	let result;
// 	if (num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		result = num1 - num2;
// 	}
// 	return result;
// }
// alert(func(3, 4));
// Перепишите ее в сокращенной форме согласно изученной теории.
function func(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    return num1 * num2;
  } else {
    return num1 - num2;
  }
}
console.log(func(3, 4));

// Напишите функцию, которая будет находить сумму квадратов элементов массива.
function getSumPow(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem ** 2;
  }
  return sum;
}
let arr = [1, 2, 3];
console.log(getSumPow(arr));

// Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.
function getDigitsSum(num) {
  numStr = String(num);
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += +numStr[i];
  }
  return sum;
}
console.log(getDigitsSum(123));

// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить следующий массив:
// [1, 2, 3, 4, 6, 8, 12, 24]
function getDivisors(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(getDivisors(24));

// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.
function reverseStr(string) {
  return string.split("").reverse().join("");
}
console.log(reverseStr("Віктор"));

// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.
function delElem(value, arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf(value);
    if (index >= 0) {
      arr.splice(index, 1);
    } else {
      return arr;
    }
  }
  return arr;
}
console.log(delElem(5, [3, 5, 9, 7, 3, 5, 9, 4, 3, 3, 4, 3]));

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:
function func(num) {
  arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(func(9));

// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. Пример работы такой функции:
function func(num1, num2) {
  let arr = [];
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(func(3, 7));

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
function func(arr) {
  for (let elem of arr) {
    if (elem % 2 != 0) {
      return false;
    }
  }
  return true;
}
console.log(func([2, 4, 6, 8, 14, 17, 16]));

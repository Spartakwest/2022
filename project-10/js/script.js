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
console.log(func([2, 4, 6, 8, 14, 18, 16]));

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
function numOdd(num) {
  numStr = String(num);
  for (let i = 0; i < numStr.length; i++) {
    if (Number(numStr[i]) % 2 === 0) {
      return false;
    }
  }
  return true;
}
console.log(numOdd(39));

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
function theSame(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(theSame([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 12]));

// Дана следующая функция:
// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.
function func(a, b) {
  return a == b;
}
console.log(func(9, 2));

// Дана следующая функция:
// function func(a, b) {
// 	if (a != b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.
function func(a, b) {
  return a != b;
}
console.log(func(1, 5));

// Дана следующая функция:
// function func(a, b) {
// 	if (a + b >= 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.
function func(a, b) {
  return a + b >= 10;
}
console.log(func(6, 4));

// Дана следующая функция:
// function func(num) {
// 	if (num >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.
function func(num) {
  return num >= 0;
}
console.log(func(1));

// Код должен найти сумму результатов работы двух функций:
function func1() {
  return 3;
}
function func2() {
  return 5;
}
console.log(func1() + func2());

// Код должен найти сумму элементов массива:
function sum(arr) {
  let res = 0;
  for (let elem of arr) {
    res += elem;
  }
  return res;
}

console.log(sum([1, 2, 3, 4, 5]));

// Код должен найти сумму элементов массива, однако, ничего не выводит на экран:
let arr = [1, 2, 3, 4, 5];
function func(arr) {
  let res = 0;
  for (let elem of arr) {
    res += elem;
  }
  console.log(res);
}
func(arr);

// Код должен найти сумму результатов работы двух функций:
function func1() {
  return 3;
}
function func2() {
  return 5;
}
console.log(func1() + func2());

// Код должен найти сумму элементов массива:
let arr = [1, 2, 3, 4, 5];
console.log(sum(arr));
function sum(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}

// Код должен найти сумму элементов массива:
let res = sum([1, 2, 3, 4, 5]);
console.log(res);
function sum(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}

// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:
function add(num) {
  if (num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}
console.log(add(10));

// Код должен найти сумму элементов массива:
let arr = [1, 2, 3, 4, 5];
let sumres = sum(arr);
console.log(sumres);
function sum(arr) {
  let res = 0;
  for (let elem of arr) {
    res += elem;
  }
  return res;
}

// Код должен найти сумму цифр числа:
let num = 12345;
let res = getDigitsSum(num);
console.log(res);
function getDigitsSum(num) {
  let arr = String(num).split("");
  let sum = 0;
  for (let elem of arr) {
    sum += +elem;
  }
  return sum;
}

// Дана функция, проверяющая числа на простоту:
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}
// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:
function getDigitsSum(num) {
  let sum = 0;
  let digits = String(num).split("");
  for (let digit of digits) {
    sum += Number(digit);
  }
  return sum;
}
// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.
for (let i = 1; i <= 2030; i++) {
  if (getDigitsSum(i) == 13) {
    console.log(i);
  }
}

// Пусть дан какой-то массив с числами, например, такой:
// [123, 456, 789]
// Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. То есть из нашего массива сделаем следующий:
// [321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:
// let nums = [123, 456, 789];
// let result = [];
// for (let num of nums) {
// 	result.push(String(num).split('').reverse().join(''));
// }
// console.log(result); // выведет [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.
function getReverse(num) {
  let str = String(num);
  return str.split("").reverse().join("");
}
let arr = [123, 456, 789];
let arr2 = [];
for (let elem of arr) {
  arr2.push(getReverse(elem));
}
console.log(arr2);

// Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа. Некий программист уже написал решение задачи, вот оно:
// let num1 = 234;
// let num2 = 531;
// let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }
// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }
// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }
// В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.
let num1 = 134;
let num2 = 531;
function getDigitsSum(num) {
  let sum = 0;
  let arr = String(num).split("");
  for (let elem of arr) {
    sum += +elem;
  }
  return sum;
}
function equality(a, b) {
  if (a == b) {
    console.log("суми цифр співпадають");
  } else {
    console.log("суми цифр не співпадають");
  }
}
equality(getDigitsSum(num1), getDigitsSum(num2));

// Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные делители этих чисел (то есть исключая число 1 и само число). Некий программист уже написал решение задачи:
let nums = [12, 24, 35, 14];
for (let num of nums) {
  console.log(num + ": " + getDivisors(num).join(", "));
}
function getDivisors(num) {
  let result = [];
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
}
// Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает как-то не так. Видимо, в функции getDivisors была допущена какая-то ошибка.
// Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она работает корректно после вашей правки. После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.

// Дана функция getSum, находящая сумму элементов переданного массива:
function getSum(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += Number(elem);
  }
  return sum;
}
// Дана функция getDigits, возвращающая массив цифр числа:
function getDigits(num) {
  return String(num).split("");
}
// Используя комбинацию приведенных функций найдите сумму цифр числа 12345.
let a = 12345;
console.log(getSum(getDigits(a)));

// Дано число. Нужно найти его делители (без 1 и самого числа), а затем найти среднее арифметическое (сумма делить на количество) делителей числа и вывести результат на экран. Некий программист уже написал решение задачи:
console.log(getAvg(getDivisors(24)).toFixed(1));
// Нахождение среднего арифметического:
function getAvg(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum / arr.length;
}
// Нахождение массива делителей числа:
function getDivisors(num) {
  let result = [];
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
}
// Программист не тестировал отдельно работу своих функций, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает неверно.
// Найдите и исправьте ошибки программиста. Потестируйте отдельно работу всех функций, чтобы убедиться, что они работают корректно после ваших правок. После того, как вы убедитесь в корректности работы функций - проверьте полный код решения задачи.

/////////////////////
//Задача 1
let arr = [
  11, 212, 323234, 33, 4455, 6, 67675, 56, 34, 234, 23435, 55, 66, 33, 12,
];
let result = [];
// орієнтуємося на одне число, масив перебиратимемо циклом пізніше
function inRange(num) {
  return getSum(getDigits(num)) >= 1 && getSum(getDigits(num)) <= 9;
}
function getSum(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += Number(elem);
  }
  return sum;
}
function getDigits(num) {
  return String(num).split("");
}
for (let elem of arr) {
  if (inRange(elem)) {
    result.push(elem);
  }
}
console.log(result);

/////////////////////
//Задача 1
// Реализуйте функцию getOwnDivisors. Потестируйте ее работу.
function getOwnDivisors(num) {
  let result = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  return result;
}
// console.log(getOwnDivisors(15));

/////////////////////
//Задача 2
// Реализуйте функцию getSum. Потестируйте ее работу.
function getSum(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}
// console.log(getSum([1,2,3]));

/////////////////////
//Задача 3
function isFreindly(num1, num2) {
  let sum1 = getSum(getOwnDivisors(num1));
  let sum2 = getSum(getOwnDivisors(num2));

  if (sum1 == num2 && sum2 == num1) {
    return true;
  } else {
    return false;
  }
}
console.log(isFreindly(220, 284));

/////////////////////
//Задача 4
// Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и возвращать их в виде двухмерного массива вида следующего вида:
// [ [220, 284], [1184, 1210], [2620, 2924] ]
// С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 3000.
// завдання 1
// програмуємо із кінця
// стфорюємо функцію, яка отримує 2 числа і видає масив із дружніми числами, які знаходяться в цьому проміжку
function isFreindlyArray(num1, num2) {
  let arr = [];
  let counter = 0;
  // треба запустити два цикли для першого числа та для другого
  for (let i = num1; i <= num2; i++) {
    // друге число має запускатися починаючи від першого і до грайньої границі, щоб значення не повторювалися
    for (let j = i; j <= num2; j++) {
      if (isFreindly(i, j)) {
        // console.log(counter);
        arr[counter] = [];
        // console.log(arr);
        arr[counter].push(i);
        // console.log(arr);
        arr[counter].push(j);
        // console.log(arr);
        counter++;
        // console.log(counter);
      }
    }
  }
  return arr;
}
console.log(isFreindlyArray(1, 3000));
// створюємо функцію, яка перевіряє чи числа дружні
function isFreindly(num1, num2) {
  let sum1 = sumDevisors(getDivisors(num1));
  let sum2 = sumDevisors(getDivisors(num2));
  return num1 == sum2 && num2 == sum1 && num1 != num2;
}
// console.log(isFreindly(220,284));
// створюємо функцію яка повертатиме суму дільників
function sumDevisors(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}
// console.log(sumDevisors([1, 2, 3]));
// створюємо функцію, яка повертає масив дільників
function getDivisors(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(getDivisors(10));

/////////////////////
//Задача 5
// Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.
// створюємо функцію яка в проміжку отримуватиме ідеальні числа
function getPerfectInterval(num1, num2) {
  let arr = [];
  for (let i = num1; i <= num2; i++) {
    if (getPerfect(i)) {
      arr.push(i);
    }
  }
  return arr;
}
function getPerfect(num) {
  return sumDevisors(getDivisors(num)) == num;
}
function sumDevisors(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}
function getDivisors(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(getPerfectInterval(1, 1000));

/////////////////////
//Задача 1
// написати функцію, яка перевірятиме пересікання масивів
function getInt(arr1, arr2) {
  let result = [];
  for (let elem of arr1) {
    if (inArray(elem, arr2)) {
      if (result.indexOf(elem) == -1) {
        result.push(elem);
      }
    }
  }
  return result;
}
function inArray(elem, arr) {
  return arr.indexOf(elem) !== -1;
}
console.log(getInt([2, 3, 3, 4, 6, 7, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8, 9]));

/////////////////////
//Задача 1
// написати функцію, яка повертає якими числами масиви різняться
// функція повертає масив яким різняться
function getDiff(arr1, arr2) {
  let getDiffOne1 = getDiffOne(arr1, arr2);
  let getDiffOne2 = getDiffOne(arr2, arr1);
  return [].concat(getDiffOne1, getDiffOne2);
}
function getDiffOne(arr1, arr2) {
  let result = [];
  for (let elem of arr1) {
    if (noInArray(elem, arr2)) {
      if (result.indexOf(elem) == -1) {
        result.push(elem);
      }
    }
  }
  return result;
}
function noInArray(elem, arr) {
  return arr.indexOf(elem) == -1;
}
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 4, 5, 6, 7];
console.log(getDiff(arr1, arr2));

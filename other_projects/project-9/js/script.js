// Задаача 2
// Дана структура даних
// Пусть даны также 3 переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.
let affairs = {
  2018: {
    11: {
      29: ["дело111", "дело112", "дело113"],
      30: ["дело121", "дело122", "дело123"],
    },
    12: {
      30: ["дело211", "дело212", "дело213"],
      31: ["дело221", "дело222", "дело223"],
    },
  },
  2019: {
    12: {
      29: ["дело311", "дело312", "дело313"],
      30: ["дело321", "дело322", "дело323"],
      31: ["дело331", "дело332", "дело333"],
    },
  },
};
let year = "2019";
let month = 12;
let day = 30;
console.log(affairs[year][month][day]);

// Задача 3
// Автор следующего кода хотел вывести элемент со значением '24'

let obj = {
  key1: {
    key2: "12",
    key3: "13",
  },
  key2: {
    key4: "24",
    key5: "25",
  },
};

let key1 = "key2";
let key2 = "key4";
console.log(obj[key1][key2]);

// Задача 4
// Автор следующего кода хотел вывести элемент со значением '24'
let obj = {
  key1: {
    key2: "12",
    key3: "13",
  },
  key2: {
    key4: "24",
    key5: "25",
  },
};

let key1 = "key2";
let key2 = "key4";
console.log(obj[key1][key2]);
// Задача 5
// Автор следующего кода хотел вывести элемент со значением '24'
let obj = {
  key1: {
    key2: "12",
    key3: "13",
  },
  key2: {
    key4: "24",
    key5: "25",
  },
};

let key1 = "key2";
let key2 = "key4";
console.log(obj[key1][key2]);
// Задача 6
// Автор следующего кода хотел вывести элемент со значением '24'
let obj = {
  key1: {
    key2: "12",
    key3: "13",
  },
  key2: {
    key4: "24",
    key5: "25",
  },
};

let key1 = "key2";
console.log(obj[key1]["key4"]);

//Задача 1
//Вивести суму зарплат першого та другого працівника
let employees = [
  {
    name: "name1",
    salary: 300,
  },
  {
    name: "name2",
    salary: 400,
  },
  {
    name: "name3",
    salary: 500,
  },
];
let sum = employees[0].salary + employees[1].salary;
console.log(sum);
// Задача 2
// Выведите на экран элемент 'Вася' и элемент 'Лена'.
let students = {
  boys: ["Коля", "Вася", "Петя"],
  girls: ["Даша", "Маша", "Лена"],
};
console.log(students.boys[1] + " і " + students.girls[2]);

// Задача 1
// Выведите на экран данные каждого работника в формате имя - зарплата.
let employees = [
  {
    name: "name1",
    salary: 300,
  },
  {
    name: "name2",
    salary: 400,
  },
  {
    name: "name3",
    salary: 500,
  },
];

for (let employee of employees) {
  console.log(employee.name + " - " + employee.salary);
}

// Задача 2
// Выведите на экран сумму зарплат всех работников.
let employees = [
  {
    name: "name1",
    salary: 300,
  },
  {
    name: "name2",
    salary: 400,
  },
  {
    name: "name3",
    salary: 500,
  },
];
let sum = 0;
for (let employee of employees) {
  sum += employee.salary;
}
console.log("сума: " + sum);

// Задача 3
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
let employees = [
  {
    name: "name1",
    salary: 300,
    age: 28,
  },
  {
    name: "name2",
    salary: 400,
    age: 29,
  },
  {
    name: "name3",
    salary: 500,
    age: 30,
  },
  {
    name: "name4",
    salary: 600,
    age: 31,
  },
  {
    name: "name5",
    salary: 700,
    age: 32,
  },
];
let sum = 0;
for (let employee of employees) {
  if (employee.age >= 30) {
    sum += employee.salary;
  }
}
console.log(sum);

// Задача 4
// Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет (true - уволен):
// Выведите на экран имена и зарплаты неуволенных работников.
let employees = [
  {
    name: "name1",
    salary: 300,
    dismissed: false,
  },
  {
    name: "name2",
    salary: 400,
    dismissed: true,
  },
  {
    name: "name3",
    salary: 500,
    dismissed: false,
  },
  {
    name: "name4",
    salary: 600,
    dismissed: true,
  },
  {
    name: "name5",
    salary: 700,
    dismissed: false,
  },
];
console.log("імена і зарплати незвільнених працівників:");
for (let employee of employees) {
  if (employee.dismissed === false) {
    console.log(employee.name + " - " + employee.salary);
  }
}

// Задача 5
// С помощью вложенных циклов выведите на экран все строки с данными.
let data = {
  1: ["data11", "data12", "data13"],
  2: ["data21", "data22", "data23"],
  3: ["data31", "data32", "data33", "data34", "data35"],
  4: ["data41", "data42"],
};
for (let key in data) {
  for (let elem of data[key]) {
    console.log(elem);
  }
}

// Задача 6
// Количество объектов в массиве и количество элементов в объекте может быть произвольным. С помощью вложенных циклов выведите на экран все строки с данными.
let data = [
  {
    1: "data11",
    2: "data12",
    3: "data13",
    4: "data14",
  },
  {
    1: "data21",
    2: "data22",
    3: "data33",
  },
  {
    1: "data31",
    2: "data32",
  },
];
for (let elem of data) {
  for (let key in elem) {
    console.log(elem[key]);
  }
}
// Задача 6
//  С помощью вложенных циклов выведите на экран все строки с данными.
let data = [
  {
    1: ["data111", "data112", "data113"],
    2: ["data121", "data122", "data123"],
  },
  {
    1: ["data211", "data212", "data213"],
    2: ["data221", "data222", "data223", "data224"],
    3: ["data231", "data232", "data233", "data234", "data235"],
  },
  {
    1: ["data411", "data412", "data413"],
    2: ["data421"],
  },
];
for (let elem1 of data) {
  for (let key in elem1) {
    for (let elem2 of elem1[key]) {
      console.log(elem2);
    }
  }
}

// Математичні методи задачі

// Возведите 2 в 10 степень.
console.log(Math.pow(2, 10));

// Найдите квадратный корень из 245.
console.log(Math.sqrt(245));

// Дан следующий массив:
// [4, 2, 5, 19, 13, 0, 10]
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let elem of arr) {
  sum += Math.pow(elem, 3);
}
console.log(Math.sqrt(sum));

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

let a = 379;
let result = Math.sqrt(a);
console.log(result.toFixed(), result.toFixed(1), result.toFixed(2));

// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let a = 587;
let result = {
  floor: Math.floor(Math.sqrt(a)),
  ceil: Math.ceil(Math.sqrt(a)),
};
console.log(result);

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

console.log(
  Math.max(4, -2, 5, 19, -130, 0, 10),
  Math.min(4, -2, 5, 19, -130, 0, 10)
);

let arr = [4, -2, 5, 19, -130, 0, 10];
console.log(
  "мінімальне число: " +
    Math.min.apply(null, arr) +
    "Максимальне число: " +
    Math.max.apply(null, arr)
);

console.log(Math.random());

// Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

console.log(Math.floor(0.99 * (100 - 1 + 1)) + 1);

// С помощью цикла заполните массив 10-ю случайными целыми числами.
// створюю масив
let arr = [];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 10; i++) {
  arr.push(getRandomInt(1, 20));
}
console.log(arr);

// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

let a = 11;
let b = 120;
console.log(Math.abs(a - b));

//
// Методи для лінійок
//

//Задачі

// Дана строка 'js'. Сделайте из нее строку 'JS'.

let str = "js";
console.log(str.toUpperCase());

// Дана строка 'JS'. Сделайте из нее строку 'js'.
let str = "JS";
console.log(str.toLowerCase());

// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str = "я учу javascript!";
console.log(str.substr(2, 3) + " " + str.substr(6, 10));
console.log(str.substring(2, 5) + " " + str.substring(6, 16));
console.log(str.slice(2, 5) + " " + str.slice(6, -1));

// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
let str = "abcde";
console.log(str.indexOf("c"));
// Дана строка. Проверьте, есть ли в этой строке символ 'a'.
console.log(str.indexOf("a"));

//Дана строка. Проверьте, есть ли в этой строке символ 'a'.
let str = "abcde";
if (str.indexOf("a") >= 0) {
  console.log("Так");
} else {
  console.log("Ні");
}

// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.
let str = "abcde";
if (str.indexOf("a") === 0) {
  console.log("'Починається на'a'");
} else {
  console.log("не починається");
}

// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.
let str = "abxde";
console.log(str.lastIndexOf("a"), str.length - 1);

if (str.lastIndexOf("a") === str.length - 1) {
  console.log("так");
} else {
  console.log("ні");
}

// Дана строка. Проверьте, начинается ли эта строка на 'http://'.

let str = "http://www.google.com";
// console.log(str.indexOf('http://'));
if (str.indexOf("http://") === 0) {
  console.log("Так");
}

// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
let str = "www.str.html";
let end = ".html";
// console.log(str.length - 1 - end.length);

if (str.indexOf(end) === str.length - end.length) {
  console.log("так, закінчується");
}

// Дана строка. Проверьте, начинается ли эта строка на 'http://'.
let str = "http://www.google.com";
if (str.startsWith("http://")) {
  console.log("Так");
}

// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
let str = "www.str.html";
if (str.endsWith(".html")) {
  console.log("Так, закінчується");
}

// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

let str = "1-2-3-4-5";
let arr = str.split("-");
console.log(arr);

// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let str = "12345";
let arr = str.split("");
console.log(arr);

// С помощью метода join слейте его в строку '1-2-3-4-5'.
let arr = [1, 2, 3, 4, 5];
let str = arr.join("-");
console.log(str);

// Даний масив Добавьте ему в конец элементы 4, 5, 6.

let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// Даний масив Добавьте ему на початок элементы 4, 5, 6.

let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

// Дан следующий массив: Выведите на экран первый элемент этого массива.

let arr = [1, 2, 3];
let first = arr.shift();
console.log(first);

// Дан следующий массив: Выведите на экран останній элемент этого массива.

let arr = [1, 2, 3];
let last = arr.pop();
console.log(last);

// Дан следующий массив:

// [1, 2, 3, 4, 5]
// Сделайте из этого массива следующий:

// [1, 2, 3]
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(0, 3);
console.log(arr2);

// Дан следующий массив:

// [1, 2, 3, 4, 5]
// Используя этот массив, запишите в новую переменную следующий массив:

// [4, 5]

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(3);
console.log(arr2);

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 2, 3, 'a', 'b', 'c', 4, 5]
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, "a", "b", "c");
console.log(arr);

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice(-1, 1, 5, "e");
console.log(arr);

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Найдите позицию числа 3 в этом массиве.
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));

// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Проверьте, есть ли в этом массиве число 3.
let arr = [1, 2, 3, 4, 5];
if (arr.includes(3)) {
  console.log("Так");
}

// Практика
// let str = 'london';

// Преобразуйте последнюю букву строки в верхний регистр.
let str = "london";
str = str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(str);

// Преобразуйте первые 2 буквы строки в верхний регистр.
let str = "london";
str = str.slice(0, 2).toUpperCase() + str.slice(2);
console.log(str);

// Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
// let str = 'London';
// Преобразуйте первую букву строки в нижний регистр.
let str = "London";
console.log(str.toLowerCase());

// Пусть у нас есть некоторая переменная с текстом, состоящим из нескольких слов:
// let str = 'word1 word2 word3';
// Давайте напишем код, который преобразует первую букву каждого слова в верхний регистр.
let str = "word1 word2 word3";
let arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
let result = arr.join(" ");
console.log(result);

// Преобразуйте строку 'var_test_text' в 'VarTestText'.
// Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).
let str = "var_test_text";
let words = str.split("_");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
let result = words.join("");
console.log(result);

// Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре.
let str = "var_test_text";
let str2 = str.split("_").join("");
console.log(str2);

// Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.
let str = "Слободян Віктор Миколайович";
str2 = str.split(" ").reverse().join(" ");
console.log(str2);

// Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split("");
let sum = 0;
for (let digit of arr) {
  sum += +digit;
}
console.log(sum);

// Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split("");
let sum = 0;
for (let digit of arr) {
  sum += +digit;
}
console.log(sum);

// Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split("");
let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}
console.log(sum); // почему-то выводит 5, а не 15

// Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split("");
let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}
console.log(sum);

// Код должен найти произведение цифр числа:
let num = 12345;
let arr = String(num).split("");
let prod = 1;
for (let digit of arr) {
  prod *= digit;
}
console.log(prod);

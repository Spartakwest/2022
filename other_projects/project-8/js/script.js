// Задача 1
// Дан следующий массив:
// Подсчитайте количество цифр 3 в этом массиве.

let arr1 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter1 = 0;
for (let elem of arr1) {
  if (elem == 3) {
    counter1 += 1;
  }
}
console.log(counter1);

// Задача 2
// Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.

let arr2 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter21 = 0;
let counter22 = 0;
for (let elem of arr2) {
  if (elem == 3) {
    counter21 += 1;
  } else if (elem == 2) {
    counter22 += 1;
  }
}
console.log("кількість 3-ок: " + counter21 + " кількість 2-ок: " + counter22);

// Задача 3
// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.

let string3 = "Слободян Віктор Миколайович";
let obj3 = {};
for (let i = 0; i < string3.length; i++) {
  if (obj3[string3[i]] === undefined) {
    obj3[string3[i]] = 1;
  } else {
    obj3[string3[i]]++;
  }
}
console.log(obj3);

// Задача 1
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.
let ar1 = [1, 2, 3, 4, 5];
for (let i = 0; i < ar1.length - 1; i++) {
  console.log(ar1[i + 1]);
}

// Задача 2
// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.

let ar2 = [1, 2, 3, 4, 5];
for (let i = 0; i < ar2.length - 1; i++) {
  console.log(ar2[i] + ar2[i + 1]);
}

// Задача 3
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.

let ar3 = [1, 2, 3, 4, 5];
for (let i = 2; i < ar3.length; i++) {
  console.log(ar3[i - 1], ar3[i - 2]);
}

// Задача 4
// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.

let ar4 = [1, 2, 3, 4, 5];
for (let i = 2; i < ar4.length; i++) {
  console.log(ar4[i] + ar4[i - 1] + ar4[i - 2]);
}

// Задача 5
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.
for (let i = 1; i < ar4.length - 1; i++) {
  console.log(ar4[i] + ar4[i - 1] + ar4[i + 1]);
}

// Задача 1
// Числа Фібоначі

let one = 0;
let two = 1;
for (let i = 1; i <= 10; i++) {
  let current = one + two;
  one = two;
  two = current;
  console.log(current);
}

// Задача 2
// Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.

let first = 0;
let second = 1;
let third = 2;
for (let i = 1; i <= 10; i++) {
  let current = first + second + third;
  first = second;
  second = third;
  third = current;
  console.log(current);
}

// Задача 1
// Выведите на экран следующую пирамидку:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx
let str1 = "";
for (let i = 0; i < 5; i++) {
  str1 += "xx";
  document.write(str1 + "<br>");
}

// Задача 2
// Выведите на экран следующую пирамидку:
// 1
// 333
// 55555
// 7777777
// 999999999

for (let i = 1; i <= 9; i += 2) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write("<br>");
}

// Задача 3
// Выведите на экран следующую пирамидку:
// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx

for (let i = 5; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= i * 2; j++) {
    str += "x";
  }
  document.write(str + "<br>");
}

// Задача 3
// Выведите на экран следующую пирамидку:
// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

for (let i = 9; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += i;
  }
  document.write(str + "<br>");
}

// Задача 1
// С помощью цикла сформируйте следующий массив:
// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

let array1 = [];
let string1 = "";
for (let i = 1; i <= 5; i++) {
  string1 += "xx";
  array1.push(string1);
}
console.log(array1);

// Задача 2
// С помощью цикла сформируйте следующий массив:
// ['11111', '22222', '33333', '44444', '55555']

let array2 = [];
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str += i;
  }
  array2.push(str);
}
console.log(array2);

// Задача 1
// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.

let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let elem of arr) {
  let nelem = String(elem)[0];
  if (nelem == 1 || nelem == 2) {
    sum += elem;
  }
}
console.log(sum);

// Задача 1
// Виправити помилки в заданому коді
let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let suma = 0;

for (let elem in obj) {
  let ob = String(obj[elem]);

  if (ob[0] === "1" || ob[0] === "2") {
    suma += obj[elem];
  }
}

console.log(suma);

// Задача 1
// Код должен вывести числа от 0 до 10:

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Задача 2
// Код должен вывести числа от 10 до 0:

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Задача 3
// Код должен вывести числа от 10 до 0:

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Задача 4
// Код должен вывести числа от 0 до 10:

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

// Задача 5
// Код должен найти сумму целых чисел от 1 до 10:

let res = 0;

for (let i = 1; i <= 10; i++) {
  res += i;
}

console.log(res);

// Задача 6
// Код должен найти добуток целых чисел от 1 до 10:

let res = 1;

for (let i = 1; i <= 10; i++) {
  res *= i;
}

console.log(res);

// Задача 7
// Код должен найти сумму элементов массива:

let arr7 = ["1", "2", "3", "4", "5"];
let sum7 = 0;

for (let elem of arr7) {
  sum7 += Number(elem);
}

console.log(sum7); // должно вывести 15

// Задача 8
// Код должен найти сумму элементов массива:

let arr8 = ["1", "2", "3", "4", "5"];
let sum8 = 0;

for (let elem of arr8) {
  sum8 += +elem;
}

console.log(sum8); // должно вывести 15

// Задача 9
// Код должен найти сумму элементов массива:

let arr9 = ["1", "2", "3", "4", "5"];
let sum9 = 0;

for (let elem of arr9) {
  sum9 = +elem;
}

console.log(sum9); // должно вывести 15

// Задача 10
// Код должен найти сумму элементов массива, однако, всегда выводит NaN:

let arr10 = ["1", "2", "3", "4", "5"];
let sum10 = 0;

for (let i = 0; i < arr10.length; i++) {
  sum10 += +arr10[i];
}

console.log(sum10); // почему-то выводит NaN

// Задача 11

let arr11 = ["1", "2", "3", "4", "5"];
let sum11 = 0;

for (let i = 0; i < arr11.length; i++) {
  sum11 += +arr11[i];
}

console.log(sum11); // почему-то выводит не 15

// Задача 12
let arr12 = ["1", "2", "3", "4", "5"];
let sum12 = 0;

for (let i = 0; i < arr12.length; i++) {
  sum12 += +arr12[i];
}

console.log(sum12); // почему-то выводит не 15

// Задача 13

// Код должен возвести в квадрат каждый элемент массива:
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] ** 2;
}

console.log(arr);

// Задача 14
// Код должен заполнить массив числами от 1 до 5:

let arr = [];

for (let i = 1; i <= 5; i++) {
  arr.push(i);
}

console.log(arr);

// Задача 15
// Код должен найти сумму элементов объекта:

let obj = { a: 1, b: 2, c: 3 };
let sum = 0;

for (let elem in obj) {
  sum += obj[elem];
}

console.log(sum);

// Задача 16
// Код должен найти сумму элементов объекта:

let obj = { a: 1, b: 2, c: 3 };
let sum = 0;

for (let key in obj) {
  sum += +obj[key];
}

console.log(sum);

// Задача 17
// Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = "---";

for (let elem of arr) {
  if (elem === 3) {
    res = "+++";
  }
}

console.log(res);

// Задача 18
// Код должен проверить, есть ли в массиве число 3 или нет:
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
  if (elem === 3) {
    res = true;
    break;
  }
}

console.log(res);

// Задача 19
// Код должен вывести только четные элементы из массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  if (elem % 2 == 0) {
    console.log(elem);
  }
}

// Задача 1
// Выведите с помощью цикла столбец чисел от 1 до 100.

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

// Задача 2
// Выведите с помощью цикла столбец чисел от 100 до 1.

for (let i = 100; i >= 1; i--) {
  console.log(i);
}

// Задача 3
// Выведите с помощью цикла столбец четных чисел от 1 до 100.

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Задача 4
// Заполните массив 10-ю иксами с помощью цикла.
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push("x");
}
console.log(arr);

// Задача 5
// Заполните массив числами от 1 до 10 с помощью цикла.

let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

// Задача 6
// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr = [1, 5, -10, 11, 12, 8, 79, 5, 7, 6, 77];
for (let elem of arr) {
  if (elem > 0 && elem < 10) {
    console.log(elem);
  }
}

// Задача 7
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

let arr = [1, 5, -10, 11, 12, 8, 79, 5, 7, 6, 77];
let flag = false;
for (let elem of arr) {
  if (elem == 5) {
    flag = true;
    break;
  }
}
console.log(flag);

// Задача 8
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

let arr = [1, 5, -10, 11, 12, 8, 79, 5, 7, 6, 77];
let sum = 0;
for (let elem of arr) {
  sum += elem;
}
console.log(sum);

// Задача 9
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr = [1, 5, -10, 11, 12, 8, 79, 5, 7, 6, 77];
let sum = 0;
for (let elem of arr) {
  sum = elem ** 2;
}
console.log(sum);

// Задача 10
// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

let arr = [1, 5, -10, 11, 12, 8, 79, 5, 7, 6, 77];
let medium = 0;
for (let elem of arr) {
  medium += elem;
}
medium = medium / arr.length;
console.log(medium);

// Задача 11
// Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

let a = 5;
let factorial = 1;
for (let i = 1; i <= a; i++) {
  factorial *= i;
}
console.log(factorial);

// Задача 1
// Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
let arr = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
];
console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0]);
// Задача 2
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let sum = 0;
for (let elem of arr) {
  for (let subElem of elem) {
    sum += subElem;
  }
}
console.log(sum);

// Задача 3
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let sum = 0;
for (let elem1 of arr) {
  for (let elem2 of elem1) {
    for (let elem3 of elem2) {
      sum += elem3;
    }
  }
}
console.log(sum);

// Задача 4
// Вручную, без цикла, найдите сумму элементов этого массива.
let arr = [
  [1, 2, 3, [4, 5, [6, 7]]],
  [8, [9, 10]],
];
let sum =
  arr[0][0] +
  arr[0][1] +
  arr[0][2] +
  arr[0][3][0] +
  arr[0][3][1] +
  arr[0][3][2][0] +
  arr[0][3][2][1] +
  arr[1][0] +
  arr[1][1][0] +
  arr[1][1][1];
console.log(sum);

// Задача 1
// С помощью вложенных циклов найдите сумму элементов этого массива.
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let elem of arr) {
  for (let elem2 of elem) {
    sum += elem2;
  }
}
console.log(sum);
// Задача 2
// С помощью вложенных циклов найдите сумму элементов этого массива.

let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let sum = 0;
for (let elem1 of arr) {
  for (let elem2 of elem1) {
    for (let elem3 of elem2) {
      sum += elem3;
    }
  }
}
console.log(sum);

// Задача 3
// Решите предыдущие две задачи через цикл for.

let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
}
console.log(sum);

// Часстина 2
let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      sum += arr[i][j][k];
    }
  }
}
console.log(sum);

// Задача 1
// Сформируйте с помощью двух вложенных циклов следующий массив:

// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3,
// 	4, 5]]

let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = [];
  for (let j = 0; j < 5; j++) {
    arr[i].push(j + 1);
  }
}
console.log(arr);

// Задача 2
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [['x', 'x', 'x', 'x'], ['x', 'x',
// 	'x', 'x'], ['x', 'x', 'x', 'x']]

let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 4; j++) [arr[i].push("x")];
}
console.log(arr);

// Задача 3
// Сформируйте с помощью трех вложенных циклов следующий массив:
// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i][j] = [];
    for (let k = 0; k < 5; k++) {
      arr[i][j].push(k + 1);
    }
  }
}
console.log(arr);

// Задача 4
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 5
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 6
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 7
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j + 1);
  }
}

console.log(arr);

// Задача 8
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j <= 5; j++) {
    arr[i][j] = j + 1;
  }
}

console.log(arr);

// Задача 9
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 10
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 11
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j <= 5; j++) {
    arr[i][j] = j;
  }
}

console.log(arr);

// Задача 12
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);
// Задача 13
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j <= 5; j++) {
    arr[i] = j;
  }
}

console.log(arr);

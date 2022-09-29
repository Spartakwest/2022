"use strict";

// Цикл While

// Задача 1

let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

// Задача 2

let i2 = 11;
while (i2 <= 33) {
  console.log(i2);
  i2++;
}

// Задача 3
// парні числа від 0 до 100
let i3 = 0;
while (i3 <= 100) {
  console.log(i3);
  i3 += 2;
}

// Задача 4
// непарні числа від 1 до 99

let i4 = 1;
while (i4 <= 99) {
  console.log(i4);
  i4 += 2;
}

// Задача 5
// Зворотній відлік від 30 до 0

let i5 = 30;
while (i5 >= 0) {
  console.log(i5);
  i5--;
}
// Задача 1
// вивести від 1 до 100

for (let i6 = 1; i6 <= 100; i6++) {
  console.log(i6);
}

// Задача 2
// вивести від 11 до 33

for (let i7 = 11; i7 <= 33; i7++) {
  console.log(i7);
}

// Задача 3
// вивести парні числа від 0 до 100

for (let i8 = 0; i8 <= 100; i8 += 2) {
  console.log(i8);
}

// Задача 4
// вивести непарні числа від 1 до 99

for (let i9 = 1; i9 <= 99; i9 += 2) {
  console.log(i9);
}

// Задача 5
// вивести числа від 100 до 0

for (let i10 = 100; i10 >= 0; i10--) {
  console.log(i10);
}

// Задача 1
// знайти суму чисел від 1 до 20

let result = 0;
for (let k = 1; k <= 20; k++) {
  result = result + k;
}
console.log(result);

// Задача 2
// сума парних чисел від 2 до 100

let result2 = 0;
for (let k2 = 2; k2 <= 100; k2 += 2) {
  result2 += k2;
}
console.log(result2);

// Задача 3
// сума непарних чичел від 1 до 99

let result3 = 0;
for (let k3 = 1; k3 <= 100; k3 += 2) {
  result3 += k3;
}
console.log(result3);

// Задача 1
// вивести елементи масива 'a', 'b', 'c', 'd', 'e'

let arr = ["a", "b", "c", "d", "e"];
for (let a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}

// Задача 3
// вивести непарні числа 1, 2, 3, 4, 5
let arr2 = [1, 2, 3, 4, 5];
for (let a2 = 0; a2 < arr2.length; a2++) {
  if (arr2[a2] % 2 == 1) {
    console.log(arr2[a2]);
  }
}

// Задача 4
// знайти суму масива let arr2 = [1, 2, 3, 4, 5]

let result4 = 0;
let arr3 = [1, 2, 3, 4, 5];
for (let a3 = 0; a3 < arr3.length; a3++) {
  result4 += arr3[a3];
}
console.log(result4);

// Задача 5
// знайти суму квадратів масиву 1, 2, 3, 4, 5
let result5 = 0;
let arr5 = [1, 2, 3, 4, 5];
for (let a5 = 0; a5 < arr5.length; a5++) {
  result5 += arr5[a5] ** 2;
}
console.log(result5);

// Задача 6
// даний масив 2, 5, 9, 15, 1, 4 вивести числа більше 3 менше 10

let arr6 = [2, 5, 9, 15, 1, 4];
for (let a6 = 0; a6 < arr6.length; a6++) {
  if (arr6[a6] > 3 && arr6[a6] < 10) {
    console.log(arr6[a6]);
  }
}

// Задача 7
// даний масив містить від'ємні та додатні числа знайти суму додатніх чисел

let arr7 = [-1, -5, 10, 50, 20, -50, -89, 20];
let result7 = 0;
for (let a7 = 0; a7 < arr7.length; a7++) {
  if (arr7[a7] > 0) {
    result7 += arr7[a7];
  }
}
console.log(result7);

// Задача 8
// масив 1, 2, 3, 4, 5 - знайти середнє арифметичне

let arr8 = [1, 2, 3, 4, 5];
let sum8 = 0;
for (let a8 = 0; a8 < arr8.length; a8++) {
  sum8 += arr8[a8];
}
let arithmetic = sum8 / arr8.length;
console.log(arithmetic);

// задача 9
// даний масив 10, 20, 30, 50, 235, 3000 вивести числа які починаються на 1, 2, 5

let arr9 = [10, 20, 30, 50, 235, 3000];
for (let a9 = 0; a9 < arr9.length; a9++) {
  if (
    String(arr9[a9])[0] == 1 ||
    String(arr9[a9])[0] == 2 ||
    String(arr9[a9])[0] == 5
  ) {
    console.log(arr9[a9]);
  }
}

// задача 10
// даний масив потрібно вивести в зворотньому порядку його елементи

let arr10 = [1, 2, 3, 4, 5];
for (let a10 = arr10.length - 1; a10 >= 0; a10--) {
  console.log(arr10[a10]);
}

// Задача 11

// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

let arr11 = [0, 2, 9, 3, 5, 9, 6, 7, 9, 8];
for (let a11 = 0; a11 < arr11.length; a11++) {
  if (arr11[a11] == a11) {
    console.log(arr11[a11]);
  }
}

// Задача 12
// даний масив з числами. за допомогою for і document.write вивести з новї лінійки

let arr12 = [0, 2, 9, 3, 5, 9, 6, 7, 9, 8];
for (let a12 = 0; a12 < arr12.length; a12++) {
  let a = arr12[a12];
  document.write(a + "<br>");
}

// ЗАдача  13
// даний масив вивеси в окремому абзаці кожен елемент

let arr13 = [0, 2, 9, 3, 5, 9, 6, 7, 9, 8];
for (let a13 = 0; a13 < arr13.length; a13++) {
  document.write("<p>" + arr13[a13] + "</p>");
}

// ЗАдача  14
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let days = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"];
for (let d = 0; d < days.length; d++) {
  if (days[d] == "сб" || days[d] == "нд") {
    document.write("<b>" + days[d] + "</b>" + " ");
  } else {
    document.write(days[d] + " ");
  }
}
document.write("<br>");

// ЗАдача  15
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.

let days2 = ["пн", "вт", "ср", "чт", "пт", "сб", "нд"];
let day = 3;
for (let d2 = 0; d2 < days2.length; d2++) {
  if (d2 == day - 1) {
    document.write("<i>" + days2[d2] + "</i>" + " ");
  } else {
    document.write(days2[d2] + " ");
  }
}

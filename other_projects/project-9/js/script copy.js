"use strict";

// Задача 1
// за допомогою двох циклів
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3,
// 	4, 5]]

let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 5; j++) {
    arr[i].push(j + 1);
  }
}
console.log(arr);

// Задача 2
// [['x', 'x', 'x', 'x'], ['x', 'x',
// 'x', 'x'], ['x', 'x', 'x', 'x']]

let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 4; j++) {}
}

// Задача 3
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

let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 5
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr);

// Задача 6
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 7
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 8
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j <= 5; j++) {
    arr[i][j] = j + 1;
  }
}

console.log(arr);

// Задача 9
let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 10
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 11
let arr = "";

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j <= 5; j++) {
    arr[i][j] = j;
  }
}

console.log(arr);

// Задача 12

let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}

console.log(arr);

// Задача 13

let arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j <= 5; j++) {
    arr[i][j] = j;
  }
}

console.log(arr);

// Задача 14
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j <= 5; j++) {
    arr[i][j] = j;
  }
}

console.log(arr);

// Задача 15
// [[1, 2], [3, 4], [5, 6], [7, 8]]

let arr = [];
for (let i = 0, k = 1; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i].push(k++);
  }
}
console.log(arr);

// Задача 16
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20,
// 	22, 24]]

let arr = [];
for (let i = 0, k = 2; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++, k += 2) {
    arr[i].push(k);
  }
}
console.log(arr);

// Задача 17
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let arr = [];
for (let i = 0, k = 1; i < 2; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i][j] = [];
    for (let c = 0; c < 2; c++) {
      arr[i][j].push(k++);
    }
  }
}
console.log(arr);
// Задача 18
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

// Задача 19
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k++;
  }
}

console.log(arr);

// Задача 20
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

// Задача 21
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

// Задача 22
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k++;
  }
}

console.log(arr);

// Задача 23
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++, k++) {
    arr[i][j] = k;
  }
}

console.log(arr);

// Задача 24
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++, k++) {
    arr[i][j] = k;
  }
}

console.log(arr);
// Задача 26
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}

console.log(arr);

// Задача 27
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
  arr[i] = [];

  for (let j = 0; j < 3; j++, k++) {
    arr[i][j] = k;
  }
}

console.log(arr);

//////////
// Задача 1
// Знайти суму
let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};
let sum =
  obj.key1.key1 +
  obj.key1.key2 +
  obj.key1.key3 +
  obj.key2.key1 +
  obj.key2.key2 +
  obj.key2.key3 +
  obj.key3.key1 +
  obj.key3.key2 +
  obj.key3.key3;
console.log(sum);

// Задача 2
// Выведите на экран элемент 'b2' и элемент 'c1'.
let obj = {
  1: {
    1: "a1",
    2: "a2",
    3: "a3",
  },
  2: {
    1: "b1",
    2: "b2",
    3: "b3",
  },
  3: {
    1: "c1",
    2: "c2",
    3: "c3",
  },
};
console.log(obj[2][2], obj[3][1]);

// Задача 3
// Найдите сумму всех элементов-чисел.
let obj = {
  key1: {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
    },
    f: 5,
  },
  key2: {
    g: 6,
    h: 7,
  },
};
let sum =
  obj.key1.a +
  obj.key1.b +
  obj.key1.c.d +
  obj.key1.c.e +
  obj.key1.f +
  obj.key2.g +
  obj.key2.h;
console.log(sum);

// Задача 1
// Знайти суму елементів цього об'єкта
let obj = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};
let sum = 0;
for (let key in obj) {
  subObj = obj[key];
  for (let subKey in subObj) {
    sum += subObj[subKey];
  }
}
console.log(sum);
// Задача 1
// Выведите на экран название месяца, соответствующее значениям переменных lang и month.
let months = {
  ru: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ],
  en: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ],
};
let lang = "ru"; // может быть или 'ru' или 'en'
let month = 5; // число от 0 до 11
console.log(months[lang][month]);

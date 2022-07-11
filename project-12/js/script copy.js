"use strict";

function func() {
  return 'Привіт';
}
console.log(func());
console.log(func);
func = 123;
console.log(func);

/////////////////////
// Task Задача 5
//?Сделайте функцию func1, которая будет возвращать через return число 3.
function func1() {
  return 3;
}
console.log(func1())
let func2 = func1;
console.log(func2());

/////////////////////
// Task Задача 8
//?Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.
let func1 = function () {
  return 1;
}
console.log(func1());

/////////////////////
// Task Задача 9
//?Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.
let func2 = function () {
  return 2;
}
console.log(func2());
//////////////The separator/////////////
console.log(func1() + func2());

/////////////////////
// Task Задача 3
//?Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.
func();
function func() {
  console.log('привіт');
}
//////////////The separator/////////////
//?function expresion
func();
let func = function () {
  console.log('параграф');
}

/////////////////////
// Task Задача 5
//?Расставьте точки с запятой во всех необходимых местах:
let func1 = function () {
  console.log('!');
};
let func2 = function () {
  console.log('!');
};
function func3() {
  console.log('!');
}
//////////////The separator/////////////
func()
  - 1
function func() {
  console.log('!');
}
//////////////The separator/////////////
let test = function func() { // это Function 
  // Expression 
  console.log('!');
} + 1;
test();

/////////////////////
// Task Задача 1
//?Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
let arr = [
  function () { return 1 },
  function () { return 2 },
  function () { return 3 }
];
for (let elem of arr) {
  console.log(elem());
}

/////////////////////
// Task Задача 2
//?Используя созданный вами массив arr выведите на экран число 3, вызвав соответствующую функцию.
console.log(arr[2]());

/////////////////////
// Task Задача 3
//?Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
console.log(arr[0]() + arr[1]() + arr[2]());

/////////////////////
// Task Задача 1
//?Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите на экран сумму возвращаемых чисел.
let obj = {
  func1: function () { return 1 },
  func2: function () { return 2 },
  func3: function () { return 3 }
}
let sum = 0;
for (let key in obj) {
  sum += obj[key]();
}
console.log(sum);

/////////////////////
// Task Задача 3
//?Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
let math = {
  sum: function (arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += elem;
    }
    return sum
  },
  sumSquare: function (arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += elem ** 2;
    }
    return sum;
  },
  sumCube: function (arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += elem ** 3;
    }
    return sum;
  }
}
console.log(math.sum([1, 2, 3]));
console.log(math.sumSquare([1, 2, 3]));
console.log(math.sumCube([1, 2, 3]));

/////////////////////
// Task Задача 1
//?Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите на экран сумму результатов функций.
function test(func1, func2, func3) {
  console.log(func1() + func2() + func3());
}
test(
  function () { return 1 },
  function () { return 2 },
  function () { return 3 }
)

/////////////////////
// Task Задача 2
//?Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
function get1() {
  return 3;
}
console.log(test(get1, get1, get1));
function test(func1, func2, func3) {
  return func1() + func2() + func3();
}
let func1 = function () {
  return 12;
}
let func2 = function () {
  return 13;
}
let func3 = function () {
  return 10;
}
console.log(test(func1, func2, func3));

/////////////////////
// Task Задача 5
//?Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.
test(
  function (num) {
    return num ** 3;
  }
)
function test(func) {
  console.log(func(3));
}

/////////////////////
// Task Задача 6
//?Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
test(
  function func(num) {
    return num ** 3;
  }
)
function test(func) {
  console.log(func(4));
}

/////////////////////
// Task Задача 7
//?Переделайте передаваемую функцию на Function Expression с тем же именем func.
let func = function (num) {
  return num ** 3;
};
test(func);
function test(func) {
  console.log(func(3));
}

/////////////////////
// Task Задача 8
//?Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемая функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
let func = function (num1, num2) {
  return num1 + num2;
}
test(func(2, 3));
function test(func) {
  console.log(func);
}

/////////////////////
// Task Задача 9
//?Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа. Пусть функция test возвращает сумму результатов переданных функций:
// function test(num, func1, func2) {
// return func1(num) + func2(num);
// }
// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы на экран.
function test(num, func1, func2) {
  return func1(num) + func2(num);
}
let i = test(3,
  function (num) {
    return num ** 2;
  }, function (num) {
    return num ** 3;
  });
console.log(i);

/////////////////////
// Task Задача 10
//?Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.
let i = test([1, 2, 3, 4], function (num) {
  return num ** 2;
})
function test(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  return arr;
}
console.log(i);
let cube = test([1, 2, 3, 4], function (num) {
  return num ** 3;
})
console.log(cube);

/////////////////////
// Task Задача 1
//?Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.
function func(num1, num2) {
  function square(num) {
    return num ** 2;
  }
  function cube(num) {
    return num ** 3;
  }
  return square(num1) + cube(num2);
}
console.log(func(2, 3));

/////////////////////
// Task Задачі  області видимості
//?
function test() {
  let num = 1;

  function func() {
    console.log(num);
  }
}
test();
//////////////The separator/////////////
function test() {
  let num = 1;

  function func() {
    console.log(num);
  }

  func();
}
//////////////The separator/////////////
function test() {
  let num;

  function func() {
    console.log(num);
  }

  num = 1
  func();

  num = 2
  func();
}

test();
//////////////The separator/////////////
function test(num1, num2) {
  function func() {
    console.log(num1 + num2);
  }

  func();
}

test(1, 2);
//////////////The separator/////////////
function test(num1, num2) {
  function func() {
    console.log(num1 + num2);
  }

  num1 = 2;
  func();
}

test(1, 2);
//////////////The separator/////////////
function test(num) {
  function func(localNum) {
    console.log(localNum);
  }

  func(num + 1);
}

test(1);
//////////////The separator/////////////
function test(num) {
  function func(localNum) {
    console.log(num);
  }

  func(num + 1);
}

test(1);
//////////////The separator/////////////
function test(num) {
  function func(localNum) {
    localNum = 2;
  }

  func(num);
  console.log(num);
}

test(1);
//////////////The separator/////////////
function test(num) {
  function func(localNum) {
    localNum = 2;
  }

  func(num);
  console.log(localNum);
}

test(1);
//////////////The separator/////////////
function test(num) {
  function func(localNum) {
    num = 2;
  }

  func(num);
  console.log(num);
}

test(1);
//////////////The separator/////////////
function test(num) {
  function func(num) {
    console.log(num);
  }

  func(num);
}

test(1);
//////////////The separator/////////////
function test(num) {
  function func(num) {
    num = 2;
  }

  func(num);
  console.log(num);
}

test(1);
//////////////The separator/////////////
function test(num) {
  function func(num) {
    console.log(num);
  }

  num = 2;
  func(num);
}

test(1);
//////////////The separator/////////////
function test(num) {
  function func(num) {
    console.log(num);
  }
  func(num);
  num = 2;
}
test(1);

/////////////////////
// Task Задача 1
//?Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.
function func1() {
  return function () {
    return 1;
  }
}
function func2() {
  return function () {
    return 2;
  }
}
console.log(func1()() + func2()());

/////////////////////
// Task Задача 2
//?Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
function func() {
  return function () {
    return function () {
      return function () {
        return function () {
          return ('!');
        }
      }
    }
  }
}
console.log(func()()()()());

/////////////////////
// Task Задача 3
//?Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
function func(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3
    }
  }
}
console.log(func(1)(2)(3));

/////////////////////
// Task Задача 4
//?Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
function func(num1) {
  let arr = [];
  arr[0] = num1;
  return function (num2) {
    arr[1] = num2;
    return function (num3) {
      arr[2] = num3;
      return function (num4) {
        arr[3] = num4;
        return function (num5) {
          arr[4] = num5;
          return arr;
        }
      }
    }
  }
}
console.log(func(2)(3)(4)(5)());
//////////////The separator/////////////
function test() {
  let num = 1;
  return function () {
    return num;
  }
}
console.log(test()());
//////////////The separator/////////////
function test() {
  let num1 = 1;
  let num2 = 2;

  return function () {
    return num1 + num2;
  }
}

console.log(test()());
//////////////The separator/////////////
function test() {
  let num1 = 1;

  return function () {
    return num1 + num2;
  }
}

let num2 = 2;
let func = test();
console.log(func());
//////////////The separator/////////////
function test() {
  let num = 1;

  return function () {
    return num;
  }
}

let num = 2;
let func = test();
console.log(func());

/////////////////////
// Task Задача 1
//?Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.
function test() {
  let counter = 0;
  return function () {
    console.log(counter++);
  }
}
let inc = test();
inc();
inc();
inc();
inc();

/////////////////////
// Task Задача 2
//?Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.
function test() {
  let a = 10;
  return function () {
    return a--;
  }
}
let func = test();
console.log(func());
console.log(func());
console.log(func());
console.log(func());

/////////////////////
// Task Задача 3
//?Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.
function test() {
  let a = 10;
  return function () {
    if (a >= 0) {
      return a--;
    } else {
      return 'Відлік завершено!';
    }
  }
}
let func = test();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());

/////////////////////
// Task Задача 4
//?
function func() {
  let num = 0;

  return function () {
    console.log(num);
    num++;
  };
};

func()();//0
func()();//0
func()();//0

/////////////////////
// Task Задача 5
//?
function func() {
  let num = 0;

  return function () {
    console.log(num);
    num++;
  };
};

let test = func;

test()();//0
test()();//0
test()();//0

/////////////////////
// Task Задача 6
//?
let counter = 0;

function test() {
  return function () {
    console.log(counter);
    counter++;
  };
};

let func = test;

let func1 = func();
let func2 = func();
func1();//0
func2();//1
func1();//2
func2();//3

/////////////////////
// Task Задача 7
//?
function test() {
  let counter = 0;

  return function () {
    return function () {
      console.log(counter);
      counter++;
    };
  };
};

let func = test()();

let func1 = func;
let func2 = func;
func1();//0
func2();//1
func1();//2
func2();//3

/////////////////////
// Task Задача 8
//?
function test() {
  let counter = 0;

  return function () {
    return function () {
      console.log(counter);
      counter++;
    };
  };
};

let func = test();

let func1 = func();
let func2 = func();
func1();//0
func2();//1
func1();//2
func2();//3

/////////////////////
// Task Задача 1
//?
!function () {
  console.log('!');
}();
//////////////The separator/////////////
let result = function () {
  return '!';
}();

console.log(result);
//////////////The separator/////////////
let result = function () { return 1; }() + function () { return 2; }();
console.log(result);
//////////////The separator/////////////
let result = (function () {
  return '!';
});

console.log(result);

/////////////////////
// Task Задача 12
//?Допишите следующий код так, чтобы его запуск алертом выводил '!':
(function () {
  return function () {
    return function () {
      console.log('!')
    }
  }// какой-то код
})()()();

/////////////////////
// Task Задача 13
//?Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function (num1) {
  return function (num2) {
    console.log(num1 + num2);
  }
})(1)(2);
/////////////////////
// Task Задача 14
//?Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function (num1) {
  return function (num2) {
    return function (num3) {
      console.log(num1 + num2 + num3);
    }
  }
})(1)(2)(3);
//////////////The separator/////////////
let str = 'str';

(function () {
  console.log(1);
})();
//////////////The separator/////////////
let str = 'str'

  (function () {
    console.log(1);
  })();
/////////////////////
// Task Задача 1
//?Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
let func = (function () {
  let num = 1;
  return function () {
    return num++;
  }
})();
console.log(func());
console.log(func());
console.log(func());
/////////////////////
// Task Задача 2
//?Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.
let func = (function () {
  let num = 0;
  return function () {
    num++;
    if (num < 6) {
      return num;
    } else {
      num = 1;
      return num;
    }
  }
})();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());

/////////////////////
// Task Задача 1
//?Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
let array = [1, 2, 3, 4, 5];
function each(arr, func) {
  let result = [];
  for (let elem of arr) {
    result.push(func(elem))
  }
  return result;
}
function doubling(num) {
  return num * 2;
}
console.log(each(array, doubling));

/////////////////////
// Task Задача 2
//?Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
let arrayStr = ['Alegoria', 'Victor', 'Tetiana'];
function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(each(arrayStr, reverse));

/////////////////////
// Task Задача 3
//?Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
console.log(each(['slobodian', 'victor', 'mykolaiovych'], function (str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}));
function cube(num) {
  return num ** 3;
}
console.log(each(array, cube));

/////////////////////
// Task Задача 1
//?Дана следующая функция с коллбэком:
// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.
let result = every([1, 2, 3, 4, 5], elem => elem > 0);
/////////////////////
// Task Задача 2
//?Дана следующая функция с коллбэком:
// let result = every([1, 2, 3, 4, 5], function(elem, 
// 	index) { 
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.
let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

/////////////////////
// Task Задача 3
//?Дана следующая функция с коллбэком:

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = each(arr, function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result = each(arr, (elem, index) => elem * index > 10);
function each(arr, func) {
  for (let elem of arr) {
    let sum = 0;
    for (let i = 0; i < elem.length; i++) {
      sum += elem[i];
      console.log();
    }
    console.log(func(sum));
  }
}
result;
//////////////The separator/////////////
function test() {
  let num = 1;
  return function () {
    return num++;
  }
}
let func = test();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
//////////////The separator/////////////
let func = (function () {
  let num = 1;
  return function () {
    return num++;
  }
})();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());
//////////////The separator/////////////
let func = (() => {
  let num = 1;
  return () => num++
})();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
/////////////////////
// Task Задача 1
//?let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии выведите элементы этого массива на экран.
function func(arr) {
  console.log(arr.shift());
  if (arr.length != 0) {
    func(arr);
  }
}
let array = [1, 2, 3, 4, 5];
func(array);
/////////////////////
// Task Задача 2
//?Дан массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5];
function getSumSquare(array) {
  let sum = array.shift() ** 2;
  if (array.length != 0) {
    sum += getSumSquare(array);
  }
  return sum;
}
console.log(getSumSquare(arr));

/////////////////////
// Task Задача 1
//?{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
let object = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };
function func(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      func(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}
func(object);
/////////////////////
// Task Задача 2
//?Дан многомерный массив произвольного уровня вложенности, например, такой:

// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:

// [1, 2, 7, 8, 3, 4, 5, 6, 7]
let array = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let result = [];
function func(arr) {
  for (let elem of arr) {
    if (typeof elem == 'object') {
      func(elem);
    } else {
      result.push(elem);
      // console.log('!!!');
    }
    // console.log(result + '!');
    // console.log(elem);
  }
  return result;
}
console.log(func(array));
//////////////The separator/////////////
function func(arr) {
  let sum = 0;

  for (let elem of arr) {
    if (typeof elem == 'object') {
      sum += func(elem);
    } else {
      sum += elem;
    }
  }

  return sum;
}

console.log(func([1, [2, 7, 8], [3, 4, [5,
  [6, 7]]]]));

/////////////////////
// Task Задача 3
//?{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}} 
// знайти суму
let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };
function getSum(object1) {
  let sum = 0;
  for (let key in object1) {
    if (typeof object1[key] == 'object') {
      sum += getSum(object1[key]);
    } else {
      sum += object1[key];
    }
  }
  return sum;
}
console.log(getSum(obj));
/////////////////////
// Task Задача 4
//?Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:

// ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 
// 'k']]]] 
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'
let arrStr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
let Stringer = (function (arr) {
  let arrMono = [];
  return function (arr) {
    for (let elem of arr) {
      if (typeof elem == 'object') {
        Stringer(elem)
      } else {
        arrMono.push(elem)
      }
    }
    return arrMono.join('');
  }
})();
console.log(Stringer(arrStr));
//////////////The separator/////////////
function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      arr[i] = func(arr[i]);
    } else {
      arr[i] = arr[i] + '!';
    }
  }

  return arr;
}

console.log(func([1, [2, 7, 8], [3, 4, [5,
  6]]]));
/////////////////////
// Task Задача 5
//?Дан многомерный массив произвольного уровня вложенности, например, такой:

// [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// Возведите все элементы-числа этого массива в квадрат.
let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object') {
      arr[i] = func(arr[i]);
    } else {
      arr[i] = arr[i] ** 2;
    }
  }
  return arr;
}
console.log(func(arr));

/////////////////////
// Task Задача 1
//?Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
let arr = [9, 49, 25, 195];
let result = arr.map(function (elem) {
  return Math.sqrt(elem).toFixed(2);
})
console.log(result);
/////////////////////
// Task Задача 2
//?Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let arrStr = ['Віктор', 'Миколайович', 'Слободян'];
let result = arrStr.map(function (elem) {
  return elem + '!';
})
console.log(result);
/////////////////////
// Task Задача 3
//?Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
let arrStr = ['Віктор', 'Миколайович', 'Слободян'];
let result = arrStr.map(function (elem) {
  return elem.split('').reverse().join('');
})
console.log(result);

/////////////////////
// Task Задача 4
//?let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];
let arr = ['123', '456', '789'];
let result = arr.map(function (elem) {
  return elem.split('');
})
console.log(result);
/////////////////////
// Task Задача 5
//?Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
let arr = [1, 2, 3, 4, 5];
let result = arr.map(function (elem, index) {
  return elem * index;
})
console.log(result);

/////////////////////
// Task Задача 1
//?Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function (elem) {
  sum += elem ** 2;
})
console.log(sum);

/////////////////////
// Task Задача 1
//?Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [1, -2, -3, 5, -78, 995, 95, -69];
console.log(arr.filter(elem => elem >= 0));
/////////////////////
// Task Задача 2
//?Дан массив с числами. Оставьте в нем только отрицательные числа.
console.log(arr.filter(elem => elem < 0));
/////////////////////
// Task Задача 3
//?Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
console.log(arr.filter(elem => elem > 0 && elem < 10));
/////////////////////
// Task Задача 4
//?Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr = [1, 22222, 50, 643321321, 555, 545454, 55, 87925, 5454];
console.log(arr.filter(elem => String(elem).length > 5));
/////////////////////
// Task Задача 5
//?Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let arr = [1, 2, 50, 5, 78, 99, 7, 4];
console.log(arr.filter((elem, index) => elem * index < 30));
/////////////////////
// Task Задача 6
//?Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
let arr = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr.filter(elem => typeof elem != 'object'));
/////////////////////
// Task Задача 7
//?Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
let arr = [1, -2, -3, 5, -78, 995, 95, -69, -6, -8];
let counter = 0;
function toCount(arr) {
  for (let elem of arr) {
    if (elem < 0) {
      counter = counter + 1;
    }
  }
  return counter;
}
console.log(toCount(arr));
//////////////The separator/////////////
let arr = [1, -2, -3, 5, -78, 995, 95, -69, -6, -8];
console.log(arr.filter(elem => elem < 0).length)

/////////////////////
// Task Задача 1
//?Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let arr = [1, 2, 3, 4, 5];
console.log(arr.every(elem => elem > 0));
//////////////The separator/////////////
console.log(arr.every((elem, index) => elem * index < 30));

/////////////////////
// Task Задача 1
//?Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
let arr = [-1, -2, -10, -15];
console.log(arr.some(elem => elem > 0));

/////////////////////
// Task Задача 2
//?Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
let arr = [1, 1, 1, 1, 1, 9, 1];
console.log(arr.some((elem, index) => elem * index > 30));
/////////////////////
// Task Задача 1
//?
let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));
/////////////////////
// Task Задача 3
//?Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
let arr = [5, 9, 552, 3, 56];
console.log(Math.min(...arr));
//////////////The separator/////////////
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let arr3 = [];
arr3.push(arr2.splice(0, 1));
arr3.push(arr1.slice(0));
arr3.push(arr2.slice(1));
console.log(arr3);
/////////////////////
// Task Задача 1
//?Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).
function agr(...num) {
  let sum = 0;
  for (let elem of num) {
    sum += elem;
  }
  return sum / num.length;
}
console.log(agr(1, 2, 3, 4));
//////////////The separator/////////////
function inArray(elem, arr) {
  return arr.indexOf(elem) !== -1;
}
let arr = [1, 2, 3, 4];
console.log(inArray(3, arr));
/////////////////////
// Task Задача 1
//?написати код для знаходдження спільних елементів
//todo пишемо функцію, яка перевіряє чи є даний елемент в масиві
function inArray(elem, array) {
  return array.indexOf(elem) != -1;
}
//* audit
// console.log(inArray(2,[1,4,3]));
//todo пишемо функцію, яка повертає чи є даний елемент в двохвимірному масиві
function inArrays(elem, arrays) {
  for (let arr of arrays) {
    if (!inArray(elem, arr)) {
      return false;
    }
  }
  return true;
}
//todo пишемо функцію, яка приймає безкінечну кількість масивів
function getInt(...arrs) {
  // виділяємо перший масив
  let arr0 = arrs.shift();
  // створюємо маси спільних цифр
  result = [];
  for (let elem of arr0) {
    if (inArrays(elem, arrs)) {
      result.push(elem);
    }
  }
  return result;
}
console.log(getInt([1, 2, 3], [656, 45, 4, 54, 8, 2, 3, 1, 54, 215, 5], [23, 2, 3, 5]));
/////////////////////
// Task Задача 1
//?В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 
// 2000]; 

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name, surname, department, position, salary] = arr;
console.log(name, salary);
/////////////////////
// Task Задача 2
//?В следующем коде части массива записываются в соответствующие переменные:

// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 
// 		2000]; 
// }

// let arr = func();

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.
function func() {
  return ['Иван', 'Иванов', 'отдел разработки', 'программист',
    2000];
};
let [name, surname, department, position, salary] = func();
console.log(surname, position);
/////////////////////
// Task Задача 3
//?В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 
// 2000]; 

// let department = arr[2];
// let position   = arr[3];
// Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист',
  2000];
let [, , department, position] = arr;
console.log(department, position);
/////////////////////
// Task Задача 4
//?следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 
// 2000]; 

// let name    = arr[0];
// let surname = arr[1];

// let info = arr.slice(2); // все элементы 
// со второго до конца массива 
// Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист',
  2000];
let [name, surname, ...info] = arr;
console.log(name, surname, info);
/////////////////////
// Task Задача 5
//?В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'джуниор';
// }
// Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ['Иван', 'Иванов', 'отдел разработки', 'програміст'];
let [name, surname, department, position = 'Джуніор'] = arr;
console.log(position);
//////////////The separator/////////////
let arr = [];
function func() {
  return (new Date).getDate()
}
let [year = func(), month = func(), day = func()] = arr;
console.log(year, month, day);
/////////////////////
// Task Задача 1
//?В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let color  = options.color;
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
let options = {
  color: 'red',
  width: 400,
  height: 500,
};
let { color, width, height } = options;
console.log(color, width);
/////////////////////
// Task Задача 2
//?В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let c = options.color;
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
let options = {
  color: 'red',
  width: 400,
  height: 500,
};
let { color: c, width: w, height: h } = options;
console.log(w, h, c);
/////////////////////
// Task Задача 3
//?В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
let options = {
  width: 400,
  height: 500,
};
let { width, heigth, color = 'black' } = options;
console.log(color);
/////////////////////
// Task Задача 4
//?
// let options = {
// 	width:  400,
// 	height: 500,
// };

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
let options = {
  width: 400,
  height: 500,
};
let { color: c = 'black', width: w, height: h } = options;
console.log(c, w, h);
/////////////////////
// Task Задача 1
//?Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 
// 2000] ); 
function func([name, surname, department, position, salary]) {
  console.log("Ім'я: " + name + " зарпалата - " + salary);
}
func(['Иван', 'Иванов', 'отдел разработки', 'программист',
  2000]);
/////////////////////
// Task Задача 2
//?Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee[2];
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 
// 	2000] ); 
function func([name, surname, ...info]) {
  console.log(name, surname, info);
};
func(['Иван', 'Иванов', 'отдел разработки', 'программист',
  2000]);
/////////////////////
// Task Задача 3
//?
//   function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];

// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }

// func( ['Иван', 'Иванов', 'отдел разработки'] );
function func([name, surname, department, position = 'джуніор']) {
  console.log(name, surname, department, position);
};
func(['Иван', 'Иванов', 'отдел разработки']);
/////////////////////
// Task Задача 4
//?
// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];

// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }

func('отдел разработки', ['Иван', 'Иванов'], [2018, 12,
  31]);
function func(department, [name, surname], [year, month, day]) {
  console.log(`сьогодні ${day} ${month} ${year} року і ${surname} ${name} почав працювати в ${department}`);
}
/////////////////////
// Task Задача 5
//?Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(options) {
// 	let color  = options.color;
// 	let width  = options.width;
// 	let height = options.height;
// }

func({ color: 'red', width: 400, height: 500 });
function func({ color, width, height }) {
  console.log(color, width, height);
}
/////////////////////
// Task Задача 6
//?
// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;

// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }

func({ color: 'red', width: 400, height: 500 });
function func({ color = 'black', width, height }) {
  console.log(color, width, height + 'так');
}
//////////////The separator/////////////
let date = new Date();
console.log(date);

/////////////////////
// Task Задача 1
//?Выведите на экран текущий день
let date = new Date();
console.log('Cьогодній ' + date.getDate());
/////////////////////
// Task Задача 2
//?Выведите на экран текущий месяц.
let date = new Date();
console.log(date.getMonth());
/////////////////////
// Task Задача 3
//?Выведите на экран текущий год.
let date = new Date();
console.log(date.getFullYear());

/////////////////////
// Task Задача 1
//?Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.
let date = new Date();
function addZero(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}
console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear());
/////////////////////
// Task Задача 2
//?Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.
let date1 = '2022-07-05';
let date2 = date1.split('-').reverse().join('.');
console.log(date2);

/////////////////////
// Task Задача 1
//?Выведите на экран номер текущего дня недели.
let date = new Date();
console.log(date.getDay());
/////////////////////
// Task Задача 2
//?Определите, является ли текущий день недели выходным или рабочим днем.
let date = new Date();
function wekend(day) {
  if (day == 0 || day == 6) {
    return 'вихідний';
  }
  else {
    return 'робочий'
  }
}
console.log(wekend(date.getDay()));
/////////////////////
// Task Задача 3
//?Определите сколько дней осталось до ближайшего воскресенья.
let date = new Date();
function counter(day) {
  return 7 - day;
}
console.log(counter(date.getDay()));


/////////////////////
// Task Задача 1
//?
let months = [
  'янв', 'фев', 'мар', 'апр', 'май', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
// Выведите с помощью этого массива название текущего месяца.
let date = new Date();
let month = date.getMonth();
console.log(months[month]);

/////////////////////
// Task Задача 1
//?Узнайте, какой день недели был в ваш день рождения.
let date = new Date(1998, 7, 7);
let days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[date.getDay()]);
//////////////The separator/////////////
let date = new Date();
console.log(date.getTime());

/////////////////////
// Task Задача 1
//?Выведите на экран timestamp, соответствующий дате 1 января 2025 года.
let date = new Date(2025, 1, 1);
console.log(date.getTime(), date.getMonth());
/////////////////////
// Task Задача 2
//?Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
let date1 = new Date(1988, 3, 1);
let date2 = new Date(2000, 1, 10);
let diff = date2.getTime() - date1.getTime();
console.log(diff / (1000 * 60 * 60 * 24));
/////////////////////
// Task Задача 3
//?Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.
let date1 = new Date(1998, 7, 31);
let date2 = new Date();
let diff = date2.getTime() - date1.getTime();
console.log(diff / (1000 * 60 * 60 * 24 * 30));
/////////////////////
// Task Задача 1
//?Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.
let date1 = new Date(2000, 9, 1);
let date2 = new Date(2010, 2, 15);
let diff = date2 - date1;
console.log(diff);
/////////////////////
// Task Задача 2
//?Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в днях.
console.log(diff / (1000 * 60 * 60 * 24));
/////////////////////
// Task Задача 3
//?Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в месяцах.
console.log(diff / (1000 * 60 * 60 * 24 * 30));
/////////////////////
// Task Задача 4
//?Модифицируйте предыдущую задачу так, чтобы на экран выводилась разница в годах.
console.log(diff / (1000 * 60 * 60 * 24 * 365));
//////////////The separator/////////////
let date = new Date(2018, 1, 35);
console.log(date); // какая дата будет?
//////////////The separator/////////////
let date = new Date(2018, 13, 1);
console.log(date); // какая дата будет?
//////////////The separator/////////////
let date = new Date(2018, 2, 31);
console.log(date);
//////////////The separator/////////////
let date = new Date(2018, 1, 31);
console.log(date); // какая дата будет?
//////////////The separator/////////////
let date = new Date(2018, 12, 33);
console.log(date.getMonth(), date.getDate()); // какая дата будет?
//////////////The separator/////////////
let date = new Date(2018, 33, 33);
console.log(date); // какая дата будет?
console.log(date.getMonth(), date.getDate()); // какая дата будет?2020 11 3
//////////////The separator/////////////
let date = new Date(2018, 5, 0);
console.log(date); // какая дата будет? 
console.log(date.getMonth(), date.getDate());
//////////////The separator/////////////
let date = new Date(2018, -12, -33);
console.log(date); // какая дата будет?
console.log(date.getMonth(), date.getDate());
// 2016 11 28
//////////////The separator/////////////
let date = new Date(2018, 0, 1, 23, 0, 60);
console.log(date); // какая дата будет?
console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
//////////////The separator/////////////
let date = new Date(2018, 0, 1, 23, 60, 0);
console.log(date); // какая дата будет?
console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
//2018 0 2 0 0 0
let date = new Date(2018, 0, 1, 100, 100, 100);
console.log(date); // какая дата будет?
console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
// 2018 0 5 5 41 40
//////////////The separator/////////////
function getLastDay(month, year) { // функция должна принимать и год 
  let lastDays = [31, 28, 31, 30,
    31, 30, 31, 31, 30, 31, 30, 31];

  if (month != 1) {
    return lastDays[month]; // если не февраль
  } else {
    // ділитися на 4, 100 або 400
    // определяем кол-во дней в феврале по году и месяцу
    if (year % 4 == 0 || year % 100 == 0 || year % 400 == 0) {
      return 29;
    } else {
      return lastDays[month];
    }
  }
}
console.log(getLastDay(1, 2012));

/////////////////////
// Task Задача 2
//?Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.
function getLastDay(month, year) {
  let date = new Date(year, month, 0);
  return date.getDate();
}
console.log(getLastDay(2, 2012));

/////////////////////
// Task Задача 3
//?Определите, какой день недели будет в последнем дне пятого месяца 2025 года.
console.log(getLastDay(5, 2025));

/////////////////////
// Task Задача 4
//?Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.
function isLeap(year) {
  let date = new Date(year, 2, 0);
  return date.getDate() == 29;
};
console.log(isLeap(2022));
/////////////////////
// Task Задача 1
//?Сделайте функцию checkDate, которая будет выполнять описанную проверку.Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:

console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false
function checkDate(year, month, day) {
  let date = new Date(year, month, day);
  return date.getFullYear() == year && date.getMonth() == month && date.getDate() == day;
}
/////////////////////
// Task Задача 1
//?Определите, какой день недели будет 31 декабря текущего года.
let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);
let day = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let check = day[date.getDay()];
console.log(check);
/////////////////////
// Task Задача 2
//?Определите, какой день недели будет 1 числа текущего месяца.
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 1);
let days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[date.getDay()]);
/////////////////////
// Task Задача 3
//?Определите, какой день недели будет 31 декабря следующего года.
let now = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);
let days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[date.getDay()]);
/////////////////////
// Task Задача 4
//?Определите, какой день недели будет через год в такую же дату, как сегодня.
let now = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
let days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[date.getDay()]);

/////////////////////
// Task Задача 5
//?Определите, какой день недели был год назад в такую же дату, как сегодня.
let now = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
let days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[date.getDay()]);

/////////////////////
// Task Задача 7
//?Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
let days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[date.getDay()]);
/////////////////////
// Task Задача 8
//?Определите, сколько дней между 1 января и 10 сентября текущего года.
let now = new Date();
let date1 = new Date(now.getFullYear(), 0, 1);
let date2 = new Date(now.getFullYear(), 9, 10);
let days = (date2 - date1) / (1000 * 60 * 60 * 24);
console.log(days);
/////////////////////
// Task Задача 9
//?Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего. 
let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), 20);
let date2 = new Date(now.getFullYear(), now.getMonth() + 1, 10);
let days = (date2 - date1) / (1000 * 60 * 60 * 24);
console.log(days.toFixed(0));
/////////////////////
// Task Задача 10
//?Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let hours = ((now - date1) / (1000 * 60 * 60)).toFixed(0);
console.log(hours);
/////////////////////
// Task Задача 11
//?Определите, сколько часов прошло между началом дня и текущим моментом времени.
let now = new Date();
let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
let hours = Math.floor(((now - midnight) / (1000 * 60 * 60)));
let minutes = ((((now - midnight) / (1000 * 60 * 60)).toFixed(2) - hours) * 60).toFixed(0);
console.log(hours + ' годин і ' + minutes + " хвилин");

/////////////////////
// Task Задача 12
//?Определите, сколько часов осталось до конца дня.
let now = new Date();
let endDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
let hours = ((endDay - now) / (1000 * 60 * 60)).toFixed(0);
console.log(hours);
/////////////////////
// Task Задача 13
//?Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.
let counter = 0;
let now = new Date();
for (let i = 2000; i <= now.getFullYear(); i++) {
  let date = new Date(i, 0, 1);
  if (date.getDay() == 0 || date.getDay() == 6) {
    counter += 1;
    console.log(date.getFullYear());
  }
}
console.log(counter);
/////////////////////
// Task Задача 1
//?Определите, сколько секунд прошло с начала дня до настоящего момента времени.
let now = new Date();
let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let seconds = ((now - start) / (1000)).toFixed(0);
console.log(seconds);
/////////////////////
// Task Задача 2
//?Определите, сколько секунд осталось до конца дня.
let now = new Date();
let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
let seconds = ((end - now) / 1000).toFixed(0);
console.log(seconds);

/////////////////////
// Task Задача 3
//?Определите, сколько дней осталось до нового года.
let now = new Date();
let newYear = new Date(now.getFullYear() + 1, 0, 1);
let days = ((newYear - now) / (1000 * 60 * 60 * 24)).toFixed(0);
console.log(days, now.getFullYear() + 1);
/////////////////////
// Task Задача 4
//?Определите, сколько пятниц 13-е в текущем году.
let now = new Date();
// записуємо лічильник п'ятниць
let friedays = 0;
// запускаємо цикл і буде збільшуватися до 12 тим самим перевірятиме кожне 13 число місяця
for (let i = 0; i < 12; i++) {
  // рухаємося від першого місяця року по кожному 13 числу цього року і перевіряємо чи це число є п'ятиницею, якщо так то виводимо його в консоль і збільшуємо лічильник
  let date = new Date(now.getFullYear(), 0 + i, 13);
  if (date.getDay() == 5) {
    console.log(date.getMonth(), date.getDate());
    friedays += 1;
  }
}
console.log(friedays);

/////////////////////
// Task Задача 5
//?Определите, какой год был 3 месяца назад.
let now = new Date();
let than = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
console.log(than.getFullYear());
/////////////////////
// Task Задача 6
//?Определите, какой день недели будет в последнем дне текущего месяца.
let now = new Date();
let end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
// console.log(end.getMonth(),end.getDate());
let days = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[end.getDay()]);

/////////////////////
// Task Задача 7
//?Напишите код, который будет определять, високосный ли текущий год.
let now = new Date();
let year = now.getFullYear();
if (year % 4 == 0 || year % 100 == 0 || year % 400 == 0) {
  console.log('високосний');
} else {
  console.log('звичайний');
}

/////////////////////
// Task Задача 8,9
//?Напишите код, который будет находить предыдущий високосный год. Напишите код, который будет находить следующий високосный год.
let now = new Date();
let year = now.getFullYear();
function nextYear(year) {
  for (let i = 1; i < 400; i++) {
    let nextYear = year + i;
    if (nextYear % 4 == 0 || nextYear % 100 == 0 || nextYear % 400 == 0) {
      return nextYear;
    }
  }
}
function previousYear(year) {
  for (let i = 1; i < 400; i++) {
    let previousYear = year - i;
    if (previousYear % 4 == 0 || previousYear % 100 == 0 || previousYear % 400 == 0) {
      return previousYear;
    }
  }
}
console.log(nextYear(year), previousYear(year));
/////////////////////
// Task Задача 1
//?Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
let date1 = '2020-11-31';
let date2 = '2020-12-01';
if (date1 > date2) {
  console.log('перша дата більша');
} else {
  console.log("Друга дата більша");
}
/////////////////////
// Task Задача 2
//?Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
let date1 = '09-21';
let date2 = '09-23';
if (date1 > date2) {
  console.log('перша');
} else {
  console.log('друга');
}
/////////////////////
// Task Задача 3
//?Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.
let date = '07-31';
// Знаки зодіаку по датах
// Знак Зодіаку Козеріг: 22.12-20.01
// Знак Зодіаку Водолій: 21.01-18.02
// Знак Зодіаку Риби: 19.02-20.03
// Знак Зодіаку Овен: 21.03-20.04
// Знак Зодіаку Тілець: 21.04-21.05
// Знак Зодіаку Близнюки: 22.05-21.06
// Знак Зодіаку Рак: 22.06-22.07
// Знак Зодіаку Лев: 23.07-23.08
// Знак Зодіаку Діва: 24.08-23.09
// Знак Зодіаку Терези: 24.09-23.10
// Знак Зодіаку Скорпіон: 24.10-22.11
// Знак Зодіаку Стрілець: 23.11-21.12
function zodiak(date) {
  if (date >= 12 - 22 && date <= 12 - 31 && date >= 01 - 01 && date <= 01 - 20) {
    return 'Козеріг'
  } else if (date >= '01-21' && date <= '02-18') {
    return 'Водолій'
  } else if (date >= '02-19' && date <= '03-20') {
    return 'Риби'
  } else if (date >= '03-21' && date <= '04-20') {
    return 'Овен'
  } else if (date >= '04-21' && date <= '05-21') {
    return 'Тілець'
  } else if (date >= '05-22' && date <= '06-21') {
    return 'Близнюки'
  } else if (date >= '06-22' && date <= '07-22') {
    return 'Рак'
  } else if (date >= '07-23' && date <= '08-23') {
    return 'Лев'
  } else if (date >= '08-24' && date <= '09-23') {
    return 'Діва'
  } else if (date >= '09-24' && date <= '10-23') {
    return 'Терези'
  } else if (date >= '10-24' && date <= '22-11') {
    return 'Скорпіон'
  } else if (date >= '11-23' && date <= '12-21') {
    return 'Стрілець'
  }
}
console.log(zodiak(date));
/////////////////////
// Task Задача 1
//?Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий полдень текущего дня. Сравните два этих объекта и определите, был ли уже полдень или нет.
let now = new Date();
let noon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
function noonFunc(date) {
  if (date > noon) {
    console.log('полудень уже був');
  } else {
    console.log('полудня ще не було');
  }
}
noonFunc(now);
/////////////////////
// Task Задача 2
//?Получите объект с датой, содержащий текущий момент времени. Получите объект с датой, содержащий 15 число текущего месяца. Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.
let now = new Date();
let middle = new Date(now.getFullYear(), now.getMonth(), 15);
function isMiddle(date) {
  if (date < middle) {
    return 'половина місяця ще не пройшла'
  } else {
    return 'пройшла вже половина місяця'
  }
}
console.log(isMiddle(now));
/////////////////////
// Task Задача 1
//?Используя приведенный мною код, окончательно решите задачу.
let now = new Date();
let date = new Date(now.getFullYear(), 2, 8); // текущий год
let dateNext = new Date(now.getFullYear() + 1, 2, 8)
let diff = date - now; // разница

if (diff > 0) {
  console.log(diff / (1000 * 60 * 60 * 24));
} else if (diff == 0) {
  console.log('то сьогодні');
} else {
  let diff2 = dateNext - now;
  console.log(diff2 / (1000 * 60 * 60 * 24));
}
/////////////////////
// Task Задача 2
//?Пусть ваш День Рождения - первое марта. Определите, сколько дней осталось до вашего ближайшего дня рождения.
let now = new Date();
let date = new Date(now.getFullYear(), 6, 31);
let diff = date - now;
if (diff > 0) {
  console.log((diff / (1000 * 60 * 60 * 24)).toFixed(0));
} else if (diff == 0) {
  console.log('То сьогодні)');
} else {
  let date2 = new Date(now.getFullYear() + 1, 6, 31)
  let diff2 = date2 - now;
  console.log((diff2 / (1000 * 60 * 60 * 24)).toFixed(0));
}
/////////////////////
// Task Задача 3
//?Пусть теперь День Рождения может быть произвольным и содержится в переменных month и day. Определите, сколько дней осталось до заданного этой датой праздника. Учтите при решении, что есть счастливчики, которые родились 29 февраля. Не забудьте их учесть в вашем решении.

//* Повернутися Завтра
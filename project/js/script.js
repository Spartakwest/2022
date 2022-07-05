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

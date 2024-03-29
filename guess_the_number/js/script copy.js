"use strict";


; (function () {

  /////////////////////
  // Task Задача 1
  //?Сделайте калькулятор, который будет находить площадь и периметр квадрата.

  /////////////////////
  // Task Задача  2
  //?Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

  /////////////////////
  // Task Задача 3
  //?Сделайте калькулятор, который будет находить площадь круга и длину окружности.

  /////////////////////
  // Task Задача 4
  //?Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
  // площа квадрата
  function areaSquare(a) {
    return a ** 2;
  };

  // периметр квадрата
  function perimeterSquare(a) {
    return 4 * a;
  };

  // площа прямокутника
  function areaRectangle(a, b) {
    return a * b;
  };

  // периметр прямокутника
  function perimeterRectangle(a, b) {
    return a * 2 + b * 2;
  };

  // площа круга
  function areaCircle(r) {
    return 3.14 * r ** 2;
  };

  // довжина кола
  function circuit(r) {
    return 2 * 3.14 * r;
  };

  // площа трикутника
  function areaTriangle(a, b, c) {
    let p = semiPrimeter(a, b, c);
    return root(p * (p - a) * (p - b) * (b - c))
  }

  window.calculator1 = { areaSquare, perimeterSquare, areaRectangle, perimeterRectangle, areaCircle, circuit, areaTriangle }
  // додаткова функуція
  // корінь
  function root(a) {
    return a ** 0.5;
  };
  // півпериметр трикутника

  function semiPrimeter(a, b, c) {
    return (a + b + c) / 2;
  }
})();





/////////////////////
// Task Задача 1
//?Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.
; (function (separator) {
  let div = document.querySelector(separator);
  let input1 = div.querySelector('#inp1');
  let input2 = div.querySelector('#inp2');
  let input3 = div.querySelector('#inp3');
  let p = div.querySelector('#p');

  input3.addEventListener('blur', function () {
    let a = Number(input1.value);
    let b = Number(input2.value);
    let c = Number(input3.value);
    const D = b ** 2 - 4 * a * c;
    if (D >= 0) {
      if (D == 0) {
        let x = -b / (2 * a);
        p.textContent = 'Результат: x = ' + x;
      } else {
        let x1 = (-b + D ** 0.5) / (2 * a);
        let x2 = (-b - D ** 0.5) / (2 * a);
        p.textContent = 'Результат: x1 =' + x1 + ' x2 = ' + x2;
      }

    } else {
      p.textContent = "Результат: дане рівняння немає розв'язків";
    }
  })

})('.div1');

/////////////////////
// Task Задача 2
//?Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.
; (function (separator) {
  let div = document.querySelector(separator);
  let input1 = div.querySelector('#inp1');
  let input2 = div.querySelector('#inp2');
  let input3 = div.querySelector('#inp3');
  let p = div.querySelector('#p');

  input3.addEventListener('blur', function () {
    let a = Number(input1.value);
    let b = Number(input2.value);
    let c = Number(input3.value);

    if (a > b && a > c) {
      if (a ** 2 == (b ** 2 + c ** 2)) {
        p.textContent = 'Результат: так';
      } else {
        p.textContent = 'Результат: так';
      };
    } else if (b > a && b > c) {
      if (b ** 2 == (a ** 2 + c ** 2)) {
        p.textContent = 'Результат: так';
      } else {
        p.textContent = 'Результат: так';
      };
    } else if (c > b && c > a) {
      if (c ** 2 == (b ** 2 + a ** 2)) {
        p.textContent = 'Результат: так';
      } else {
        p.textContent = 'Результат: так';
      };
    }
  })

})('.div2');

/////////////////////
// Task Задача 3
//?Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.
; (function (separator) {
  let div = document.querySelector(separator);
  let inp = div.querySelector('#inp');
  let btn = div.querySelector('#btn');
  let p = div.querySelector('#p');


  btn.addEventListener('click', function () {
    p.textContent = 'дільники:' + division(Number(inp.value));
  }

  )
  function division(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        arr.push(i);
      }
    }
    return arr;
  }


})('.div3');

/////////////////////
// Task Задача 4
//?Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.
; (function (separator) {
  let div = document.querySelector(separator);
  let inp1 = div.querySelector('#inp1');
  let inp2 = div.querySelector('#inp2');
  let btn = div.querySelector('#btn');
  let p = div.querySelector('#p');


  btn.addEventListener('click', function () {
    p.textContent = 'спільні дільники:' + commonDivisors(Number(inp1.value), Number(inp2.value));
  }

  )

  // дадаткові функції
  function division(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  function commonDivisors(num1, num2) {
    let arr1 = division(num1);
    let arr2 = division(num2);
    let arr3 = [];
    for (let elem of arr1) {
      if (arr2.includes(elem)) {
        arr3.push(elem)
      }
    }
    return arr3;

  }


})('.div4');

/////////////////////
// Task Задача 5
//?Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
; (function (separator) {
  let div = document.querySelector(separator);
  let inp1 = div.querySelector('#inp1');
  let inp2 = div.querySelector('#inp2');
  let btn = div.querySelector('#btn');
  let p = div.querySelector('#p');


  btn.addEventListener('click', function () {
    p.textContent = 'найбільший спільний дільник:' + bigest(Number(inp1.value), Number(inp2.value));
  }

  )

  // дадаткові функції
  function division(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        arr.push(i);
      }
    }
    return arr;
  };
  function commonDivisors(num1, num2) {
    let arr1 = division(num1);
    let arr2 = division(num2);
    let arr3 = [];
    for (let elem of arr1) {
      if (arr2.includes(elem)) {
        arr3.push(elem)
      }
    }
    return arr3;

  };
  function bigest(num1, num2) {
    let arr = commonDivisors(num1, num2);
    return arr[arr.length - 1];
  }


})('.div5');

/////////////////////
// Task Задача 6
//?Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.
; (function (separator) {
  let div = document.querySelector(separator);
  let inp1 = div.querySelector('#inp1');
  let inp2 = div.querySelector('#inp2');
  let btn = div.querySelector('#btn');
  let p = div.querySelector('#p');


  btn.addEventListener('click', function () {

    p.textContent = 'найменше із чисел, що ділиться на двоє даних: ' + largestNumber(Number(inp1.value), Number(inp2.value));
  }

  )

  // додаткові функції
  function largestNumber(num1, num2) {
    let i = num1;
    while (true) {

      i++;
      if (i % num1 == 0) {
        if (i % num2 == 0) {
          return i;
        }
      }
    }
  }



})('.div6');

/////////////////////
// Task Задача 1
//?Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.

/////////////////////
// Task Задача 2
//?Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.

/////////////////////
// Task Задача 3
//?Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.

/////////////////////
// Task Задача 4
//?Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.

/////////////////////
// Task Задача 5
//?В предыдущих задачах мы сделали так, что для нашего текста выводятся 4 параметра. Сделайте 4 чекбокса, которые будут регулировать, какие именно параметры показывать.

; (function (separator) {
  let div = document.querySelector(separator);
  let area = div.querySelector('#textarea')
  let p1 = div.querySelector('#p1');
  let p2 = div.querySelector('#p2');
  let p3 = div.querySelector('#p3');
  let p4 = div.querySelector('#p4');
  let check1 = div.querySelector('#check1');
  let check2 = div.querySelector('#check2');
  let check3 = div.querySelector('#check3');
  let check4 = div.querySelector('#check4');
  let btn = div.querySelector('#btn');


  btn.addEventListener('click', function () {
    // визаначення значення вписаного в поле як лінійку
    let str = area.value;


    if (check1.checked) {
      p1.textContent = 'у тексті ' + str.length + ' сим.';
    } else {
      p1.style.display = 'none';
    }

    if (check2.checked) {
      p2.textContent = 'у тексті ' + str.split(' ').length + ' сл.';
    } else {
      p2.style.display = 'none';
    }

    if (check3.checked) {
      p3.textContent = 'без пробілів ' + str.split(' ').join('').length + 'сим.';
      p4.textContent = 'відсоткове співвідношення кожного символа:';
    } else {
      p3.style.display = 'none';
    }

    if (check4.checked) {
      p4.style.display = 'none';
      let obj = percentageRatio(str);
      let ul = document.createElement('ul');
      for (let key in obj) {
        let li = document.createElement('li');
        li.textContent = `'${key}' - ${obj[key]}%`;
        ul.appendChild(li)
      }
      p4.appendChild(ul);
    }
    else {
      p4.style.display = 'none';
    }
  })

  // функція для визначення процентного співвідношення кожного символа
  function percentageRatio(str) {
    let full = str.length;
    let obj = counter(str);
    for (let key in obj) {
      obj[key] = (Number(obj[key]) / Number(full) * 100).toFixed(2)
    }
    return obj;
  }

  // функція для визначення кількості одного символа 
  function symbolCounter(symbol, arr) {
    let counter = 0;
    return (function () {
      while (arr.indexOf(symbol) != -1) {
        counter += 1;
        arr.splice(arr.indexOf(symbol), 1)
      }
      return counter;
    })()
  };

  // функція для створення об'єкта із кількістю елементів лінійки
  function counter(str) {
    let arr = str.split('');
    let arr2 = [];
    let arr3 = [];
    while (arr.length != 0) {
      let symbol = arr[0];
      let count = symbolCounter(symbol, arr);
      arr2.push(symbol);
      arr3.push(count)
    }
    let obj = [];
    for (let i = 0; i < arr2.length; i++) {
      obj[arr2[i]] = arr3[i];
    }
    return obj;
  };

})('.div7');
"use strict"

let arr = ['a', 'b', 'c'];
arr[0] = 'd';
console.log(arr);

let arr2 = ['a', 'b', 'c'];
arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;
console.log(arr2);

arr2[0] = arr2[0] + '!';
arr2[1] += '!';
arr2[2]++;
console.log(arr2)

let arr3 = [1, 2, 3];
arr3[3] = 4;
arr3[4] = 5;

console.log(arr3);

let arr4 = [];
arr4[4] = 15;
arr4[8] = 4;
console.log(arr4.length);

let obj = { 1: 'a', 2: 'b', 3: 'c' };
console.log(obj);

let obj2 = { ke1: 'Victor', ke2: 'Rectal', ke3: 'Addidas' };
console.log(obj2['ke2']);

let obj3 = { a: 1, b: 2, c: 3 };
console.log(obj3['a'] + obj3['b'] + obj3['c']);

let obj4 = { key1: 1, key2: 2, key3: 3 };
console.log(obj4.key1 + obj4.key2 + obj4.key3);

let user = { name: 'Victor', surname: 'Slobodian', patronymic: 'Mykolaiovych' };
console.log(user.name + ' ' + user.surname + ' ' + user.patronymic);

let date = { year: 2022, month: 5, day: 14 };
console.log(date.year + '-' + date.month + '-' + date.day);

let numbers = {};
numbers.a = 1;
numbers.b = 2;
numbers.c = 3;
console.log(numbers);
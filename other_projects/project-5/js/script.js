"use strict";

let arr = ["a", "b", "c"];
let a = 1;
console.log(arr[a]);

let arr2 = ["a", "b", "c"];
let key = 2;
console.log(arr2[key]);

let arr3 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arr3[key1] + arr3[key2]);

let obj = { a: 1, b: 2, c: 3 };
let keyo = "b";
console.log(obj[keyo]);

console.log(typeof {});
console.log(typeof []);
console.log(typeof { a: 1, b: 2, c: 3 });
console.log(typeof [1, 2, 3]);
let arr4 = [1, 2, 3];
console.log(typeof arr4);
let arr5 = [1, 2, 3];
console.log(typeof arr5[0]);

let arr6 = ["1", "2", "3"];
console.log(typeof arr6[0]);

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({ a: 1, b: 2, c: 3 }));

let arr7 = [1, 2, 3];
let arr8 = arr7;

arr7[0] = "a";
console.log(arr8);

let arr9 = [1, 2, 3];
let arr10 = arr9;

arr9[0] = "a";
arr10[1] = "b";

console.log(arr9);

let obj2 = { a: "Victor", b: "Slobodian" };
console.log("a" in obj2);
console.log("v" in obj2);

let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
delete obj1.e;
console.log("e" in obj1);

let arr11 = ["a", "b", "c", "d", "e"];
delete arr11[0];
delete arr11[4];
console.log(arr11.length);

'use strict'

let n = 2;
console.log("printing n", n)
n = 2.32;
console.log("printing n and num", n);

console.log("145e4 = ", 145e4);

console.log("145e4 = ", 145e-4);

console.log("'20*20 =", '20'*20); // type conversion takes place
console.log("20* '20 = ",20*'20');

console.log(" printing infinity", Infinity);
console.log("psotive infinity", Number.POSITIVE_INFINITY)
console.log("printing 1/0", 1/0);

console.log("printing -1/0", -1/0);
console.log("printing negative infinity", Number.NEGATIVE_INFINITY);

console.log("string divided by integer =", "A String"/2) // NAN

let num =16;

console.log("printing binary of 16 is", num.toString(2));
console.log("printing octal decimal of 16 is", num.toString(8));
console.log("printing decimal of 16 is", num.toString(10));

let a = 20;
console.log("typeof a", typeof a)
let b = a.toString() // when we dont pass argument to toString method it converts to string;
console.log(typeof b, typeof b)

let x = 3.4567;
console.log("3.4567 rounded to 0 decimal = ", x.toFixed(0));
console.log("3.4567 rounded to 2 decimal = ", x.toFixed(2));
console.log("3.4567 rounded to 2 decimal = ", x.toFixed(5));

let y = 25.678;
console.log("value of 25.678 = ", y.toPrecision())
console.log("value of 25.678 = ", y.toPrecision(2)) // toPrecision return number of digits we like in total it will round to neares integer
console.log("value of 25.678 = ", y.toPrecision(3));

console.log("Maximum number = ", Number.MAX_VALUE);
console.log("Minimum value = ", Number.MIN_VALUE)









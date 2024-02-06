//generate random number;

console.log("Generating random number",Math.random()) // It generates number between 0 to 1

console.log("Generating random number",Math.floor(Math.random()*10)) // It generates number between 0 to 10

console.log("Generating random number",Math.floor(Math.random()*10+1)) //  It generates number between 1 to 11

console.log("Maximum of numbers", Math.max(1,2,14,19,20, 0, 100));

console.log("Maximum of numbers", Math.min(1,2,14,19,20, 5, 100));

//converting number to object we can use String(), Number(), Boolean() to convert

const num = 20;

console.log("printing typeof", typeof num);

let strnum = String(num)

console.log("printing typeof strnum", typeof strnum);

const booleannum = Boolean(num)

console.log("printing booleannum", booleannum);

const string = "hello";
console.log("converting to Boolean", Boolean(string));

// we can also use toString()

const givenNum = 20;

console.log("converting to string",typeof givenNum.toString());

console.log("converting to boolean",typeof Boolean(givenNum));











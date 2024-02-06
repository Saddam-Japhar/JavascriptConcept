//Variable hoisting: https://www.freecodecamp.org/news/what-is-hoisting-in-javascript/
// javascriptUnderTheHood: https://dev.to/inancakduvan/let-me-understand-how-javascript-works-under-the-hood-3ibf

//Variable defined with let has block scope so every "i" will have its own lexical scope in setTimeout that is not case with
// when variable is declared using var keyword

function funcLoop(){
    for(let i=0; i<3; i++){
        setTimeout(function(){
            console.log("The value of I is: ",i)
        },200)
    }
}

// Understanding the Array


const numbers = [1,3,5,6,7];

const names = new Array ("Alexa","Sam", "Wu","Jack", "James") // Another way of creating array with constructor

// when we assign array variable to different variable in array then both variable in this case (numbers, shallowCopy)
// points to the same data instead of creating whole new array unlike assignment operation for primitive data(stings, numbers) as array is of undefined length it will end 
// of consuming more memory: methods performed on shallow copy mutate the orignal arrray as both points to same data;



const shallowCopy = numbers;
shallowCopy[0]=50;
console.log(numbers);

// Deep copy: it creates whole new array in memory.

const deepCopy = names.slice();
deepCopy[0] = "Mary"

console.log("printing orignal names", names);
console.log("printing deepCopy", deepCopy);

// methods available on Array

// push, pop, unshift and shift mutate the orignal array
const fruits = ['apple', 'banana', 'cherry', 'date'];

fruits.push('orange');  // apends in last
console.log("fruits: ", fruits);

fruits.pop();  // removes the last element
console.log("fruits after pop: ", fruits)

fruits.unshift('orange') // apends at start of array
console.log("fruits after unshift: ", fruits);

fruits.shift(); // removes first element of array
console.log("fruits after shift: ", fruits);

// how to add or remove element in the mid of array at any particular index;
// splice method;

const engineer = ['mechanical', 'computerScience', "electrical", "civil"]

// add electronics at index 2 or position 3;
// splice("index at which element is added", "number of elements to be removed from specified index", "item to added at specified index");
// splice method mutate the orignal array and it returns array of deleted data

const newEngineer = engineer.splice(2, 0, "electronic")

console.log("engineer: ", engineer);
console.log("newEngineer: ", newEngineer)

const deletedEngineer = engineer.splice(3,2)

console.log('engineer after deleting 2 engineer', engineer)
deletedEngineer.push("medicalEngineer")
console.log("deletedEngineer: ", deletedEngineer)

// slice method: it is used to slice(take out part of array); it creats new array when used on existing array

const electronics = new Array('fan',"tv",'iron', 'mobile', 'telephone');

const newelectronics = electronics.slice(2);
console.log("newelectronics after slicing from index 2", newelectronics);

// what if we want only tv, iron and mobile

const requiredElectronics = electronics.slice(1, 4);
console.log("required electronics", requiredElectronics);

// what if array is very long we want last three element; slice(index inclusive, index excluded)

const verylongArray = [1,3,5,,,,,,,,,,,,,,,,,,,,,,,,,,,56,78,98,100];
const lastthreeelement = verylongArray.slice(-3)
console.log("last three element", lastthreeelement);

// last three but befre last element

const lastThreeButNotLast = verylongArray.slice(-4, -1)
console.log("lastThreeButNotLast: ", lastThreeButNotLast);

//concatenate and sort operation

// concatenate: Does not mutate the orignal array
// sort and reverse Mutate the orignal array;

const northstate = ['Bihar', 'Jharkhand', 'UP', 'Mahrastra'];
const southState = ['karnataka', 'Tamilnadu', 'andhra'];
const stateCapital = ['Delhi', 'Patna', 'Ranchi'];

const combineNorthSouthState = northstate.concat(southState, stateCapital);
console.log("combineNorthSouthState: ", combineNorthSouthState);

console.log('northstate: ', northstate); // concat method modify the orignal north state

const sortednorthstate = northstate.sort(); // arrange in alphabetical order;
sortednorthstate[0]="Bangal"
console.log("returnnorthstate after sorting", sortednorthstate)
console.log('northstate after sorting', northstate)

console.log('northstate after revers', northstate.reverse())

const randomnumbers = [1,3,5,7,9,12]
console.log("randomnumbers after sort operation", randomnumbers.sort()); // unxpected because it checks first element and when first element same then checks second element.
console.log("printing in ascending order", randomnumbers.sort((a,b)=>a-b));

randomnumbers.sort(function(a, b){ return a-b});
console.log('randome', randomnumbers)

let student = ['medical', "engineer", 'commerce']
let newstudent = [...student] // it creates whole new array but it is shallow copy
student.push("education");
console.log("printing student", student);
console.log("printing newStudent", newstudent);
console.log("printing after join operation", student.join(','))

// solve below questions using reduce method;
/*
1. Calculate the Sum of Array Elements:
Given an array of numbers, use reduce() to calculate the sum of all the elements in the array.
*/

const num = [51,8,9,99,3,19];

const sum = num.reduce((acc, currentValue, index) => {
    console.log(`acc value: ${acc}, curren value: ${currentValue}, index value: ${index}`)
   return acc+currentValue
    
}, 10);

const maxValue = num.reduce((acc, currentValue)=> acc-currentValue>0 ? acc : currentValue)

console.log("printing maxValue", maxValue)

console.log("Sum: ", sum)

const nestedArray = [2,3,[5,6,[8,9]]]

const flatArray = nestedArray.reduce((acc, cur) => {
  let farray = []
  farray.push(cur)
  acc = [...farray]
  return acc
}, [] )

console.log("printing flatArray", flatArray);

/* Group Array Elements by a Key:
Given an array of objects, each containing a key-value pair, use reduce() to group the objects by a specific key.
For example, group a list of people by their age.
*/


const employees = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
  ];
  


const employeeAge = employees.reduce((acc, cur)=> {
 const { name, age } = cur;
 if(!acc[age])
 {
    acc[age] = []
    console.log("printing acc", acc)
 }
 acc[age].push(name)
 return acc;
},{});

console.log("printing employeebyage", employeeAge)

// calculate the average of an array;

const val = 'student';

const unique = Array.from(new Set(val))

console.log("unique value: ", unique.join(''));

const str = "engineer";
console.log("printing str fo array.from operation, str: ",  Array.from(str));
console.log("printing str after split str: ", str.split(','));

const userData = ['user', 'profile', '123'];
const userDataPath = userData.join('/')
console.log(`https://json.placeholder.com/${userDataPath}`)
































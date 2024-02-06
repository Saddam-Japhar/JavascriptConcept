// function Car(make, model, price, engine) {
//     this.make = make;
//     this.model = model;
//     this.price = price;
//     this.engine = engine;
//     this.range = ['a','b','c']
//     this.details = ()=> {
//         console.log("printing this in this.details func", this);
//     }
//     this.rangeFunction = function(){
//         this.range.map(item=>{
//             console.log("printing range inside range map", item)
//         })
//     }
// }
// const s6engine = {
//     power:'12hz',
//     displacement: '150',
//     label:'latest'
// }
// const volvo = new Car('2016', 'SUV', '1500000', s6engine);
// volvo.details()
// car.printdetials()


/* Variable declared with var get attached to window object but declared with const does not

attached to window object
*/

const personName = "winodname";

var personAge = 23;

console.log("printing personName", this.personAge); // declared with var so attached to window

console.log("printing personName", window.personAge); // declared with var so attached with window

console.log("printing personName", this.personName) // declared with const so that does not get appended to window
console.log("printing window.personName",window.personName) // // declared with const so that does not get appended to window

let car = {
    name: "maruti",
    milege: 28,
    Engineinfo:{
        power: "128hz",
        speed: "Up to 150 in 10 second"
    }
}

console.log("printing car before", car);

/* 

When we assign variable which is not primitive data(string, undefined, number, boolean, null(SUNBN)). Means
if it is object, array, function or any other than SUNBN then
then it assign pointer i.e refernce to memory location so both will be pointing to same value hence changes
in copy  will change the orignal

*/

// const volvo = car; 

// volvo.name="rijwan"

// console.log("printing volvo", volvo)
// console.log("printing car after", car)

/* There are two ways to resolve the above issue that changes in copy should not affect orignal
but it has limitation that it only works in first heirachy of object that we call it as shallow copy
Means it copies of top level data of object by value and for nested object it copies the reference.
1. object.assign({}, obj),
2. spread operator [....]
*/

// const jeep = Object.assign({}, car)

// jeep.name = "JEEP"; // doesnot change the orignal car object as it is shallow copy(first level object copied by value)

// jeep.Engineinfo.power='150hz'; // does change the orignal object as it is nested object it has been copied by reference.

// console.log("printing jeep", jeep)

// console.log("printing car after", car)

/* deep clone;
Here the first level and nested objects are copied by value hence changes in copy
does not change the orignal

Ther are two ways from javascript built in function
1. JSON.parse(JSON.stringify(obj)); limitation it does copy the if attribute values are functions
2. const clone = structuredClone(obj);
*/

const swift = structuredClone(car);
swift.name = "swift";
swift.Engineinfo.power="110hz"
console.log("printing swift", swift)
console.log("printing car after", car)



/* 
function borrowing or attaching a function to other object that can be achieved with
call, appy and bind
in case of call we pass the argument seprated with comma and it calls the function
in case of apply we pass the argument in array  example.apply(obj, [a,b,c ]) and it calls the function
in case of bind we store the reference of function which can be invoked later

*/



function printdetials(occupation, company) {
    // console.log(`my name is ${this.name} and age is ${this.age}`)
    console.log(`my name is ${this.name} and agen is ${this.age}. I am and ${occupation} and I work in 
    ${company}`)
}

printdetials.call(car, 'TeamLead', 'Brillio')
printdetials.apply(car, ['sofowareEngineer', 'Brillio'])

// const callDetails = printdetials.bind(car);
// callDetails()


/* similar as Function constructor, Javscript has introduced class construtor*/

class Vehicle {
    constructor(make, model, price, engine){
        this.make = make;
        this.model = model;
        this.price = price;
        this.engine = engine;

    }
   details = function(){
      console.log(` Make: ${this.make}, model : ${this.model}, price: ${this.price}`)
  }

}

const bus = new Vehicle("2016", "new", "170000", "latest");

bus.details()


/* 
    String is basically an array of character
    string in javascript can be created with double quote("") and single quote('')

*/ 

// how can we print I "like" cricket

console.log("I \"like\" cricket");

// how can we create multi line string

console.log(" Creating multiline string \
            I am trying to create multiline string")// With double or single quote we can not create multiline string

console.log(`creating multiline string
I am trying to create multiline string`); // We can create multiline string with temlate litral

const str1 = "Andrew";
const str2 = "Andrew";

const str3 = new String("Andrew");
const str4 = new String("Andrew");

console.log("typeof str1: ", typeof str1);
console.log("typeof str3: ", typeof str3);

console.log("comparing str1 == str2: ", str1 == str2); // check if both the value are equal

console.log("comparing str1 == str3: ", str1 == str3) // returns true becaue it check value not the type;

console.log("comparing str3 == str4: ", str3 == str4)// incase of object it compares the references of object hence it return false

// when we use === type coercion does not take place it checks type as well as value

console.log("comparing str1 === str2: ", str1 === str2);  // return true both are same type and value is same

console.log("comparing str1 === str3: ", str1 === str3); // false: as different data type string and object

console.log("comparing str3 === str4: ", str3 === str4) // false, Compares the refernce value



/*
JavaScript performs type coercion in various situations, and it often converts values between different types to facilitate operations. Here are some common scenarios where type coercion occurs:

Comparison Operators (==, !=, ===, !==): The == and != operators perform type coercion before making the comparison. If the operands are of different types, JavaScript will attempt to convert one or both of them to a common type

*/

'5' == 5;      // true (coercion: string to number)
null == undefined;  // true (coercion: null becomes undefined)
'1' === 1;     // false (strict equality: no coercion)

// Arithmetic Operations: In mathematical operations, JavaScript may coerce values to numbers.

'5' * 2;       // 10 (coercion: string to number)

// Logical Operations (&& and ||): Logical operators may coerce values to boolean.

'hello' && true;   // true (coercion: string to boolean)
'' || 'default';   // 'default' (coercion: string to boolean)

//String Concatenation (+): When using the + operator with strings and other types, JavaScript may convert non-string values to strings.

'5' + 5;       // '55' (coercion: number to string)

//Implicit Type Conversion: When passing values to functions or using them in various contexts, JavaScript may perform implicit type conversions.

Number('42');    // 42 (coercion: string to number)

//It's important to be aware of these behaviors to write code that behaves as expected and to use the appropriate operators when type coercion is desired. However, using strict equality (=== and !==) is generally recommended to avoid unexpected results from implicit type coercion.


let empName = "Saddam Japhar";

console.log("length of empName", empName.length);

console.log("index of h is: ", empName.indexOf('Ja'))

console.log('index of ar', empName.search('ar'));

var line = "Fundamentals of Javascript with Javascript core concept";

// Replace function does not mutate the orignal line variable

console.log("slice(1,12)",line.slice(1, 12))

console.log("printing line", line);

console.log("slice(-23, -15)", line.slice(-23, -15));

console.log("replace Javascript with Python", line.replace("Javascript", "Python"))// It only replaces the first occurance of Javascript

console.log("replace Javascript with Python", line.replace("javascript", "Python")) // Replacement does not happen as case sensitive so it will look for small case javascript

console.log("replace Javascript with Python with /i", line.replace(/javascript/i, "Python"))

// if we want global replacement

console.log("replace Javascript with Python with /g", line.replace(/Javascript/g, "Python"));

console.log("spliting of line with space", line.split(' '))

let myString = "    hi, how are you ?     "

console.log("printing myString with trim", myString.trim())









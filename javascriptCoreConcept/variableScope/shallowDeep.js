const originalArray = [1, 2, [3, 4]];

// Creating a shallow copy using the spread operator
const shallowCopy = [...originalArray];

// Modifying a nested element in the shallow copy
shallowCopy[2][0] = 99;
shallowCopy[0]=19;
console.log("orignalCopy",originalArray); // [1, 2, [99, 4]]
console.log("shallowCopy",shallowCopy);   // [1, 2, [99, 4]]

/* Shallow copy actually copy the copy by value for the top level properties and copy by reference 
for the nested object so if you change the top level property it does not affect the orignal array how
ever if you change the nested object it does change the orignal object as it has copy the address reference
which is pointing to same value

ways to create shallowcopy object.assign({}, obj) and other one is using spread operator [...obj]
*/

/* deepcopy copy the copy by value for all the top level as well as nested level object way to create
deepcopy is json.parse(JSON.stringify(arr)) but it does do the deep copy of nested function
so the other way for doing deep copy is using lodash*/


   
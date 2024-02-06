
/* -------------------------------NOTE------------------------------------------------

    inside method this refers to object
    inside normal function this refers to window object
    in global scope this refers to window object
    Arrow functions treat this keyword differently. They don’t define their own context since it doesn’t have its own this context. They inherit that from the parent scope whenever you call this.
    Whenever an arrow function is inside an object, it will derive this value from the enclosing lexical scope. Lexical scope, in this case, is the global scope.

    https://www.youtube.com/watch?v=gvicrj31JOM

*/


/**********INTERVIEW QUESTION****************************
 * 
 * https://dmitripavlutin.com/javascript-this-interview-questions/
 * 
 * https://www.section.io/engineering-education/how-to-use-javascript-arrow-functions-and-this-keyword/
 * 
 *******/



// let name = "saddam"
// console.log("this.name", this.name);
// console.log("window.name", window.name)
// console.log("printing name", name);

// const person = {
//     name: "saddam",
//     age:28,
//     tags:["a","b","c","d","e"],
//     printname: function(){
//         this.tags.forEach((tag) => {
//             console.log("printing tag", tag, this.name)
//         })
//     }
// }

// person.printname()
name="saddam"
function Pet(name) {
    this.name = name;
  
    this.getName = ()=> this.name
}
  const cat = new Pet('Fluffy');
  
  console.log("printing cat.getName()",cat.getName()); // What is logged?
  
  const { getName } = cat;
  console.log("printing getName",getName());

  const object = {
    message: 'Hello, World!',
  
    logMessage:() => {
      console.log("printing this.message",this.message); // What is logged?
    }
  };

  object.logMessage()
  
//   setTimeout(()=>object.logMessage, 1000);
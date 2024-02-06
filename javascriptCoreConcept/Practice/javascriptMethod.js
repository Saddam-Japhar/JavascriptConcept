/*
Certainly! Here are some JavaScript string manipulation questions involving the replace, search, indexOf, and includes methods:

Question 1:
Write a function that takes a sentence and replaces all occurrences of the word "apple" with "orange".

Question 2:
Given a URL as a string, write a function to check if it contains the protocol "https://" and replace it with "http://".

Question 3:
Create a function that searches for a specific keyword in a sentence. The function should return true if the keyword is found, and false otherwise.

Question 4:
Write a function that takes a sentence and replaces all occurrences of a specific character with an exclamation mark '!'. For example, replace all occurrences of the letter 'a'.

Question 5:
Given an array of strings, write a function that returns a new array containing only the strings that include the word "JavaScript".

Question 6:
Write a function that takes a sentence and returns the index of the first occurrence of the word "world". If "world" is not present, return -1.

Question 7:
Create a function that checks if a given email address includes the domain "example.com". Return true if it does and false otherwise.

Question 8:
Write a function that replaces all spaces in a sentence with underscores ('_').

Question 9:
Given a string, write a function that checks if it starts with the word "Hello".

Question 10:
Write a function that searches for a specific word in a sentence. The function should return the index of the first character of the word if found, and -1 otherwise.
*/

//1. answer


const firstString = "I like Apple mobile. Apple series are really good. I like apple watches"

const convertAppleToOrange = (firstString)=> {
    console.log("replacing first occurance", firstString.replace("Apple", "orange"))
    //to replace globally use g and for case sensitive use i
    return firstString.replace(/apple/gi, "Orange")
}

console.log("Apple to oragne", convertAppleToOrange(firstString))

//2.
const url = "httpcheck://jsonplaceholder.com"

const replacehttps = (url) => {
    // if(url.indexOf("https")>-1){
    //   return  replacwithHttp = url.replace("https", "http")
    // }

    if(url.includes("https")){
        return  replacwithHttp = url.replace('https', 'http')
      }
    return url;
}

console.log("replace https with http", replacehttps(url))

//3. Question 3:
//Create a function that searches for a specific keyword in a sentence. The function should return true if the keyword is found, and false otherwise.

const language = "Javascript is very powerfull language"

const includesJavascript = language => language.includes("javascript")
console.log("includesJavascript", includesJavascript(language));

//4.Write a function that takes a sentence and replaces all occurrences of a 
//specific character with an exclamation mark '!'. For example, replace all 
//occurrences of the letter 'a'.

const fourthStr = "Javascript is programming language"

const replaceA = (fourthStr)=> {
    return fourthStr.replace(/a/g, '@')
}
console.log("replaceA", replaceA(fourthStr))
console.log("printing fourthStr", fourthStr) // replace Method does not mutate orignal String

//5. Given an array of strings, write a function that returns a new array containing 
//only the strings that include the word "JavaScript".

const strfive = ['Javascript is powerfull', 'Javascript is used for UI', 'Python is powerful scripting lang']

const strOnlyJavascript = (strfive)=> {
    return strfive.filter(j => j.toLocaleLowerCase().includes('javascript'))
}

console.log("only javascript",strOnlyJavascript(strfive) )

//6 Write a function that takes a sentence and returns the index of the f
//irst occurrence of the word "world".
// If "world" is not present, return -1.

const strSix = 'Hello World'

console.log("first occuranceof of word hello", (()=> strSix.toLocaleLowerCase().indexOf("world"))())

//7. Question 7:
//Create a function that checks if a given email address includes the domain 
//"example.com". Return true if it does and false otherwise.

const strseven = "ch@gmail.com isec good site";
console.log("isExamplePresent", (()=>strseven.toLocaleLowerCase().includes('ec'))())

// Write a function that replaces all spaces in a sentence with underscores ('_').

const strEight = "This is the test sentence"
console.log("replaces all the spaces", (()=>strEight.replace(/ /g, '_'))())

//Question 9:
//Given a string, write a function that checks if it starts with the word "Hello".

console.log("Start with word hello", (()=> strSix.toLocaleLowerCase().startsWith('hello'))())





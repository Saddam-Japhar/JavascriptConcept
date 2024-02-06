1. /* Transformation of Elements:

Given an array of strings, use the map method to transform each string by adding the prefix "Hello, " to it. Provide the resulting array
*/

const employees = ["Rijwan", "Rustam", "Sachin", "Naresh", "Roshan"];

const greetEmployees = employees.map(emp=> `Hello ${emp}`)
console.log("printing greetEmployees", greetEmployees);

2. /* Given an array of words, use map to create an array of the lengths of each word. */

const countries = ["Nepal", "india", "United States", "Banglades"];

const lenght = countries.map(c=> c.length);
console.log("printing lenght of contries word", lenght);

3. /* Object Transformation:[00=]

Consider an array of objects representing people with name and age 
properties. Use map to create a new array of objects with an additional property isAdult that
 is true if the person is 18 or older.

 */

 const classStudents = [{name: "Rijwan", age: 15},{name: "Rustam", age: 18}, {name: "Raju", age: 19}, {name: "Rohan", age: 20}];

 const adultStudent = classStudents.map(s=>{
    if(s.age>= 18){
        s.isAdult = true;
        return s;
    }
    s.isAdult = false;
    return s;
 })

 // other method;

 const otherAdultStudent = classStudents.map(s=> s.age>=18 ? {...s,isAdult:true}: {...s,isAdult:false})

 console.log("printing otheradult student", otherAdultStudent);

 4. /* Parsing String Numbers:

 Given an array of string numbers, use map to convert each string to a number. Return the resulting array of numbers.

 */

 const strnums = ['4','5','6','8'];

 const number = strnums.map(str=> Number(str))

 console.log('Numbers: ', typeof number)


 /// question

 // 

 const res = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "age": 28,
      "country": "USA"
    },
    {
      "id": 2,
      "name": "Alice Smith",
      "email": "alice@example.com",
      "age": 35,
      "country": "Canada"
    },
    // ... more user objects
  ]


  const formatData = res.map(f=> ({userId: f.id, fullName: f.name, location: f.country}))

  console.log("formatData: ", formatData)


  2./* You are working on a dynamic form builder in a web application. The form builder receives an array of form field configurations from the server. Each configuration object in the array has the following structure:
     [
  { "type": "text", "label": "Username", "placeholder": "Enter your username" },
  { "type": "email", "label": "Email", "placeholder": "Enter your email" },
  { "type": "password", "label": "Password", "placeholder": "Enter your password" },
  // ... more form field configurations
]

Desired output

[
  '<label for="username">Username:</label><input type="text" id="username" placeholder="Enter your username">',
  '<label for="email">Email:</label><input type="email" id="email" placeholder="Enter your email">',
  '<label for="password">Password:</label><input type="password" id="password" placeholder="Enter your password">',
  // ... more HTML strings representing form elements
]
*/

const data = [
    { "type": "text", "label": "Username", "placeholder": "Enter your username" },
    { "type": "email", "label": "Email", "placeholder": "Enter your email" },
    { "type": "password", "label": "Password", "placeholder": "Enter your password" },
  ]

  const transformedData = data.map(d=> `<label for="username">${d.label}:</label><input type=${d.type} id="username" placeholder=${d.placeholder}>`)
  console.log("transoformedData", transformedData);


  /* 
  
  Raw data: 
  [
  { "sensorId": 1, "value": 23.5, "unit": "°C" },
  { "sensorId": 2, "value": 750, "unit": "ppm" },
  { "sensorId": 3, "value": 45, "unit": "%" },
  // ... more sensor data objects
]

Desired output: 

[
  { "sensorId": 1, "type": "Temperature", "value": "23.5°C" },
  { "sensorId": 2, "type": "Air Quality", "value": "750 ppm" },
  { "sensorId": 3, "type": "Humidity", "value": "45%" },
  // ... more transformed sensor data objects
]

*/

const sensorData = [
    { "sensorId": 1, "value": 23.5, "unit": "°C" },
    { "sensorId": 2, "value": 750, "unit": "ppm" },
    { "sensorId": 3, "value": 45, "unit": "%" },
  ]
 
  const dashboardData = sensorData.map( data => {
    if(data.unit === "°C"){
        return {sensorId:data.sensorId, value:`${data.value}°C`, type:"Tempreture"}
    }
    if(data.unit === "ppm"){
        return {sensorId:data.sensorId, value:`${data.value}%`, type:"Humidity"}
    }

    if(data.unit === "%") {
        return {sensorId:data.sensorId, value:`${data.value} ppm`, type:"Air Quality"}
    }
})

// other Method 
/*
const dashboardData = sensorData.map(({ sensorId, value, unit }) => ({
  sensorId,
  value: `${value}${unit}`,
  type: unitToTypeMap[unit.toLowerCase()] || "Unknown",
}));
*/

console.log("dashboardData", dashboardData);

//question

const books = [
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genres: ["Science Fiction", "Comedy"] },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genres: ["Fiction", "Drama"] },
    { title: "1984", author: "George Orwell", genres: ["Dystopian", "Political Fiction"] },
    // ... more book objects
  ];
  
const transformBooks = books.map(book=>({...book, genres: book.genres.join(", ")}))

console.log("transformBooks", transformBooks)


/* You are developing an e-commerce platform, and you have two arrays: 
products and discounts. The products array contains objects representing 
various products, each with name and price properties. The discounts array 
contains objects representing discounts applicable to specific products, 
each with productName and discountPercentage properties. 
Your task is to use the map method to create a new array of 
products with an additional discountedPrice property. 
The discounted price should be calculated based on the original 
price and the discount percentage specified in the discounts array.

*/

const products = [{name:"samsung", price: 50000}, {name:"Oneplus", price: 40000}, {name:"Apple", price: 120000}];
const discounts = [{productName:"samsung", discountPercentage:20 }, {productName:"Oneplus", discountPercentage:50 }, {productName:"Apple", discountPercentage:25 }];

const productWithDiscountPrice = products.map(p=>{
    discount = discounts.find(d=> p.name === d.productName)
    discountPrice = discount? p.price - (discount.discountPercentage/100)*p.price: p.price;
    return {
        ...p,
        discountPrice
    }
})

console.log("productWithDiscountPrice", productWithDiscountPrice)

/* 
Given an array of objects, each containing an array of numbers 
under a property called values, use the map method to 
transform this array into a new array that contains the 
sum of the numbers in each values array.

*/

const arrayObjects = [{
    values:[5,3,4,5]
},
{
    values: [6,7,8,8,9]
}
]

const desiredoutput = arrayObjects.map((arr=> ({
   values:arr.values.reduce((acc, cur)=> acc+cur)
})))

console.log("printing desiredoutput", desiredoutput)

/* Imagine you have an array of blog posts, each represented as an object with id,
 title, and author properties. Additionally, each post has an array of comments, where 
 each comment has a text property. Use the map method to transform this array into an 
 array of posts, where each post includes an additional property commentCount representing 
 the number of comments.
 */

 const blogPost = [{
    id: 1,
    title: 'Javascript',
    Author: 'Saddam',
    comments:[{
        text: "very useful"
    },
    {
        text: "mind blowing book"
    },
    {
        text: "Easy to understand"
    }
]
 },
 {
    id: 2,
    title: 'Typescript',
    Author: 'Rijwan',
    comments:[{
        text: "very good"
    },
    {
        text: "Love the concept"
    },
    {
        text: "Amazing book"
    }
]
 }
]

const findIdTwo = blogPost.find(p=> p.id ===2)

console.log("findIdTwo", findIdTwo)

const post = blogPost.map(b=>({...b, commentCount: b.comments.length}))

console.log("Post: ", post)

/* Given an array of integers, use the filter method to create a new array 
containing only the odd numbers.
*/

const arrNumbers = [1,2,3,4,5,6,7,89,97];

const filterOddNumber = arrNumbers.filter(ar=> ar%2!==0)
console.log("filterOddNumber", filterOddNumber);

/* Given an array of mixed data types (strings and numbers), use filter to create 
a new array containing only the strings.
*/

const numstr = [1,2, "Saddam", 3, "test"];

const filterString = numstr.filter(st=> typeof st === "string")

console.log("filterString: ", filterString);

/* Consider an array of objects representing people with name and age properties.
 Use filter to create a new array containing only the objects of people who are 18
  or older.
*/

const emp = [{
    name: "Saddam", 
    age: 18,
},
{
    name: "Rijwan", 
    age: 17,
}, 
{
    name: "Rustam", 
    age: 20,
}

]

const adultEmp = emp.filter(a=> a.age>=18)
console.log("adultEmp: ", adultEmp)

/*Given an array of words, use filter to create a new array containing only the words 
with more than four letters.
*/

const fruits = ["Apple", "Oragne", "org", "ban"]

const filterFourLetter = fruits.filter(f=> f.length>=4)

console.log("filterFourLetter: ", filterFourLetter)


/*
Given an array of numbers (both positive and negative), use filter to create a 
new array containing only the positive numbers.
*/

const posnegNumber = [2,4,5,-3,6,8,-9, -7]

const filterPostive = posnegNumber.filter(f=> f>0)

console.log("filterPositive: ", filterPostive);

/*
Your task is to create a function that generates a summary of tasks for users.
 The summary should include an array of objects, each representing a user and 
 the count of tasks assigned to them. However, you should exclude tasks with the status 
 "completed," and only include tasks for users who are not administrators (isAdmin: false). 
 If a user has no tasks, they should not be included in the summary.

 const summary=[{assignedTo: "user1", countoftask=3}]
 */

//  const tasks = [
//     { id: 1, title: "Complete Project A", status: "pending", assignedTo: "user1" },
//     { id: 2, title: "Review Design Mockups", status: "pending", assignedTo: "user2" },
//     { id: 3, title: "Deploy Application", status: "completed", assignedTo: "user1" },
//     { id: 4, title: "Write Documentation", status: "pending", assignedTo: "user3" },
//   ];
  
//   const users = [
//     { username: "user1", isAdmin: false },
//     { username: "user2", isAdmin: true },
//     { username: "user3", isAdmin: false },
//   ];
  
//   const isAdminFalse = users.filter(user=> !user.isAdmin)
//   const generateSummary = tasks.filter(task => task.status === "pending").map(user=>{
 
//   })


/*
Now, you want to create a function that transforms this array into a new array of objects,
 containing only the id and amount properties, but only for transactions in the currency 
 'USD'.
 */

const transactions = [
    { id: 1, amount: 120, currency: 'USD' },
    { id: 2, amount: 80, currency: 'EUR' },
    { id: 3, amount: 200, currency: 'USD' },
    { id: 4, amount: 50, currency: 'GBP' },
    { id: 5, amount: 150, currency: 'USD' },
  ];

  const onlyUSDtransaction = transactions.filter(t=> t.currency==='USD').map(({id, amount})=>({id, amount}))

  console.log("printing onlyUSDtransaction", onlyUSDtransaction)

/* 
you have to create a function that transforms this array into a new array of objects, 
containing only the name and the average score for students who have a score above 70 in the subject 'Math'.
*/

const students = [
    { name: 'Alice', grades: [{ subject: 'Math', score: 85 }, { subject: 'English', score: 75 }] },
    { name: 'Bob', grades: [{ subject: 'Math', score: 65 }, { subject: 'English', score: 80 }] },
    { name: 'Charlie', grades: [{ subject: 'Math', score: 90 }, { subject: 'English', score: 70 }] },
];

const averageScore = students
  .filter(s => s.grades.find(a => a.subject === 'Math' && a.score >= 70))
  .map(({ name, grades }) => {
    const sum = grades.reduce((acc, cur) => acc + cur.score, 0);
    const avg = sum / grades.length;
    return { name, averageScore: avg };
  });

                      
                          

console.log("printing averageScore", JSON.stringify(averageScore))


/* 
*/

// const movieRatings = [
//     { movieId: 1, userId: 'user1', rating: 4 },
//     { movieId: 2, userId: 'user2', rating: 5 },
//     { movieId: 1, userId: 'user3', rating: 3 },
//     { movieId: 2, userId: 'user4', rating: 4 },
//     { movieId: 1, userId: 'user5', rating: 5 },
//     { movieId: 3, userId: 'user6', rating: 3 },
//     { movieId: 2, userId: 'user7', rating: 2 },
//   ];

//   const idTomovieId ={
//     id:1,
//     id:2,
//     id:3
//   }
//   const averageRating = movieRatings.map(id=>{


//    let  count1 = 0;
//    let rate1 = 0
//     if(id.movieId=== 1){
//      count1++;
//      rate1 = rate1 + id.rating
//     }
//    let  count2 = 0;
//    let rate2 = 0
//     if(id.movieId=== 2){
//      count2++;
//      rate2 = rate2 + id.rating
//     }
//    let count3 = 0;
//    let rate3 = 0
//     if(id.movieId=== 3){
//      count3++;
//      rate3 = rate3 + id.rating
//     }
//     return {

//     }
//   })

const movieRatings = {
    user1: { movieId: 1, rating: 4 },
    user2: { movieId: 2, rating: 5 },
    user3: { movieId: 1, rating: 3 },
    user4: { movieId: 2, rating: 4 },
    user5: { movieId: 1, rating: 5 },
    user6: { movieId: 3, rating: 3 },
    user7: { movieId: 2, rating: 2 },
  };
  
  // Convert object values to an array
  const movieRatingsArray = Object.values(movieRatings);
  console.log("printing moviewRatingsArray", movieRatingsArray)
  // Use filter and map on the array
  const movieStatistics = movieRatingsArray
    .filter(({ movieId, rating }) => movieId && rating) // Filtering out invalid entries
    .reduce((acc, { movieId, rating }) => {
      const existingMovie = acc.find(stat => stat.movieId === movieId);
      console.log("printing existing movie", existingMovie);
  
      if (existingMovie) {
        existingMovie.sum += rating;
        existingMovie.count += 1;
      } else {
        acc.push({ movieId, sum: rating, count: 1 });
      }
  
      return acc;
    }, [])
    .map(({ movieId, sum, count }) => ({
      movieId,
      averageRating: sum / count,
      userCount: count,
    }));
  
  console.log("movieStatistics",movieStatistics);

  /*

  You are working on a system that logs user interactions on a website. 
  Each interaction is represented by an object with userId, action, and 
  timestamp properties. Create a function that transforms this object into an 
  array of objects, where each object contains the userId, totalActions, and 
  latestTimestamp properties. The totalActions should be the total number of actions
   performed by each user, and latestTimestamp should be the timestamp of the latest action.

  */

   const userInteractions = {
    user1: { userId: 'user1', action: 'click', timestamp: 1627658400000 },
    user2: { userId: 'user2', action: 'hover', timestamp: 1627658500000 },
    user1: { userId: 'user1', action: 'submit', timestamp: 1627658600000 },
    user2: { userId: 'user2', action: 'click', timestamp: 1627658700000 },
    user3: { userId: 'user3', action: 'hover', timestamp: 1627658800000 },
  };

  const userInteractionValues = Object.values(userInteractions)

//   const transforUserInteraction = ()=>{
//    return userInteractionValues.filter(ac=> ac.action && ac.timestamp)
//     .reduce((acc,{userId, action, timestamp})=> {
//         existingUserId = acc.find(act=> act.userId===userId)
//         console.log("printing existingUserId", existingUserId)
//         if(existingUserId){
//             existingUserId.totalAction+= 1;
//             existingUserId.latestTimeStamp = timestamp;
//         } else {
//             acc.push({userId, totalAction:1, latestTimeStamp:timestamp})
//         }
//       return acc
//     }, [])
//   }

const transformUserInteraction = () => {
    return userInteractionValues
      .filter(ac => ac.action && ac.timestamp)
      .reduce((acc, { userId, action, timestamp }) => {
        console.log("printing userId", userId)
        console.log("printing acc", acc)
        const existingUserId = acc.find(act => act.userId === userId);
        console.log("printing exisingUserId", existingUserId)
        if (existingUserId) {
          existingUserId.totalAction += 1;
          existingUserId.latestTimeStamp = timestamp;
        } else {
            console.log("insinde else")
          acc.push({ userId, totalAction: 1, latestTimeStamp: timestamp });
        }
        return acc;
      }, []);
  };
  
  // Example usage:
  const userStatistics = transformUserInteraction();
  console.log(userStatistics);
  

//   console.log("printing transformUserinteraction", transforUserInteraction())

  
// Question on join and split method

/*
You are working on a text processing tool that receives sentences as strings 
but needs to rearrange the words in each sentence. Create a function that takes a 
sentence as input and returns a new sentence where the words are reversed. You should 
use the split and join methods to achieve this.
*/

const originalSentence = "The quick brown fox";

const reverseSentence =(originalSentence)=>{
  const strArray = originalSentence.split(' ');
  const reversed = strArray.reverse()
  return reversed.join(' ')
}       

const resReverse = reverseSentence(originalSentence)

console.log("printing resREverse", resReverse)

/* You are developing a simple email validation function. 
Create a function that takes an email address as input and 
extracts the domain (the part after '@'). 
Return the domain using the split and join methods.
*/

const splitDomain = (email) => {
  const parts = email.split('@');
  return parts.length === 2 ? parts[1] : null;
};

// Example usage:
const emailAddress = "user@example.com";
const domain = splitDomain(emailAddress);

if (domain !== null) {
  console.log("Domain:", domain);
} else {
  console.log("Invalid email address");
}


/* You are building a URL formatter that receives an array of path segments
 and needs to construct a valid URL. Create a function that takes an array of 
 path segments and returns a formatted URL. Use the join method to concatenate 
 the path segments with '/'.
 */

 const pathSegments = ["blog", "post", "123"];

 const formatUrl = ()=> {
   return urlFormat = `/${pathSegments.join("/")}`
 }

 console.log(formatUrl(pathSegments))











  


  








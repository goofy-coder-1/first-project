// let age = 19;
// let message = age >= 18? "You are an adult" : "You are a minor";
// console.log(message);

// let age = -33;

// let message;

// if(age >= 18) {
//     message = "You are an adult";
// }else{
//     message = "You are a minor"
// }
// console.log(message);

// let time = 12;
// let greeting = time < 12? "Good morning" : "Good Evening";
// console.log(greeting);

// let price = 18;
// let discount = price >= 100? 20 : -5;
// console.log(`Your total is $${price - price*(discount/100)}`);

// let username = "Ujjwal";

// result = username.includes(" ");
// console.log(result);

// if(result) {
//     console.log("Your username must not include ' ' ");
// }else {
//     console.log(username)
// }

// let phonenumber = "123-456-789";

// phonenumber = phonenumber.padEnd(50, "0");
// console.log(phonenumber);

// for(let i = 10; i > 0; i--) {

// if(i == 7) {
//     continue;
// }else {
//     console.log(i);
// }
// }
// console.log("Happy New Year");

// let fruits = ["apple", "banana", "grape", "Strawberry"];

// fruits.push("coconut");

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let numoffruits = fruits.length;
// console.log(numoffruits);

// for(let i = 1; i < fruits.length; i+=2){
//     console.log(fruits[i]);
// }

// let numbers = [1, 2, 3, 4, 5];

// let maximum = Math.max(...numbers);

// console.log(maximum);

// let minimum = Math.min(...numbers);
// console.log(minimum);

// let username = "Ujjwal";

// let seperate = [...username].join("-");
// console.log(seperate);

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// function double(element, index, array){
//     array[index] = element * 2;
// }
// console.log(numbers);

// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }

// let customers = [
//    {name: "Ujjwal",
//    age: 18,
//    course: "Mern-Stack",
//    },
//    {name: "Yalraj",
//    age: 20,
//    course: "Python",
//    },
//    {name: "Bishnu",
//    age: 28,
//    course: "Data Analysis",
//    },
//    {name: "John-Cena",
//    age: 21,
//    course: "Digital Marketing",
//    },
// ]

// for (let i = 1; i < customers.length; i++) {
//     const element = students[i];
//     console.log(element.course);
// }
// customers.map((c) => {
//     console.log(c.age);
// });

// let numb = [1, 2, 3, 4, 5];

// numb.forEach(double);
// function double(element, index, array) {
//     array[index]= element * 2;
// }
// console.log(numb);

// let children = [
// {name: "Ujjwal", age: "19", scholarship : false, paidstatus: false, discount: true},
// {name: "Rizan", age: "19", scholarship : true, paidstatus: false},
// {name: "Kabi", age: "19", scholarship : false, paidstatus: false},
// {name: "Niyaz", age: "19", scholarship : false, paidstatus: true},
// ];
// children.forEach((s) => {
//     if(s.paidstatus || s.scholarship || s.discount) {
//         console.log(`${s.name} can give exam`);
//     }
//     else {
//         console.log(`${s.name} is not allowed to give exam`);
//     }
// })


localStorage.setItem("name", "John");
localStorage.setItem("token", "HelloSir");
const name1 = localStorage.getItem("name");
console.log("This is name", name1);
const token = localStorage.getItem("token");
console.log("TYhis is token from localstorage", token);

let user = [
    {   name: "John",
        age : 19,
        email: "john@gmail.com",
        password: "john123",
    },
];

localStorage.setItem("User-obj", JSON.stringify(user));
let userObj = localStorage.getItem("User-obj");
console.log("This is name from localstorage", userObj)
let userName = userObj.name;
console.log("User from local storage", userName);
let parseUser = JSON.parse(userObj);
let parseName = parseUser.name;
console.log("parse user from local storage", parseName);

localStorage.setItem('Username', 'Ujjwal');
localStorage.setItem('Username1', 'Yakraj');

let user3 = localStorage.getItem('Username');
console.log('user3');

  let user1 = localStorage.getItem('Username1');
    console.log('user');

   localStorage.setItem('Greetings', 'Hello');

  let user2 = {
  name : "Ujjwal",
  age : 18,
  };
  localStorage.setItem("user2", JSON.stringify(user2));

     let user2Data = JSON.parse(localStorage.getItem("user2"));
     log(user2Data.name);
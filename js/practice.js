// const { jsx } = require("react/jsx-runtime");

// let greeting = "Hello World, I am Ujjwal";

// console.log(greeting);


// function calculatearea(side) {
// return side*side;
// }
// let side = 55;
// let area = calculatearea(side);
// console.log(area);

// let side = 5;
// let area;

// function calculateArea(){
//     side = Number(side);
//     area = side*side;
// }
//   calculateArea(area);
//   console.log(`The area of square is ${area}`);

//   localStorage.clear()

  localStorage.setItem("userName", "Ujjwal");

  let savedname = localStorage.getItem("userName");
  console.log(savedname);



let user = {
name : "Yakraj",
age : 23,
course : "javascript",
};

localStorage.setItem("user", JSON.stringify(user));

let savedUser = JSON.parse(localStorage.getItem("user"));
// console.log(savedUser.name);


localStorage.setItem("username1", "Yakraj");

let savedName1 = localStorage.getItem("username1");
console.log(savedName1);

localStorage.setItem("username4", "Hari");

let updatedusername = localStorage.getItem("username4");
console.log(updatedusername);
// const { StrictMode } = require("react");

// let students = 30;

// students = students % 4;

// students += 1;
// students -= 2;
// students %= 2;
// console.log(students);

// let result = 1+8-6+4**8;
// console.log(result);


let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}

let username1;
document.getElementById("mybutton").onclick = function() {
username1 = document.getElementById("myName").value;
document.getElementById("Hi").textContent = `Hello ${username1}, How are you doing?`;
}


const PI = 3.14159;
let radius;
let circumference;

document.getElementById("button2").onclick = function(){
    radius = document.getElementById("textradius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius
   document.getElementById("answer").textContent = circumference;
}

let area;

document.getElementById("button3").onclick = function(){
    radius = document.getElementById("myinput").value;
    radius = Number(radius);
    area = PI * radius**2;
    document.getElementById("myid").textContent = area;
}

let labelcount = document.getElementById("labelcount");
let decrease =  document.getElementById("buttons1");
let reset =  document.getElementById("buttons2");
let increase = document.getElementById("buttons3");
let count = 0;

buttons1.onclick = function() {
    count--;
    labelcount.textContent = count;
}
buttons2.onclick = function() {
    count = 0;
    labelcount.textContent = count;
}
buttons3.onclick = function() {
    count++;
    labelcount.textContent = count;
}


const products = [
    {
        name: "shirt", price : 3000
    },
      {
        name: "pant", price : 100
    },
      {
        name: "belt", price : 3000
    },
];

// function filterProducts(){
//     const maxPrice = parseFloat(document.getElementById(`hello1`).value);
//     const filtered = products.filter(p => p.price < maxPrice);

//     const list = document.getElementById(`productlist`);
//     list.innerHTML = '';

//     filtered.forEach(products => {
//         const li = document.createElement('li');
//         li.textContent = `${prodect.name} - $${'productlist'}`;
//         list.appendChild(li);
//     });
// }

// let found = products.find(p => p.startsWith(`b`));
// console.log(found);

let side;
let area1;

document.getElementById("square2").onclick = function() {
    side = document.getElementById("square").value;
    side = Number(side);
    area1 = side**2;
   document.getElementById("square3").textContent = `The are of square: ${area1}`;
}

// const sentence = "I am a web developer in beginning phase and I hope to do something in future";
// const words = sentence.split(" ");
// const totalWord = words.length;
// console.log(totalWord);


let age = 21;
let message = age >= 18? "You are an adult" : "You are a minor";

let niyaz3;

document.getElementById("niyaz1").onclick = function(){
    niyaz3 = document.getElementById("niyaz").value;
    document.getElementById("myH2").textContent = `How are you ${niyaz3}`;
}

// localStorage.setItem("name", "John");
// localStorage.setItem("token", "HelloSir");
// const name1 = localStorage.getItem("name");
// console.log("This is name", name1);
// const token = localStorage.getItem("token")
// console.log("TYhis is token from localstorage", token);
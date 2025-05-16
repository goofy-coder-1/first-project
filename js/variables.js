// var 
// let 
// const

// var a = 13;
// console.log(a);

// var b = 44;
// console.log(b);

// {
//      var b = 66;
//      console.log(b);
// }

// const user = {name : "Ujjwal", age : 19, }
// user.age = 26;
// console.log(user.age);

// console.log(`You are ${user.age} years old`);


// let price = 10.99;
// console.log(`The price of the eggs is $${price}`);

// let gpa = 3.43;
// console.log(`Your gpa is ${gpa}`);

// let cars = ["Toyota", "Corvette", "Chevrolet"];
// cars.push("Porsche");
// // cars.push(4);
// // cars.push(5);
// console.log(cars);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let table3 = [];
// let table4 = [];

// numbers.forEach((num) => {
//     table3.push(3 * num);
//     table4.push(4 * num);

// });
// console.log("Table of 3:", table3);
// console.log("Table of 4:", table4);

// let names = ["Ram", 'Sita', "Hari", "Laxman"];
// let found = names.find(n => n.startsWith('S'));
// console.log(found);

// let names = ["Ram", "Sita", "Hari", "Laxman"];
// let first = names.splice(1, 2);
// console.log(names);
// let found = names.find(n=> n.startsWith('R'));
// console.log(found);
// let hasTwo = names.includes("Ram");
// console.log(hasTwo);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let tableof3 = [];
// let tableof4 = [];

// numbers.forEach ((num) =>{
//     tableof3.push(3 * num);
//     tableof4.push(4 * num);
// });

// console.log("This is the table of 3: ", tableof3);
// console.log("This is the table of 4: ", tableof4);

let meals = ["Momos", "Cake", "Ice-cream"];

let students = [ 
    {
        name : "Ujjwal",
        age : 19,
        location : "Mars",
    },
    {
     name : "John-Cena",
     age : 45,
     location : "Jupiter",
    },
    {
        name : "Lamine",
        age : 17,
        location: "Neptune",
    },
];

// for (let student of students) {
//     console.log("this is ",student.name);
// }
console.log("I am ",students[0].name, "Rana and I am happy to be here.");

// let i;

// for (let i = 10; i >= 1; i--) {
//     console.log(`2 * ${i} = `, i * 2 );
// }

// let num= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumber = [];
// let oddNumber = [];

// for (let i = 0; i < num.length; i++) {
//     const x = num[i];
//     if(x % 2 == 0)  {
//         evenNumber.push(x);
//     }
//     else {
//        oddNumber.push(x);
//     }
// }
// console.log("this is even number", evenNumber);
// console.log("this is odd number", oddNumber);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let oddNumber = [];
// let evenNumber = [];

// numbers.forEach ((num) => {
//     if (num % 2 == 0) {
//         evenNumber.push(num);
//     }else {
//         oddNumber.push(num);
//     }
// });
// console.log("This is even number:", evenNumber);
// console.log("This is odd number:", oddNumber);

// let fruits = ["mango", "apple", "orange", "banana"];
// fruits[3] = "coconut";
// fruits.push("coconut");
// fruits.pop("grape");
// fruits.unshift("grape");
// fruits.shift("Ujjwal");

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOffFruits = fruits.length;
// let index = fruits.indexOf("apple");
// console.log(index);

// console.log(numOffFruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

let isRain = false;

let decision = isRain? "Take umbrella": "No need to take umbrella";
console.log(decision);

const user = [
    {
        Name : "Sandesh", age : "18", rollno :"88", items :"Laptop", price : "9000",
    },
    {
        Name : "Sudeshh", age : "78", rollno : "68",items : "Mobile", price : "7000",
    },
    {    
        Name : "Hari", age : "28", rollno : "55", items : "watch", price : "300",
    },
    {
        Name : "Manish", age : "38", rollno : "24", items : "Headphone", price : "20",
    },
];

user.map((Name) => {
    console.log(Name.age);
});

const maxPrice = 200;
const filteredProducts = user.filter(products => products.price < maxPrice);
console.log(filteredProducts);

// let i;

// for ( let i = -10; i <= 10; i++ ){
//     console.log(`2 * ${i} =`, i * 2)
// }

let veg = ["banana", "cauliflower", "cabbage"];
let addveg = veg.push("apple");
console.log(veg);
console.log(veg.indexOf("cabbage"));


const sentence = "I am a web developer in beginning phase and I hope to do something in future";
const words = sentence.split(" ");
const totalWord = words.length;
console.log(totalWord);

let user2 = {
    name : "sanjaya",
    age: "25",
    email: "Sanjaya@gmail.com",
    password: "sanjaya123"
}

let name1 = user2.name;
console.log(name1);

let stringUser = JSON.stringify(user2);
console.log(stringUser);
const name2 = stringUser.name;
console.log(name2);
let parsedUser = JSON.parse(stringUser);
const name3 = parsedUser.name;
console.log(name3);
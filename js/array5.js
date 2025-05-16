// let num = 10;
// let fib = [0, 1];

// for (let i = 2; i < num; i++) {
//     fib.push(fib[i - 1]+ fib[i - 2]);
// }
// console.log(fib);

// let user = [
//     {
//         name: "John",
//         product : [
//             {
//                 name: "macbook", price : 100000
//             },
//              {
//                 name: "phone", price : 100000
//             },
//               {
//                 name: "watch", price : 100000 
//             }
//         ],
//     },
// ];

// user.map((user) => {
//     user.product.map ((product) => {
//         if (product.name === "macbook"){
//             console.log(`${user.name} bought ${product.name} for $${product.price}`

//             );
//         }
//     });
// });

// const User1 = [
//     // {
//     //     name: "Ramesh",
//     //     age: 25,
//     //     email: "Ramesh@gmail.com",
//     //     password: "Ramesh123",
//     // },
//     "Lamesh",
//     "Samesh",
//     "jagesh",
// ];

// const registerUser = (name) => {
// const user = User1.find((u) => {
// return u.name === name;
// })
// if (user) {
//     console.log(`${user.name} already registered`)
// }
// }

// masking 

let accountnumber = "1234567899876543214";

function MaskedAccountNumber(accountnumber) {
    let lastfour = accountnumber.slice(-4);
    let maskedparts = "N".repeat(accountnumber.length - 4)
    return maskedparts + lastfour
}
let final = MaskedAccountNumber(accountnumber);
console.log(final);

let phonenumber = 123456789;

function Masklastfour(phonenumber) {
    let lastFour = phonenumber.toString().slice(-4);
    let maskedpart = "x".repeat(phonenumber.length-4);
    return maskedpart + lastFour
}

let final2 = Masklastfour(phonenumber);
console.log(final2);

const fetchUser = () => {
    
}


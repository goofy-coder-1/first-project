
// hello(goodbye);

// function hello(callback1){
//     setTimeout(() => {
//           console.log("Hello"); 
//          callback1();
//     }, 3000);
// }

// function goodbye(callback2){
//     console.log("Goodbye");
// }

// hi(bye);

// function hi(callback) {
//     setTimeout(() => {
//         console.log("hi");
//         callback();
//     }, 5000);
// }

// function bye(){
//     console.log("Bye");
// }

// sum(displayconsole, 1, 2);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayconsole(result) {
// console.log(result);
// }


// function mummy(){
//     console.log("helo Mummy");
//     setTimeout(() => {
//         console.log("Yeta aaija");
//     }, 3000);
// };

// mummy((data) => {
//     console.log(mummy);
// })
// mummy(data) {
//     console.log(mummy);
// }


// function mummy(){
//     console.log("Where is Ujjwal?");

//     setTimeout(() => {
//         console.log("Ujjwal is here");
//     }, 3000);

//     setTimeout(() => {
//         console.log("Here Where");
//     }, 5000);
//     setTimeout(() => {
//         console.log("here in my room");
//     }, 7000);
// }
// mummy((data) => {
//     console.log(data);
// })

let array = [1, 2, 3, 4, 5];

const result = array.map(num => {
    let double = num * 5;
    return double;
})

console.log(result);
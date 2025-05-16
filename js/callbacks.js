// callbacks information 

// to pass function as a parameter to another function 

// function fetchData(c) {
//     console.log("fetching data ....");

//     setTimeout(() => {
//         c("api sucessfully fetched")
//     }, 3000);
// }
// fetchData((data) => {
//     console.log(data);
// });

// const mutateArray = (arr, action) => {
// for(let i = 0; i < arr.length; i++) {
// arr[i] = action(arr[i])}
// };

// let array = [1, 2, 3, 4, 5];
// mutateArray(array, (x) => {
//      return x * 33;
// });
// console.log(array);

// // promise 
// // (resolve, reject, pending) 



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("internal server error")
        //     resolve({
        //         data: "data from promise"
        //     })
        resolve({
            email: "ramesh@gmail.com"
        })
    }, 5000)
})
promise
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});


// function userinput(a) {
// console.log("User input loading");

// setTimeout(() => {
//     console.log("User input loaded");
// }, 4000);
// }
// userinput((data) => {
//     console.log(data);
// ;}) 

// const username = [
//     {
//         name: "Ujjwal",
//         age : 18,
//         class: "bachelor"
//     },
// ];

// function userData(d) {
//     console.log("Data loading........")

//     setTimeout(() => {
//         console.log("Data loaded")
//     }, 3000);
// }

// async and await 

const asyncFunction = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("this is response from async function", data);
}

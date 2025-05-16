 let Rain = false;
 let willNotRain = false;
 let today = "wednesday";

 if (today=="sunday") {
    console.log("Today is Sunday");
 }
 else if(today=="Monday"){
    console.log("Today is Monday");
 }
 else if(today=="Saturday"){
    console.log("Today is Saturday");
 }
 else if(today=="Tuesday"){
    console.log("Today is Tuesday ");
 }else if(today=="wednesday"){
    console.log("Today is Wednesday");
 }
 else if(today=="Thursday"){
    console.log("Today is Thursday");
 }
 else {
    console.log("Today is Friday");
 }

let decision = Rain? "Take Umbrella" : "Don't take umbrella"
console.log(decision)

let name = "Hello";

let decision1 = name == "John"? "Clever boy": "Not so clever";
console.log(decision1);
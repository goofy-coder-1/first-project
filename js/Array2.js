const students = [
    {name :"John", paidStatus: true, scholarship : true },
    {name :"Jane", paidStatus: false, scholarship : false },
    {name :"Bob", paidStatus: true, scholarship : true },
    {name :"Alice", paidStatus: true, scholarship : true },
];

for (i = 0; i <= 10; i++){
    const element = students[i];
    if(element.paidStatus && element.scholarship){
    console.log("Allowed to enter exam:");
} else {
    console.log("Not allowed to enter");
}
};
// console.log(students);

// students.forEach((s)=> {
//     if (s.paidStatus && s.scholarship) {
//         console.log(`${s.name} can give exam`)
//     }
//     else {
//         console.log(`${s.name} cannot give exam`);
//     }
// });
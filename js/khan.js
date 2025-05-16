let array = [
    {name: "Ujjwal", course: "mern-stack", price: "20000"},
    {name: "Ram", course: "Python", price: "20000"},
    {name: "Hari", course: "Data Analysis", price: "2000"},
    {name: "David", course: "Web Designing", price: "10000"},
    {name: "Sanjiv", course: "Digital Marketing", price: "9000"},
];

// let array1 = array.filter(object => object.course == "mern-stack");
// console.log(array1);

let names = array.filter(person => person.price <= 10000).map(person => person.name);
console.log(names);


let companies = [
  {name : "Apple", worth: 5000000000,},
  {name : "Amazon", worth: 1000000000,},
  {name : "Microsoft", worth: 3000000000,},
  {name : "Alibaba", worth: 500000000,},
];

let price1 = 4000000000;
let companies1 = companies.filter(companies3 => companies3.worth <= price1).map(value => value.name);
companies1.forEach(company => console.log(`${company} is worth less than 4 billion dollars`));

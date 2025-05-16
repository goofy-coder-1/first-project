const countries = [
    {
      name: "India",
      countryCode: "IN",
    },
    {
      name: "USA",
      countryCode: "US",
    },
    {
      name: "United Kingdom",
      countryCode: "UK",
    },
    {
      name: "Australia",
      countryCode: "AU",
    },
    {
      name: "Canada",
      countryCode: "CA",
    },
    {
      name: "Germany",
      countryCode: "DE",
    },
    {
      name: "Nepal",
      countryCode: "NP",
    },
  ];
  
  // function addition(x, y) {
  //   return x * y;
  // }
  // let sum = addition(10, 20);
  // console.log(sum);
  
  const getCountryCode = (countryName) => {
    let country = countries.find(
      (c) => c.name.toLocaleLowerCase() === countryName
    );
    if (country) {
      return country.countryCode;
    } else {
      return "Country Not Found";
    }
  };
  let shortCode = getCountryCode("USA");
  console.log(shortCode);


  let User = [
    "sanjay",
    "Bhim",
    "Sita",
    "Geeta",
    "Hari",
    "Ujjwal",
  ];

//   If name available then "You are registered use otherwise not" 

const isUserRegistered = (username) => {
    let User = User.find(
        (u) => u.toLocaleLowerCase() === username.toLocaleLowerCase());
    if (User) {
        return "user is already registered";
    }else {
        return "user is not registered";
    }
};
const username = isUserRegistered("Ajay");
console.log(username);

let User1 = [
    [ name = "sanjay", "email = hello@gmail.com"],
    "Bhim",
    "Sita",
    "Geeta",
    "Hari",
    "Ujjwal",
  ];

  const findUserEmail = (username) => {
    let User1 = User1.find(u) => u.name ===
  }
  
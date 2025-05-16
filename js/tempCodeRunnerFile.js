
console.log('user3');

  let user1 = localStorage.getItem('Username1');
    console.log('user');

   localStorage.setItem('Greetings', 'Hello');

  let user2 = {
  name : "Ujjwal",
  age : 18,
  };
  localStorage.setItem("user2", JSON.stringify(user2));

     let user2Data = JSON.parse(localStorage.getItem("user2"));
     log(user2Data.name);
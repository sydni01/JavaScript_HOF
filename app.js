console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(num) {
    { plus(num) 
        return };
    plusNumber(num); {
        let plus15 = plus(15);
    }

console.log(plus(10))
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  forEach((users) =>{
      console.log(users);
  });

 // Exercise 3 Section
  console.log("EXERCISE 3:\n==========\n");

  let newUsers = users.map((user) =>{
      return { name: user.name, score: user.score}
  });

   
  // Exercise 4 Section
  console.log("EXERCISE 4:\n==========\n");

  let activeUsers = users.filter((user => user.isActive)
  );

  console.log(activeUsers);

  // Exercise 5 Section
  console.log("EXERCISE 5:\n==========\n");

  users.sort((a, b) => b.name - a.name); 
  console.log(users);


 // Exercise 6 Section
  console.log("EXERCISE 6:\n==========\n");
  
  let avgScore = users.reduce
  ((sum, user)=> {sum + user.score}, 0);

  console.log(avgScore);
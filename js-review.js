// /* DEFAULT PARAMS REVIEW:
//  * You can declare default values in a function expression by setting parameters equal to their desired default values.
//  */
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides + 1); 
// }
// console.log(rollDie());

// //Must be careful of order, as the comp just goes off order. Default params should go after required
// function greet(msg = "Hey there", person) {
//     console.log(msg + ", " + person); //Jude, undefined
// }
// greet("Jude");

// /* SPREAD IN FUNCTION CALLS REVIEW:
//  * Typically could not pass in a full array into a class method like Math.max 
//  */
// const nums = [13,15,22,100,1,45];
// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax(nums));
// console.log(Math.min(...nums));
// //Note that you can spread strings as well
// console.log(...nums); //note how it is passing each element into the console.log
// const newString = "hello I am a string";
// console.log(...newString);
// console.log("h", "e", "l", "l")//equivalent

// //SPREAD WITH ARRAY LTIERALS
// const cats = ["Doug", "Apoc", "Kira"];
// const dogs = ["Olypmia", "Caramel", "Pele"];
// const pets = [...cats, ...dogs];
// const pets2 = cats.concat(dogs);
// console.log(pets);
// console.log(pets2);
// pets.push(..."hello");
// console.log(pets);

// //SPREAD WITH OBJECTS
// //Copies properties from one object into a new object.
// const feline = { legs : 4, family : "Felidae" };
// const canine = { legs : 4, family: "Caninae" };
// //make a deep copy with the same properties;
// const deepCopyFeline = {...feline, hello: "test"};
// // deepCopyFeline.show = "hello";
// console.log(deepCopyFeline);
// const combinedObj = {...feline, ...canine, color: "black"};//there is a conflict here as they both have a family property so it gets overwritten
// console.log(combinedObj);
//  //if you spread an array or string into an object the indices are used as keys
//  console.log({...[1,2,3]}, {..."Hello"});

//  //Use case:
//  let registerInfo  = {
//      email : "testuser@gmail.com",
//      firstName: "Andrew",
//      lastName: "Baxley"
//  }
//  const newUser = {
//      ...registerInfo,
//      id: 234,
//      isAdmin: false
//  }
//  console.log(newUser);


//  //REST PARAMS
//  //Arguments object is an array like object but it does not have array methods (push, pop, etc)
//  //It is not available in arrow functions

//  //doesnt work as arguments is not an array
// //  function sum() {
// //      return arguments.reduce((total, elem) => total += elem );
// //  }

// function sum() {
//     return [...arguments].reduce((total, elem) => total += elem);
// }
//  console.log(sum(1,23,4,324,234,5));

//  //showing spread operator on params
//  //this is called REST PARAMS ("collect the REST of the values")
//  function sumNums(...nums) {
//     //an actual array is returned
//     return nums.reduce((acc, elem) => acc += elem);
//  }
// console.log(sumNums(1,23,1234,231,4));

// function raceResults(gold, silver, ...everyoneElse ) {
//     console.log("gold medal goes to " +  gold);
//     console.log("Also, thanks to all other participants " + everyoneElse);
// }

// raceResults("Tammy", "Todd", "Tina", "Bob");


// //DESTRUCTURING ARRAYS
// const scores = [12341234,1234,1222234,123,41412346123,23412341234,3242389];
// const highScore = scores[0];
// const secondHighScore = scores[1];
// //Faster way using destructuring
// const [gold, silver, bronze] = scores; //creates 3 new variables from scores based off order of declaration
// console.log(gold, silver);
// const runners = ["Emily", "Bob", "Tim"];
// //can use array destructuring in conjunction with the spread operator as well
// const [fastest, ...others] = runners;
// console.log(fastest, others);

// //DESTRUCTURING OBJECTS
// const user = {
//     email: "test@GMAIUL.COM",
//     password: "hunter455",
//     firstName: "Harvey",
//     lastName: "Baxley",
//     born: 1972,
//     died: 2000
// }
// // const firstName = user.firstName;
// // const lastName = user.lastName;
// const { firstName, email, lastName, born } = user; //NAME MATTERS!!!!
// console.log(firstName, email, lastName, born);
// //renaming them while destructuring
// const { born: birthYear } = user; //extracts the value for born and declares it as birthYear
// console.log(birthYear); //DOES NOT HAVE A CONFLICT WITH THE VARIABLE BORN THAT WAS ALREADY DECLARED!!!
// //can also set defaults while destructuring objects

// //DESTRUCTURING PARAMS
// // function fullName(user) {
// //     // return `${user.firstName} ${user.lastName}`;
// //     const { firstName, lastName } = user;
// //     return `${firstName} ${lastName}`;
// // }
// //CAN ALSO DESTRUCTURE ON THE FUNCTION CALL
// function fullName({firstName, lastName = "DeHuff"}) {
//     return `${firstName} ${lastName}`;
// }
// console.log(fullName(user));


//ASYNC AWAIT
//async functions automatically return a promise
//In order to use the rejection, we have to throw an error within our async function
// async function hell() {
//     return "promise1 success";
// }
// hell().then((data) => {
//     console.log("Promise resolve: ", data);
// })
// // console.log(hell());


// //if there is an error within an async function, the promise is in "rejected" state
// //In order to use the rejection, we have to throw an error within our async function
// async function hell2() {
//     throw "Promise2 Massive Error";
//     return "Promise2 Success!!!";
// } 
// // console.log(hell2());
// hell2().then((data) => {
//     console.log("Promise resolve: ", data);
// }).catch((err) => {
//     console.log("Promise rejected: ", err)
// });



// const login = async(username, password) => {
//     if(!username || !password) throw "Missing Credentials";
//     if(password === "corgifeetarecute") return "Welcome!";
//     throw "Invalid Password";
// }

// login("akjsjkas", "corgisarecute").then(msg => {
//     console.log("Logged in! ", msg);
// }).catch(err => {
//     console.log("error: ", err);
// })

const testFetch = async () => {
    const res =  await fetch("https://api.cryptonator.com/api/full/btc-usd");
    console.log(res);
}
testFetch()
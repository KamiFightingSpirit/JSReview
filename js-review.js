/* DEFAULT PARAMS REVIEW:
 * You can declare default values in a function expression by setting parameters equal to their desired default values.
 */
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides + 1); 
}
console.log(rollDie());

//Must be careful of order, as the comp just goes off order. Default params should go after required
function greet(msg = "Hey there", person) {
    console.log(msg + ", " + person); //Jude, undefined
}
greet("Jude");

/* SPREAD IN FUNCTION CALLS REVIEW:
 * Typically could not pass in a full array into a class method like Math.max 
 */
const nums = [13,15,22,100,1,45];
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax(nums));
console.log(Math.min(...nums));
//Note that you can spread strings as well
console.log(...nums); //note how it is passing each element into the console.log
const newString = "hello I am a string";
console.log(...newString);
console.log("h", "e", "l", "l")//equivalent

//SPREAD WITH ARRAY LTIERALS
const cats = ["Doug", "Apoc", "Kira"];
const dogs = ["Olypmia", "Caramel", "Pele"];
const pets = [...cats, ...dogs];
const pets2 = cats.concat(dogs);
console.log(pets);
console.log(pets2);
pets.push(..."hello");
console.log(pets);

//SPREAD WITH OBJECTS
//Copies properties from one object into a new object.
const feline = { legs : 4, family : "Felidae" };
const canine = { legs : 4, family: "Caninae" };
//make a deep copy with the same properties;
const deepCopyFeline = {...feline, hello: "test"};
// deepCopyFeline.show = "hello";
console.log(deepCopyFeline);
const combinedObj = {...feline, ...canine, color: "black"};//there is a conflict here as they both have a family property so it gets overwritten
console.log(combinedObj);
 //if you spread an array or string into an object the indices are used as keys
 console.log({...[1,2,3]}, {..."Hello"});

 //Use case:
 let registerInfo  = {
     email : "testuser@gmail.com",
     firstName: "Andrew",
     lastName: "Baxley"
 }
 const newUser = {
     ...registerInfo,
     id: 234,
     isAdmin: false
 }
 console.log(newUser);


 //REST PARAMS
 //Arguments object is an array like object but it does not have array methods (push, pop, etc)
 //It is not available in arrow functions

 //doesnt work as arguments is not an array
//  function sum() {
//      return arguments.reduce((total, elem) => total += elem );
//  }

function sum() {
    return [...arguments].reduce((total, elem) => total += elem);
}
 console.log(sum(1,23,4,324,234,5));

 //showing spread operator on params
 //this is called REST PARAMS ("collect the REST of the values")
 function sumNums(...nums) {
    //an actual array is returned
    return nums.reduce((acc, elem) => acc += elem);
 }
console.log(sumNums(1,23,1234,231,4));

function raceResults(gold, silver, ...everyoneElse ) {
    console.log("gold medal goes to " +  gold);
    console.log("Also, thanks to all other participants " + everyoneElse);
}

raceResults("Tammy", "Todd", "Tina", "Bob");


//DESTRUCTURING ARRAYS
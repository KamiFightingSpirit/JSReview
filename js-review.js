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
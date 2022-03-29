// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

// Pseudo code:
// Create a function named longerString
// Input
// longerString = take two parameters: stringOne and stringTwo
// use conditional to check which string is longer
  // string.length gives me back a number
  // if the first string is longer then the second return first string
  // else return the second string

// const longerString = (stringOne, stringTwo) => {
//   if(stringOne.length > stringTwo.length) {
//     return stringOne
//   } else {
//     return stringTwo
//   }
// }
// console.log(longerString(fruit1, fruit2))
// console.log(longerString(fruit3, fruit4))
// - Beau


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Pseudo Code:
// After creating a function, use if else statements to set the proper conditions to get the desired output
    // Set a condition if the number is less than or equal to 212 than log that the number is below boiling point
    // Set a condition if the number is greater than or equal to 212 than log that the number is above boiling point
    // Set a condition if the number is strictly equal to 212 than log that the number is at boiling point

const temp = (num) => {
if(num <= 212){
    return(`${num} is below boiling point`)
}else if(num >= 212){
    return(`${num} is above boiling point`)
}else if(num === 212){
    return(`${num} is at boiling point`)

// Samir


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Pseudo Code:
// The variables established below need to first be combined into a single array
    // Joining arrays without changing either can be done via .concat()
// The single array method should be assigned to another variable using let or const
// To display the length and not index of the new array the .length function should be used
    // Display the length of the array via console.log and {single array name}.length

let combine = myNumbers1.concat(myNumbers2)
console.log(combine.length)
// - Tameka

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

const currentCohort = "Bravo 2022"

//This variable establishes the string to be modified
const currentCohort = “Bravo 2022”
//This variable splits the elements from the previous variable and turns them into an array
const splitCohort = currentCohort.split(“”)
//This variable reverses the elements in the array from the previous variable
const reverseCohort = splitCohort.reverse()
//This function uses the join() method to bring the elements from the reversed array back into a string
const reverseString = (string) => {
  return reverseCohort.join(“”)
}
//This command passes in the reverseString function in order to execute the aforementioned join function
console.log(reverseString())
// - Jack


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

//Create a for loop to address each element in the array
//Add the .lenght built in method in the for loop beginning statement to identify all elements in the array
//Create a condtional to identify if the number addressed in the array is odd
//Create an output for the index if the number is odd
//Creae an else condition to identify if the number addressed by default is even
//Create an output for the index if the number is even
//Expected output: “odd” “even” “odd” “even” “odd” “even”
  for (let i = 0; i < myArray.length; i++){
    if (myArray[i] % 2 !== 0){
    console.log(“odd”)
  }else {
    console.log(“even”)
  }
}
//Actual output: “odd” “even” “odd” “even” “odd” “even”
// - Natalia


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24


// #5 My pseudo code:
// Create a function called subtractor
// insert two paramaters to take in the given numbers.. item1 and item2
// Use the math.max method to find the high number and .min to find the low number and subtract from the two 
// log the return from calling the function and inserting the given variables

const subtractor = (item1, item2) => {
    return Math.max(item1, item2) - Math.min(item1, item2)
}
console.log(subtractor(number1, number2)) // --> 42
console.log(subtractor(number3, number4)) // --> 3
//- Dustin 
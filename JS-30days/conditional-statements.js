// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// syntax 

// if (condition)
// {
//     console.log("condition1 works")
// }
// else if (condition){
//     console.log("condition2 works")
// }
// else{
//     console.log("exceptional message")
// }

// Question 1: Write a JavaScript program that checks whether a number stored in a variable num is positive, negative, or zero.
let num = -10;
if (num > 0){
    console.log("number is poistive")
}
else if(num < 0){
    console.log("number is negative")
}
else{
    console.log("Number is Zero")
}

// Question 3: Write a JavaScript program that checks if a given year stored in a variable year is a leap year. A year is a leap year if it is divisible by 4 but not by 100, unless it is also divisible by 400.

let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("The year is a leap year");
} else {
    console.log("Not a leap year");
}


// Question 2: Create a JavaScript program that takes a variable score and assigns a grade based on the following criteria:

// If score is 90 or above, assign "A".
// If score is 80 or above but less than 90, assign "B".
// If score is 70 or above but less than 80, assign "C".
// If score is 60 or above but less than 70, assign "D".
// If score is below 60, assign "F".

let score = 30;

if (score>= 90 && score<=100){
    console.log("A");
}
else if(score>= 80 && score<89){
    console.log("B");
}
else if(score>= 70 && score<79)
{
    console.log("C");
}
else if(score>= 60 && score<69)
{
    console.log("D");
}else
{
    console.log("Avg");
}
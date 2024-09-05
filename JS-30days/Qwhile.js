// let i = 0;
// while (i<=6){
//     console.log(i);
//     i++;
// }

// Using a while loop, find the factorial of a given number n.
// Write a while loop to reverse a given string.

// Write a while loop that prints the numbers from 10 down to 1.
// num = 10;
// while(num>=0){
//     console.log(num)
//     num--;
// }


// Create a while loop that prints the first 5 multiples of 3.
multiply = 0;
while (multiply<=5){
    multiply++;
    
    console.log(`3 * ${multiply} = ${multiply * 3}`)

}

// Write a while loop that sums all the odd numbers between 1 and 20.
let oddSum = 0;
let sum = 0;
let num = 1;

while (num <= 20) {
    if (num % 2 !== 0) {  // Check if the number is odd
        sum += num;       // Add the odd number to the sum
    }
    num++;  // Move to the next number
}

console.log(sum);  // Print the final sum of odd numbers

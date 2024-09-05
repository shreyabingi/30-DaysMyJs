// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name(parameterIfAny) {...}


// this is a basic syntax of FUNCTION
function greet(){
    console.log("Hello from functions!")
}
greet();


// function we parameters
function sayHello(name) //parameters
{
    console.log(`hello ${name}`)
}
sayHello("shreya");  //arguments
sayHello("karthik"); 

//return fuction

function add(a,b){
    return a+b;
}

sum1 = add(10,20);

console.log(sum1)
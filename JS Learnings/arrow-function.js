function greet(username){
    return `Hello my name is ${username}`
}
console.log(greet("shreya"))



//arrow function
greet= (username) => //declaring vaible
{
    return `Hello my name is ${username}` //function inside variable
}
console.log(greet("shruthi"))


//more concise way
greet = username =>
    `Hello my name is ${username}`
console.log(greet("anvi"))


const double = (number) => 
    number *2;
console.log(20)

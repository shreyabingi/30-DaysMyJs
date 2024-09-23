
//basic understanding
function greet(){
    return (`Hello my ${person.name} and im ${person.age}`)
}

let person = {
    name: "shreya",
    age: 22,
    greet
}
console.log(person.greet())

//ideal way of writing a function in object
const human = {
    name: "shreya",
    age: 22,
    greet: function(){
        return(`Hello ${human.name} your are ${human.age}`)
    }
}

console.log(human.greet())
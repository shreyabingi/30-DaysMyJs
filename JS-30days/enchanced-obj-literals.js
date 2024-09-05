function user(name,age,work){
    return {
        name: name,
        age: age,
        work: work,
    };
}
const shreya = user("Shreya",22,"Programmer")


function user(name,age,work){
    return {
        name: name,
        age: age,
        work: work,
        intro : function(){
            console.log(`My name is ${name} & Im ${age} years old n im ${work}`)
        }
    };
}

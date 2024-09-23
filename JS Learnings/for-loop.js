// for lop - will iterate each key value pair from the object
// syntax
// for(let key in object)
//{
//....
// }


//exmaple 1 with object
let person = {
    name : "shreya",
    age: 22,
    gender : "female",
};

for (let keys in person){
    console.log(keys,person[keys]);
}


//explame 2 with list 
let list = ["one","two","three","four"];

for (let index in list){
    console.log(`${index}: ${list[index]}`);
}


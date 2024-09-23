//when we provide function as an argument to other fuction that function is said to be CALLBACK FUNCTION

// function add(a,b){
//     return(a+b)
// }
// sum = add(4,4)
// console.log(sum)


function greet(name,cb){
    console.log(`Hello ${name}`);
    cb();
}

function cb(){
    console.log(`Im callback function`)
}
greet("shreya" ,cb)
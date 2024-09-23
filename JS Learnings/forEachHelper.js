// When we call the forEach helper we pass in anonymous callback function,
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens

const colors = ["teal","red","blue","green"];
colors.forEach((color) => console.log(color));



const words = ["hello","hi","bye"];

const capWords = words.forEach((word,index,arr) =>{
    arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);

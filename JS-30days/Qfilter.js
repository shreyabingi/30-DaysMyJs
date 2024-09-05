const age = [12,32,43,23,12,54,43,45,36];
console.log(age.filter((adults) => adults <18));

// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18

const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

const res = ages.filter(checkAdult);
console.log(res);

// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];
function bigWords (words){
    return words.length>6
}
const ren = words.filter(bigWords);
console.log(ren);
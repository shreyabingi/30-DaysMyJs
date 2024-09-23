let arrNum = [1,2,3,4,5,6,7];
let arrSum = 0;
function adder(arrNum) {
    arrSum += arrNum; 
}
arrNum.forEach(adder);
console.log(arrSum)
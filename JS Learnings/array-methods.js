favFrnds = ["rachel","monica","pheobe","chandler","ross","joey"]
favFamily = ['shreya',"shruthi","anvi"]
totalMem = favFrnds.concat(favFamily)
console.log(favFrnds.length)
favFrnds.push('shreya')
favFrnds.pop('shreya')
favFrnds.shift()    //removes first element
favFrnds.unshift('jay')   //adds element to first index
console.log(totalMem)
console.log(favFrnds.length)

console.log(favFrnds.includes("monica"))  //checking elements
console.log(favFrnds.join("-"))  //joins elements
console.log(favFrnds.reverse())
console.log(favFrnds.sort())

const currentDate = new Date()
console.log(currentDate)
console.log(currentDate.toDateString)

const date = new Date()
const year = date.getFullYear()
date.setDate(date.getDate() +1);
date.setDate(date.getDate() -1);

console.log(`Year: ${year}`)


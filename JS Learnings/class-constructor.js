class Student{
    constructor(firstName,lastName)  //method or function
    {
        console.log("object created");
    }
}
const s1 = new Student("shreya","bingi"); //called constructor


class StudentName{
    constructor(firstName,lastName)  //method or function
    {
        this.firstName= firstName
       this.lastName = lastName
    }
    displayFullName(){
        console.log(this.firstName + this.lastName)
    }
}
displayFullName()

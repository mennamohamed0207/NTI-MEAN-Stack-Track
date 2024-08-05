class Student{
    constructor (name, age){
    this.name=name;
    this.age=age;
    }
    getStudent(){
        return {
            name: this.name,
            age: this.age
        }
    }
}
module.exports=Student
class Person{
    constructor(name,dept){
        this.name=name;
        this.dept=dept;
    }
    print(){
        console.log(`Name : ${this.name} Dept: ${this.dept}`);
    }
}
export default Person;
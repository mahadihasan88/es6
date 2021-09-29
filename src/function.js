class operation{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    print(){
       console.log(`Name : ${this.name} (${this.age}) Email : ${this.email} `);
    }   
}
export default operation;

import Person from './people.js';

class Student extends Person{
    constructor(name,id,dept){
       
        super(name,dept);
        this.id=id; 
        
    }
    
    window(){
        console.log( `SId ${this.id}`);
        super.print();
    }
}

export default Student;
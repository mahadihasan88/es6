
export const add=(a,b)=>a+b;
export const sub=(a,b)=>a-b;
export const mod=(a,b)=>a%b;

class Teacher{
    constructor(id,name,dept){
        this.id=id;
        this.name=name;
        this.dept=dept;
    }
    output(){
        console.log(`Name : ${this.name}(${this.id}, Dept : ${this.dept})`);
    }
}
export default Teacher; 
// const a=10;
// const b=20;
// const sum=(a, b)=>a+b;
// console.log(sum(a,b));
// console.log(400);

// console.log('This is mahadi hasan,i want to challenge the world by javsrcipt all feather');

// const x=10;
// x=40; 
// console.log(x);
// const arr=[];
// arr.push(20);
// arr.push(300);
// arr.push(500);
// arr.push(1000);
// console.log(arr);
// const x=arr.length;
// console.log(x);
//arr=[];
/////var vs let vs const
// let  a=100;
// if(true){
//     let a=500;
//     console.log(a);
// }
// console.log(a);
// function operation(){
//     {
//         let x=400;
//         {
//             const x=100;
//             console.log(x);
             
            
//         }
//         console.log(x);
//          x=500;
//          console.log(x);
//     }

    
// }
// operation();
/////string templete
// const name='Masum Abdullah'
// const age=23
// let dept='CSE'
// var id=1802006

// const print=`
// Name: ${name}(${age})
// Dept: ${dept}(${id})

// `
// console.log(print);
/////arro function
// const print=(a,b)=>{
//     console.log(a+b);
// }
// print(100,200);

// const operation=(a,b,c)=>a+b-c;

// const result=operation(100,200,50);
// console.log(result);

// const squre=n=>n*n;
// const result=squre(10);
// console.log(result);

// const operation=m=>m*m;
// console.log(operation(1000));
/////lexical this
// var Student={
//     name:'Mahadi hasan',
//     print:function(){
//         setTimeout(() => {
//             console.log(this.name);
//         }, 3000);
//     }
// }
// Student.print();
/////object in es6
let name='Md Mahadi Hasan'
let id=1802006
const Student={
    name,
    id,
    print(){
        console.log(this.name,this.id);
    }
}
Student.print()
console.dir(Student)
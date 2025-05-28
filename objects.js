const object ={
    name : "amitanshu",
    age : 20 , 
    isMarried : true 
}
//simple property accessing .
// const name = object.name ;
// const age = object.age ;
// const isMarried = object.isMarried ;

const{name,age,isMarried} = object; //object destructuring

//declaring key value pairs outide

const name1 = "yoyoHoney";
const age1 = 22;

let User = {
    name1,
    age1,
    isMarried : false
}

// console.log(User);

let User2 = {...User , name1:"aayush"} // copying and renaming

// console.log(User2);

//for arrays 

const array1 = [1 , 2 , 3];
const array2 =[...array1 , array1[0] = 4 ];

console.log(array1);
console.log(array2);
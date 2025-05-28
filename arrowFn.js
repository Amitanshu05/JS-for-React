//differentiating between normal function and arrow function.

const newFunction = function(){
   console.log("hey , i am a standard function");
}

newFunction(); //function expression.

function newFunction2(){
    console.log("hola amigo , kaise ho theek ho ?")
}

newFunction2(); // function declaration.

//concept of hoisting.

// const newFunction3=()=>{
//     console.log("yours truly is a banger mixtape!!")
// }
// newFunction3(); //arrow function , aren't hoisted.

// export default function newFunction2(){
//     console.log("hola amigo , kaise ho theek ho ?")
// }

// newFunction2(); //export

//export
const newFunction3=()=>{
    // console.log("yours truly is a banger mixtape!!");
}
export{newFunction3};
newFunction3();



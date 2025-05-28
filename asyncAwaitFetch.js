//fetch is used for making network requests.
//async is used so that it can use await.
//await pauses the function till the promise resolves.

//    await/async 

// ordering a pizza 

async function orderPizza(){
   console.log("ordering pizza.....");

   const pizza = await makePizza();
   console.log("pizza is ready :",pizza);
}

function makePizza(){
   return new Promise(resolve =>{
      setTimeout(()=>{
        resolve("pepperoni pizza is ready !!");
      },2000); 
   });
}

orderPizza();
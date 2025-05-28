let Array = [1 , 2 , 3 , 4 ];

let newArray = Array.map((name)=>{
    return name + "Krsna";
});

console.log(Array);
console.log(newArray);

//mapping does not mutate the array , it returns a new array giving callback to each element of the original array .


//filter

let Rappers = ["krsna" , "raftaar" , "seedhe-maut","emiway" , "baadshah"];

let ActualRappers = Rappers.filter((name)=>{
    return name!="emiway";
})

console.log(ActualRappers);
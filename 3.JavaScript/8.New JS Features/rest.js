function sum(){
    // aregument is not an array
    console.log(arguments)
    // return arguments.reduce((x, y) => x + y)
    // ERROR on above line
}
console.log("hey ::", sum(2, 3, 4, 5));

// this is rest params, it is actual array 
function sum2(...nums){
    console.log(nums)
    return nums.reduce((x, y) => x + y)
}
console.log(sum2(2, 3, 4, 5, 56))




function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}
raceResults("abhsihek", "dhruv", "devo", "ankur");









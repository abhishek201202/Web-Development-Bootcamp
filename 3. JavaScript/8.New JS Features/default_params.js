function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(6));
console.log(rollDie());



function add(x, y = 5){
    return x + y;
}
console.log(add(2, 30));
console.log(add(2));
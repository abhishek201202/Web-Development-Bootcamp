function collectEggs(){
    let totalEggs = 6;
    console.log(totalEggs);
}

let a = 5;
function f(){
    // console.log(a); // ERROR in JS but not in C++
    let a = 10;
    console.log(a);
}
f();


// let is static b
for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log(i) // undefined

// var is dynamic
for(var i = 0; i < 10; i ++){
    console.log(i);
}
console.log(i);


// Lexical Scope in JavaScript
function bankRoberry(){
    const heros = ["spiderman", "iron man", "goku"];
    function cryForHelp(){
        function inner(){
            for(let hero of heros){
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}
bankRoberry();






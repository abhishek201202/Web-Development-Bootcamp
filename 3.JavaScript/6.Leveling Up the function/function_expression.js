// function add(x, y){
//     return x + y;
// }

const add = function(x, y){
    return x + y;
}

// High order function
function callTwice(func){
    func();
    func();
}
function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
callTwice(rollDie);


//  returning function
function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log("congrats, i am a good function!");
            console.log("you win a million dollars!!");
        }
    }else{
        return function(){
            alert("you have been infected by computerur virus");
            alert("stop trying to close this window");
        }
    }
}
let ret = makeMysteryFunc()
ret()


// Factory function
function makeBetweenFunc(mn, mx){
    return function(num){
        return num >= mn && num <= mx;
    }
}
test = makeBetweenFunc(10, 2000);
let test = makeBetweenFunc(10, 300);
const test = makeBetweenFunc(10, 300);
// all the 3 are correct
console.log(test(45));










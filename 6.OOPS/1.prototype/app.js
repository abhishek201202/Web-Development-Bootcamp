String.prototype.yell = function() {
    return this.toUpperCase()
}

let a = "abhishek"
console.log(a.yell())

console.log(a.__proto__)

Array.prototype.pop = function(){
    return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
}

a = [1, 2, 3, 4]
console.log(a.pop());









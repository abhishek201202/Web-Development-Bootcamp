const myMath = {
    add : function(x, y){
        return x + y;
    },
    cubic : function(x){
        return x **3;
    }
}

console.log(myMath.add(10, 10));
console.log(myMath.cubic(10));

const my_math = {
    add(x, y){
        return x + y; 
    },
    mul(x, y){
        return x * y;
    }
}


console.log(my_math.add(10, 10));
console.log(my_math.mul(10, 10));
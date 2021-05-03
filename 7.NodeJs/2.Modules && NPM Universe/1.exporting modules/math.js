const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;


// 1st method
// module.exports.add = add;
// module.exports.PI = PI;
// exports.square = square;


// 2nd method
const math = {
    add: add,
    PI: PI,
    square: square
}
module.exports = math
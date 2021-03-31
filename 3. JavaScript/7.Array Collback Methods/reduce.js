const a = [1, 2, 3, 4, 5, 6]
const b = a.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(b)

const c = a.reduce((x, y) => {
    return Math.max(x, y)
});
console.log(c)

// 5 is the starting value of accumulator
const d = a.reduce((x, y) => x + y, 5)
console.log(d)
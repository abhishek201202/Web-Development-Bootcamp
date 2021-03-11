console.log("hi abhishek this side");
let a = [2, 3, 4]
a.push(5)
console.log(a)
lst = a.pop(5)
console.log(a, lst)



// shift and unshift
a.shift()
console.log(a)
a.unshift(3000)
console.log(a)
a.push(2, 3, 4, 5, 6, 7)
a.shift()
console.log(a)


// concatenation
b = [1, 2, 3]
c = a + b
a = a.concat(b)
console.log("a", a)
console.log("c", c)


//includes
f = a.includes(5)
console.log("F", f)


// reverse
a.reverse()
console.log(a)


// slice 
a = a.slice(1)
console.log(a)
a = a.slice(1, 3)
console.log(a)

// splice
a = ["red", "blue", "green", "yellow", "pink"]
a.splice(3, 1)
console.log(a)
a.splice(1, 0, "red_blue")
console.log(a)
a.splice(3, 0, "a", "b", "c")
console.log(a)



// sort
a = [1, 0, 1200, 2, 23434, 34]
a.sort()
console.log(a)
console.log(typeof(a[0]))


// array in JS are dynamic 
a = [1, 2]
b = [1, 2]
console.log(a === b)
// === actually compare refernce pointer of a and b 
// which obviously are different
console.log(a === a)



// const array in JS
// reference pointer is constant 
const arr = [1, 2, 133]
arr.push(9979)
console.log(arr)



// multidimensional array
let d = [
    [1, 2],
    [2, 3]
]
console.log(d)
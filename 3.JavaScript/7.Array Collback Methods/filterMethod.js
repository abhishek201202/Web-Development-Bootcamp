const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

b = a.filter(n => {
    return n%2 !== 0;
})
console.log(b)
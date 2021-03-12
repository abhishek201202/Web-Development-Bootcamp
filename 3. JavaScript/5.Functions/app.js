function singSong(){
    console.log("Mai hooo giyaaaaan");
}
singSong();


function greet(firstName, lastName){
    console.log(`Hi there, ${firstName} ${lastName}!`);
}
greet();
greet("abhishek", "soni")


function average(x, y){
    return (x + y) / 2;
}
console.log(average(2, 3));

function lastElement(a){
    return a[a.length - 1];
}
console.log(lastElement([1, 2, 3]));


function capitalize(s){
    s = s.toLowerCase(s);
    let res = s[0];
    res = res.toUpperCase(res);
    res += s.slice(1);
    return res;
}
console.log(capitalize("djfdindASDE"));






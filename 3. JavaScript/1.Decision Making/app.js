let random = Math.random()
if(random < 0.5){
    console.log("your number is less than 0.5");
}else{
    console.log("your number is greater than or equal to 0.5");
}
console.log(random)


const day = "Monday"
if(day === "Monday"){
    console.log("UGHH I HATE MONDAYS");
}else if(day === "Friday"){
    console.log("Descent");
}else{
    console.log("Normal Days");
}



const age = 8;
if(age < 5){
    console.log("you are a baby go to your home");
}else if(age < 10){
    console.log("your are child. you can get for free");
}else{
    console.log("you all have to pay a large amount");
}



const passsword = prompt("please Enter a new Password");
if(passsword.length >= 6 && passsword.indexOf(" ") === -1){
        console.log("Valid password")       
}else{
    console.log("invalid password")
}



const userInput = prompt("Enter something")
if(userInput){
    console.log("Truthy")
}else{
    console.log("falsy")
}


// switch statement 

const D = 2;
switch(D){
    case 1:
        console.log("day", D)
        break;
    case 2:
        console.log("day", D)
        break;
    case 3:
        console.log("day", D)
        break;
    default:
        console.log("bye bye")
}
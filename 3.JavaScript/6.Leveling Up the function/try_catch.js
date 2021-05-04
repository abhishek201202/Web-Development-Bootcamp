try{
    hello.toUpperCase();
}catch{
    console.log("ERROR !!!")
}

console.log("RUNNING .....")


function yell(msg){
    try{
        console.log(msg.toUpperCase());
    }catch(e){
        console.log(e)
        console.log("try to pass string");
    }
}
yell("hello")
yell(21313)
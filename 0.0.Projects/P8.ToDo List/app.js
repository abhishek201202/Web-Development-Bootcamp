let input = prompt("what would you like to do?");
const todos = ["collect chicken eggs"]
while(input !== "quit" && input !== 'q'){
    input = prompt("what would you like to do?")
    if(input === "list"){
        console.log("***********************")
        for(let i = 0; i < todos.length; i++){
            console.log(`${i} : ${todos[i]}`);
        }
        console.log("***********************")
    }else if(input === "new"){
        const newToDo = prompt("ok what is the new todo ? ");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list`);
    }else if(intput === "deleted"){
        const index = parseInt(prompt("ok, enter an index to delete:"));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }else{
            console.log("unknow indedx");
        }
    }
}
console.log("OK QUIT THE APP");
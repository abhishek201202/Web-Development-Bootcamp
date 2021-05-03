const fs = require('fs')
// console.log(fs)
const folderName = process.argv[2] || "Project"



// asynchronous version
/*
fs.mkdir("Dogs", {recursive:true}, (err) => {
    console.log("IN THE CALLBACK!!!")
    if(err) throw err;
})
*/




// sync version
try{
    fs.mkdirSync("folderName")
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/styles.css`)
    fs.writeFileSync(`${folderName}/app.js`)
}catch(err){
    console.log("something went wrong!!!")
    console.log(err)
}






console.log("I COME AFTER MKDIR IN THE FILE!!")








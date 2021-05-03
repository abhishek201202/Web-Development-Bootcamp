console.log("hello from args file")
console.log(process.version)
console.log(process.release)
console.log(process.cwd())
console.log(process.argv)

// to create our own argument
// node args.js puppies chicken hello


const args = process.argv.slice(2);
for(let arg of args){
    console.log(`Hi there, ${arg}`)
}
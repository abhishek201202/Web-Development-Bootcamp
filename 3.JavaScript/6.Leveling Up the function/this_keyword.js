const cat = {
    name: "blue steele",
    color: "grey",
    meow(){
        console.log(`${this.name} says MEOW MEOW MEOW`);
    }
}
cat.meow();
f = cat.meow;
f();
// this is not available in f 
// f is pointing to the window object
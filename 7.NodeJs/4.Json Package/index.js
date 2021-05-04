// npm init is used to create the package.json file

const figlet = require("figlet")
const colors = require("colors")
figlet("Abhishek Soni", function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});
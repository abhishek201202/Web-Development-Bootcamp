const franc = require("franc")
const langs = require("langs")
const colors = require("colors")
const input = process.argv[2]
console.log(input)
const langCode = franc(input)
if(langCode === "und"){
    console.log("SORRY, COULDN'T FIGURE IT OUT!!")
}else{
    const language = langs.where("3", langCode)
    console.log(language.name.rainbow)
}

// 'bonjour je suis colt'
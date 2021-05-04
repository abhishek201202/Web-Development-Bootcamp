console.log(document.querySelector("p").innerText)
console.log(document.querySelector("p").textContent)

const allLinks = document.querySelectorAll("a");
for(let link of allLinks){
    link.innerText = "I AM A LINK";    
}



// document.querySelector("h1").innerHTML = '<i>abhishek</i>'
// document.querySelector("h1").innerHTML += '<sup>soni</sup>'



// document.querySelector("p").innerHTML = '<b>abhishek</b>'
// document.querySelector("p").innerText = '<b>abhishek</b>'
// document.querySelector("#banner").id = "whoops"


// get attribute and set attribute 
const firstlink = document.querySelector("a")
console.log(firstlink.getAttribute("href"))
console.log(firstlink.getAttribute("id"))
console.log(firstlink.getAttribute("class"))
console.log(firstlink.setAttribute("href", 'http://www.google.com'))



const input = document.querySelector('input[type="text"]')
console.log(input)
input.type = 'color'

const imgg = document.querySelector('img')
imgg.setAttribute("src", 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg')
imgg.setAttribute("text", "chicken")

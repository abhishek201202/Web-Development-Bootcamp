const firstBold = document.querySelector("b");
const par = firstBold.parentElement;
console.log(firstBold)
console.log(par)
const grandPar = par.parentElement;
console.log(grandPar)

const paragraph = firstBold.parentElement
console.log(paragraph.children)


// =>
const squareImg = document.querySelector(".square")
console.log(squareImg)
console.log(squareImg.parentElement)
console.log(squareImg.children)

console.log(squareImg.nextSibling)
console.log(squareImg.nextElementSibling)
console.log(squareImg.previousSibling)
console.log(squareImg.prevElementSibling)


// ==> append-child
// How to create an DOM element 
const newImg = document.createElement("img")
console.log(console.dir(newImg))
newImg.src = "https://media1.tenor.com/images/eba886c9e7e3ca36a585459549583da5/tenor.gif"
document.body.appendChild(newImg)
newImg.classList.add("square")


const newH3 = document.createElement("h3")
newH3.innerText = "I am Goku!!!"
document.body.appendChild(newH3)




// ==> append 
const p = document.querySelector("p")
p.append("I am new text yaaaayyyy!!!!", "dhdflnwnf lindsn")
const newB = document.createElement("b")
newB.append("Hii")
p.append(newB)
p.prepend(newB)


const h2 = document.createElement("h2")
h2.append("Are adorable chickens")
const h1 = document.querySelector("h1")
h1.insertAdjacentElement("afterend", h2)
console.log(h1.nextElementSibling)




/// ===> Remove child
const firstLi = document.querySelector("li")
const ul = firstLi.parentElement
ul.removeChild(firstLi)


const b = document.querySelector("b")
b.parentElement.removeChild(b)


const img = document.querySelector("img")
img.remove()








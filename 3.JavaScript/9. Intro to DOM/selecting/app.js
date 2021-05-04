// get element by id
const img = document.getElementById("banner")
console.log(img)


// get elements by tag name 
const allImages = document.getElementsByTagName("img")
for(let img of allImages){
    console.log(img.src)
}



// get elements by class name 
const squareImages = document.getElementsByClassName("square")
console.log(squareImages)
for(let img of squareImages){
    img.src = allImages[0].src;
}



// query selector
// gives the first matching element
console.log(document.querySelector("p"))
console.log(document.querySelector("#banner"))
console.log(document.querySelector(".square"))
console.log(document.querySelector("img:nth-of-type(2"))
console.log(document.querySelector('a[title="Java"]'))



// query selector all 
console.log(document.querySelectorAll("p"))
const links = document.querySelectorAll("p a")
for(let link of links){
    console.log(link.href)
}



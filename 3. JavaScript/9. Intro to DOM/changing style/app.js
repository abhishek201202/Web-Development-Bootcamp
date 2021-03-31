//// INLINE
const h1 = document.querySelector("h1")
console.log(h1.style.color) // this conatin the inline style which we directly write in html
// but we can use to change the value 
h1.style.color = "blue";
h1.style.fontSize = "3em";
console.log(h1.style.color)
const allLinks = document.querySelectorAll("a")
for(let link of allLinks){
    link.style.color = 'rgb(0, 108, 134)'    
    link.style.textDecorationColor = "magenta"
    link.style.textDecorationStyle = "wavy"
}
console.log(window.getComputedStyle(h1))
console.log(window.getComputedStyle(h1).color)



/// CLASS LIST
const h2 = document.querySelector("h2")
console.log(h2.getAttribute("class"))
h2.setAttribute('class', 'purple')
h2.setAttribute("class", "border")
let currentClasses = h2.getAttribute("class")
console.log(currentClasses)
h2.setAttribute("class", `${currentClasses} purple`)

// ==>
h2.classList.add('purple')
h2.classList.add('border')
h2.classList.remove('border')
h2.classList.contains('border')
h2.classList.toggle('purple')


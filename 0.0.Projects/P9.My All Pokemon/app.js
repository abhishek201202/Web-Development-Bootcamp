// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png


const container = document.querySelector("#container");
const baseURL =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


for(let i = 0; i < 200; i++){
    const pokemon = document.createElement("div");
    pokemon.classList.add('pokemon')
    const label = document.createElement("span")
    label.innerText = `#${i + 1}`
    const newImg = document.createElement("img")
    newImg.src = `${baseURL}${i + 1}.png`
    
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}

{/* <div>
    <img></img>
    <span>2</span>
</div>
 */}


















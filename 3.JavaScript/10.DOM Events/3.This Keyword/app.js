const buttons = document.querySelectorAll('button');

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

for(let button of buttons){
    button.addEventListener('click', function(){
        button.style.backgroundColor = randomColor();
        button.style.color = randomColor();
    })
}

for(let button of buttons){
    button.addEventListener('click', colorize)
}


function colorize(){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}
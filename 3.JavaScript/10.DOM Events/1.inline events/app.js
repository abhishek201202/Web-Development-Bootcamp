const btn = document.querySelector('#v2');
btn.onclick = function(){
    alert('bad bad bad !!!!')
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED !!")
}

function scream(){
    console.log("AAAAAHHHHH  STOP TOUCHING ME");
}
btn.onmouseenter = scream;



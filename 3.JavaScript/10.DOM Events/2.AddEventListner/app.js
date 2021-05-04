const btn = document.querySelector('#v1');
btn.addEventListener('dblclick', function(){
    alert("CLICKED!!");
})


function twist(){
    console.log("TWIST!!")
}

function shout(){
    console.log("SHOUT!")
}


const tasButton = document.querySelector('#tas');

// if we have to add property then 
// the first one will be overwritten
// if we follow below approach
tasButton.onclick = twist;
tasButton.onclick = shout;



// Event Listner Approach
tasButton.addEventListener('click', twist, {once : true})
tasButton.addEventListener('click', shout)



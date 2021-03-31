
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
let winningScore = 5;
let isGameOver = false;

function updateScore(player, oppenent){
    if(player.score !== winningScore && !isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            player.display.classList.add('has-text-success');
            oppenent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            oppenent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }else{
        isGameOver = true;
    }
}

p1.button.addEventListener('click', function(){
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function(){
    updateScore(p2, p1);
})


function reset(){
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

resetButton.addEventListener('click', reset)


winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})


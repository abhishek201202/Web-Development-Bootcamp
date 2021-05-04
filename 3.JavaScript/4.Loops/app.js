// FOR LOOP
for(let i = 0; i < 10; i++){
    console.log(i);
}

const a = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < a.length; i++){
    console.log(i, a[i]);
}


for(let num of a){
    console.log(num);
}

for(let c of "abhishek"){
    console.log(c);
}


for(let i = a.length - 1; i >= 0; i--){
    console.log(i, a[i])
}

for(let i = 0; i < 10; i++){
    console.log(`i is: ${i}`)
    for(let j = 0;  j < 5; j++){
        console.log(`        j is ${j}`)
    }
}

const seatingChart = [
    ["a", "b", "c"],
    ["d", "e", "f", "g"],
    ["h", "i", "j"]
]
for(let i = 0; i < seatingChart.length; i++){
    for(let j = 0; j < seatingChart[i].length; j++){
        console.log(i, j, seatingChart[i][j])
    }
}



//// WHILE LOOP

let cnt = 0;
while(cnt < 10){
    console.log(cnt)
    cnt++;
    if(cnt == 6){
        break;
    }
}


// Writting guessing game
let input = parseInt(prompt("Enter the maximum number!"));
while(!input){
    input = parseInt(prompt("Enter the maximum number!"));
}
const  targetNum = Math.floor(Math.random() * input) + 1;
console.log(targetNum)

let ask = parseInt(prompt("Enter your first guess!"));
cnt = 1;
while(parseInt(ask) !== targetNum){
    if(ask === 'q'){
        break;
    }
    cnt++;
    if(ask > targetNum){
        ask = prompt("To High");
    }else{
        ask = prompt("To Low");
    }
}
console.log(`total trie you take is $(cnt)`);


// Traverse in object
const info = {
    abhi : 201202,
    anam : 201202
}
for(let x in info){
    console.log(`${x} scored ${info[x]}`);
}

let sum = 0;
for(let score of Object.values(info)){
    sum += score;
}
console.log(sum/2)
const buttons = document.querySelectorAll("button");
const display=document.getElementById('results')
let userCount = 0;
let computerCount = 0;
const userScore=document.getElementById('userScore')
const computerScore=document.getElementById('computerScore')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result(button.id, computerPlay())
    })
});

function computerPlay(){
    choices=['rock', 'paper', 'scissor']
    const a=Math.floor(Math.random()*choices.length);
    return choices[a];
}

function result(a,b){
    if(a==b){
        display.innerHTML='Its a Tie'
    }
    else if(a=='rock'&&b=='paper'||a=='paper'&&b=='scissor'||a=='scissor'&&b=='rock'){
        computerCount++;
        display.innerHTML='Computer Won!!';
        computerScore.innerHTML=computerCount;
    }
    else if(a=='rock'&&b=='scissor'||a=='paper'&&b=='rock'||a=='scissor'&&b=='paper'){
        userCount++;
        display.innerHTML='User Won!!';
        userScore.innerHTML=userCount;
    }

}
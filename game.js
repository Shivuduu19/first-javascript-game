
const body = document.querySelector('body');
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const div = document.createElement('div');


rock.textContent="ROCK";
paper.textContent="PAPER";
scissors.textContent="SCISSORS";
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
const btns = document.querySelectorAll('button');
let playerCount =0;
let computerCount =0;
let drawCount =0;
let totalRound = "not yet";
btns.forEach((button)=>{
    button.addEventListener('click',e=>{playRound(e.target.textContent.toLowerCase(),getComputerChoice())});  
  
});

body.appendChild(div);

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    const options = ["Rock","Paper","Scissors"];
return options[choice].toLowerCase();    
}

function playRound(playerSelection,computerSelection)
{
    console.log(playerSelection);
    console.log(computerSelection);
    const para = document.createElement('p');
    const winner = document.createElement("h1");
 let result;   
        
    if(playerSelection=="rock" && computerSelection=="paper")
    {
        result = "You Lose! Paper beats Rock";
    }else if(playerSelection=="rock" && computerSelection=="scissors"){
        result= "You Won! rock beats scissors";
    }else if(playerSelection=="paper" && computerSelection=="rock"){
        result= "You Won! paper beats rock";
    }else if (playerSelection=="paper"&& computerSelection=="scissors"){
        result = "You Lose! scissors beats paper";
    }else if(playerSelection=="scissors"&& computerSelection=="rock"){
        result= "You Lose! rock beats scissors";
    }else if(playerSelection=="scissors"&&computerSelection=="paper"){
        result= "You Won! scissors beats paper";
    }
    else{
            result = "Draw";
        }
    console.log(result);
    if(result.toUpperCase().slice(0,8)=="YOU WON!"){
        playerCount++;
      }else if(result.toUpperCase().slice(0,9) =="YOU LOSE!"){
        computerCount++;
      }else{
        drawCount++;
      }
      console.log(playerCount);
      console.log(computerCount);
      console.log(drawCount);
      if(playerCount===5){
        totalRound="YOU WON!";
        div.appendChild(winner);
      }else if(computerCount===5){
        totalRound="YOU LOSE!";
        div.appendChild(winner);
      }
      
    para.textContent=`playerselection:${playerSelection},computerselection:${computerSelection} result of round:${result},
        score of player =${playerCount},score of computer=${computerCount} `;
        winner.textContent=`ANNOUNCEMENT=${totalRound}`;
        div.appendChild(para);
     
    
     
}
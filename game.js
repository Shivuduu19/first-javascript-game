
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    const options = ["Rock","Paper","Scissors"];

return options[choice];    
}

function playRound(playerSelection,computerSelection)
{
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
     return result;

}    
function game(){
    let playerCount=0;
    let computerCount=0;
    let draw=0;
    let got;
    for(i=0;i<5;i++){
        let playerSelection=prompt("Your choice").toLowerCase();
         let computerSelection = getComputerChoice().toLowerCase(); 
        let rounds = playRound(playerSelection,computerSelection);
          if(rounds.toUpperCase().slice(0,8)=="YOU WON!"){
            playerCount++;
          }else if(rounds.toUpperCase().slice(0,9) =="YOU LOSE!"){
            computerCount++;
          }else{
            draw++;
          }
          console.log(playerCount);
          console.log(computerCount);
          console.log(draw);
    }
    if(playerCount>computerCount){
        got="YOU WON!"
    }else if(playerCount===computerCount){
        got = "draw"
    }else if(computerCount>playerCount){
        got = "YOU LOSE!"
    }
    else{
        got="something went wrong"
    }
    return got;
}
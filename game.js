function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    const options = ["Rock","Paper","Scissor"];
    
return options[choice];
}

let rock;
let paper;
let scissors;
function result(playerSelection,computerSelection)
{
 let yes;
    if(playerSelection === rock && computerSelection === paper)
    {
        result = "You Lose! Paper beats Rock";
    }else if(playerSelection === scissors && computerSelection === paper)
    {
        result= "you Won! Scissors beats paper";
    } else if(playerSelection=== paper && computerSelection===scissors)
    {
        result= "You Lose! scissors beats paper";
    } else if(playerSelection===paper && computerSelection ===rock)
    {
        result= "You Won! paper beats rock";
    }else if(playerSelection===scissors&& computerSelection===rock)
    {
        result= "YOU Lose! rock beats scissors";
    }else{ 
        result="You won! rock beats scissors";
    }
    return result
    

}

result(scissors,rock);
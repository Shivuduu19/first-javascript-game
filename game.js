function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    const options = ["Rock","Paper","Scissor"];
    
return options[choice];
}
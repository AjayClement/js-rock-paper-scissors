
game();

function playerPlay(){
    const playerWeapon = prompt("Enter your weapon of choice",'');
    console.log(`player's choice ${playerWeapon}`);
    return playerWeapon;
}

function computerPlay(){
    const weapons=["rock","paper","scissors"];
    const max= weapons.length+1;
    const randomNum = Math.floor(Math.random()*max);
    console.log(`computer's choice ${weapons[randomNum]}`);
    return weapons[randomNum]; 
}


function game(){
  for(let i=0; i<5;i++){

    let playerSelection = playerPlay().toLowerCase();
    let computerSelection = computerPlay().toLowerCase();

    if(playerSelection===computerSelection){
             console.log("It's a draw")
    }else{
            switch(playerSelection){
                case "rock":
                   if(computerSelection==='paper'){
                    console.log(`You Lose!, ${computerSelection} beats ${playerSelection}`);
                   }else{
                    console.log(`You Win!, ${playerSelection} beats ${computerSelection}`);
                   }
                   break;
                case "paper":
                    if(computerSelection==='scissors'){
                     console.log(`You Lose!, ${computerSelection} beats ${playerSelection}`);
                    }else{
                     console.log(`You Win!, ${playerSelection} beats ${computerSelection}`);
                    }
                    break;
                case "scissors":
                    if(computerSelection==='rock'){
                     console.log(`You Lose!, ${computerSelection} beats ${playerSelection}`);
                    }else{
                     console.log(`You Win!, ${playerSelection} beats ${computerSelection}`);
                    }
                    break;
                 default:
                     console.log("Please choose a valid weapon");
            }
        }
    }
}


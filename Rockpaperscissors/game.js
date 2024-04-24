// so here it shows the error null to rectify that we use !score it means also falsy value
      // here to optimize the code if the score is not null the left side will be executed or else the right side .
      //The operator we used here is default operator it returns the output if either one condition is true.
      /* While getting the score object from the local storage we  need to get it  back into the in the form of js object so 
      we use JSON.parse here*/
    let score =JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    Losses:0,
    ties:0
};
updateScoreElement();
/*
if(!score){
score ={
    wins:0,
    Losses:0,
    Tie:0
};
}*/
function playGame(playerMove){
const computerMove=pickcomputerMove();
let result='';
if (playerMove === 'scissors'){
  if(computerMove ==='rock'){
    result ='You Lose';
}
else if(computerMove === 'paper'){
    result ='You Win.';
}
else if(computerMove === 'scissors'){
    result = 'Tie.';
}

} else if(playerMove==='paper'){
    if(computerMove ==='rock'){
    result ='You Win.';
}
else if(computerMove === 'paper'){
    result ='Tie.';
}
else if(computerMove === 'scissors'){
    result = 'You Lose.';
}

}else if(playerMove === 'rock'){
 if(computerMove ==='rock'){
    result ='Tie.';
}
else if(computerMove === 'paper'){
    result ='You Lose.';
}
else if(computerMove === 'scissors'){
    result = 'You Win.';
}
}

if(result==='You Win.'){
    score.wins+=1;
}else if(result==='You Lose.'){
    score.Losses+=1;
}else if(result==='Tie.'){
    score.ties+=1;
}
/*localstorage will accept only the strings so if you give the value as it is like score it will accept it so to covert to string
we used JSON.stringify inbuilt function here*/
localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = ` You Picked<img src="images/${playerMove}-emoji.png" class="move-icon">
Computer Picked<img src="images/${computerMove}-emoji.png" class="move-icon">`;
}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML =`Wins: ${score.wins},Losses: ${score.Losses},Ties: ${score.ties}`;
}
//here the Math.random is an in-built function that chooses the computer move randomly then by keeping the random length that is 0 to 1 if you
//divide by 3 na it will the computer move randomly it will be used until u end the game so using function you can call whereever you need.
function pickcomputerMove(){
let computerMove= '';
const randomNumber = Math.random();

if(randomNumber >=0 && randomNumber<1/3){
computerMove= 'rock';
}else if(randomNumber>=1/3 && randomNumber< 2/3){
computerMove= 'paper';
}else if(randomNumber>=2/3 && randomNumber < 1){
computerMove= 'scissors';
} 
return computerMove;
}

let score=JSON.parse(localStorage.getItem('score')) || {
      wins:0,
      losses:0,
      ties:0
    };
   updateScoreElement();
   let isAutoPlaying=false;
   let intervalId;
   function autoplay(){
    if(!isAutoPlaying){
     intervalId= setInterval(()=>{
      const playerMove=pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoPlaying=true;
    }
    else{
      clearInterval(intervalId);
      isAutoPlaying=false;
    }
   }
   document.querySelector('.js-rock-btn')
   .addEventListener('click', () => playGame('rock'));
  document.querySelector('.js-paper-btn')
  .addEventListener('click', () => playGame('paper'));
  document.querySelector('.js-scissors-btn')
  .addEventListener('click', () => playGame('scissors'));
   
   document.body.addEventListener('keydown',(event)=>{
      if(event.key === 'r'){
        playGame('rock');
      }
      else if(event.key === 'p'){
        playGame('paper');
      }
      else if(event.key === 's'){
        playGame('scissors');
      }
   })

  function playGame(playerMove){
    const computerMove=pickComputerMove();
    result='';
    if(playerMove==='scissors'){
      if(computerMove==='scissors'){
        result='Tie';
      }
      else if(computerMove==='rock'){
        result='You Lose';
      }
      else if(computerMove==='paper'){
        result='You Win';
      }
    }
    else if(playerMove==='paper'){
      if(computerMove==='paper'){
        result='Tie';
      }
      else if(computerMove==='scissors'){
        result='You Lose';
      }
      else if(computerMove==='rock'){
        result='You Win';
      }
    }
    else if(playerMove==='rock'){
      if(computerMove==='rock'){
        result='Tie';
      }
      else if(computerMove==='paper'){
        result='You Lose';
      }
      else if(computerMove==='scissors'){
        result='You Win';
      }
    }
    if(result==='You Win'){
      score.wins+=1;
    }
    else if(result==='You Lose'){
      score.losses+=1;
    }
    else if(result==='Tie'){
      score.ties+=1;
    }
    localStorage.setItem("score",JSON.stringify(score));
   document.querySelector('.js-result').innerHTML=`${result}`;
   document.querySelector('.js-moves').innerHTML=` You <img src="images/${playerMove}-emoji.png" alt="${playerMove}" class="move-icon">
    <img src="images/${computerMove}-emoji.png" alt="${computerMove}" class="move-icon">
    Computer`;
   updateScoreElement();
  }
  function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Tie: ${score.ties}`;
  }


  function pickComputerMove(){
    const randomNumber=Math.random();

    let computerMove='';
      if(randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
      }
      else if(randomNumber>= 1/3 && randomNumber<2/3){
        computerMove='paper';
      }
      else if(randomNumber>=2/3 && randomNumber<1){
        computerMove='scissors';
      } 
      return computerMove;
  }
let min=1,
    max=10,
    winningNum=2,
    guessLeft=3;

const game= document.querySelector('#game');
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn'),
      guessInput=document.querySelector('#guess-input'),
      message=document.querySelector('.message');

minNum.textContent=min;
maxNum.textContent=max;

game.addEventListener('mousedown', function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    }
})

guessBtn.addEventListener('click', function(){
    let guess =parseInt(guessInput.value);

    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if(guess===winningNum){
        // guessInput.disables=true;
        // guessInput.style.borderColor='green';
        let msg=`${winningNum} is correct, YOU WIN!`;
        gameOver(true, msg);

    }else{
        guessLeft-=1;
        if(guessLeft===0){
        // guessInput.disables=true;
        // guessInput.style.borderColor='red';
        let msg=`${guess} is wrong,${guessLeft} guess left`;
        gameOver(false,msg);
        }
    }
})

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, color){
    let color;
    won===true? color='green': color='red';
    guessInput.disables=true;
    guessInput.style.borderColor=color;
    guessInput.style.color=color;
    setMessage(msg,color);

    guessBtn.value='Play Again';
    guessBtn.className+='play-again';
}
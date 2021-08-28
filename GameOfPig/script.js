(function(){

    'use strict';

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice: ['1die.jpg','2die.jpg','3die.jpg','4die.jpg','5die.jpg','6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function(){
        //randomly set game index
        gameData.index = Math.round(Math.random());  //expected value is 0 or 1
        gameControl.innerHTML = '<h2>The Game has started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        // console.log('Set up the turn');
        // console.log(gameData.index);
        setUpTurn();
    });

    //set up turn
    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            console.log('roll the Dice');
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the Dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}" alt="die${gameData.dice[gameData.roll1 - 1]}">`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll2 - 1]}" alt="die${gameData.dice[gameData.roll1 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //console.log(gameData.rollSum);
        
        if (gameData.rollSum === 2){
            ///if two ones are rolled
            game.innerHTML  += '<p>Oh snap!, your got snake eyes!</p>'
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //show the current score

            //set up the next player
            setTimeout(setUpTurn, 2000);
        }
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            
            //set up the next player
            setTimeout(setUpTurn, 2000);
        }
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollAgain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollAgain').addEventListener('click', function(){
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            //check winning condition
            checkWinning();
        }
    }

    function checkWinning(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = 'Start a New Game?';    
        }
        else{
            showScore();
        }
    }

    function showScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
    }

})();
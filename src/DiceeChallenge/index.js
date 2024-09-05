import React from "react";
import './styles.css'

function DiceGame(){
   

    const diceImages = [
        require('./images/dice1.png'),
        require('./images/dice2.png'),
        require('./images/dice3.png'),
        require('./images/dice4.png'),
        require('./images/dice5.png'),
        require('./images/dice6.png')
      ];
    var r1=Math.floor(Math.random()*6);
    var r2=Math.floor(Math.random()*6);

    const rnd1=diceImages[r1];
    const rnd2=diceImages[r2];
    let esito="";
    if (r1 > r2) {
        esito="🚩 Play 1 Wins!";
      }
      else if (r2 > r1) {
        esito="Player 2 Wins! 🚩";
      }
      else {
        esito="Draw!";
      }
  
    return(
        <div class='game'>
        <body>
            <div class="container">
            <h1>Refresh Me!</h1>
            <div class="dice">
                <p>Player 1</p>
                <img class="img" alt="uno" src={rnd1} ></img>
            </div>
        
            <div class="dice">
                <p>Player 2</p>
                <img class="img" alt="due" src={rnd2}></img>
            </div>
            <h1>{esito}</h1>
            </div>    
        </body>    
        </div>
    );
}
export default DiceGame;
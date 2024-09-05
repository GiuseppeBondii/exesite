import './Home.css'
import React from 'react';
import { Link } from 'react-router-dom';


function Home(){
    return(
      
        <body>
        <h2 className='titolo' >Home Esercizi</h2>
        <nav>
        <ul>
          <div class='casa'>
          <li ><Link to="/">Home</Link></li>
          <li ><Link to="./esami/HomeEsami">Esami</Link></li> 
          </div>
          <h3 className='subtt'>Esercizi di Laboratorio</h3>
          <li><Link to="./Tabella">Tabella</Link></li>
          <li><Link to="./Form">Form</Link></li>
          <li><Link to="./Immagine">Immagine</Link></li>
          <li><Link to="./Tipografia">Tipografia</Link></li>
          <li><Link to="./Posizionamento">Posizionamento</Link></li>
          <li><Link to="./Flexbox">Flexbox</Link></li>
          <li><Link to="./Boot">Boot</Link></li>
          <li><Link to="./Calendar">Calendar</Link></li>
          <li><Link to="./Fibonacci">Fibonacci</Link></li>
          <li><Link to="./DiceeChallenge/index.js">DiceGame</Link></li>
          <li><Link to="./ADVCSS">advanced css and animation</Link></li> 
          <li><Link to="./ImitImages">ImitImages</Link></li> 
          <li><Link to="./Wapp">Wapp</Link></li> 

        </ul>
      </nav>
      </body>
    );
}

export default Home;
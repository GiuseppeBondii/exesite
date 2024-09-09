import './ESAME8.css'
import React from 'react';


function ESAME8(){
    const pinImages = [
        require('./cat.jpg'),
        require('./dogs.jpg'),
        require('./hi.jpg'),
        require('./framework.png'),
        require('./help.jpg'),
        require('./meduse.jpg'),
        require('./pianist.jpg'),
        require('./tomato.jpg'),
        require('./thoughts.jpg'),
      ];
    const logo= require('./pinterest_logo.png')
    
    return(
        <div>
        <div className='navbarPin'>
            <img src={logo} alt='pinterest logo'></img>
            <button>Home Page</button>
            <button>Esplora</button>
            <button>Crea</button>
            <input placeholder='  Search'></input>
            <button id='bell'>&#128276;</button>
            <button id='notifications'>&#9993;</button>
        </div>
        
        <div className='pinContainer'>
            {pinImages.map((image, index) => (
                <div className="imageWrapper" key={index}>
                    <img src={image} alt='pin' className="pinImage" />
                    <button className="imageButton">Salva</button>
                </div>
            ))}
        </div>
    </div>
    );
}
export default ESAME8
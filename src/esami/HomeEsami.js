import React from 'react';
import { Link } from 'react-router-dom';


function HomeEsami(){
    return(
      
        <body>
        <h2 className='titolo' >Home Esami</h2>
        <nav>
        <ul>
            <div className='casa'>
          <li><Link to="../">Home</Link></li></div>
          <li><Link to="../esami/ESAME1">ESAME1</Link></li>
          <li><Link to="../esami/ESAME2">ESAME2</Link></li>
        </ul>
      </nav>
      </body>
    );
}

export default HomeEsami;
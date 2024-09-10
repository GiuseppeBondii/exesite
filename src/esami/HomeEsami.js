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
          <li><Link to="../esami/ESAME3">ESAME3</Link></li>
          <li><Link to="../esami/ESAME4">ESAME4(si potrebbe incliudere nel progetto)</Link></li>
          <li><Link to="../esami/ESAME5">ESAME5</Link></li>
          <li><Link to="../esami/ESAME6">ESAME6</Link></li>
          <li><Link to="../esami/ESAME7">ESAME7</Link></li>
          <li><Link to="../esami/ESAME8/ESAME8">ESAME8</Link></li>
          <li><Link to="../esami/ESAME9">ESAME9</Link></li>
          <li><Link to="../esami/ESAME10">ESAME10</Link></li>

        </ul>
      </nav>
      </body>
    );
}

export default HomeEsami;
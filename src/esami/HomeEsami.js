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
          <li><Link to="../esami/ESAME1">Responsive e uso di @media</Link></li>
          <li><Link to="../esami/ESAME2">Appuntamento Medico</Link></li>
          <li><Link to="../esami/ESAME3">Responsive e uso di @media</Link></li>
          <li><Link to="../esami/ESAME4">getore di appuntamenti(si potrebbe incliudere nel progetto)</Link></li>
          <li><Link to="../esami/ESAME5">Responsive e uso di @media</Link></li>
          <li><Link to="../esami/ESAME6">Navbar e Dropdown senza Bootstrap</Link></li>
          <li><Link to="../esami/ESAME7">API Attori</Link></li>
          <li><Link to="../esami/ESAME8/ESAME8">Responsive Pintrest</Link></li>
          <li><Link to="../esami/ESAME9">To Do List(si potrebbe incliudere nel progetto)</Link></li>
          <li><Link to="../esami/ESAME10">Galleria Immagini</Link></li>
          <li><Link to="../esami/ESAME11">Behance Form Accesso</Link></li>
          <li><Link to="../esami/ESAME12">NON APRIRE (API OpenTranslate)</Link></li>

        </ul>
      </nav>
      </body>
    );
}

export default HomeEsami;
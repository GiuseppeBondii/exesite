import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Tabella from './Tabella';
import Form from './Form' 
import Immagine from './Immagine';
import Tipografia from './Tipografia';
import Posizionamento from './Posizionamento';
import Home from './Home';
import Flexbox from './Flexbox';
import Boot from './Boot';
import Calendar from './Calendar';
import Fibonacci from './Fibonacci';
import DiceGame from './DiceeChallenge/index';
import ADVCSS from './ADVCSS';
import ImitImages from './ImitImages';
import Wapp from './Wapp';
import HomeEsami from './esami/HomeEsami';
import ESAME1 from './esami/ESAME1';
import ESAME2 from './esami/ESAME2';
import ESAME3 from './esami/ESAME3';
import ESAME4 from './esami/ESAME4';
import ESAME5 from './esami/ESAME5';
import ESAME6 from './esami/ESAME6';
import ESAME7 from './esami/ESAME7';
import ESAME8 from './esami/ESAME8/images/ESAME8';
import ESAME9 from './esami/ESAME9';
import ESAME10 from './esami/ESAME10';


function App() {
  return (
    
<Router  basename="/">
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Tabella" element={<Tabella/>} />
          <Route path="/Form" element={<Form/>} />
          <Route path="/Immagine" element={<Immagine/>} />
          <Route path="/Tipografia" element={<Tipografia/>} />
          <Route path="/Posizionamento" element={<Posizionamento/>} />
          <Route path="/Flexbox" element={<Flexbox/>} />
          <Route path="/Boot" element={<Boot/>} />
          <Route path="/Calendar" element={<Calendar/>} />
          <Route path="/Fibonacci" element={<Fibonacci/>} />
          <Route path="/DiceeChallenge/index.js" element={<DiceGame/>} />
          <Route path="/ADVCSS" element={<ADVCSS/>} />
          <Route path="/ImitImages" element={<ImitImages/>} />
          <Route path="/Wapp" element={<Wapp/>} />
          <Route path="/esami/HomeEsami" element={<HomeEsami/>} />
          <Route path="/esami/ESAME1" element={<ESAME1/>} />
          <Route path="/esami/ESAME2" element={<ESAME2/>} />
          <Route path="/esami/ESAME3" element={<ESAME3/>} />
          <Route path="/esami/ESAME4" element={<ESAME4/>} />
          <Route path="/esami/ESAME5" element={<ESAME5/>} />
          <Route path="/esami/ESAME6" element={<ESAME6/>} />
          <Route path="/esami/ESAME7" element={<ESAME7/>} />
          <Route path="/esami/ESAME8/ESAME8" element={<ESAME8/>} />
          <Route path="/esami/ESAME9" element={<ESAME9/>} />
          <Route path="/esami/ESAME10" element={<ESAME10/>} />

        </Routes>
      </div>
 </Router>
        
  );
}

export default App;

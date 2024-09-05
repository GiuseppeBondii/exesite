import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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


function App() {
  return (
    
<Router>
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

        </Routes>
      </div>
 </Router>
        
  );
}

export default App;

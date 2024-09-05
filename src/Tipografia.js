import './Tipografia.css'

function Tipografia() {
    return (
      <body>
          <h2 className='titolo' >Esercizi Tipografia</h2>

        <h3>Parte 1 (riscalfdamento)</h3>
        <div>
            <p id="yellow">Dimensione statica</p>
            <p id="blue">Tre volte la statica</p>
            <p id="magenta">Quattro volte il font del div giallo!</p>
            <p id="red">Quattro volte la dimensione statica - 12px</p>
            <p id="green">2 rem</p>
            <p id="orange">1px</p>
        </div>
        <h3>Parte 2</h3>
        <div>
              <div id="yellow2"><p>Un quarto della viewport.</p></div>
              <div id="blue2"><p>Metà viewport</p></div>
              <div id="magenta2"><p>Due volte il primo + 100px</p></div>
              <div id="red2"><p>1/2 della viewport - 15px</p></div>
              <div id="green2"><p>Alto metà viewport, largo metà dell'altezza della viewport</p></div>
              <div id="orange2"><p>75/100 della viewport diviso 2</p></div>
            </div>
      </body>
    );
  }
  
  export default Tipografia;
  
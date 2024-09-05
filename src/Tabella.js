import React from 'react';

import './Tabella.css';

function Tabella() {
  return (
    <body>
    <h2 className='titolo' >Esercizio Tabella</h2> 

      <table>
            <thead>
            <tr>
              <th rowSpan={2}>Modello</th>
              <th colSpan={3}>Prestazioni</th >
              <th rowSpan={2}>Prezzo</th>
            </tr>
            <tr>
              <th >Velocità</th>
              <th >Capacità</th >
              <th >Consumo</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Audi A4</td>
              <td>250 km/h</td>
              <td>5 persone</td>
              <td>6 L/100km</td>
              <td>€ 40.000</td>
            </tr>
            <tr>
              <td>BMW X5</td>
              <td colSpan={2}>SUV</td>
              <td>6 L/100km</td>
              <td>€ 65.000</td>
            </tr>
            <tr>
              <td>Ford Mustang</td>
              <td>250 km/h</td>
              <td>2 Persone</td>
              <td colSpan={2}>Vendita vietata in Europa</td>
            </tr>
            </tbody>
      </table> 
      </body>
  );
}

export default Tabella;

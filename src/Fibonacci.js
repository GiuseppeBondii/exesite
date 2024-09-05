import React, { useState } from "react";

function Fibonacci() {
    const [n, setN] = useState(0);
    const [sequence, setSequence] = useState([]);

    const handleInputChange = (event) => {
        setN(parseInt(event.target.value, 10));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (n <= 0) {
            alert("Inserisci un numero positivo");
            return;
        }

        let output = [0, 1];

        if (n === 1) {
            setSequence([0]);
        } else if (n === 2) {
            setSequence(output);
        } else {
            for (let i = 2; i < n; i++) {
                output.push(output[output.length - 1] + output[output.length - 2]);
            }
            setSequence(output);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Quanti numeri della sequenza devo stampare?</label>
                <input type="number" id="INPUT" value={n} onChange={handleInputChange}></input>
                <input type="submit" value="Calcola"></input>
            </form>
            <h1 style={{color:'black'}}>{sequence.join(", ")}</h1>
        </div>
    );
}

export default Fibonacci;
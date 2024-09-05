import './Form.css'

function Form() {
    return (
        <body class="Form_style">
            <h3>Esercizi Form</h3>

            <h3>Trova il tuo Volo</h3>
            <form action="" method="get" class="Form_style">
                <div class="Form_style">
                    <label >Nome: </label>
                    <input type="text"  id="name" required />
                </div>

                <div class="Form_style">
                    <label >Cognome: </label>
                    <input type="text"  id="surname" required />
                </div>

                <div class="Form_style">
                    <label >Email: </label>
                    <input type="email"  id="email" required />
                </div>

                <div class="Form_style">
                    <label >Da: </label>
                    <input type="text"  id="da" required />
                    <label >A: </label>
                    <input type="text"  id="a" required />
                </div>

                <div class="Form_style">
                    <label >Giorno di Partenza: </label>
                    <input type="date"  id="partenza" required />
                </div>

                <div class="Form_style">
                    <label >Giorno di Ritorno: </label>
                    <input type="date"  id="arrivo"/>
                </div>
                <div>
                    <input class="Submit-Volo" type="submit" value="Cerca Volo" />
                </div>
            </form>
    
            <div className='margine_basso'></div>

            <h3>Iscrizione Newsletter</h3>

            <form action="" method="get" class="Form_style">
                <div class="Form_style">
                    <label >Nome: </label>
                    <input type="text"  id="name" required />
                </div>

                <div class="Form_style">
                    <label >Cognome: </label>
                    <input type="text"  id="surname" required />
                </div>

                <div class="Form_style">
                    <label >Email: </label>
                    <input type="email"  id="email" required />
                </div>
                
                <div className='Form_style'>
                    <label> desideri ricevere notizie :</label>
                    <select>
                        <option value="quotidianamente">quotidianamente</option>
                        <option value="settimanalmente">settimanalmente</option>
                        <option value="mensilmente">mensilmente</option>
                    </select>
                </div>

                <div class="Form_style">
                    <label >Accetto termini e condizioni </label>
                    <input type="checkbox"  id="checkbox" required />
                </div>

                <div>
                    <input class="Submit-Volo" type="submit" value="Iscriviti" />
                </div>
            </form>

    </body>
    );
  }

export default Form;

import React from "react";
import './ESAME11.css'

function ESAME11(){
return(
    <div className="LoginWin">
        <win>
        </win>
        <over>
        </over>
        <div className="NomeAzienda">
            <h8>Behance</h8>
        </div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><strong>Add your date of birth</strong></h5>
                <p class="card-text">We collect your date of birth for account authentication and recovery purposes, and to ensure age-appropriate content.</p>
                <form>
                    <label>Date of Birth <img id="helpQuestion" src="https://img.icons8.com/?size=100&id=63684&format=png&color=000000" alt="help"></img></label>
                    <div className="effettivoForm">
                        <div>
                        <label>Month:</label>
                        <select style={{width:'100%'}}>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        </div>
                        <div>
                        <label>Year:</label>
                        <input type="number" style={{width:'100%'}}></input>
                        <submit id="continua">
                         <button >Continue</button>
                        </submit>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
export default ESAME11;
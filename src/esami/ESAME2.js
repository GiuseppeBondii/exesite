import './ESAME2.css'
import React, { useState } from 'react';

const validateFiscalCode = (fiscalCode) => {
    const regex = /^([A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST]{1}[0-9LMNPQRSTUV]{2}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1})$|([0-9]{11})$/;
    return regex.test(fiscalCode);
};



function ESAME2(){

    const [appointments, setAppointments] = useState([
        {
            id: "1",
            patientName: "John Doe",
            fiscal_code: "XYZABC12A34B567C",
            doctorName: "Dr. Smith",
            appointmentDate: "2024-08-20T09:00:00.000Z",
            reason: "General Checkup",
            location: "Clinic A, Room 101",
            cost: 50,
        },
        {
            id: "2",
            patientName: "Jane Roe",
            fiscal_code: "LMNDEF34G56H789J",
            doctorName: "Dr. Adams",
            appointmentDate: "2024-09-10T14:30:00.000Z",
            reason: "Dental Cleaning",
            location: "Dental Clinic, Room 202",
            cost: 75,
        }
    ]);

    const [newAppointment, setNewAppointment] = useState({
        patientName: "",
        age: "",
        fiscal_code: "",
        doctorName: "",
        appointmentDate: "",
        reason: "",
        location: "",
        cost: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setNewAppointment({
            ...newAppointment,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validazione del codice fiscale
        if (!validateFiscalCode(newAppointment.fiscal_code)) {
            setError("Codice fiscale non valido");
            return;
        }

        setError("");

        const newId = appointments.length + 1;
        setAppointments([...appointments, { ...newAppointment, id: newId.toString() }]);
        setNewAppointment({
            patientName: "",
            age: "",
            fiscal_code: "",
            doctorName: "",
            appointmentDate: "",
            reason: "",
            location: "",
            cost: ""
        });
    };

    const appointmentDate = new Date(ESAME2.appointmentDate);
    const isValidDate = !isNaN(appointmentDate); 


    return(
        <div class='MEDAPP'>
            <h1>AGGIUNGI APPUNTAMENTO</h1>
            <column>
                <form onSubmit={handleSubmit}>
                    <label >Nome e Cognome:</label>
                    <input type="text" name="patientName" value={newAppointment.patientName} onChange={handleChange} required />
                    <label >Età:</label>
                    <input type="number" name="age" value={newAppointment.age} onChange={handleChange} required />
                    <label>Codice Fiscale: </label>
                    <input type="text" name="fiscal_code" value={newAppointment.fiscal_code} onChange={handleChange} required />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <label>Selezionare Medico:</label>
                    <select name="doctorName" value={newAppointment.doctorName} onChange={handleChange} required >
                        <option>MEDICO1</option>
                        <option>MEDICO2</option>
                        <option>MEDICO3</option>
                        <option>MEDICO4</option>
                        <option>MEDICO5</option>
                        <option>MEDICO6</option>
                    </select>
                    <label>Data della visita:</label>
                    <input type="datetime-local" name="appointmentDate" value={newAppointment.appointmentDate} onChange={handleChange} required />
                    <label>Selezionare Luogo:</label>
                    <select name="location" value={newAppointment.location} onChange={handleChange} required>
                        <option>LUOGO1</option>
                        <option>LUOGO2</option>
                        <option>LUOGO3</option>
                        <option>LUOGO4</option>
                        <option>LUOGO5</option>
                        <option>LUOGO6</option>
                    </select>
                    <label>Motivo della visita:</label>
                    <textarea  name="reason" value={newAppointment.reason} onChange={handleChange} required placeholder="Scrivere qui il motivo della visita..." ></textarea>
                    <label>costo della visita:</label>
                    <input type='number' name="cost" value={newAppointment.cost} onChange={handleChange} required></input>
                    <button type="submit">Aggiungi Appuntamento</button>
                </form>

                <ul style={{
                    padding:'20px'
                }}>
                {appointments.map(app => (
                    <li key={app.id} style={{color:'black'}}>
                        <strong>Paziente:</strong> {app.patientName} <br/>
                        <strong>Codice Fiscale:</strong> {app.fiscal_code} <br/>
                        <strong>Medico:</strong> {app.doctorName} <br/>
                        <strong>Data:</strong> {isValidDate ? appointmentDate.toLocaleString() : 'Data non valida'} <br/>
                        <strong>Motivo:</strong> {app.reason} <br/>
                        <strong>Luogo:</strong> {app.location} <br/>
                        <strong>Costo:</strong> €{app.cost} <br/>
                    </li>
                ))}
                </ul>
            </column>
        </div>
    );
}

export default ESAME2;
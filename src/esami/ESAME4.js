import './ESAME4.css';
import React, { useState, useEffect } from 'react';


function ESAME4() {
    const [appointments, setAppointments] = useState(() => {
        const savedAppointments = localStorage.getItem('appointments');
        return savedAppointments ? JSON.parse(savedAppointments) : [];
    });

    const [newAppointment, setNewAppointment] = useState({
        titolo: "",
        appointmentDate: "",
        reason: "",
        location: "",
        maxpp: "",
    });
    const [error, setError] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [showMOD, setShowMOD] = useState(false);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }, [appointments]);

    const switchButtons = (buttonType) => {
        if (buttonType === "form") {
            setShowList(false);
            setShowMOD(false);
            setShowForm(prev => !prev);
        } else if (buttonType === "list") {
            setShowForm(false);
            setShowMOD(false);
            setShowList(prev => !prev);
        } else if (buttonType === "mod") {
            setShowForm(false);
            setShowList(false);
            setShowMOD(prev => !prev);
        }
    };

    // Se nessuno dei tre è attivo, espandi i pulsanti
    const isExpanded = !showForm && !showMOD && !showList;

    // Salva gli appuntamenti nel localStorage ogni volta che cambiano
    useEffect(() => {
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }, [appointments]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newAppointment.appointmentDate) {
            setError("Date is required!");
            return;
        }

        const newId = appointments.length + 1;
        setAppointments([...appointments, { ...newAppointment, id: newId.toString() }]);
        setNewAppointment({
            titolo: "",
            appointmentDate: "",
            reason: "",
            location: "",
            maxpp: "",
        });
        setShowForm(false);  // Nascondi il form dopo la sottomissione
    };

    const handleChange = (e) => {
        setNewAppointment({
            ...newAppointment,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditChange = (e, id) => {
        const updatedAppointments = appointments.map(app =>
            app.id === id ? { ...app, [e.target.name]: e.target.value } : app
        );
        setAppointments(updatedAppointments);
    };

    const handleDelete = (id) => {
        setAppointments(appointments.filter(app => app.id !== id));
    };

    return (
        <div className={`Eventi ${isExpanded ? 'all-screen' : ''}`}>
            <button onClick={() => switchButtons("form")}>Aggiungi Eventi</button>
            <button onClick={() => switchButtons("list")}>Visualizza Eventi</button>
            <button onClick={() => switchButtons("mod")}>Modifica Eventi</button>

            {showForm && (
                <div id="ADDEVENT" className='EventiForm'>
                    <form onSubmit={handleSubmit}>
                        <label>Titolo</label>
                        <input type='text' name='titolo' value={newAppointment.titolo} onChange={handleChange} required />
                        <label>Data</label>
                        <input type='datetime-local' name='appointmentDate' value={newAppointment.appointmentDate} onChange={handleChange} required />
                        <label>Descrizione Evento</label>
                        <textarea placeholder='Descrizione evento...' name='reason' value={newAppointment.reason} onChange={handleChange} required />
                        <label>Luogo</label>
                        <input type='text' name='location' value={newAppointment.location} onChange={handleChange} />
                        <label>Max persone</label>
                        <input type='number' name='maxpp' value={newAppointment.maxpp} onChange={handleChange} />
                        <button type="submit" id='submit'>Aggiungi Evento</button>
                    </form>
                </div>
            )}

            {showList && (
                <div id='LISTAEVENTI'>
                    <ul style={{ padding: '50px' }}>
                        {appointments.map(app => (
                            <li key={app.id} style={{ color: 'black' }}>
                                <strong>Titolo:</strong> {app.titolo} <br />
                                <strong>Data:</strong> {new Date(app.appointmentDate).toLocaleString()} <br />
                                <strong>Descrizione:</strong> {app.reason} <br />
                                <strong>Luogo:</strong> {app.location} <br />
                                <strong>Max Persone:</strong> {app.maxpp} <br />
                                <button onClick={() => handleDelete(app.id)} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '10px', marginTop: '10px' }}>Elimina</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {showMOD && (
                <div id='MODIFICA'>
                    <ul style={{ padding: '50px' }}>
                        {appointments.map(app => (
                            <li key={app.id} style={{ color: 'black' }}>
                                <form>
                                    <label><strong>Titolo:</strong></label>
                                    <input type='text' name='titolo' value={app.titolo} onChange={(e) => handleEditChange(e, app.id)} /> <br />
                                    <label><strong>Data:</strong></label>
                                    <input type='datetime-local' name='appointmentDate' value={new Date(app.appointmentDate).toISOString().substring(0, 16)} onChange={(e) => handleEditChange(e, app.id)} /> <br />
                                    <label><strong>Descrizione:</strong></label>
                                    <textarea name='reason' value={app.reason} onChange={(e) => handleEditChange(e, app.id)} /> <br />
                                    <label><strong>Luogo:</strong></label>
                                    <input type='text' name='location' value={app.location} onChange={(e) => handleEditChange(e, app.id)} /> <br />
                                    <label><strong>Max Persone:</strong></label>
                                    <input type='number' name='maxpp' value={app.maxpp} onChange={(e) => handleEditChange(e, app.id)} /> <br />
                                </form>
                                <button onClick={() => handleDelete(app.id)} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '10px', marginTop: '10px' }}>Elimina</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ESAME4;
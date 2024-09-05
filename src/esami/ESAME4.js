import './ESAME4.css'
import React, { useState } from 'react';


function ESAME4(){
        const [appointments, setAppointments] = useState([
            {
                id: "1",
                titolo:"Visit",
                appointmentDate: "2024-08-20T09:00:00.000Z",
                reason: "General Checkup",
                location: "Clinic A, Room 101",
                maxpp:"1"
            },
            {
                id: "2",
                titolo:"Visit",
                appointmentDate: "2024-09-10T14:30:00.000Z",
                reason: "Dental Cleaning",
                location: "Dental Clinic, Room 202",
                maxpp:"1"
            }
        ]);
        const [newAppointment, setNewAppointment] = useState({
            Titolo:"",
            appointmentDate: "",
            reason: "",
            location: "",
            maxpp:"",
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
    
    
            setError("");
    
            const newId = appointments.length + 1;
            setAppointments([...appointments, { ...newAppointment, id: newId.toString() }]);
            setNewAppointment({
                appointmentDate: "",
                reason: "",
                location: "",
                maxpp:"",
            });
        };
    
        const appointmentDate = new Date(ESAME4.appointmentDate);
        const isValidDate = !isNaN(appointmentDate); 
    
    return( 
        <div>
            <button>
                Aggiungi Evento
            </button>
            <button>
                Modifica Evento
            </button>
            <button>
                Cancella Evento
            </button>
            <button>
                Visualizza Eventi
            </button>

        </div>
    );
}
export default ESAME4; 
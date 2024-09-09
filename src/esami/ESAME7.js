import './ESAME7.css';
import React, { useState } from 'react';

function ESAME7() {
    const apiUrl = 'https://movieroles.example.com';
    const [users, setUsers] = useState([]);

    // Funzione per mostrare tutti gli utenti
    const getAllUsers = () => {
        fetch(`${apiUrl}/users`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Errore:', error));
    };

    // Funzione per filtrare gli utenti per età minima
    const getUsersByMinAge = () => {
        const minAge = document.getElementById('minAge').value;
        if (!minAge) {
            alert('Inserisci un\'età minima');
            return;
        }
        fetch(`${apiUrl}/users?minAge=${minAge}`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Errore:', error));
    };

    // Funzione per filtrare gli utenti per città
    const getUsersByCity = () => {
        const city = document.getElementById('city').value;
        if (!city) {
            alert('Inserisci una città');
            return;
        }
        fetch(`${apiUrl}/users?city=${city}`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Errore:', error));
    };

    // Funzione per filtrare gli utenti per ruolo
    const getUsersByRole = () => {
        const role = document.getElementById('role').value;
        if (!role) {
            alert('Inserisci un ruolo (actor o director)');
            return;
        }
        fetch(`${apiUrl}/users?role=${role}`)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Errore:', error));
    };

    return (
        <div>
            <h1>Lista di Attori e Registi</h1>

            <button onClick={getAllUsers}>Mostra tutti gli utenti</button>
            <button onClick={getUsersByMinAge}>Filtra per età minima</button>
            <button onClick={getUsersByCity}>Filtra per città</button>
            <button onClick={getUsersByRole}>Filtra per ruolo</button>

            <br></br>

            <label htmlFor="minAge">Età Minima:</label>
            <input type="number" id="minAge" name="minAge" />

            <label htmlFor="city">Città:</label>
            <input type="text" id="city" name="city" />

            <label htmlFor="role">Ruolo (actor/director):</label>
            <input type="text" id="role" name="role" />

            <br ></br>

            <table id="usersTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Età</th>
                        <th>Città</th>
                        <th>Ruolo</th>
                        <th>Paese</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.city}</td>
                            <td>{user.role}</td>
                            <td>{user.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ESAME7;
// Calendar.js
import './Calendar.css';
import React from 'react';

function Calendar() {
    return (
        <div className="page-wrapper">
            <div className="mac-nav">
                <div className="mac-nav-brand">
                    <img src="https://motorsport.unibo.it/wp-content/uploads/2022/12/UniBo-Logo-white.png" alt="Logo" />
                </div>
                <ul className="mac-nav-links">
                    <li>Calendario</li>
                    <li>Note</li>
                    <li>Università</li>
                </ul>
            </div>

            <div className="content">
                <div className="note">
                    <div className="tnote">
                        <h2>Maggio 2024</h2>
                    </div>
                    <p className="para">
                        Il calendario qui a destra è stato realizzato usando il sistema Grid di CSS. Al contrario, l'allineamento dell'header e dei due main è stato realizzato usando le proprietà Flex.
                    </p>
                    <ul>
                        <li>La pseudo-class <b>:hover</b> consente di modificare dello stile quando si passa il mouse sulle date.</li>
                        <li>La pseudo-class <b>:focus</b> consente di modificare lo stile quando si clicca su un elemento come un input o un bottone.</li>
                        <li>La pseudo-class <b>:active</b> serve per dare feedback all'utente che un elemento ha ricevuto un evento come un click.</li>
                    </ul>
                </div>

                <div className="calendar">
                    <div className="month">
                        <h2>Maggio</h2>
                    </div>
                    <div className="grid-container">
                        <div>Lun</div>
                        <div>Mar</div>
                        <div>Mer</div>
                        <div>Gio</div>
                        <div>Ven</div>
                        <div>Sab</div>
                        <div>Dom</div>
                    </div>
                    <div className="date-grid">
                        {Array.from({ length: 31 }, (_, i) => (
                            <button key={i + 1}>
                                <time dateTime={`2024-03-${String(i + 1).padStart(2, '0')}`}>{i + 1}</time>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
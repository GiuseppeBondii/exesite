import './ESAME6.css';
import React, { useState } from 'react';

function ESAME6() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className='navBurger'>
                <div id='logo'>
                    <div>
                        &#127817;
                    </div>
                </div>
                <div id='items'>
                    <div id='item'>
                        HOME
                    </div>
                    <div id='item'>
                        CONTACT US
                    </div>
                    <div id='item'>
                        ABOUT US
                    </div>
                </div>
                <div id='navBurger'>
                    <button onClick={toggleMenu}>
                        &#9776;
                    </button>
                </div>
            </div>

            <div className={`toggles ${isOpen ? 'active' : ''}`}>
                <div id='item'>
                    HOME
                </div>
                <div id='item'>
                    CONTACT US
                </div>
                <div id='item'>
                    ABOUT US
                </div>
            </div>
        </div>
    );
}

export default ESAME6;
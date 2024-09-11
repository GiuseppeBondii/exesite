import React from "react";
import './ESAMEESERCITAZIONE.css';

function ESAMEESERCITAZIONE() {
    const immaginiXcar = [
        require('./XsitoAppartamenti/IMG_1.JPG'),
        require('./XsitoAppartamenti/IMG_2.jpg'),
        require('./XsitoAppartamenti/IMG_3.jpg'),
        require('./XsitoAppartamenti/IMG_4.jpg'),
        require('./XsitoAppartamenti/IMG_5.jpg'),
        require('./XsitoAppartamenti/IMG_6.jpg'),
        require('./XsitoAppartamenti/IMG_7.jpeg')

    ];

    return (
        <div className="Appartamenti">
            {/* Navbar */}
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* Titolo a sinistra */}
                    <a className="navbar-brand" href="#/esami/ESAMEESERCITAZIONE">Appartamenti della Tea</a>
                    
                    {/* Burger Menu (spinto a destra con ms-auto) */}
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Link della navbar */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#/esami/ESAMEESERCITAZIONE">Dove Siamo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"href="#/esami/ESAMEESERCITAZIONE">Le Nostre Stanze</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {immaginiXcar.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {immaginiXcar.map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* ParteCards */}
            <div className="ParteCards">
                <div className="card" id="dove-siamo">
                    <div className="card-body">
                        <h5 className="card-title">Dove Siamo</h5>
                        <p className="card-text">Situati in una splendida zona centrale, a pochi minuti dalle principali attrazioni turistiche. Siamo facilmente raggiungibili sia con i mezzi pubblici che con il trasporto privato.</p>
                    </div>
                </div>
                <div className="mappa-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2805.2133622251954!2d16.020261999999995!3d41.946628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDU2JzQ3LjkiTiAxNsKwMDEnMTIuOSJF!5e1!3m2!1sit!2sit!4v1726070126527!5m2!1sit!2sit" 
                        title="Mappa della posizione"
                        width='100%'
                        height='100%'
                    allowFullScreen="" 
                    loading="lazy" 
                    >     
                    </iframe>
                </div>
                <div class="cardIMG">
                    <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={require('./XsitoAppartamenti/IMG_8.jpeg')} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={require('./XsitoAppartamenti/IMG_9.jpg')} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={require('./XsitoAppartamenti/IMG_10.jpg')} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                <div className="card" id="stanze">
                    <div className="card-body">
                        <h5 className="card-title">Le nostre stanze</h5>
                        <h6 className="card-subtitle mb-2">Descrizione</h6>
                        <p className="card-text">Ogni appartamento è dotato di tutte le comodità necessarie, inclusi Wi-Fi gratuito, piano cucina, TV, e climatizzazione.</p>
                        <h6 className="card-subtitle mb-2">Tariffe</h6>
                        <p className="card-text">A partire da 000€ a notte, con offerte speciali per soggiorni prolungati.</p>
                        <h6 className="card-subtitle mb-2">Servizi Offerti</h6>
                        <ul className="list-unstyled">
                            <li>Servizio 1</li>
                            <li>Servizio 2</li>
                            <li>Servizio 3</li>
                        </ul>
                    </div>
                </div>
            </div>
            

            {/* Footer */}
            <footer className="bg-light text-dark py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Contatti</h5>
                            <p>Email: info@appartamenti.it</p>
                            <p>Telefono: +39 123 456 789</p>
                            <p>Indirizzo: Via Roma 123, 00100 Roma, Italia</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Social</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!" className="text-dark">Facebook</a></li>
                                <li><a href="#!" className="text-dark">Instagram</a></li>
                                <li><a href="#!" className="text-dark">Twitter</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Stagione</h5>
                            <p>Giugno</p>
                            <p>Luglio</p>
                            <p>Agostoo</p>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <p>&copy; {new Date().getFullYear()} Appartamenti della Tea. Tutti i diritti riservati.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ESAMEESERCITAZIONE;
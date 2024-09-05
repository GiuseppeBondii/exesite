import './Boot.css'
import React from 'react';

function Boot(){
    return( 
        <body>
            <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="./Home">Navbar a scelta</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="./Tabella">Tabella</a>
                    <a class="nav-link" href="./Immagine">Immagine</a>
                    <a class="nav-link" href="./Calendar">Calendar</a>
                    <a class="nav-link disabled" aria-disabled="true" href="./" >qui</a>
                </div>
                </div>
            </div>
            </nav>
            <div class="container text-center">
            <div class="row align-items-start">
                <div class="col">
                <img src='https://dummyimage.com/700x500/2c32e8/ff00bf.jpg&text=IMMAGINE' alt='immagine'></img>
                </div>
            </div>
            </div>
            <div class="container text-center">
                    <div class="row">
                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                    <div class="p-3 border bg-light">Colonna 1</div>
                </div>
                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                    <div class="p-3 border bg-light">Colonna 2</div>
                </div>
                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                    <div class="p-3 border bg-light">Colonna 3</div>
                </div>
                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                    <div class="p-3 border bg-light">Colonna 4</div>
                </div>
                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                    <div class="p-3 border bg-light">Colonna 5</div>
                </div>
                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                    <div class="p-3 border bg-light">Colonna 6</div>
                </div>
                </div>
           
           
           
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                <img src="https://sfondo.info/i/original/3/5/8/37241.jpg" class="card-img-top" alt="imag"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://sfondo.info/i/original/5/0/e/12051.jpg" class="card-img-top" alt="imag"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://i0.wp.com/sfondo.info/i/original/2/3/6/77696.jpg" class="card-img-top" alt="imag"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/12/2015/12/vacanze-in-montagna-in-veneto.jpg" class="card-img-top" alt="imag"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            </div>
            <div class="card" style={{backgroundColor:'red'}}>
            <div class="card-header">
                FOOTER
            </div>
            <div class="card-body" >
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
            
        </body>
    );
    }
    export default Boot;
import React from 'react'
import Logo from 'svg/Logo'
import './footer.css'
export default function index() {
    return (
        <footer className="footer">
            <section>
                <div className="footer_grid-70">
                    <div className="footer_grid_logo">
                        <Logo width="100" height="32"/>
                    </div>
                    <p>Descargar Ahora</p>
                    <div className="footer_grid_links">
                        <a href>Sobre Treinta</a>
                        <a href> Funcionalidades </a>
                        <a href>Guia de Uso</a>
                        <a href>Blog</a>
                        <a href>Terminos y condicones</a>
                    </div>
                    <p><strong>© 2020 Ricardo Bermudez. All rights reserved</strong></p>
                </div>
                <div className="footer_grid_30">
                    <p><strong>Disponibles en:</strong></p>
                    <div className="download">
                        <img src="./AppStoreBadge.png" alt="App store Apple"/>
                    </div>
                    <div className="download">
                        <img src="./googleplay.png" alt="Descarga en googleplay" />
                    </div>
                </div>
            </section>
        </footer>
    )
}

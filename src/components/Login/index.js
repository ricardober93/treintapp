import React from 'react'
import Logo from 'svg/Logo'
import './login.css'
export default function Login() {
    return (
        <section className="login">
            <div className="login_container-60">
                <div className="login_container_grid">
                <figure  className="login_logo">
                    <Logo/>
                    </figure>
                    <h1>
                        ¡Simplifica tu negocio!
                    </h1>
                </div>
                <section className="login_container_button">
                    <button className="login_button" >Inicia Sesión</button>
                </section>
                <div className="login_image">
                    <img src="./Imagen_Treinta_1.png" alt=""/>
                </div>
            </div>
            <div className="login_container-40">
                <section className="login_form">
                    <form className="login_form_content">
                        <h3>Bienvenido!</h3>
                        <h1>Entra a Treinta</h1>
                        <p>Miles de Micros y pequeñas empresas confian en Treinta</p>
                        <div className="login_form_group">
                            <label>Correo Electronico</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className="login_form_group">
                            <label>Password</label>
                            <input type="password" name="" id=""/>
                        </div>
                        <div className="login_form_group">
                            <button className="login_button_iniciar" >Iniciar Sesión</button>
                        </div>
                        <span>o continuar con</span>
                        <div className="login_form_group">
                            <button className="login_button_google" >Iniciar con Google</button>
                        </div>
                         <div className="form_bottom">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi dui sit tellus, eget pretium dui.</p>
                        <p>¿No tienes cuenta? <strong className="strong"> Registrate </strong> </p>
                    </div>
                    </form>
                </section>
            </div>  
        </section>
    )
}

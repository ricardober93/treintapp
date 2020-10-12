import React from 'react'
import Logo from 'svg/Logo'
import './register.css'
export default function Register() {
    return (
       <section className="register">
            <div className="register_container-60">
                <div className="register_container_grid">
                <figure  className="register_logo">
                    <Logo/>
                    </figure>
                    <h1>
                        ¡Simplifica tu negocio!
                    </h1>
                </div>
                <section className="register_container_button">
                    <button className="register_button" >Unete</button>
                </section>
                <div className="register_image">
                    <img src="./Imagen_Treinta_1.png" alt=""/>
                </div>
            </div>
            <div className="register_container-40">
                <section className="register_form">
                    <form className="register_form_content">
                        <h3>Bienvenido!</h3>
                        <h1>Unete a Treinta</h1>
                        <p>Miles de Micros y pequeñas empresas confian en Treinta</p>
                        <div className="register_form_group">
                            <label>Nombre Completo</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className="register_form_group">
                            <label>Correo Electronico </label>
                            <input type="password" name="" id=""/>
                        </div>
                        <div className="register_form_group">
                            <label>Contraseña</label>
                            <input type="password" name="" id=""/>
                        </div>
                        <div className="register_form_group">
                            <label>Confirmar Contraseña</label>
                            <input type="password" name="" id=""/>
                        </div>
                        <div className="register_form_group">
                            <button className="register_button_iniciar" >Iniciar Sesión</button>
                        </div>
                         <div className="form_bottom">
                        <p>¿Tienes cuenta? <strong className="strong"> Inicia Sesión </strong> </p>
                    </div>
                    </form>
                </section>
            </div>  
        </section>
    )
}

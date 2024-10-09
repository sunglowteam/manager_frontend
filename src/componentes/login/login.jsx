import React, {useState} from "react";
import './login.css'
import { FaUser, FaLock } from "react-icons/fa6";
import Registro from "./registro";

const Login = () =>{

    const[showRegister, setShowRegister]=useState(false);

    const toggleForm = () => {
        setShowRegister(!showRegister);
    }

    if(showRegister){
        return <Registro />
    }

    return(
        <div  className="contenedor-form">
            <form action="">
                <h1>Iniciar sesion</h1>

                <div className="contenedor-input">
                    <input id="username" type="text" placeholder="Usuario" required/>
                    <FaUser className="icon" />
                </div>

                <div className="contenedor-input">
                    <input id="password" type="password" placeholder="Contraseña" required/>
                    <FaLock className="icon"/>
                </div>

                <div className="contenedor-mensaje">
                    <p id="message"></p>
                </div>

                <button type="submit">Ingresar</button>

                <div className="contenedor-registro">
                    <p>¿No tienes cuenta?</p>
                    <a href="#" onClick={toggleForm}>Crea una cuenta</a>
                </div>
            </form>
        </div>
    )
}

export default Login;
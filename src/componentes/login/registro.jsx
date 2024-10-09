import React, {useState} from 'react'
import { FaUser, FaLock} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Login from './login';


const Registro = () =>{

  const[showLogin, setShowLogin]=useState(false);

  const toggleForm = () => {
      setShowLogin(!showLogin);
  }

  if(showLogin){
      return <Login />
  }

  return (
    <div className='contenedor-form'>
        <h1>Registro</h1>
        <div className='contenedor-input'>
            <input id='username' type="text" placeholder="Nombre de usuario" required/>
            <FaUser className="icon" />
        </div>

        <div className='contenedor-input'>
            <input id='email' type="text" placeholder="Correo electronico" required/>
            <IoMail className="icon" />
        </div>

        <div className='contenedor-input'>
            <input id='password' type="password" placeholder="Contraseña" required/>
            <FaLock className="icon" />
        </div>

        <div className="contenedor-mensaje">
          <p id="message"></p>
        </div>

        <button type='submit'>Registrar</button>

        <div className="contenedor-registro">
          <p>¿Ya tienes cuenta?</p>
          <a href="#" onClick={toggleForm}>Inicia sesion</a>
        </div>
    </div>
  )
}

export default Registro

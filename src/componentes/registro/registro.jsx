import React, { useState } from 'react'
import { FaUser, FaLock } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Login from '../login/login';


const Registro = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const messageDiv = document.getElementById('message');

  const [showLogin, setShowLogin] = useState(false);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  }

  if (showLogin) {
    return <Login />
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        messageDiv.style.color = 'green';
        setMessage('Registro exitoso');

      } else {
        setMessage(data.message || 'Error al registrar');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor');
    }
  };


  return (
    <form onSubmit={handleRegister} className='contenedor-form'>
      <h1>Registro</h1>

      <div className='contenedor-input'>
        <input id='name' type="text" placeholder="Su nombre" value={name} onChange={(e) => setName(e.target.value)} required />
        <FaUser className="icon" />
      </div>

      <div className='contenedor-input'>
        <input id='username' type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <FaUser className="icon" />
      </div>

      <div className='contenedor-input'>
        <input id='email' type="text" placeholder="Correo electronico" value={email}
                onChange={(e) => setEmail(e.target.value)} required />
        <IoMail className="icon" />
      </div>

      <div className='contenedor-input'>
        <input id='password' type="password" placeholder="Contraseña" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
        <FaLock className="icon" />
      </div>

      <div className="contenedor-mensaje">
        <p id="message">{message}</p>
      </div>

      <button type='submit'>Registrar</button>

      <div className="contenedor-registro">
        <p>¿Ya tienes cuenta?</p>
        <a href="#" onClick={toggleForm}>Inicia sesion</a>
      </div>
    </form>
  )
}

export default Registro

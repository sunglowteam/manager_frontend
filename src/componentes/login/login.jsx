import React, { useState } from "react";
import './login.css'
import { FaUser, FaLock } from "react-icons/fa6";
import Registro from "../registro/registro";

const Login = () => {

    const [showRegister, setShowRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const messageDiv = document.getElementById('message');

    const toggleForm = () => {
        setShowRegister(!showRegister);
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                setMessage('Inicio de sesión exitoso');
                messageDiv.style.color = 'green';
            } else {
                setMessage(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            setMessage('Error al conectar con el servidor');
        }
    };

    if (showRegister) {
        return <Registro />
    }

    return (
        <div className="contenedor-form">
            <form action="" onSubmit={handleLogin}>
                <h1>Iniciar sesion</h1>

                <div className="contenedor-input">
                    <input id="username" type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className="icon" />
                </div>

                <div className="contenedor-input">
                    <input id="password" type="password" placeholder="Contraseña" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>

                <div className="contenedor-mensaje">
                    <p id="message">{message}</p>
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
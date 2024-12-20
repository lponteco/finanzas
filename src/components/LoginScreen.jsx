import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados para los mensajes de error
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Obtener la función de navegación
  const navigate = useNavigate();

  // Función para validar el correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Por favor, ingrese un correo electrónico válido.');
    } else {
      setEmailError('');
    }
  };

  // Función para validar la contraseña
  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
    } else {
      setPasswordError('');
    }
  };

  // Función para manejar el cambio en el correo electrónico
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value); // Validación en tiempo real
  };

  // Función para manejar el cambio en la contraseña
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value); // Validación en tiempo real
  };

  // Función de validación y envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe por defecto

    // Limpiar cualquier mensaje de error previo
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    // Validación del correo electrónico (si no se ha hecho en tiempo real)
    if (!emailError && !email) {
      setEmailError('Por favor, ingrese un correo electrónico.');
      isValid = false;
    }

    // Validación de la contraseña
    if (!passwordError && password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      isValid = false;
    }

    // Si todo es válido, redirigir
    if (isValid) {
      alert('Inicio de sesión exitoso');
      navigate('/dashboard');  // Redirige a la página de inicio (por ejemplo, dashboard)
    }
  };

  return (
    <main>
      <div className="register-container">
        <h2>Iniciar sesión</h2>

        <div className="login-cuenta">
          <p>¿No tienes una cuenta? <a href="/register">¡Regístrate aquí!</a></p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* Campo de correo electrónico */}
          <div className="input-container">
            <input
              type="email"
              placeholder="Dirección de correo electrónico"
              value={email}
              onChange={handleEmailChange}  // Actualiza el estado del email y valida en tiempo real
            />
            {/* Verifica si hay un mensaje de error para el email */}
            {emailError && <p className="error-message">{emailError}</p>} 
          </div>

          {/* Campo de contraseña */}
          <div className="input-container">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}  // Actualiza el estado de la contraseña y valida en tiempo real
            />
            {/* Verifica si hay un mensaje de error para la contraseña */}
            {passwordError && <p className="error-message">{passwordError}</p>} 
          </div>

          <button type="submit" className="submit-btn">Entrar</button>
        </form>

        <div className="social-login">
          <p>...o a través de</p>
          <button className="social-btn facebook-btn">Facebook</button>
          <button className="social-btn google-btn">Google</button>
          <button className="social-btn apple-btn">Apple</button>
        </div>
      </div>
    </main>
  );
}

export default LoginScreen;





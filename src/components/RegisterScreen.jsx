import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterScreen() {
  // Estados para los valores de los campos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Estados para los mensajes de error
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

  // Función para validar la confirmación de la contraseña
  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden.');
    } else {
      setConfirmPasswordError('');
    }
  };

  // Función para manejar los cambios en los campos
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
    validateConfirmPassword(value, confirmPassword); // Verifica si las contraseñas coinciden
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(password, value); // Verifica si las contraseñas coinciden
  };

  // Función de validación y envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe por defecto

    // Limpiar cualquier mensaje de error previo
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Si todo es válido, procesamos el registro
    if (!emailError && !passwordError && !confirmPasswordError) {
      alert('Formulario enviado correctamente');
      // Aquí deberías enviar los datos al servidor, o realizar alguna acción posterior.

      // Redirigir al login después de un registro exitoso
      navigate('/login');  // Redirige a la página de login
    }
  };

  return (
    <main>
      <div className="register-container">
        <h2>Registrarse</h2>
        <div className="login-cuenta">
          <p>¿Tienes una cuenta? <a href="/login">¡Inicia sesión aquí!</a></p>
        </div>
        <h3>Sino te invitamos a registrarte:</h3>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* Campo de correo electrónico */}
          <div className="input-container">
            <input 
              type="email" 
              placeholder="Dirección de correo electrónico" 
              value={email}
              onChange={handleEmailChange}
              required
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
              onChange={handlePasswordChange}
              required
            />
            {/* Verifica si hay un mensaje de error para la contraseña */}
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>

          {/* Campo de confirmación de contraseña */}
          <div className="input-container">
            <input 
              type="password" 
              placeholder="Confirmar contraseña" 
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {/* Verifica si hay un mensaje de error para la confirmación de contraseña */}
            {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
          </div>

          <button type="submit" className="submit-btn">¡Me quiero registrar en ByteWise!</button>
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

export default RegisterScreen;




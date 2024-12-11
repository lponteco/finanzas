function RegisterScreen() {
    return (

        <main>

<div className="register-container">
           <h1>Registrarse</h1>
      
           <div className="login-cuenta">

           <p>¿Tienes una cuenta? <a href="/login">¡Inicia sesión aquí!</a></p>

           </div>

           <h3>Sino te invitamos a registrarte:</h3>
            <form className="register-form">
                <input type="email" placeholder="Dirección de correo electrónico" required />
                <input type="password" placeholder="Contraseña" required />
                <input type="password" placeholder="Confirmar contraseña" required />
                <button type="submit" className="submit-btn">Si! Me quiero registrar en ByteWise</button>
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

  export default RegisterScreen
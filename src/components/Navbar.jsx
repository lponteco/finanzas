import { Link } from "react-router-dom";
import logo from '../img/color-bw-03.svg';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Cargar el tema desde localStorage cuando el componente se monte
    useEffect(() => {
        const savedTheme = localStorage.getItem('dark-mode');
        if (savedTheme === 'enabled') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        } else {
            setIsDarkMode(false);
            document.body.classList.remove('dark-mode');
        }
    }, []);

    // Guardar la preferencia del tema en localStorage y aplicar la clase correspondiente
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        const body = document.body;
        body.classList.toggle('dark-mode');

        // Guardar la preferencia en localStorage
        const newMode = body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
        localStorage.setItem('dark-mode', newMode);
    };

    return (
        <header>
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/register">Registro</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/transacciones">Transacciones</Link></li>
                    <li><Link to="/tareas-habitos">Tareas</Link></li>

                    <button id="dark-mode-toggle" className="theme-toggle" onClick={toggleTheme}>
                        {/* Cambia el ícono dependiendo del tema */}
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;




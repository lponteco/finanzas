import { Link } from "react-router-dom";
import logo from '../img/color-bw-03.svg';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Cargar el tema desde localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    // Guardar el tema en localStorage y cambiar la clase de tema
    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Alternar entre modo claro y oscuro
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
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

                    <button className="theme-toggle" onClick={toggleTheme}>
                    {/* Cambia el ícono dependiendo del tema */}
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
                </ul>

            </nav>
        </header>
    );
};

export default Navbar;



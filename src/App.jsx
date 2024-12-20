import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import Transacciones from './components/Transacciones';
import TareasHabitos from './components/TareasHabitos';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './App.css';
import Navbar  from './components/Navbar';
import Footer from './components/Footer';
import LoginScreen from './components/LoginScreen'

function App() {
  const WIP_MESSAGE = "Página aún en construcción...";
  const ERROR_MESSAGE = "¡UPS! Esa página no existe...";

  return (
    <>
      <BrowserRouter>

<Navbar/>
        <main>
          <Routes>
            {/* Página principal cuando el usuario está logueado */}
            <Route path="/" element={<HomeScreen user={{ name: "Lu" }} />} />

            <Route path="/login" element={<LoginScreen />} />

            {/* Secciones disponibles desde HomeScreen */}
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transacciones" element={<Transacciones />} />
            <Route path="/tareas-habitos" element={<TareasHabitos />} />

            {/* Página en construcción */}
            <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
          </Routes>
        </main>

   <Footer/>
   
      </BrowserRouter>
    </>
  );
}

export default App;
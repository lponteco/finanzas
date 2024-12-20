import React, { useState } from 'react';
import ResumenGeneral from './ResumenGeneral';
import MetasPresupuestos from './MetasPresupuestos';
import AlertasRecomendaciones from './AlertasRecomendaciones';

function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);

  // Función para mostrar el popup
  const showAlertPopup = () => {
    setShowPopup(true);
  };

  // Función para cerrar el popup
  const closeAlertPopup = () => {
    setShowPopup(false);
  };

  return (
    <main>
      <div className="dashboard-container">
        <h1>Dashboard Financiero</h1>

        <div className="dashboard-cosas">
          {/* Resumen General - Izquierda */}
          <section style={{ flex: 2 }}>
            <h2>Resumen General</h2>
            <ResumenGeneral />
          </section>

          {/* Metas y Presupuestos - Derecha */}
          <section className="metas2" style={{ flex: 1 }}>
            <h2>Metas y Presupuestos</h2>
            <MetasPresupuestos />
          </section>
        </div>

        {/* Botón para mostrar el popup de alertas */}
        <div className="alertas-btn-container">
          <button onClick={showAlertPopup}>Ver Alertas y Recomendaciones</button>
        </div>

        {/* Alertas y Recomendaciones - Popup */}
        {showPopup && (
          <div className="alertas-popup active">
            <h2 className='alertaz'>Alertas y Recomendaciones</h2>
            <AlertasRecomendaciones />
            <button className="close-btn" onClick={closeAlertPopup}>Cerrar</button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Dashboard;


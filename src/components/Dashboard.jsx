import React from 'react';
import ResumenGeneral from './ResumenGeneral';
import MetasPresupuestos from './MetasPresupuestos';
import AlertasRecomendaciones from './AlertasRecomendaciones';

function Dashboard() {
    return (
        <main>
            <div className="dashboard-container">
                <h1>Dashboard Financiero</h1>

                <div className='dashboard-cosas'>

                <section>
                    <h2>Resumen General</h2>
                    <ResumenGeneral />
                </section>

                <section>
                    <h2>Metas y Presupuestos</h2>
                    <MetasPresupuestos />
                </section>

                <section >
                    <h2>Alertas y Recomendaciones</h2>
                    <AlertasRecomendaciones />
                </section>

                </div>


            </div>

        </main>

    );
}

export default Dashboard;
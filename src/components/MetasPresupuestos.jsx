import React, { useState } from 'react';

function MetasPresupuestos() {
    // Estado con metas de ejemplo
    const [metas, setMetas] = useState([
        { id: 1, nombre: 'Ahorro para vacaciones', monto: 2000, completado: false },
        { id: 2, nombre: 'Pago de tarjeta de crédito', monto: 500, completado: true }
    ]);

    // Estado para la edición
    const [editarMetaId, setEditarMetaId] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoMonto, setNuevoMonto] = useState('');

    // Estado para agregar nueva meta
    const [nombreMeta, setNombreMeta] = useState('');
    const [montoMeta, setMontoMeta] = useState('');

    // Función para marcar una meta como completada
    const toggleCompletada = (id) => {
        setMetas(metas.map(meta =>
            meta.id === id ? { ...meta, completado: !meta.completado } : meta
        ));
    };

    // Función para agregar una nueva meta
    const agregarMeta = () => {
        if (!nombreMeta || !montoMeta) {
            alert("Por favor, complete ambos campos");
            return;
        }

        const nuevaMeta = {
            id: metas.length + 1,
            nombre: nombreMeta,
            monto: parseFloat(montoMeta),
            completado: false
        };

        setMetas([...metas, nuevaMeta]);

        // Limpiar los campos del formulario
        setNombreMeta('');
        setMontoMeta('');
    };

    // Función para eliminar una meta por ID
    const eliminarMeta = (id) => {
        setMetas(metas.filter(meta => meta.id !== id));
    };

    // Función para iniciar la edición de una meta
    const editarMetaHandler = (meta) => {
        setEditarMetaId(meta.id);
        setNuevoNombre(meta.nombre);
        setNuevoMonto(meta.monto);
    };

    // Función para guardar la meta editada
    const guardarEdicion = () => {
        setMetas(metas.map(meta =>
            meta.id === editarMetaId ? { ...meta, nombre: nuevoNombre, monto: nuevoMonto } : meta
        ));
        // Limpiar los campos de edición
        setEditarMetaId(null);
        setNuevoNombre('');
        setNuevoMonto('');
    };

    return (
        <div className='metaspresupuestos'>
            <h3>Metas Activas</h3>

            <div className='metas'>
                <ul>
                    {metas.map(meta => (
                        <li key={meta.id}>
                            {editarMetaId === meta.id ? (
                                <div>
                                    {/* Campos de edición para nombre y monto */}
                                    <input
                                        type="text"
                                        value={nuevoNombre}
                                        onChange={(e) => setNuevoNombre(e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        value={nuevoMonto}
                                        onChange={(e) => setNuevoMonto(e.target.value)}
                                    />
                                    <button onClick={guardarEdicion}>Guardar</button>
                                </div>
                            ) : (
                                <div>
                                    <span style={{ textDecoration: meta.completado ? 'line-through' : 'none' }}>
                                        {meta.nombre} - ${meta.monto}
                                    </span>

                                    {/* Botones para cambiar el estado de completada, editar y eliminar */}
                                    <button onClick={() => toggleCompletada(meta.id)}>
                                        {meta.completado ? 'Reactivar' : 'Completar'}
                                    </button>
                                    <button onClick={() => editarMetaHandler(meta)}>Editar</button>
                                    <button onClick={() => eliminarMeta(meta.id)}>Eliminar</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='nueva-meta'>
                <h3>Agregar Nueva Meta</h3>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre de la meta"
                        value={nombreMeta}
                        onChange={(e) => setNombreMeta(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Monto"
                        value={montoMeta}
                        onChange={(e) => setMontoMeta(e.target.value)}
                    />
                    <button onClick={agregarMeta}>Agregar Meta</button>
                </div>
            </div>
        </div>
    );
}

export default MetasPresupuestos;
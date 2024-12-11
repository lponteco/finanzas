import React, { useState } from 'react';

function Transacciones() {
    // Estado inicial con algunas transacciones de ejemplo
    const [transacciones, setTransacciones] = useState([
        { id: 1, descripcion: 'Pago de alquiler', monto: -500, completada: false },
        { id: 2, descripcion: 'Sueldo', monto: 1500, completada: false },
        { id: 3, descripcion: 'Compra supermercado', monto: -200, completada: false },
    ]);

    // Estado para los inputs de nueva transacción
    const [nuevaDescripcion, setNuevaDescripcion] = useState('');
    const [nuevoMonto, setNuevoMonto] = useState('');

    // Estado para edición de una transacción
    const [editandoTransaccion, setEditandoTransaccion] = useState(null);
    const [descripcionEditada, setDescripcionEditada] = useState('');
    const [montoEditado, setMontoEditado] = useState('');

    // Función para agregar una nueva transacción
    const agregarTransaccion = (e) => {
        e.preventDefault();
        const nuevaTransaccion = {
            id: transacciones.length + 1, 
            descripcion: nuevaDescripcion, 
            monto: parseFloat(nuevoMonto),
            completada: false,
        };
        setTransacciones([...transacciones, nuevaTransaccion]);
        setNuevaDescripcion('');
        setNuevoMonto('');
    };

    // Función para eliminar una transacción por ID
    const eliminarTransaccion = (id) => {
        setTransacciones(transacciones.filter(transaccion => transaccion.id !== id));
    };

    // Función para marcar una transacción como completada
    const toggleCompletada = (id) => {
        setTransacciones(transacciones.map(transaccion => 
            transaccion.id === id ? { ...transaccion, completada: !transaccion.completada } : transaccion
        ));
    };

    // Función para editar una transacción
    const editarTransaccionHandler = (transaccion) => {
        setEditandoTransaccion(transaccion.id);
        setDescripcionEditada(transaccion.descripcion);
        setMontoEditado(transaccion.monto);
    };

    // Función para guardar los cambios en la transacción editada
    const guardarEdicion = (id) => {
        setTransacciones(transacciones.map(transaccion =>
            transaccion.id === id ? { ...transaccion, descripcion: descripcionEditada, monto: montoEditado } : transaccion
        ));
        setEditandoTransaccion(null);
        setDescripcionEditada('');
        setMontoEditado('');
    };

    return (
        <main>
            <div className="transacciones-container">
                <h1>Gestión de Transacciones</h1>
                
                <h3>Listado de Transacciones</h3>

                <div className="transacciones">
                    <ul>
                        {transacciones.map(transaccion => (
                            <li key={transaccion.id}>
                                {editandoTransaccion === transaccion.id ? (
                                    <div>
                                        <input 
                                            type="text" 
                                            value={descripcionEditada} 
                                            onChange={(e) => setDescripcionEditada(e.target.value)} 
                                        />
                                        <input 
                                            type="number" 
                                            value={montoEditado} 
                                            onChange={(e) => setMontoEditado(e.target.value)} 
                                        />
                                        <button onClick={() => guardarEdicion(transaccion.id)}>Guardar</button>
                                    </div>
                                ) : (
                                    <div>
                                        <span style={{ textDecoration: transaccion.completada ? 'line-through' : 'none' }}>
                                            {transaccion.descripcion} - ${transaccion.monto}
                                        </span>

                                        <button onClick={() => toggleCompletada(transaccion.id)}>
                                            {transaccion.completada ? "Reactivar" : "Completar"}
                                        </button>
                                        <button onClick={() => editarTransaccionHandler(transaccion)}>Editar</button>
                                        <button onClick={() => eliminarTransaccion(transaccion.id)}>Eliminar</button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="agregar-transaccion">
                    <h3>Agregar Nueva Transacción</h3>
                    <form onSubmit={agregarTransaccion}>
                        <input 
                            type="text" 
                            placeholder="Descripción" 
                            value={nuevaDescripcion} 
                            onChange={(e) => setNuevaDescripcion(e.target.value)} 
                            required 
                        />
                        <input 
                            type="number" 
                            placeholder="Monto" 
                            value={nuevoMonto} 
                            onChange={(e) => setNuevoMonto(e.target.value)} 
                            required 
                        />
                        <button type="submit">Agregar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Transacciones;
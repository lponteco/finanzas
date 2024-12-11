import React, { useState } from 'react';

function TareasHabitos() {
    // Estado inicial con algunas tareas de ejemplo
    const [tareas, setTareas] = useState([
        { id: 1, descripcion: 'Ir a entrenar', completada: false },
        { id: 2, descripcion: 'Comprar comida', completada: true },
        { id: 3, descripcion: 'Tejer', completada: false },
    ]);

    // Estado para los inputs de nueva tarea y edición
    const [nuevaTarea, setNuevaTarea] = useState('');
    const [editarTarea, setEditarTarea] = useState(null); // Tarea que estamos editando
    const [descripcionEditada, setDescripcionEditada] = useState('');

    // Función para agregar una nueva tarea
    const agregarTarea = (e) => {
        e.preventDefault();
        const tarea = {
            id: tareas.length + 1,
            descripcion: nuevaTarea,
            completada: false
        };
        setTareas([...tareas, tarea]);
        setNuevaTarea('');
    };

    // Función para eliminar una tarea por ID
    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    // Función para marcar una tarea como completada
    const toggleCompletada = (id) => {
        setTareas(tareas.map(tarea => 
            tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        ));
    };

    // Función para iniciar la edición de una tarea
    const editarTareaHandler = (tarea) => {
        setEditarTarea(tarea.id);
        setDescripcionEditada(tarea.descripcion);
    };

    // Función para guardar la tarea editada
    const guardarEdicion = (id) => {
        setTareas(tareas.map(tarea =>
            tarea.id === id ? { ...tarea, descripcion: descripcionEditada } : tarea
        ));
        setEditarTarea(null);
        setDescripcionEditada('');
    };

    return (
        <main>
                    <div className='tareas-container'>
            <h1>Gestión de Tareas y Hábitos</h1>

            <h3>Lista de Tareas</h3>
            <div className='tareas'>
            <ul>
                {tareas.map(tarea => (
                    <li key={tarea.id}>
                        {editarTarea === tarea.id ? (
                            <div>
                                <input 
                                    type="text" 
                                    value={descripcionEditada} 
                                    onChange={(e) => setDescripcionEditada(e.target.value)} 
                                    required 
                                />
                                <button onClick={() => guardarEdicion(tarea.id)}>Guardar</button>
                                <button onClick={() => setEditarTarea(null)}>Cancelar</button>
                            </div>
                        ) : (
                            <div>
                                <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                                    {tarea.descripcion}
                                </span>

                                {/* <div className='botones-tareas'> */}
                                    
                                <button onClick={() => toggleCompletada(tarea.id)}>
                                    {tarea.completada ? 'Desmarcar' : 'Completar'}
                                </button>
                                <button onClick={() => editarTareaHandler(tarea)}>Editar</button>


                                <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>

                                {/* </div> */}


                            </div>
                        )}
                    </li>
                ))}
            </ul>

            </div>

            <div className='agregar-tarea'>
            <h3>Agregar Nueva Tarea</h3>
            <form onSubmit={agregarTarea}>
                <input 
                    type="text" 
                    placeholder="Descripción de la tarea" 
                    value={nuevaTarea} 
                    onChange={(e) => setNuevaTarea(e.target.value)} 
                    required 
                />
                <button type="submit">Agregar</button>
            </form>

            </div>

        </div>

        </main>

    );
}

export default TareasHabitos;
import React from "react";
import BotonDinamico from "../botondinamico/botondinamico"; // Importar BotonDinamico

export const ListaTareas = ({ tareas, eliminarTarea, marcarCompletada }) => {

  // Maneja el cambio del estado de completada al hacer clic en el checkbox
  const handleCheckboxChange = (tarea) => {
    marcarCompletada(tarea); // Llama a la función marcarCompletada pasada por props
  };

  return (
    <section>
      <header>
        <h1>Lista de Tareas</h1>
        <p>Muestra todas las tareas y permite marcarlas como completadas o eliminarlas</p>
      </header>

      {/* Lista de tareas */}
      <ul>
        {tareas.length === 0 ? (
          <p>No hay tareas pendientes.</p> // Si no hay tareas, muestra este mensaje
        ) : (
          tareas.map((tarea, index) => (
            <li key={index} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
              {/* Texto de la tarea */}
              {tarea.texto}
              
              {/* Checkbox para marcar tarea como completada */}
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => handleCheckboxChange(tarea)}
              />
              
              {/* Botón para eliminar tarea */}
              <BotonDinamico
                color="red"
                onClick={() => eliminarTarea(tarea)}
                texto="Eliminar"
              />
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

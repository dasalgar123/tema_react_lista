import React from "react";
import BotonDinamico from "../botondinamico/botondinamico";
 // Asegúrate de importar BotonDinamico

export const ListaTareas = ({ tareas, eliminarTarea, marcarCompletada }) => {
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
            <li key={index}>
              {tarea}
              {/* Botón para eliminar tarea */}
              <BotonDinamico
                color="red"
                onClick={() => eliminarTarea(tarea)}
                texto="Eliminar"
              />
              {/* Botón para marcar tarea como completada */}
              <BotonDinamico
                color="green"
                onClick={() => marcarCompletada(tarea)}
                texto="Completada"
              />
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

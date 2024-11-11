import React, { useState } from "react";
import './styles.css';
import { AgregarTarea } from "../AgregarTareas/AgregarTareas"; // Importar el componente AgregarTarea
import { ListaTareas } from "../ListaTareas/ListaTareas"; // Importar el componente ListaTareas

export const GestionTareas = () => {
  const [tareas, setTareas] = useState([]); // Estado para almacenar las tareas

  // Función para agregar una nueva tarea
  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]); // Añade la nueva tarea al estado
  };

  // Función para eliminar una tarea
  const eliminarTarea = (tareaAEliminar) => {
    setTareas(tareas.filter(tarea => tarea !== tareaAEliminar)); // Filtra la tarea que se elimina
  };

  // Función para marcar una tarea como completada
  const marcarCompletada = (tarea) => {
    // Aquí puedes implementar la lógica de marcar como completada
    console.log(`Tarea completada: ${tarea}`);
  };

  return (
    <section className="contenedor_titulo">
      <h1 className="titulo">Gestor de Tareas</h1>
      
      {/* Componente para agregar tareas */}
      <AgregarTarea TareaAgregada={agregarTarea} /> {/* Pasa la función agregarTarea como prop */}
      
      {/* Componente para mostrar la lista de tareas */}
      <ListaTareas 
        tareas={tareas} 
        eliminarTarea={eliminarTarea} 
        marcarCompletada={marcarCompletada} 
      /> {/* Pasa las tareas y las funciones a la lista */}
    </section>
  );
};

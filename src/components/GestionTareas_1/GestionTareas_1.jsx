import React, { useState } from "react";
import './styles.css';
import { AgregarTarea } from "../AgregarTareas/AgregarTareas"; // Importar el componente AgregarTarea
import { ListaTareas } from "../ListaTareas/ListaTareas"; // Importar el componente ListaTareas

export const GestionTareas_1 = () => {
  const [tareas, setTareas] = useState([]); // Estado para almacenar las tareas

  // Función para agregar una nueva tarea
  const agregarTarea = (nuevaTarea) => {
    const tareaConEstado = {
      tarea: nuevaTarea,
      completada: false // Agregar el estado de completada a cada tarea
    };
    setTareas([...tareas, tareaConEstado]); // Añade la nueva tarea con el estado inicial
  };

  // Función para marcar una tarea como completada
  const marcarCompletada = (tarea) => {
    setTareas(tareas.map((item) => 
      item.tarea === tarea 
        ? { ...item, completada: !item.completada } // Cambiar el estado de completada
        : item
    ));
  };

  return (
    <section className="contenedor_titulo">
      <h1 className="titulo">Gestor de Tareas</h1>
      
      {/* Componente para agregar tareas */}
      <AgregarTarea TareaAgregada={agregarTarea} /> {/* Pasa la función agregarTarea como prop */}
      
      {/* Componente para mostrar la lista de tareas */}
      <ListaTareas 
        tareas={tareas} 
        marcarCompletada={marcarCompletada} 
      /> {/* Pasa las tareas y la función para marcar como completadas */}
    </section>
  );
};

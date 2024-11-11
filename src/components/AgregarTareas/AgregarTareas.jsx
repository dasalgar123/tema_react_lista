import React, { useState } from "react";
import './styles.css';

export const AgregarTarea = ({ TareaAgregada }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const CambiarTareas = (e) => {
    setNuevaTarea(e.target.value);
  };

  const TareasAgregadas = () => {
    if (nuevaTarea) {
      TareaAgregada(nuevaTarea); // Pasa la nueva tarea a la función TareaAgregada
      setNuevaTarea(""); // Limpia el input después de agregar la tarea
    } else {
      alert('Por favor ingresa una tarea.');
    }
  };

  return (
    <section>
      <header>
        <h1>Agregar Tarea</h1>
        <p>Permite al usuario agregar una nueva tarea</p>
      </header>
      <div className="sesion_agregar">
        <input 
        color="black"
          type="text" 
          placeholder="Nueva tarea" 
          value={nuevaTarea} 
          onChange={CambiarTareas} 
        />
        <button onClick={TareasAgregadas}>Agregar</button>
      </div>
    </section>
  );
};

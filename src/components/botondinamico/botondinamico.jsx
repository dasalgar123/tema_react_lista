import React from 'react';
import './styles.css'; // Cambia la referencia del CSS a BotonDinamico.css

const BotonDinamico = ({ color, onClick, texto }) => {
  // Recibe el color, la función onClick y el texto como propiedades
  return (
    <button 
      className={`btn ${color}`} 
      onClick={onClick} // Ejecuta la función onClick pasada como prop
    >
      {texto} {/* Muestra el texto que se pase al botón */}
    </button>
  );
};

export default BotonDinamico;

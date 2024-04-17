import React from 'react';
import '../style/styleBoton.css'

const Boton = ({ onClick }) => {
  return <button onClick={onClick}>Obtener los Pokemon</button>;
};

export default Boton;

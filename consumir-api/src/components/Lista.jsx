import React from 'react';
import '../style/styleLista.css'

const Lista = ({ elementos, onDelete }) => {
    return (
        <div>
            {elementos.map((elemento, index) => (
                <li key={index}>
                    {elemento.name}
                    <button onClick={() => onDelete(index)}>Eliminar</button>
                </li>
            ))}
        </div>
    );
};

export default Lista;

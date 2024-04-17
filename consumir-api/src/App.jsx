import { useState } from 'react'
import Lista from './components/Lista';
import Boton from './components/Boton';

function App() {
  const [elementos, setElementos] = useState([]);

  const buscarElementos = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de elementos');
      }
      const data = await response.json();
      setElementos(data.results);
    } catch (error) {
      console.error('Error encontrando elementos:', error);
    }
  };

  const eliminarElemento = index => {
    const actualizarElemento = [...elementos];
    actualizarElemento.splice(index, 1);
    setElementos(actualizarElemento);
  };


  return (
    <>
      <Boton onClick={buscarElementos} />
      {Array.isArray(elementos) && <Lista elementos={elementos} onDelete={eliminarElemento} />}
    </>
  )
}

export default App

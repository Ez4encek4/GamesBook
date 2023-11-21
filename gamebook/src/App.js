import React, { useEffect, useState } from 'react';

export default function App() {
    const [datos, setDatos] = useState();
    const [error, setError] = useState();
  
    useEffect(() => {
      const consultarBackend = async () => {
        try {
          // Realizar la solicitud GET al backend
          const respuesta = await fetch('http://localhost:3001/api');
  
          // Verificar si la solicitud fue exitosa (código de estado 200)
          if (respuesta.ok) {
            // Convertir la respuesta a formato JSON
            const datosJson = await respuesta.json();
            setDatos(datosJson);
          } else {
            // Manejar errores de la solicitud
            setError('Error al cargar datos del backend');
          }
        } catch (error) {
          // Manejar errores generales
          setError('Error de red');
        }
      };
  
      // Llamar a la función para realizar la consulta al cargar el componente
      consultarBackend();
    }, []); 

  return (
    <div>
      {datos && <p>Datos del backend: {JSON.stringify(datos)}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
  
}


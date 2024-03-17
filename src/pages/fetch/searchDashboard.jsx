import React, { useState } from 'react';

function DataUpdater() {
  const [endpoint, setEndpoint] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState({});
  const [updateData, setUpdateData] = useState({});
  const [message, setMessage] = useState('');

  const handleEndpointChange = (event) => {
    setEndpoint(event.target.value);
    setSearchQuery('');
    setData({});
    setUpdateData({});
    setMessage('');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleUpdateDataChange = (event) => {
    const { name, value } = event.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:9000/${endpoint}/${searchQuery}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error al buscar los datos:', error);
    }
  };

  const updateDataInDatabase = async () => {
    try {
      const response = await fetch(`http://localhost:9000/${endpoint}/${searchQuery}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });
      const responseData = await response.json();
      setMessage(responseData.message);
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };

  return (
    <div>
      <h2>Actualizar Datos</h2>
      <div>
        <label htmlFor="endpoint">Selecciona el endpoint:</label>
        <select id="endpoint" value={endpoint} onChange={handleEndpointChange}>
          <option value="">Selecciona...</option>
          <option value="blog">Blog</option>
          <option value="PriceHotel">Precio de Hotel</option>
          <option value="roomRates">Tarifas de Habitación</option>
          <option value="tituloHotel">Título de Hotel</option>
          <option value="priceCar">Precio de Coche</option>
          <option value="pickup">Recogida</option>
          <option value="parameters">Parámetros</option>
          <option value="owner">Propietario</option>
          <option value="infoKnow">Información Conocida</option>
          <option value="Description">Descripción</option>
          <option value="carousel">Carrusel</option>
        </select>
      </div>
      <div>
        <label htmlFor="search">Buscar en la base de datos:</label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          disabled={!endpoint}
        />
        <button onClick={fetchData} disabled={!endpoint}>Buscar</button>
      </div>
      {Object.keys(data).length > 0 && (
        <div>
          <h3>Datos encontrados:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <h3>Actualizar datos:</h3>
          <div>
            {Object.keys(data).map((key) => (
              <div key={key}>
                <label htmlFor={key}>{key}:</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={updateData[key] || ''}
                  onChange={handleUpdateDataChange}
                />
              </div>
            ))}
            <button onClick={updateDataInDatabase}>Actualizar</button>
            {message && <p>{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default DataUpdater;
const fetchWithSession = async (url, options = {}) => {
  // Obtener el token de sesión de la cookie
  const sessionToken = document.cookie.replace(/(?:(?:^|.*;\s*)sessionToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

  // Agregar el token de sesión al encabezado de la solicitud
  options.headers = {
    ...options.headers,
    'Authorization': `Bearer ${sessionToken}`
  };

  try {
    const response = await fetch(url, options);
    return await response.json(); // Espera la respuesta JSON
  } catch (error) {
    console.error('Error:', error);
    throw error; // Lanza el error para que se maneje en el componente que llama a fetchWithSession
  }
};

export default fetchWithSession;

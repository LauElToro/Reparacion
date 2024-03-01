// En un archivo de utilidades, por ejemplo, auth.js
export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };
  
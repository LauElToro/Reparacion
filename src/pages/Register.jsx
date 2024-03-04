import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'ref') setReferralCode(value);
    if (name === 'verification') setVerificationCode(value);
  };

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(email, referralCode);
      console.log(response); // Manejar la respuesta del registro
      setShowPopup(true); // Mostrar popup después del registro
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  const registerUser = async (email, codigoReferido) => {
    const response = await fetch('https://voyagelbackend.onrender.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, codigo_referido: codigoReferido })
    });
    return await response.json();
  };

  const verifyCode = async () => {
    try {
      const response = await fetch('https://voyagelbackend.onrender.com/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, token: verificationCode })
      });
      const data = await response.json();
    // Redirigir al usuario al formulario de inicio de sesión
    navigate("/login");
    } catch (error) {
      console.error('Error verifying code:', error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <Contenedorform>
        <div className="form">
          <form onSubmit={onRegister}>
            <h1>Register</h1>

            <div className="input">
              <label htmlFor="email">Email address:</label>
              <input
                placeholder="example@example.com"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={onInputChange}
                required
                autoComplete="off"
              />
            </div>

            <div className="input">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={onInputChange}
                required
                autoComplete="off"
              />
            </div>
            {/* Agregado el campo para repetir la contraseña */}
            <div className="input">
              <label htmlFor="password2">Repeat password:</label>
              <input
                type="password"
                name="password2"
                id="password2"
                required
                autoComplete="off"
              />
            </div>
            <div className="input">
              <label htmlFor="ref">Referred:</label>
              <input
                type="text"
                name="ref"
                placeholder="(optional)"
                value={referralCode}
                onChange={onInputChange}
              />
            </div>

            <button className="registerbutton" type="submit">Register</button>
          </form>
        </div>
        </Contenedorform>
      {showPopup && (
        <Popup ref={popupRef}>
          <PopupContent>
            <PopupTitle>Email enviado correctamente</PopupTitle>
            {/* Cambiado a un input para ingresar el código de verificación */}
            <input
              type="text"
              value={verificationCode}
              onChange={onInputChange}
              name="verification"
              placeholder="Enter verification code"
            />
            {/* Botón para enviar y hacer la petición a la API */}
            <PopupButton onClick={verifyCode}>Enviar</PopupButton>
          </PopupContent>
        </Popup>
      )}
      <Outlet />
    </>
  );
};

const Contenedorform = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f2937;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";

  h1 {
    margin-top: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 48px;
    line-height: 55px;
    font-weight: 600;
    color: #111827;
  }

  form {
    margin-top: 600px;
    width: 100%;
  }

  label {
    margin-left: 6px;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 0;
    font-weight: 500;
  }

  input {
    height: 40px;
    width: 420px;
    margin: 3px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
    &:focus {
      outline: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }

  input:focus {
  }

  .registerbutton {
    height: 50px;
    width: 420px;
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 30px;
    color: white;
    background-color: rgba(51, 60, 135, 1);
    cursor: pointer;
    font-weight: 600;
    &:hover {
      background-color: rgba(45, 55, 130, 1);
    }
  }
`;

// Styled components for Popup
const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 9999; /* Ensure the popup is above other elements */
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopupTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PopupMessage = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const PopupButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

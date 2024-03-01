import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Componente Login
const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

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
          <label htmlFor="password">
            Password:
            <a href="">Forgot Password?</a>
          </label>

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
        <button className="formbutton">Entrar</button>
        <p>
          New user? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
};

// Componente Verify
const VerifyForm = ({ onVerify }) => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(verificationCode);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Verify</h1>
        <div className="input">
          <label htmlFor="verificationCode">Verification Code:</label>
          <input
            type="text"
            id="verificationCode"
            value={verificationCode}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <button className="formbutton">Verify</button>
      </form>
    </div>
  );
};

// Componente Register
const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
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
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <button className="formbutton">Register</button>
      </form>
    </div>
  );
};

export { LoginForm, VerifyForm, RegisterForm };

import React from "react";
import { useForm } from "../hook/useForm";
import { useNavigate, Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export const LoginForm = () => {
  const navigate = useNavigate();

  const { email, password, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault();

    navigate("/dashboard", {
      replace: true,
      state: {
        logged: true,
      },
    });

    onResetForm();
  };

  return (
    <>
      <Contenedorform>
        <div className="form">
          <form onSubmit={onLogin}>
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
              New user? <Link to="/loginform/register">Create a account</Link>
            </p>
          </form>
        </div>
      </Contenedorform>
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

  p {
    display: flex;
    justify-content: center;
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

  a {
    text-decoration: none;
    color: #1f2937;
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

  .formbutton {
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

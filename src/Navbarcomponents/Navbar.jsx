import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import voyage from "../imagenes/voyage-united.png";
import { styled } from "styled-components";
import Hotel from "./Hotel";
import Space from "./Space";
import Tour from "./Tour";
import Car from "./Car";
import Event from "./Event";

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onLogout = () => {
    navigate("/loginform", {
      replace: true,
    });
  };

  const hideNavbar = state?.logged && location.pathname === "/Perfil";

  return (
    <>
      {!hideNavbar && (
        <Navcontainer>
          <header>
            <Link to="/" state={{ logged: state?.logged }}>
              <img className="imgvoyage" src={voyage} alt="" />
            </Link>
            <div className="nav-components">
              <Hotel />
              <Space />
              <Tour />
              <Car />
              <Event />
            </div>
          </header>
          {state?.logged ? (
            <div>
              <div className="buttonmenu" onClick={toggleMenu}>
                Menu
                {menuOpen && (
                  <div className="menu">
                    <Link
                      className="itemsmenu"
                      to="/Perfil"
                      state={{ logged: state?.logged }}
                    >
                      <div>Perfil</div>
                    </Link>
                    <Link
                      className="itemsmenu"
                      to="/Configuracion"
                      state={{ logged: state?.logged }}
                    >
                      <div>Configuración</div>
                    </Link>
                    <Link
                      className="itemsmenu"
                      to=""
                      state={{ logged: state?.logged }}
                    >
                      <div>Booking History</div>
                    </Link>
                    <Link
                      className="itemsmenu"
                      to=""
                      state={{ logged: state?.logged }}
                    >
                      <div>Change password</div>
                    </Link>
                    <div className="itemsmenu" onClick={onLogout}>
                      Log Out
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <nav>
              <Link to="loginform">
                <button className="navbutton">Sign Up</button>
              </Link>
            </nav>
          )}
        </Navcontainer>
      )}
      <Outlet />
    </>
  );
};

const Navcontainer = styled.div`
  display: flex;
  background-color: #fafafa;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 200;
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 890px) {
      display: flex;
      background-color: #000000; 
      padding-bottom: 30px;
      border-radius: 0px;
      width:100%;
      position: relative;


      .navbutton{
        background-color: #fafafa;
        color: #000;

      }
      
      
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-components {
    
    display: flex;
    margin-top: 30px;
    margin-left: 130px;
    > * {
      margin-right: 10px;
    }
  }

  .imgvoyage {
    height: 80px;
    margin-left: 50px ;
    margin-top:5px;
    
    border-radius: 15px;
    color: #000000;
  }

  .navbutton {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
    padding: 0.2em 0.4em;
    border-radius: 30px;
    margin-right: 20px;
    margin-left: 50px ;
    margin-top: 20px;
    width: 110px;
    weight: 500;
    color: #f9fafb;
    padding: 17px;
    background-color: #000000;
    border: none;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background-color: #efb810;
    }
  }


  .buttonmenu {
    display:flex;
    justify-content:center;
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 20px;
    line-height: 10px;
    border-radius: 30px;
    margin-right: 10px;
    width: 110px;
    weight: 500;
    color: #f9fafb;
    padding: 17px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    background-color: #efb810;
    &:hover {
    }
  }

  .menu {
    text-decoration: none;
    position: absolute;
    top:70px;
    right: 5px;
    background-color: #ffff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    min-width: 150px;
    z-index: 1;
    color:black;

    .itemsmenu {
      text-decoration: none;
      justify-content:center;
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
      font-style: normal;
      font-size: 18px;
      line-height: 14px;
      padding: 20px;
      font-weight: 500;
      cursor: pointer;
      color:#111827;
      &:hover {
        background-color: #f0f0f0;
      }
  }

  
`;

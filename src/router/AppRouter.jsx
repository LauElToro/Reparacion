import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "../Navbarcomponents/Navbar.jsx";
import {
  LoginForm,
  Dashboard,
  Register,
  HomePage,
  Perfil,
  Configuracion,
} from "../pages";
import { PrivateRoute } from "./PrivateRouter.jsx";
import Reservador from "../pages/Reservador.jsx";
import React, { useState, useEffect } from "react";
import Hotelindividual from "../pages/Hotel-individual.jsx";
import Footer from "../Bodycomponents/footer.jsx";

export const AppRouter = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 890);
  const [showNavbar, setShowNavbar] = useState(true);

  const location = useLocation();
  const isPerfil = location.pathname === "/perfil";

  const handleResize = () => {
    setIsMobile(window.innerWidth < 890);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showNavbar && (isMobile ? <Navbar /> : <Navbar />)}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/loginForm/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
              <Dashboard />
          }
        />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/reservador" element={<Reservador />} />
        <Route path="/hotelindividual" element={<Hotelindividual />} />
      </Routes>
      <Footer />
    </>
  );
};

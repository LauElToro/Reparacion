import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "../Navbarcomponents/Navbar.jsx";
import { PrivateRoute } from "./PrivateRouter.jsx";
import Reservador from "../pages/Reservador.jsx";
import React, { useState, useEffect } from "react";
import Hotelindividual from "../pages/Hotel-individual.jsx";
import Footer from "../Bodycomponents/footer.jsx";
import Chat from "../Bodycomponents/Chat.jsx";
import Blog from "../pages/blog.jsx";
import { LoginForm } from "../pages";
import { Dashboard } from "../pages";
import { RegisterForm } from "../pages";
import { HomePage } from "../pages";
import { Perfil } from "../pages";
import { Configuracion } from "../pages";

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
       <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
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
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Chat />

      <Footer />
    </>
  );
};

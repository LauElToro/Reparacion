import React from "react";
import { Link, Outlet } from "react-router-dom";
import voyage from "../imagenes/voyage-united.png";

export const Perfil = () => {
  return (
    <>
      <div>
          <img className="" src={voyage} alt="" />
      </div>
      <Outlet />
    </>
  );
};

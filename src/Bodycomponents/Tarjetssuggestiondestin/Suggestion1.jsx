import React from "react";
import casa from "../../imagenes/casa.jpeg";
import "./suggestiondestins.css";

function Suggestion1() {
  return (
    <div>
      <img className="imgdestin" src={casa} alt="" />
      <div className="text">Enjoy the great cold</div>
      <div className="propiertis">17.000 propiertis</div>
    </div>
  );
}

export default Suggestion1;

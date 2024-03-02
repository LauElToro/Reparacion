import React from "react";

import playa from "../imagenes/casaplaya.jpg"; 
import paris from "../imagenes/paris.jpg";
import jersey from "../imagenes/jersey.jpg";

import "./perfil.css";


export default function Blog(){
  return (
    <>
    
    <section className="seccion-perfil-usuario">
      
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">Blog</h3>
                <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> <h1>Title </h1> </li>
                    <li><i className="icono fas fa-phone-alt"></i><h6> Subtitle </h6></li>
                   
                    <li><i className="icono fas fa-building"></i> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum repellendus ratione officia adipisci nemo dignissimos perferendis pariatur facilis! Neque, debitis quam. Beatae cum id nam, explicabo doloribus itaque voluptates! </p> </li>
                </ul>
                
                <img className="imgblog" src={playa} alt="" />
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> <h1>Title </h1> </li>
                    <li><i className="icono fas fa-phone-alt"></i><h6> Subtitle </h6></li>
                   
                    <li><i className="icono fas fa-building"></i> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum repellendus ratione officia adipisci nemo dignissimos perferendis pariatur facilis! Neque, debitis quam. Beatae cum id nam, explicabo doloribus itaque voluptates! </p> </li>
                </ul>
                
                <img className="imgblog" src={paris} alt="" />
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                    <li><i className="icono fas fa-map-signs"></i> <h1>Title </h1> </li>
                    <li><i className="icono fas fa-phone-alt"></i><h6> Subtitle </h6></li>
                   
                    <li><i className="icono fas fa-building"></i> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum repellendus ratione officia adipisci nemo dignissimos perferendis pariatur facilis! Neque, debitis quam. Beatae cum id nam, explicabo doloribus itaque voluptates! </p>  </li>
                </ul>
                
                <img className="imgblog" src={jersey} alt="" />
            </div>
           
        </div>
    </section>
    </>

);
  
}


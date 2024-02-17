import React from 'react';
import "./perfil.css";
import voyage from "../imagenes/angeles.jpg";
import voyage2 from "../imagenes/img-hotel-individual.jpg"; 
import voyage3 from "../imagenes/explore.jpg"; 




export const Dashboard = () => {
  return (
    <section className="seccion-perfil-usuario">
        
        <div className="perfil-usuario-body">
            <div className="perfil-usuario-bio">
                <h3 className="titulo">Dashboard</h3>
                <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                <h3 className='titulo'> LOCATION</h3>
                <br />
                <img src={voyage} alt="img-avatar" className='imagen-publicacion' />
                    
                    <li><i className="icono fas fa-phone-alt"></i> Place image</li>
                </ul>
                <ul className="lista-datos">
                  <br />
                    <li><i className="icono fas fa-briefcase"></i> Available dates:</li>
                    <li><i className="icono fas fa-building"></i> Country:</li>

                    <li><i className="icono fas fa-calendar-alt"></i> Price:</li>
                    
                    
                </ul>
                <button type="button" className="boton-portada">
                    <i className="fas fa-image"></i> Edit
                </button>
                <button type="button" className="boton-portada">
                    <i className="fas fa-image"></i> Publish
                </button>
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                <h3 className='titulo'> HOTELS</h3>
                <br />
                <img src={voyage2} alt="img-avatar" className='imagen-publicacion' />
                    
                    <li><i className="icono fas fa-phone-alt"></i> Hotel image</li>
                </ul>
                <ul className="lista-datos">
                  <br />
                    <li><i className="icono fas fa-briefcase"></i> Available dates:</li>
                    <li><i className="icono fas fa-building"></i> Country:</li>

                    <li><i className="icono fas fa-calendar-alt"></i> Price:</li>
                    
                    
                </ul>
                <button type="button" className="boton-portada">
                    <i className="fas fa-image"></i> Edit
                </button>
                <button type="button" className="boton-portada">
                    <i className="fas fa-image"></i> Publish
                </button>
            </div>
            <div className="perfil-usuario-footer">
                <ul className="lista-datos">
                <h3 className='titulo'> EVENTS</h3>
                <br />
                <img src={voyage3} alt="img-avatar" className='imagen-publicacion' />
                    
                    <li><i className="icono fas fa-phone-alt"></i> Event image</li>
                </ul>
                <ul className="lista-datos">
                  <br />
                    <li><i className="icono fas fa-briefcase"></i> Available dates:</li>
                    <li><i className="icono fas fa-building"></i> Country:</li>

                    <li><i className="icono fas fa-calendar-alt"></i> Price:</li>
                    
                    
                </ul>
                <button type="button" className="boton-portada">
                    <i className="fas fa-image"></i> Edit
                </button>
                <button type="button" className="boton-portada">
                    <i className="fas fa-image"></i> Publish
                </button>
            </div>
           
        </div>
    </section>
  )
}





import "./Card-blog.css";
import playa from "../imagenes/casaplaya.jpg"; 


export default function CardBlog(){

   const titulo = "title";
   const subtitulo = 'subtitle';
   const texto = 'texto largo de muchas palabras';
   const imgBlog = playa


    return (    

        <div className="cardBlog">
              
              <div className="perfil-usuario-footer">
                  <ul className="lista-datos">
                      <li><i className="icono fas fa-map-signs"></i> <h1> {titulo} </h1> </li>
                      <li><i className="icono fas fa-phone-alt"></i><h6> {subtitulo} </h6></li>
                     
                      <li><i className="icono fas fa-building"></i> <p> {texto} </p> </li>
                  </ul>
                  
                  <img className="imgblog" src={imgBlog} alt="" />
              </div>
              
              
        </div>
      
      
  
  );
    
  }
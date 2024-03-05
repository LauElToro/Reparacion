import "../pagecar.css";
import Share from "../H. I. SVGS/Share";
import Heart from "../H. I. SVGS/Heart";
import Ubication from "../H. I. SVGS/Ubication";
import Star from "../H. I. SVGS/Star";
import silueta from "../H. i. componentes/silueta.jpg"
import Person from "../H. I. SVGS/Person";
import CarFront from "../H. I. SVGS/Car-Front";
import Bags from "../H. I. SVGS/Bags";


function Owner (){

  const TitleCar = 'Titulo y modelo auto';
  const stars = 3.8;
  const reviews = 101;
  const location = 'Buenos Aires';
  const Propiet = 'Nombre dueño';
  const Seats = 4;
  const claseAuto = 'Tipo de auto';
  const Baul = 2;


  return (

      <>
      <div className="propietario-auto">
            <div className="propietario-auto-header">
              <div className="propietario-auto-modelo">{TitleCar}</div>
              <div className="share-save">
                <div className="propietario-auto-share">
                  <div className="icon-pagecar">
                   <Share />
                  </div>
                  Share
                </div>
                <div className="propietario-auto-save">
                  <div className="icon-pagecar">
                    <Heart />
                  </div>
                  Save
                </div>
              </div>
            </div>
            <div className="puntaje-ubicacion">
              <div className="iconstar">
                <Star />
              </div>
              <div className="score-number">{stars}</div>
              <div className="subtext-carousel">({reviews})</div>
              <div className="ubicacion">
                <Ubication />{" "}
                {location}
              </div>
            </div>
            <div className="propietario-auto-body">
              <img src={silueta} alt="" className="propietario-auto-img" />
              <div className="propietario-auto-nombre">{Propiet}</div>
            </div>
            <hr className="linea" />
            <div className="propietario-auto-footer">
              <div className="items-footer">
                <div className="icon-pagecar">
                  <Person />
                </div>
                {Seats} Seats
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <CarFront />
                </div>
                {claseAuto}
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <Bags />
                </div>
                {Baul} Bags
              </div>
            </div>
          </div>
        </>
        );
     }


     export default Owner;
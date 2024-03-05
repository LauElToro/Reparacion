import silueta from "../H. i. componentes/silueta.jpg"
import Share from "../H. I. SVGS/Share";
import Heart from "../H. I. SVGS/Heart";
import Ubication from "../H. I. SVGS/Ubication";
import Star from "../H. I. SVGS/Star";
import "../hotel-individual.css";




function TituloHotel () {

    const Title = "Titulo del Hotel";
    const stars = '4.5';
    const ubicacion = 'Buenos Aires';
    const reviews = 110;
    const NombreProp = 'Nombre de propietario';
    const cantPerson = 4;
    const cantBeds = 4;
    const cantBaths = 2;






    return (
        <>

        <div className="propietario-auto">
            <div className="propietario-auto-header">
              <div className="propietario-auto-modelo">
                {Title}
              </div>
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
               <Ubication /> {" "}
                {ubicacion}
              </div>
            </div>
            <div className="propietario-auto-body">
              <img src={silueta} alt="" className="propietario-auto-img" />
              <div className="propietario-auto-nombre">{NombreProp}</div>
            </div>
            <hr className="linea" />
            <div className="propietario-auto-footer">
              <div className="items-footer">
                <div className="icon-pagecar">
                  <span className="material-icons">people_alt</span>
                </div>
                {cantPerson} people
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <i className="material-icons">bed</i>
                </div>
                Bed
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <span className="material-icons">bathtub</span>
                </div>
                {cantBaths} baths
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <span className="material-icons">meeting_room</span>
                </div>
                {cantBeds} bedrooms
              </div>
            </div>
          </div>

        </>
);
}


export default TituloHotel;
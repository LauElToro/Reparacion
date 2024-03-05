import "../pagecar.css";



function Description () {

   const carDescrip = ' Texto de la descripcion del auto y sus detalles'
   const carInfo = ' Texto de informacion extra importante'
    

    return (
        <>
            <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">Car descriptions</div>
            <hr className="linea2" />
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  {carDescrip}
                </p>
                <p>
                  {carInfo}
                </p>
              </div>
            </div>
          </div>
        </>
    );
} 

export default Description;
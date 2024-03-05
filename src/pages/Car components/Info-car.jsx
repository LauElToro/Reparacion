import "../pagecar.css";



function InfoKnow () {

  const InfoCancelPolicy = 'Texto informativo de la politica de cancelación'
  const InfoSpecial = 'Texto Escpecial de la adquisición del vehiculo'
    



    return (
        <>
          <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">Things to know</div>
            <hr className="linea2" />
            <div className="titulo-de-tarjetas-extras2">
              Cancellation policy
            </div>
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  {InfoCancelPolicy}
                </p>
              </div>
            </div>
            <hr className="linea2" />
            <div className="titulo-de-tarjetas-extras2">Special Note</div>
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  {InfoSpecial}
                </p>
              </div>
            </div>
          </div>
        </>
    );
} 

export default InfoKnow;
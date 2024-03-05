import "../pagecar.css";



function Parameters () {


    const velocidad = 'Velocidad :' + 200 + ' km/h';
    const Motor = 'Tipo de motor';
    const Audio = 'Tipo de audio';
    const Lights = 'Tipo de luces';
    const Prop1 = 'Propiedad del auto 1'
    const Prop2 = 'Propiedad del auto 2'
    const Prop3 = 'Propiedad del auto 3'
    const Prop4 = 'Propiedad del auto 4'



    return (
        <>
        <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">
              Vehicle parameters & utilities
            </div>
            <div className="parametros-del-vehiculo-subtitulo">
              Questions are at the heart of making things great.
            </div>
            <hr className="linea2" />
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-lista">
                <ul>
                  <li>· {velocidad}</li>
                  <li>· {Motor}</li>
                  <li>· {Audio}</li>
                  <li>· {Lights}</li>
                </ul>
              </div>
              <div className="parametros-del-vehiculo-lista">
                <ul>
                  <li>
                    . {Prop1}
                  </li>
                  <li>·  {Prop2}</li>
                  <li>·  {Prop3}</li>
                  <li>·  {Prop4}</li>
                </ul>
              </div>
            </div>
          </div>
        </>
    );
} 

export default Parameters;
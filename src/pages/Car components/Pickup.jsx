import "../pagecar.css";
import Circle from "../H. I. SVGS/Circle";




function Pickup () {

    const DatePick = 'Fecha para recoger el auto';
    const DateDrop = 'Fecha para devolver el auto';
    const LocationPick = 'ciudad donde recoger el auto';
    const LocationDrop = 'ciudad donde devolver el auto';

    return (
        <>
            <div className="punto-de-encuentro">
            <div className="punto-de-encuentro-header">
              Pick up and drop off
            </div>

            <div className="punto-de-encuentro-fecha-ciudad">
              <Circle />
              <div className="fecha-ciudad-contenedor">
                <div className="fecha-contenido">{DatePick}</div>
                <div className="ciudad-contenido">
                  {LocationPick}
                </div>
              </div>
            </div>
            <div className="punto-de-encuentro-fecha-ciudad">
            <Circle />
              <div className="fecha-ciudad-contenedor">
                <div className="fecha-contenido">{DateDrop}</div>
                <div className="ciudad-contenido">
                  {LocationDrop}
                </div>
              </div>
            </div>
          </div>
        </>
    );
} 

export default Pickup;
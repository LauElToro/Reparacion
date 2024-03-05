import "../hotel-individual.css";




function RoomRates () {
    const minNights = 5;
    const maxNights = 5;
    const priceMonThu = 200; 
    const priceFriSun = 250; 
    const DescMonth = 10;




    return (
        <div className="parametros-del-vehiculo">
        <div className="titulo-de-tarjetas-extras">Room Rates</div>
        <div className="parametros-del-vehiculo-subtitulo">
          Prices may increase on weekends or holidays
        </div>
        <hr className="linea2" />
        <div className="lista-room-rates">
          <div className="texto-lista">Monday - Thursday</div>
          <div className="texto-lista">$ {priceMonThu}</div>
        </div>
        <div className="lista-room-rates2">
          <div className="texto-lista">Monday - Thursday</div>
          <div className="texto-lista">$ {priceMonThu}</div>
        </div>
        <div className="lista-room-rates">
          <div className="texto-lista">Friday - Sunday</div>
          <div className="texto-lista">$ {priceFriSun}</div>
        </div>
        <div className="lista-room-rates2">
          <div className="texto-lista">Rent by month</div>
          <div className="texto-lista">-{DescMonth} %</div>
        </div>
        <div className="lista-room-rates">
          <div className="texto-lista">Minimum number of nights</div>
          <div className="texto-lista">{minNights} night</div>
        </div>
        <div className="lista-room-rates2">
          <div className="texto-lista">Max number of nights</div>
          <div className="texto-lista">{maxNights} nights</div>
        </div>
      </div>
    );
}

export default RoomRates;
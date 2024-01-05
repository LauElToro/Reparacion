import imgHotelindividual from "../imagenes/img-hotel-individual.jpg";
import "./hotel-individual.css";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./pagecar.css";
import silueta from "../imagenes/silueta.jpg";

function Hotelindividual() {
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [startDate2, setStartDate2] = useState(null);
  const [endDate2, setEndDate2] = useState(null);
  const [showCapacityControls, setShowCapacityControls] = useState(false);

  const handleDivClick = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleDateChange2 = (dates) => {
    const [start, end] = dates;
    setStartDate2(start);
    setEndDate2(end);
  };

  const formatDate = (date) => {
    if (date) {
      return date.toLocaleDateString(undefined, {
        month: "short",
        day: "2-digit",
      });
    }
    return "";
  };

  const isSelectedDate = (date) => {
    return (
      (startDate2 && startDate2.toDateString() === date.toDateString()) ||
      (endDate2 && endDate2.toDateString() === date.toDateString())
    );
  };

  const dayClassName = (date) => {
    return isSelectedDate(date) ? "selected-date" : "";
  };

  const [clase, setClase] = useState("precio-auto-calendario-fechas");

  const Dateclick = () => {
    if (clase === "precio-auto-calendario-fechas") {
      setClase("precio-auto-calendario-fechas-click");
    } else {
      setClase("precio-auto-calendario-fechas");
    }
  };

  const [clasecapacity, setClasecapacity] = useState("capacityform-H-I");

  const Capacityclick = () => {
    if (clasecapacity === "capacityform-H-I") {
      setClasecapacity("capacityform-H-I-click");
    } else {
      setClasecapacity("capacityform-H-I");
    }
  };

  const [capacityAdult, setCapacityAdult] = useState(0);

  const handleIncrementCapacityAdult = () => {
    if (capacityAdult < 10) {
      setCapacityAdult((prevCapacityAdult) => prevCapacityAdult + 1);
    }
  };

  const handleDecrementCapacityAdult = () => {
    if (capacityAdult >= 1) {
      setCapacityAdult((prevCapacityAdult) => prevCapacityAdult - 1);
    }
  };

  const [capacityChildren, setCapacityChildren] = useState(0);

  const handleIncrementCapacityChildren = () => {
    if (capacityChildren < 4) {
      setCapacityChildren((prevCapacityChildren) => prevCapacityChildren + 1);
    }
  };

  const handleDecrementCapacityChildren = () => {
    if (capacityChildren >= 1) {
      setCapacityChildren((prevCapacityChildren) => prevCapacityChildren - 1);
    }
  };

  const [capacityInfant, setCapacityInfant] = useState(0);

  const handleIncrementCapacityInfant = () => {
    if (capacityInfant < 4) {
      setCapacityInfant((prevCapacityInfant) => prevCapacityInfant + 1);
    }
  };

  const handleDecrementCapacityInfant = () => {
    if (capacityInfant >= 1) {
      setCapacityInfant((prevCapacityInfant) => prevCapacityInfant - 1);
    }
  };

  const handleCapacityFormClick = () => {
    setShowCapacityControls(!showCapacityControls);
  };

  const calculateTotalCapacity = () => {
    return capacityAdult + capacityChildren + capacityInfant;
  };

  return (
    <div className="H-I-body">
      <div className="H-I-img-container">
        <div>
          <img
            className="img-hotel-individual1"
            src={imgHotelindividual}
            alt=""
          />
        </div>
        <div className="H-I-columna-img">
          <img
            className="img-hotel-individual2"
            src={imgHotelindividual}
            alt=""
          />
          <img
            className="img-hotel-individual2"
            src={imgHotelindividual}
            alt=""
          />
        </div>
        <div className="H-I-columna-img">
          <img
            className="img-hotel-individual2"
            src={imgHotelindividual}
            alt=""
          />
          <img
            className="img-hotel-individual2"
            src={imgHotelindividual}
            alt=""
          />
        </div>
      </div>
      <div className="carta-auto-contenedor">
        <div>
          <div className="propietario-auto">
            <div className="propietario-auto-header">
              <div className="propietario-auto-modelo">
                Beach House in Collingwood
              </div>
              <div className="share-save">
                <div className="propietario-auto-share">
                  <div className="icon-pagecar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-share"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                  </div>
                  Share
                </div>
                <div className="propietario-auto-save">
                  <div className="icon-pagecar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </div>
                  Save
                </div>
              </div>
            </div>
            <div className="puntaje-ubicacion">
              <div className="iconstar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className="score-number">4.5</div>
              <div className="subtext-carousel">(110)</div>
              <div className="ubicacion">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>{" "}
                Tokyo, Jappan
              </div>
            </div>
            <div className="propietario-auto-body">
              <img src={silueta} alt="" className="propietario-auto-img" />
              <div className="propietario-auto-nombre">Julian smith</div>
            </div>
            <hr className="linea" />
            <div className="propietario-auto-footer">
              <div className="items-footer">
                <div className="icon-pagecar">
                  <span class="material-icons">people_alt</span>
                </div>
                4 Seats
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <i class="material-icons">bed</i>
                </div>
                Bed
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <span className="material-icons">bathtub</span>
                </div>
                2 baths
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <span class="material-icons">meeting_room</span>
                </div>
                2 bedrooms
              </div>
            </div>
          </div>

          <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">Stay information</div>

            <hr className="linea2" />
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  Providing lake views, The Symphony 9 Tam Coc in Ninh Binh
                  provides accommodation, an outdoor swimming pool, a bar, a
                  shared lounge, a garden and barbecue facilities. Complimentary
                  WiFi is provided.
                </p>
                <p>
                  There is a private bathroom with bidet in all units, along
                  with a hairdryer and free toiletries.
                </p>
                <p>
                  The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental
                  service and a car rental service are available at the
                  accommodation, while cycling can be enjoyed nearby.
                </p>
              </div>
            </div>
          </div>
          <div className="caracteristicas-hotel">
            <div className="titulo-de-tarjetas-extras">Amenities</div>
            <div className="parametros-del-vehiculo-subtitulo">
              About the property's amenities and services
            </div>
            <hr className="linea2" />
            <div className="flex">
              <div className="parametros-del-vehiculo-lista">
                <ul>
                  <li>
                    <span class="material-icons">vpn_key</span>{" "}
                    <div className="item-lista">la-key</div>
                  </li>
                  <li>
                    <span class="material-icons">smoking_rooms</span>
                    <div className="item-lista">la-smoking</div>
                  </li>
                  <li>
                    <span class="material-icons">work_outline</span>
                    <div className="item-lista"> la-suitcase</div>
                  </li>
                  <li>
                    <span class="material-icons">waves</span>
                    <div className="item-lista">la-swimming-pool </div>
                  </li>
                </ul>
              </div>
              <div className="parametros-del-vehiculo-lista">
                <ul>
                  <li>
                    <span class="material-icons">luggage</span>{" "}
                    <div className="item-lista">la-luggage-cart</div>
                  </li>
                  <li>
                    <span class="material-icons">ac_unit</span>
                    <div className="item-lista">la-snowflake </div>
                  </li>
                  <li>
                    <span class="material-icons">cases</span>
                    <div className="item-lista">la-suitcase-rolling</div>
                  </li>
                  <li>
                    <span class="material-icons">personal_video</span>{" "}
                    <div className="item-lista">la-tv</div>
                  </li>
                </ul>
              </div>
              <div className="parametros-del-vehiculo-lista">
                <ul>
                  <li>
                    <span class="material-icons">shower</span>{" "}
                    <div className="item-lista">la-shower</div>
                  </li>
                  <li>
                    <span class="material-icons">spa</span>{" "}
                    <div className="item-lista">la-spa</div>
                  </li>
                  <li>
                    <span class="material-icons">pool</span>{" "}
                    <div className="item-lista">la-swimmer</div>
                  </li>
                  <li>
                    <span class="material-icons">beach_access</span>
                    <div className="item-lista"> la-umbrella-beach</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">Room Rates</div>
            <div className="parametros-del-vehiculo-subtitulo">
              Prices may increase on weekends or holidays
            </div>
            <hr className="linea2" />
            <div className="lista-room-rates">
              <div className="texto-lista">Monday - Thursday</div>
              <div className="texto-lista">$199</div>
            </div>
            <div className="lista-room-rates2">
              <div className="texto-lista">Monday - Thursday</div>
              <div className="texto-lista">$199</div>
            </div>
            <div className="lista-room-rates">
              <div className="texto-lista">Friday - Sunday</div>
              <div className="texto-lista">$219</div>
            </div>
            <div className="lista-room-rates2">
              <div className="texto-lista">Rent by month</div>
              <div className="texto-lista">-8.34 %</div>
            </div>
            <div className="lista-room-rates">
              <div className="texto-lista">Minimum number of nights</div>
              <div className="texto-lista">1 night</div>
            </div>
            <div className="lista-room-rates2">
              <div className="texto-lista">Max number of nights</div>
              <div className="texto-lista">90 nights</div>
            </div>
          </div>
        </div>
        <div>
          <div className="precio-hotel">
            <div className="precio-auto-header">
              <div className="auto-precio-por-dia">
                $19 <div className="precio-total-de-dias">/day </div>
              </div>
              <div className="punto-de-encuentro-fecha-ciudad ">
                <div className="iconstar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <div className="score-number">4.5</div>
                <div className="subtext-carousel">(110)</div>
              </div>
            </div>
            <div className="precio-auto-calendario">
              <div onClick={handleDivClick}>
                <div className={clase} onClick={Dateclick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-calendar4"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
                      className="icon"
                    />
                  </svg>
                  <div>
                    <div className="precio-auto-date">
                      <input
                        type="text"
                        value={formatDate(startDate2)}
                        readOnly
                        className="precio-auto-date"
                      />
                      <input
                        type="text"
                        value={formatDate(endDate2)}
                        readOnly
                        className="precio-auto-date"
                      />
                    </div>
                    <div className="datecar-text">
                      <div className="datecar-text">Pick Up </div>
                      <div className="datecar-text">-</div>
                      <div className="datecar-text">Drop Off</div>
                    </div>
                  </div>
                </div>
              </div>
              {calendarVisible && (
                <div className="dateform-car">
                  <DatePicker
                    selected={startDate2}
                    onChange={handleDateChange2}
                    startDate={startDate2}
                    endDate={endDate2}
                    selectsRange
                    inline
                    monthsShown={2}
                    dateFormat="MM/dd"
                    className="dateform"
                    dayClassName={dayClassName}
                  />
                </div>
              )}
              <div onClick={handleCapacityFormClick}>
                <div className={clasecapacity} onClick={Capacityclick}>
                  <label htmlFor="capacidad" className="Input-capacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                      className="icon"
                      />
                    </svg>{" "}
                    <input
                      value={calculateTotalCapacity()}
                      name="capacidad"
                      id="capacidad"
                      readOnly
                      className="Suma-capacity"
                    />{" "}
                    <label>Guests</label>
                  </label>
                </div>
              </div>
            </div>

            <div className="capacity-container-hotel">
              <div
                className={`capacity-controls-hotel ${
                  showCapacityControls ? "show" : ""
                }`}
              >
                <div className="capacity-text">
                  Adults
                  <br />
                  <div className="capacity-subtext">Ages 13 or above</div>
                </div>
                <div
                  className="capacity-button"
                  onClick={handleDecrementCapacityAdult}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-dash-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </div>
                <input
                  type="number"
                  inputMode="none"
                  id="capacidad"
                  name="capacidad"
                  value={capacityAdult}
                  readOnly
                  className="inputcapacity"
                />
                <div
                  className="capacity-button"
                  onClick={handleIncrementCapacityAdult}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
              </div>
              <div
                className={`capacity-controls-hotel ${
                  showCapacityControls ? "show" : ""
                }`}
              >
                <div className="capacity-text">
                  Children
                  <br />
                  <div className="capacity-subtext">Ages 2-12</div>
                </div>
                <div
                  className="capacity-button"
                  onClick={handleDecrementCapacityChildren}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-dash-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </div>
                <input
                  type="number"
                  inputMode="none"
                  id="capacidad"
                  name="capacidad"
                  value={capacityChildren}
                  readOnly
                  className="inputcapacity"
                />
                <div
                  className="capacity-button"
                  onClick={handleIncrementCapacityChildren}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
              </div>

              <div
                className={`capacity-controls-hotel ${
                  showCapacityControls ? "show" : ""
                }`}
              >
                <div className="capacity-text">
                  Infants
                  <br />
                  <div className="capacity-subtext">Ages 0-2</div>
                </div>
                <div
                  className="capacity-button"
                  onClick={handleDecrementCapacityInfant}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-dash-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </div>
                <input
                  type="number"
                  inputMode="none"
                  id="capacidad"
                  name="capacidad"
                  value={capacityInfant}
                  readOnly
                  className="inputcapacity"
                />
                <div
                  className="capacity-button"
                  onClick={handleIncrementCapacityInfant}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="contenedor-precio-total-de-dias">
              <div className="precio-total-de-dias">$19 x 3 nights</div>{" "}
              <div className="precio-total-de-dias">$357</div>
            </div>
            <div className="contenedor-precio-total-de-dias">
              <div className="precio-total-de-dias">Service charge</div>{" "}
              <div className="precio-total-de-dias">$0</div>
            </div>
            <hr className="hr-precio-total" />
            <div className="contenedor-precio-auto-total">
              <div className="precio-auto-total">Total </div>{" "}
              <div className="precio-auto-total">$199</div>
            </div>
            <div className="precio-auto-boton">Reserve</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotelindividual;

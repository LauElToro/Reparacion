import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./pagecar.css";
import auto1 from "../imagenescar/auto1.jpg";
import auto2 from "../imagenescar/auto2.jpg";
import auto3 from "../imagenescar/auto3.jpg";
import auto4 from "../imagenescar/auto4.jpg";
import silueta from "../imagenes/silueta.jpg";

function PageCar() {

 
  const [inputValue2, setInputValue2] = useState("");

  const handleChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const [inputValue3, setInputValue3] = useState("");

  const handleChange3 = (e) => {
    setInputValue3(e.target.value);
  };

  const carInputRef1 = useRef(null);

  const carInputRef2 = useRef(null);

  //date

  const [calendarVisible, setCalendarVisible] = useState(false);
  const [calendarVisible1, setCalendarVisible1] = useState(false);
  const [startDate2, setStartDate2] = useState(null);
  const [endDate2, setEndDate2] = useState(null);

  const [startDate3, setStartDate3] = useState(null);
  const [endDate3, setEndDate3] = useState(null);

  const handleDivClick = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleDivClick1 = () => {
    setCalendarVisible1(!calendarVisible1);
  };

  const handleDateChange2 = (dates) => {
    const [start, end] = dates;
    setStartDate2(start);
    setEndDate2(end);
  };

  const handleDateChange3 = (dates) => {
    const [start, end] = dates;
    setStartDate3(start);
    setEndDate3(end);
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

  //nuevooo
  const isSelectedDate = (date) => {
    return (
      (startDate2 && startDate2.toDateString() === date.toDateString()) ||
      (endDate2 && endDate2.toDateString() === date.toDateString())
    );
  };

  const isSelectedDate3 = (date) => {
    return (
      (startDate3 && startDate3.toDateString() === date.toDateString()) ||
      (endDate3 && endDate3.toDateString() === date.toDateString())
    );
  };

  const dayClassName = (date) => {
    return isSelectedDate(date) ? "selected-date" : "";
  };

  const dayClassName3 = (date) => {
    return isSelectedDate3(date) ? "selected-date" : "";
  };

  const [clase, setClase] = useState("precio-auto-calendario-fechas");

  const Dateclick = () => {
    if (clase === "precio-auto-calendario-fechas") {
      setClase("precio-auto-calendario-fechas-click");
    } else {
      setClase("precio-auto-calendario-fechas");
    }
  };

  return (
    <div className="pagecar-container" >
      <div className="head-pagecar">
        <img className="img-auto1" src={auto1} alt="" />
        <img className="img-auto2" src={auto2} alt="" />
        <div className="head2-pagecar">
          <img className="img-auto3" src={auto3} alt="" />
          <img className="img-auto4" src={auto4} alt="" />
        </div>
      </div>
      <div className="formcar">
        {
          <form className="form">
            <div
              class="locationform"
              onClick={() => {
                carInputRef1.current.focus();
              }}
            >
              <div className="iconinputhotel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>{" "}
                <input
                  type="text"
                  id="ubicacion2"
                  name="ubicacion2"
                  placeholder="City or Airport"
                  className="hotelinput"
                  ref={carInputRef1}
                  value={inputValue2}
                  onChange={handleChange2}
                />
              </div>
              <div className="locationtext">Pick up location</div>
            </div>
            <div
              class="locationform"
              onClick={() => {
                carInputRef2.current.focus();
              }}
            >
              <div className="iconinputhotel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>{" "}
                <input
                  type="text"
                  id="ubicacion"
                  name="ubicacion"
                  placeholder="City or Airport"
                  className="hotelinput"
                  ref={carInputRef2}
                  value={inputValue3}
                  onChange={handleChange3}
                />
              </div>
              <div className="locationtext2">Drop off location</div>
            </div>

            <div className="dateform">
              <div onClick={handleDivClick1}>
                <div className="fechas-container" onClick={Dateclick}>
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
                      className="calendar-icon"
                    />
                  </svg>
                  <div>
                    <div className="precio-auto-date">
                      <input
                        type="text"
                        value={formatDate(startDate3)}
                        readOnly
                        className="precio-auto-date"
                      />
                      <input
                        type="text"
                        value={formatDate(endDate3)}
                        readOnly
                        className="precio-auto-date"
                      />
                    </div>
                    <div className="datecar-text">
                      <div className="datecar-text">Check in </div>
                      <div className="datecar-text">-</div>
                      <div className="datecar-text">Check out</div>
                    </div>
                  </div>
                </div>
              </div>
              {calendarVisible1 && (
                <div className="dateform-car">
                  <DatePicker
                    selected={startDate3}
                    onChange={handleDateChange3}
                    startDate={startDate3}
                    endDate={endDate3}
                    selectsRange
                    inline
                    monthsShown={2}
                    dateFormat="MM/dd"
                    className="dateform"
                    dayClassName={dayClassName3}
                  />
                </div>
              )}
            </div>

            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
        }
      </div>
      <div className="carta-auto-contenedor">
        <div>
          <div className="propietario-auto">
            <div className="propietario-auto-header">
              <div className="propietario-auto-modelo">BMW 3 Series Sedan</div>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </div>
                4 Seats
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-car-front"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z" />
                    <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z" />
                  </svg>
                </div>
                Auto gearbox
              </div>
              <div className="items-footer">
                <div className="icon-pagecar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-duffle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 5.75c1.388 0 2.673.193 3.609.385a18.404 18.404 0 0 1 1.43.354l.112.034.002.001h.001a.5.5 0 0 1-.308.952l-.004-.002-.018-.005a17.416 17.416 0 0 0-1.417-.354A17.282 17.282 0 0 0 8 6.75a17.3 17.3 0 0 0-3.408.365 17.42 17.42 0 0 0-1.416.354l-.018.005-.003.001a.5.5 0 1 1-.308-.95A17.26 17.26 0 0 1 8 5.75Z" />
                    <path d="M5.229 2.722c-.126.461-.19.945-.222 1.375-1.401.194-2.65.531-3.525 1.012C-.644 6.278.036 11.204.393 13.127a.954.954 0 0 0 .95.772h13.314a.954.954 0 0 0 .95-.772c.357-1.923 1.037-6.85-1.09-8.018-.873-.48-2.123-.818-3.524-1.012a7.361 7.361 0 0 0-.222-1.375c-.162-.593-.445-1.228-.971-1.622-1.115-.836-2.485-.836-3.6 0-.526.394-.81 1.03-.971 1.622ZM9.2 1.9c.26.195.466.57.606 1.085.088.322.142.667.173.998a23.307 23.307 0 0 0-3.958 0 6.06 6.06 0 0 1 .173-.998c.14-.515.346-.89.606-1.085.76-.57 1.64-.57 2.4 0ZM8 4.9c2.475 0 4.793.402 6.036 1.085.238.13.472.406.655.93.183.522.28 1.195.303 1.952.047 1.486-.189 3.088-.362 4.032H1.368c-.173-.944-.409-2.545-.362-4.032.024-.757.12-1.43.303-1.952.183-.524.417-.8.655-.93C3.207 5.302 5.525 4.9 8 4.9Z" />
                  </svg>
                </div>
                2 Bags
              </div>
            </div>
          </div>

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
                  <li>· 59 MPG Combined, 58 City/60 Hwy</li>
                  <li>· 139-hp gas/electric combined</li>
                  <li>· 8-inch color touchscreen display audio</li>
                  <li>· LED Daytime Running Lights (DRL)</li>
                </ul>
              </div>
              <div className="parametros-del-vehiculo-lista">
                <ul>
                  <li>
                    · Forward Collision-Avoidance Assist with Pedestrian
                    Detection (FCA-Ped)
                  </li>
                  <li>· Proximity Key with push button start</li>
                  <li>· Smart Cruise Control with Stop & Go (SCC)</li>
                  <li>· Blind-Spot Collision Warning (BCW)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">Car descriptions</div>
            <hr className="linea2" />
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  Until the all-new TUCSON hits the dealer showrooms you can
                  check it out in our Showroom Walkaround video. Watch the video
                  and join our product specialist as he gives you an up-close
                  look of our latest SUV
                </p>
                <p>
                  Questions are at the heart of making things great. Watch our
                  celebrity-filled TV ad and you’ll see that when we say
                  “everything,” we mean everything.
                </p>
              </div>
            </div>
          </div>
          <div className="parametros-del-vehiculo">
            <div className="titulo-de-tarjetas-extras">Things to know</div>
            <hr className="linea2" />
            <div className="titulo-de-tarjetas-extras2">
              Cancellation policy
            </div>
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  Lock in this fantastic price today, cancel free of charge
                  anytime. Reserve now and pay at pick-up.
                </p>
              </div>
            </div>
            <hr className="linea2" />
            <div className="titulo-de-tarjetas-extras2">Special Note</div>
            <div className="punto-de-encuentro-fecha-ciudad">
              <div className="parametros-del-vehiculo-subtitulo">
                <p>
                  We asked ourselves, “How can we make the dash not only look
                  better, but also give the driver a better look outside?” The
                  unexpected answer is having no hood above the available
                  10.25-inch digital instrument cluster...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="punto-de-encuentro">
            <div className="punto-de-encuentro-header">
              Pick up and drop off
            </div>

            <div className="punto-de-encuentro-fecha-ciudad">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              </svg>
              <div className="fecha-ciudad-contenedor">
                <div className="fecha-contenido">Monday, August 12 · 10:00</div>
                <div className="ciudad-contenido">
                  Saint Petersburg City Center
                </div>
              </div>
            </div>
            <div className="punto-de-encuentro-fecha-ciudad">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              </svg>
              <div className="fecha-ciudad-contenedor">
                <div className="fecha-contenido">Monday, August 12 · 10:00</div>
                <div className="ciudad-contenido">
                  Saint Petersburg City Center
                </div>
              </div>
            </div>
          </div>
          <div className="precio-auto">
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
                      className="calendar-icon"
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
            </div>
            <div className="contenedor-precio-total-de-dias">
              <div className="precio-total-de-dias">$19 x 3 day</div>{" "}
              <div className="precio-total-de-dias">$57</div>
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

export default PageCar;

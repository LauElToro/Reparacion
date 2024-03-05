import "../pagecar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Star from "../H. I. SVGS/Star";
import Calendar from "../H. I. SVGS/Calendar";






function PriceCar () {

    
  
    
  
    //date
  
    const [calendarVisible, setCalendarVisible] = useState(false);
   
    const [startDate2, setStartDate2] = useState(null);
    const [endDate2, setEndDate2] = useState(null);
  
   
  
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
  
    //nuevooo
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


    const pricDay = 50;
    const stars = 3.8;
    const reviews= 109;
    const cantDays = 4;
    
    const Total = pricDay * cantDays;
    





    return (
        <>
                 <div className="precio-auto">
            <div className="precio-auto-header">
              <div className="auto-precio-por-dia">
                ${pricDay} <div className="precio-total-de-dias">/day </div>
              </div>
              <div className="punto-de-encuentro-fecha-ciudad ">
                <div className="iconstar">
                  <Star />
                    
                </div>
                <div className="score-number">{stars}</div>
                <div className="subtext-carousel">({reviews})</div>
              </div>
            </div>
            <div className="precio-auto-calendario">
              <div onClick={handleDivClick}>
                <div className={clase} onClick={Dateclick}>
                  <Calendar />
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
              <div className="precio-total-de-dias">$ {pricDay} x {cantDays} day</div>{" "}
              <div className="precio-total-de-dias">$ {Total}</div>
            </div>
            <hr className="hr-precio-total" />
            <div className="contenedor-precio-auto-total">
              <div className="precio-auto-total">Total </div>{" "}
              <div className="precio-auto-total">$ {Total}</div>
            </div>
            <div className="precio-auto-boton">Reserve</div>
          </div>
          
        </>
    );
} 

export default PriceCar;
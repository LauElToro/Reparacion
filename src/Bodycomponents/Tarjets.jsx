import React, { useState } from "react";
import Carrousel1 from "./Tarjetshotel1/Tarjet1";
import Carrousel2 from "./Tarjetshotel1/Tarjet2";
import Carrousel3 from "./Tarjetshotel1/Tarjet3";
import Carrousel4 from "./Tarjetshotel1/Tarjet4";
import Carrousel5 from "./Tarjetshotel1/Tarjet5";
import Carrousel6 from "./Tarjetshotel1/Tarjet6";
import Carrousel7 from "./Tarjetshotel1/Tarjet7";
import Carrousel8 from "./Tarjetshotel1/Tarjet8";
import Tarjet2carrousel1 from "./Tarjetshotel2/Tarjet2.1";
import Tarjet2carrousel2 from "./Tarjetshotel2/Tarjet2.2";
import Tarjet2carrousel3 from "./Tarjetshotel2/Tarjet2.3";
import Tarjet2carrousel4 from "./Tarjetshotel2/Tarjet2.4";
import Tarjet2carrousel5 from "./Tarjetshotel2/Tarjet2.5";
import Tarjet2carrousel6 from "./Tarjetshotel2/Tarjet2.6";
import Tarjet2carrousel7 from "./Tarjetshotel2/Tarjet2.7";
import Tarjet2carrousel8 from "./Tarjetshotel2/Tarjet2.8";
import Tarjet3carrousel1 from "./Tarjetshotel3/Tarjet3.1";
import Tarjet3carrousel2 from "./Tarjetshotel3/Tarjet3.2";
import Tarjet3carrousel3 from "./Tarjetshotel3/Tarjet3.3";
import Tarjet3carrousel4 from "./Tarjetshotel3/Tarjet3.4";
import Tarjet3carrousel5 from "./Tarjetshotel3/Tarjet3.5";
import Tarjet3carrousel6 from "./Tarjetshotel3/Tarjet3.6";
import Tarjet3carrousel7 from "./Tarjetshotel3/Tarjet3.7";
import Tarjet3carrousel8 from "./Tarjetshotel3/Tarjet3.8";
import styled from "styled-components";

function Tarjets() {
  const [selectedSearchTarjets, setSelectedSearchTarjets] =
    useState("firstUbication");

  const [firstUbicationClicked, setFirstUbicationClicked] = useState(false);
  const [secondUbicationClicked, setSecondUbicationClicked] = useState(false);
  const [thirdUbicationClicked, setThirdUbicationClicked] = useState(false);

  const handleFirstUbicationClick = () => {
    setFirstUbicationClicked(true);
    setSecondUbicationClicked(false);
    setThirdUbicationClicked(false);
    setSelectedSearchTarjets("firstUbication");
  };

  const handleSecondUbicationClick = () => {
    setSecondUbicationClicked(true);
    setFirstUbicationClicked(false);
    setThirdUbicationClicked(false);
    setSelectedSearchTarjets("secondUbication");
  };

  const handleThirdtUbicationClick = () => {
    setThirdUbicationClicked(true);
    setFirstUbicationClicked(false);
    setSecondUbicationClicked(false);
    setSelectedSearchTarjets("thirdUbication");
  };

  const renderTarjetscomponents = () => {
    if (selectedSearchTarjets === "firstUbication")
      return (
        <Tarjetscontainer>
          <Carrouselscontainers>
            <div className="container1">
              <Carrousel1 />
              <Carrousel2 />
              <Carrousel3 />
              <Carrousel4 />
            </div>
            <br />
            <div className="container2">
              <Carrousel5 />
              <Carrousel6 />
              <Carrousel7 />
              <Carrousel8 />
            </div>
          </Carrouselscontainers>
        </Tarjetscontainer>
      );
    else if (selectedSearchTarjets === "secondUbication")
      return (
        <Tarjetscontainer>
          <Carrouselscontainers>
            <div className="container1">
              <Tarjet2carrousel1 />
              <Tarjet2carrousel2 />
              <Tarjet2carrousel3 />
              <Tarjet2carrousel4 />
            </div>
            <br />
            <div className="container2">
              <Tarjet2carrousel5 />
              <Tarjet2carrousel6 />
              <Tarjet2carrousel7 />
              <Tarjet2carrousel8 />
            </div>
          </Carrouselscontainers>
        </Tarjetscontainer>
      );
    else if (selectedSearchTarjets === "thirdUbication")
      return (
        <Tarjetscontainer>
          <Carrouselscontainers>
            <div className="container1">
              <Tarjet3carrousel1 />
              <Tarjet3carrousel2 />
              <Tarjet3carrousel3 />
              <Tarjet3carrousel4 />
            </div>
            <br />
            <div className="container2">
              <Tarjet3carrousel5 />
              <Tarjet3carrousel6 />
              <Tarjet3carrousel7 />
              <Tarjet3carrousel8 />
            </div>
          </Carrouselscontainers>
        </Tarjetscontainer>
      );
  };

  return (
    <Betsellercontainer>
      <Texttarjet>
        <h1>Betsellers Listing</h1>
        Hotel higly rated for thoughtful design
      </Texttarjet>
      <Searchtarjetcontainer>
        <Buttontarjetcontainer>
          <button
            onClick={handleFirstUbicationClick}
            className={`btns-tarjets-searchs ${
              firstUbicationClicked ? "clicked" : ""
            }`}
          >
            New york
          </button>

          <button
            onClick={handleSecondUbicationClick}
            className={`btns-tarjets-searchs ${
              secondUbicationClicked ? "clicked" : ""
            }`}
          >
            Dubai
          </button>

          <button
            onClick={handleThirdtUbicationClick}
            className={`btns-tarjets-searchs ${
              thirdUbicationClicked ? "clicked" : ""
            }`}
          >
            Italia
          </button>
        </Buttontarjetcontainer>
        {renderTarjetscomponents()}
      </Searchtarjetcontainer>
    </Betsellercontainer>
  );
}

export default Tarjets;

const Betsellercontainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #f2f2f2;
  border-radius: 30px;
  aling-items: center;
`;

const Texttarjet = styled.div`
  margin-left: 40px;
`;

const Searchtarjetcontainer = styled.div`
  display: flex;
  align-items: center;
  position: static;
  z-index: 3;
`;

const Buttontarjetcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 172%;
  padding-top: 0px;
  margin-bottom: 20px;
  .btns-tarjets-searchs {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #374151;
    border: none;
    margin-left: 35px;
    cursor: pointer;
    background-color: #f2f2f2;
  }

  @media (max-width: 720px) {
    top: 1095px;
  }

  .btns-tarjets-searchs.clicked {
    border-radius: 20px;
    color: #f9fafb;
    background-color: #0511f2;
    width: 90px;
    height: 40px;
  }

  .dot {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: #111827;
  }
`;

const Tarjetscontainer = styled.div`
  margin: 20px;
`;

const Carrouselscontainers = styled.div``;

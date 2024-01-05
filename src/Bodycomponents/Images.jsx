import React from "react";
import styled from "styled-components";
import casaplaya from "../imagenes/casaplaya.jpg";
import mountain from "../imagenes/mountain.webp";
import playa from "../imagenes/playa.webp";

function Images() {
  return (
    <div>
      <Imgcontainer>
        <div className="subcontainerimg">
          <img className="image1" src={casaplaya} alt="" />
          <img className="image2" src={playa} alt="" />
        </div>
        <img className="image3" src={mountain} alt="" />
      </Imgcontainer>
    </div>
  );
}

export default Images;

const Imgcontainer = styled.div`
  @media (max-width: 820px) {
    margin-top: 30px;
    height: 370px;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image1 {
    @media (max-width: 720px) {
      height: 130px;
      width: 170px;
    }
    height: 300px;
    width: 300px;
    padding-bottom: 20px;
  }

  .image2 {
    @media (max-width: 720px) {
      height: 200px;
      width: 170px;
    }
    height: 300px;
    width: 300px;
  }

  .image3 {
    @media (max-width: 720px) {
      height: 300px;
      width: 1000px;
      position: relative;
      top: 50px;
    }
    position: relative;
    top: 80px;
    height: 615px;
    width: 100px;
  }

  .subcontainerimg {
    @media (max-width: 890px) {
      margin-left: 50px;
    }
    display: block;
    margin-left: 1000px;
  }
`;

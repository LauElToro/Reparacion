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
  display: flex;
  @media (max-width: 890px) {
    margin-top:30px;
    height: 370px;
    width: 350px;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .image1 {
    @media (max-width: 890px) {
      height: 130px;
      width: 170px;
    }
    height: 300px;
    width: 500px;
    padding-bottom:20px;
  }

  .image2 {
    @media (max-width: 890px) {
        height: 150px;
        width: 160px;
        margin-left: 5%;
      }
    height: 300px;
    width: 400px;
  }

  .image3 {
    @media (max-width: 890px) {
        height: 300px;
        width: 150px;
        position:relative;
        top:50px;
        margin-right: 8%;
      }
      position:relative;
      top:80px;
    height: 715px;
    width: 600px;
    margin-right: 100px;
  }

  .subcontainerimg {
    @media  (max-width: 890px) {
        margin-left:0px;
    }
    display: block;
    margin-left: 90px;
  }
`;
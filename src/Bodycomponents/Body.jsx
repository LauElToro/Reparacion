import React from "react";
import styled from "styled-components";
import Images from "./images";
import Searcher from "./Searcher";

function Body() {
  return (
    <div>
      <Bodycontainer>
        <div className="title-btn">
          <Textcontiner>
            <h2>
              Hi There! Where would you
              <br />
              like to go?
            </h2>
            <br />
            <p>
              Choose any of our best destinations to enjoy and travel around the
              world.
            </p>

            <br />
          </Textcontiner>
          <Searcher />
        </div>
        <Images />
      </Bodycontainer>
    </div>
  );
}

export default Body;

const Bodycontainer = styled.div`
  display: flex;
  margin: 100px;
  @media (max-width: 890px) {
    display: block;
    padding-top: 50px;
    margin: 20px;
  }

  .title-btn {
    display: block;
  }

  h1 {
    @media (max-width: 890px) {
      font-style: normal;
      font-size: 36px;
      line-height: 41px;
    }

    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 72px;
    line-height: 82px;
    color: #111827;
    font-weight: 500;
    margin-top: 0;
  }
`;

const Textcontiner = styled.div`
  display: block;
  p {
    font-family: Poppins, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    font-style: normal;
    font-size: 18px;
    line-height: 28px;
    color: #6b7280;
    font-weight: 500;
  }
`;

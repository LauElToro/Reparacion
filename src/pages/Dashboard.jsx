import React from "react";
import BlogForm from "./fetch/fetchBlog";
import PriceHotelForm from "./fetch/hotelPrice";
import RoomRatesForm from "./fetch/Roomrates";
import TituloHotelForm from "./fetch/tituloHotel";
import PriceCarForm from "./Car components/Price-car.jsx";
import PickupForm from "./fetch/pickUp";
import ParametersForm from "./fetch/parameters.jsx";
import Owner from "./Car components/Owner.jsx";
import InfoKnowForm from "./fetch/infoknow.jsx";
import DescriptionForm from "./fetch/description.jsx";



export const Dashboard =  () => {
  return (
    <>
    <BlogForm />
    <PriceHotelForm />
    <RoomRatesForm />
    <TituloHotelForm />
    <PriceCarForm />
    <PickupForm />
    <ParametersForm />
    <Owner />
    <InfoKnowForm />
    <DescriptionForm />

    </>
    );

}
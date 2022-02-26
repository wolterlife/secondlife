/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../../components/Header";
import LineWithText from "../../components/LineWithText";
import SliderWithDots from "./components/SliderWithDots";
import ShortList from "./components/ShortList";
import ButtonMore from "./components/ButtonMore";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header/>
      <LineWithText title="Найдите то, что давно искали"/>
      <SliderWithDots />
      <LineWithText title="Настоящие находки по отличной цене" />
      <ShortList />
      <ButtonMore />
      <Footer />
    </>
  )
}

export default HomePage;

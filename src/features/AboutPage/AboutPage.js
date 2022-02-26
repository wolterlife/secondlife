import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutTop from "./components/AboutTop";
import AboutBottom from "./components/AboutBottom";

const AboutPage = () => {
  return (
    <>
      <Header/>
        <AboutTop />
        <AboutBottom />
      <Footer/>
    </>
  )
}

export default AboutPage;

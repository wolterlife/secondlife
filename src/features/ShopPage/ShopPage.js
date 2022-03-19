import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LineWithText from "../../components/LineWithText";
import ProductList from "../../components/ProductList";

const ShopPage = () => {
  return (
    <>
      <Header/>
      <LineWithText title="Коллекция"/>
      <ProductList full={true} />
      <Footer/>
    </>
  )
}

export default ShopPage;

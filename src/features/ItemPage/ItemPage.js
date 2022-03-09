import React from "react";
import ItemNavigation from "./components/ItemNavigation";
import Header from "../../components/Header";
import ItemInfo from "./components/ItemInfo";
import Footer from "../../components/Footer";

const ItemPage = () => {
  return (
    <>
      <Header />
      <ItemNavigation />
      <ItemInfo />
      <Footer />
    </>
  )
}

export default ItemPage;

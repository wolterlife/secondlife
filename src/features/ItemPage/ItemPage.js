import React from "react";
import ItemNavigation from "./components/ItemNavigation";
import Header from "../../components/Header";
import ItemInfo from "./components/ItemInfo";
import Footer from "../../components/Footer";

const ItemPage = props => {
  // eslint-disable-next-line react/prop-types
  console.log(props)
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

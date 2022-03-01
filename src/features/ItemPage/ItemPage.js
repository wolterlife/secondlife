import React from "react";
import ItemNavigation from "./components/ItemNavigation";
import Header from "../../components/Header";
import ItemInfo from "./components/ItemInfo";

const ItemPage = () => {
  return (
    <>
      <Header />
      <ItemNavigation />
      <ItemInfo />
    </>
  )
}

export default ItemPage;

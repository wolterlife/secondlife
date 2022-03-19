import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LineWithText from "../../components/LineWithText";

const AdminPage = () => {
  return (
    <>
      <Header/>
      <LineWithText title={"Заказы"} />
      <LineWithText title={"Сообщения пользователей"} />
      <LineWithText title={"Список аккаунтов"} />
      <Footer/>
    </>
  )
}

export default AdminPage;

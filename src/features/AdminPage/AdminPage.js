import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LineWithText from "../../components/LineWithText";
import TableAccounts from "./components/TableAccounts";
import TableMessages from "./components/TableMessages";
import TableOrders from "./components/TableOrders";

const AdminPage = () => {
  return (
    <>
      <Header/>
      <LineWithText title={"Заказы"} />
      <TableOrders />
      <LineWithText title={"Сообщения пользователей"} />
      <TableMessages />
      <LineWithText title={"Список аккаунтов"} />
      <TableAccounts />
      <Footer/>
    </>
  )
}

export default AdminPage;

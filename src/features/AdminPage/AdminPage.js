import React, {useEffect} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LineWithText from "../../components/LineWithText";
import TableAccounts from "./components/TableAccounts";
import TableMessages from "./components/TableMessages";
import TableOrders from "./components/TableOrders";
import {database, onValue, ref} from "../../util/firebase";
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(() => { // Получение список администраторов
    onValue(ref(database, 'adminList/'), snapshot => {
      if (snapshot.val() !== null) {
        let currUser = JSON.parse(localStorage.getItem("currentUser"));
        let currData = Object.values(snapshot.val());
        if (!currData.includes(currUser)) navigate("/");
      }
    });
  }, []);

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

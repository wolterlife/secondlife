import React from "react";
import Header from "../../components/Header";
import LineWithText from "../../components/LineWithText";
import Links from "./components/Links";
import FormContact from "./components/FormContact";
import Footer from "../../components/Footer";

const ContactsPage = () => {
  return (
    <>
      <Header />
      <LineWithText title="Контакты" />
      <Links />
      <FormContact />
      <Footer />
    </>
  )
}

export default ContactsPage;

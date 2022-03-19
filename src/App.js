import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./features/HomePage/HomePage";
import QuestionsPage from "./features/QuestionsPage/QuestionsPage";
import ContactsPage from "./features/ContactsPage/ContactsPage";
import AboutPage from "./features/AboutPage/AboutPage";
import ShopPage from "./features/ShopPage/ShopPage";
import LoginPage from "./features/LoginPage/LoginPage";
import RegistrationPage from "./features/RegistrationPage/RegistrationPage";
import ItemsPage from "./features/ItemsPage/ItemsPage";
import ItemPage from "./features/ItemPage/ItemPage";
import ProfilePage from "./features/ProfilePage/ProfilePage";
import CartPage from "./features/CartPage/CartPage";
import OrderPage from "./features/OrderPage/OrderPage";
import AdminPage from "./features/AdminPage/AdminPage";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/questions" element={<QuestionsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/cart-list" element={<CartPage/>}/>
        <Route path="/order" element={<OrderPage/>}/>
        <Route path="/item" element={<ItemsPage/>} >
          <Route path=":id" element={<ItemPage />} />
        </Route>
      </Routes>
  );
  }
  }

  export default App;

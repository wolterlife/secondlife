import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./features/HomePage/HomePage";
import QuestionsPage from "./features/QuestionsPage/QuestionsPage";
import ContactsPage from "./features/ContactsPage/ContactsPage";
import AboutPage from "./features/AboutPage/AboutPage";
import ShopPage from "./features/ShopPage/ShopPage";
import LoginPage from "./features/LoginPage/LoginPage";
import RegistrationPage from "./features/RegistrationPage";

class App extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/questions" element={<QuestionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                {/*<Route path="*" element={<NotFoundPage />} />*/}
            </Routes>
        );
    }
}

export default App;

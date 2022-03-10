import React from "react";
import './Footer.css'
import {useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navTo = (path) => {
    navigate(path);
    window.scrollBy(0, -2000);
    window.scrollBy(0, -2000);
  }

  const navToOtherPage = (path) => {
    window.location.href = path;
  }

  return (
    <div className="footer">
      <p className="footer__title">
        Second life
      </p>
      <div className="container">
        <div className="container__second">
          <div className="second__group">
            <button onClick={() => navTo('/shop')} className="second__group-link">Магазин</button>
            <button onClick={() => navTo('/questions')} className="second__group-link">Вопросы</button>
            <button onClick={() => navTo('/contacts')} className="second__group-link">Контакты</button>
          </div>
          <div className="right-block">
            <p className="right-block__title">
              Магазин «Second life» делает все, чтобы соответствовать вашим ожиданиям и потребностям. Свяжитесь с нами,
              если у вас есть вопросы о работе магазина, но предварительно ознакомьтесь с ответами на самые часто
              возникающие. Мы работаем для вас и всегда рады помочь.</p>
          </div>
        </div>
        <div className="contacts">
          <input className="contacts__link" type="image" src="/img/Header/teleg.webp" alt="Telegram"
                 onClick={() => navToOtherPage('https://t.me/anya073')}/>
          <input className="contacts__link" type="image" src="/img/Header/inst.webp" alt="Instagram"
                 onClick={() => navToOtherPage('https://www.instagram.com/anya.073')}/>
        </div>
      </div>

    </div>
  )
}

export default Footer;

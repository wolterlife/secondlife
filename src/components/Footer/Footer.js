import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__title">
        Second life
      </p>
      <div className="container">
        <div className="container__second">
          <div className="second__group">
            <button className="second__group-link">Магазин</button>
            <button className="second__group-link">Вопросы</button>
            <button className="second__group-link">Контакты</button>
          </div>
          <div className="right-block">
            <p className="right-block__title">
              Магазин «Second life» делает все, чтобы соответствовать вашим ожиданиям и потребностям. Свяжитесь с нами,
              если у вас есть вопросы о работе магазина, но предварительно ознакомьтесь с ответами на самые часто
              возникающие. Мы работаем для вас и всегда рады помочь.</p>
          </div>
        </div>
        <div className="contacts">
          <input className="contacts__link" type="image" src="img/Header/teleg.webp" alt="Telegram"
                 onClick={() => console.log("Redirect")}/>
          <input className="contacts__link" type="image" src="img/Header/inst.webp" alt="Instagram"
                 onClick={() => console.log("Redirect")}/>
        </div>
      </div>

    </div>
  )
}

export default Footer;

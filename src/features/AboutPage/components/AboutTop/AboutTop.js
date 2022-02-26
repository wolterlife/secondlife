import React from "react";
import './AboutTop.css';

const AboutTop = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutTop">
        <h1 className="about__title">О нас</h1>
        <p className="about__caption">
          Добро пожаловать в секонд хенд интернет магазин &ldquo;Second Life&ldquo;! Мы продаем секонд хенд одежду из
          Европы, Великобритании и Австралии для самых модных дам и парней. Причем у нас не обычный секонд хенд, а в
          основном класса «Люкс». Это значит, что, выбрав в нашем интернет магазине товар и заказав его с доставкой, вы
          получите вещи либо абсолютно новые, либо с минимальной степенью износа.<br/> <br/>
          Мы принципиально не продаем одежду низкой категории – явно заношенную, застиранную и немодную.
          Так что, если вы поставили себе цель выглядеть стильно, оригинально и недорого, то включайте компьютер,
          находите наш секонд хенд магазин, выбирайте понравившуюся вещь и делайте заказ.
        </p>
        <div className="about_photo">
          <img className="about__photo__back" src="img/About/img1.webp" alt="Картинка на заднем плане"/>
          <img className="about__photo__front" src="img/About/img2.webp" alt="Картинка на переднем картинка"/>
        </div>
      </div>
    </div>
  )
}

export default AboutTop;

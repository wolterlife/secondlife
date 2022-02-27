import React from 'react';
import styles from './Header.module.css';
import LinkInMenu from "../LinkInMenu/LinkInMenu";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navToOtherPage = (path) => {
    window.location.href = path;
  }

  return (
    <header id="header" className={styles.container}>
      <Link to="/" className={styles.title}>
        <p>Second Life</p>
      </Link>
      <div className={styles.menu}>
        <LinkInMenu route="/shop" title="Каталог"/>
        <LinkInMenu route="/questions" title="Вопросы"/>
        <LinkInMenu route="/about" title="О нас"/>
        <LinkInMenu route="/contacts" title="Контакты"/>
        <svg
          onClick={() => console.log('open cart')}
          className={styles.image}
          style={{paddingLeft: '24px'}}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="3%"
          height="3%"
          viewBox="0 0 164.9 196.4"
          preserveAspectRatio="xMinYMax meet"
          data-hook="svg-icon-9">
          <path
            d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z"/>
          <path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z"/>
        </svg>
        <div className={styles.rightBlock}>
          <div className={styles.signButton} onClick={() => navigate('/login')}>
            <img className={styles.image} src="img/Header/userEmpty.jpg" alt="Профиль"/>
            <p className={styles.textLogin}>Log In</p>
          </div>
          <div className={styles.linkBlock}>
            <input className={styles.imageLink} type="image" src="img/Header/teleg.webp" alt="Telegram" onClick={() => navToOtherPage('https://t.me/anya073')}/>
            <input className={styles.imageLink} type="image" src="img/Header/inst.webp" alt="Instagram" onClick={() => navToOtherPage('https://www.instagram.com/anya.073')}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

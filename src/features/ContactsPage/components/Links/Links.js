import React from "react";
import './Links.css';
import styles from "../../../../components/Header/Header.module.css";

const Links = () => {

  const navToOtherPage = (path) => {
    window.location.href = path;
  }

  return (
    <div className="links">
      <input className={styles.imageLink} type="image" src="img/Header/teleg.webp" alt="Telegram" onClick={() => navToOtherPage('https://t.me/anya073')}/>
      <input className={styles.imageLink} type="image" src="img/Header/inst.webp" alt="Instagram" onClick={() => navToOtherPage('https://www.instagram.com/anya.073')}/>
    </div>
  )
}

export default Links;

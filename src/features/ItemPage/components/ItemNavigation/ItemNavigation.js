import React from "react";
import styles from './ItemNavigation.module.css';

const ItemNavigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <button className={styles.backButton}>Главная&nbsp;</button>
        <p className={styles.nameOfItem}>/ Топ с длинными рукавами</p>
      </div>
    </div>
  )
}

export default ItemNavigation;

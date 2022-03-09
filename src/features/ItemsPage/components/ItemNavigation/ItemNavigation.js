import React from "react";
import styles from './ItemNavigation.module.css';

const ItemNavigation = () => {
  function nextItem() {

  }

  function prevItem() {

  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <button className={styles.backButton}>Главная&nbsp;</button>
        <p className={styles.nameOfItem}>/ Топ с длинными рукавами</p>
      </div>
      <div className={styles.rightContainer}>
        <div onClick={() => prevItem()} className={styles.leftButton}>
          <img className={styles.arrowImg} src="img/left.jpg" alt="Стрелка влево"/>
          <p className={styles.navLeftText}>Назад</p>
        </div>
        <p style={{cursor: "default"}} >|</p>
        <div onClick={() => nextItem()} className={styles.rightButton}>
          <p className={styles.navRightText}>Вперёд</p>
          <img className={styles.arrowImg} src="img/right.jpg" alt="Стрелка влево"/>
        </div>
      </div>
    </div>
  )
}

export default ItemNavigation;

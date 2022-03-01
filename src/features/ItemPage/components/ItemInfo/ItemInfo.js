import React from "react";
import styles from './ItemInfo.module.css';

const ItemInfo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imgLarge} src="img/Catalog/1.jpg" alt=""/>
      <div className={styles.card}>
        <p className={styles.cardName}>Топ с длинными рукавами</p>
        <p className={styles.cardPrice}>45,00p.</p>
        <p className={styles.card}>Количество</p>
        <input className={styles.counterInput} id="counterInput" name="counterInput" type="number" min="1" max="100"/>
        <div className={styles.sectionOfButtons}>
          <button className={styles.buttonAddToCard}>Добавить в корзину</button>
          <button className={styles.buttonBuyNow}>Купить сейчас</button>
        </div>
      </div>
    </div>
  )
}

export default ItemInfo

import React, {useEffect, useState} from "react";
import styles from './ItemInfo.module.css';
import {useParams} from "react-router-dom";
import {database, onValue, ref} from "../../../../util/firebase";

const ItemInfo = () => {
  const params = useParams();
  const [dataProducts, setDataProducts] = useState();
  // eslint-disable-next-line no-unused-vars
  const [isPageLoaded, setLoadStatus] = useState(false);

  useEffect(() => { // Получение данных из БД почт+паролей
    onValue(ref(database, 'productsAll/'), snapshot => {
      if (snapshot.val() !== null) setDataProducts(Object.values(snapshot.val()));
      setLoadStatus(true);
    });
  }, []);

  function addToCart() {
    console.log(dataProducts[params.id]);

  }


  function buyNow() {

  }

  return (
    <>
      {isPageLoaded && (
        <div>
          <div className={styles.container}>
            <img className={styles.imgLarge} src={`/img/Catalog/${dataProducts[params.id].img[0]}.png`} alt=""/>
            <div className={styles.card}>
              <p className={styles.cardName}>{dataProducts[params.id].name}</p>
              <p className={styles.cardPrice}>{dataProducts[params.id].price},00p.</p>
              <p className={styles.card}>Количество</p>
              <input className={styles.counterInput} defaultValue="1" id="counterInput" name="counterInput"
                     type="number"
                     min="1" max="100"/>
              <div className={styles.sectionOfButtons}>
                <button onClick={() => addToCart()} className={styles.buttonAddToCard}>Добавить в корзину</button>
                <button onClick={() => buyNow()} className={styles.buttonBuyNow}>Купить сейчас</button>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              Приятная к телу кофта на замке с принтом.
            </p>
            <p>
              Размер S,M,L
            </p>
          </div>
        </div>
      )}


    </>
  )
}

export default ItemInfo

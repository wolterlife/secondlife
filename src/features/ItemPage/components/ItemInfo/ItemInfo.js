import React, {useEffect, useState} from "react";
import styles from './ItemInfo.module.css';
import {useNavigate, useParams} from "react-router-dom";
import {database, onValue, ref} from "../../../../util/firebase";


const ItemInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  const [dataProducts, setDataProducts] = useState();
  const [isPageLoaded, setLoadStatus] = useState(false);

  useEffect(() => { // Получение данных из БД почт+паролей
    onValue(ref(database, 'productsAll/'), snapshot => {
      if (snapshot.val() !== null) setDataProducts(Object.values(snapshot.val()));
      setLoadStatus(true);
    });
  }, []);

  function addToCart() {
    const currentItem = Object.assign({quantity: counter}, dataProducts[params.id]);
    console.log(currentItem);
  }

  function buyNow() {
  }

  function prevItem() { // Навигация. Если пользователь на 0-ом элементе, навигация к последнему.
    if ((Number(params.id)) === 0) navigate(`/item/${dataProducts.length-1}`)
    else navigate(`/item/${Number(params.id) - 1}`)
  }

  function nextItem() { // Навигация. Если пользователь на последнем элементе, навигация к нулевому
    if ((Number(params.id) + 1) === (dataProducts.length)) navigate('/item/0')
    else navigate(`/item/${Number(params.id) + 1}`)
  }

  // Перенести навигационный компонент сюда

  return (
    <>
      {isPageLoaded && (
        <div>
          <div className={styles.containerNav}>
            <div className={styles.leftContainer}>
              <button onClick={() => navigate('/')} className={styles.backButton}>Главная&nbsp;</button>
              <p className={styles.nameOfItem}>/ {dataProducts[params.id].name}</p>
            </div>
            <div className={styles.rightContainer}>
              <div onClick={() => prevItem()} className={styles.leftButton}>
                <img className={styles.arrowImg} src="/img/left.jpg" alt="Стрелка влево"/>
                <p className={styles.navLeftText}>Назад</p>
              </div>
              <p style={{cursor: "default"}}>|</p>
              <div onClick={() => nextItem()} className={styles.rightButton}>
                <p className={styles.navRightText}>Вперёд</p>
                <img className={styles.arrowImg} src="/img/right.jpg" alt="Стрелка влево"/>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <img className={styles.imgLarge} src={`/img/Catalog/${dataProducts[params.id].img[0]}.png`} alt=""/>
            <div className={styles.card}>
              <p className={styles.cardName}>{dataProducts[params.id].name}</p>
              <p className={styles.cardPrice}>{dataProducts[params.id].price},00p.</p>
              <p className={styles.card}>Количество</p>
              <input className={styles.counterInput}
                     value={counter}
                     onChange={e => setCounter(e.target.value)}
                     id="counterInput"
                     name="counterInput"
                     type="number"
                     min="1" max="100"
              />
              <div className={styles.sectionOfButtons}>
                <button onClick={() => addToCart()} className={styles.buttonAddToCard}>Добавить в корзину</button>
                <button onClick={() => buyNow()} className={styles.buttonBuyNow}>Купить сейчас</button>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              {dataProducts[params.id].desFirst}
            </p>
            <p>
              {dataProducts[params.id].desSecond}
            </p>
          </div>
        </div>
      )}


    </>
  )
}

export default ItemInfo

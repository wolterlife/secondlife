import React, {useState} from "react";
import styles from './CartList.module.css'
import {useNavigate} from "react-router-dom";
import PopUp from "../../../../components/PopUp";

const CartList = () => {
  const [cartList] = useState(JSON.parse(localStorage.getItem('cart')));
  const [sum, setSum] = useState(() => {
    let temp = 0;
    for (let key in cartList) temp += (cartList[key].price * cartList[key].quantity);
    return temp;
  });
  const [isVisibleError, setVisibleError] = useState(false);
  const navigate = useNavigate()

  function changeSum() {
    let temp = 0;
    for (let key in cartList) temp += (cartList[key].price * cartList[key].quantity);
    setSum(temp);
  }

  function incCounter(item) {
    item.quantity++;
    localStorage.setItem("cart", JSON.stringify(cartList)) // Сохранение данных
    changeSum()
  }

  function decCounter(item) {
    if (item.quantity === 1) return 0 // Если счётчик = 1, не уменьшать его
    item.quantity--;
    localStorage.setItem("cart", JSON.stringify(cartList)) // Сохранение данных
    changeSum()
  }

  function removeItem(item) {
    cartList.splice(cartList.indexOf(item), 1);
    localStorage.setItem("cart", JSON.stringify(cartList));
    changeSum();
  }

  function createOrder() {
    if (localStorage.getItem("currentUser") !== null) { // Проверка на авторизацию
      navigate('/order')
    } else setVisibleError(true)
  }

  const res = cartList?.map(item =>
    <div key={item.id} className={styles.card}>
      <img src={`/img/Header/${item?.img[0]}.webp`} className={styles.cardImg} alt="Товар"/>
      <div className={styles.cardRight}>
        <div className={styles.cardTop}>
          <p className={styles.cardName}>{item.name}</p>
          <div className={styles.cardTopRight}>
            <div className={styles.countContainer}>
              <button onClick={() => decCounter(item)} className={styles.countButtonFirst}>-</button>
              <p className={styles.countText}>{cartList[cartList.indexOf(item)].quantity}</p>
              <button onClick={() => incCounter(item)} className={styles.countButtonSecond}>+</button>
            </div>
            <p className={styles.cardPriceAll}>{item.price * item.quantity},00р.</p>
            <input
              className={styles.crossBlack}
              alt="Закрыть"
              src="/img/close-cross.jpg"
              type="image"
              onClick={() => removeItem(item)}
            />
          </div>
        </div>
        <p className={styles.cardPrice}>{item.price},00р.</p>
      </div>
    </div>
  )

  return (
    <div className={styles.cartList}>
      {isVisibleError && <PopUp callClose={setVisibleError} message={"Сначала вы должны зарегистрироваться"} title={"Ошибка"} />}
      <div className={styles.leftBlock}>
        <p className={styles.textTop}>Моя корзина</p>
        {res}
      </div>
      <div className={styles.rightBlock}>
        <p className={styles.textTop}>Детали заказа</p>
        <div className={styles.section}>
          <p className={styles.textSum}>Сумма</p>
          <p className={styles.textSum}>{sum},00р.</p>
        </div>
        <div className={styles.section}>
          <p className={styles.textDelivery}>Самовывоз</p>
          <p className={styles.textDelivery}>БЕСПЛАТНО</p>
        </div>
        <p className={styles.textBelarus}>Беларусь</p>
        <select className={styles.select}>
          <option>Личная встреча - Станция метро Октябрьская, Минск, Беларусь</option>
          <option>Платная доставка - 3,00 р.</option>
        </select>
        <div className={styles.sectionLine}>
          <p className={styles.total}>Итого</p>
          <p className={styles.total}>{sum},00 р.</p>
        </div>
        <button onClick={() => createOrder()} className={styles.button}>Оформить платёж</button>
        <div className={styles.lastLine}>
          <img className={styles.imgKey} src="/img/key.jpg" alt="Замок"/>
          <p>Безопасный платеж</p>
        </div>
      </div>
    </div>
  )
}

export default CartList;

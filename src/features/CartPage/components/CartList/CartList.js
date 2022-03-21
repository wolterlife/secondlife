import React, {useState} from "react";
import styles from './CartList.module.css'
import {useNavigate} from "react-router-dom";
import PopUp from "../../../../components/PopUp";

const CartList = () => {
  const [cartList] = useState(JSON.parse(localStorage.getItem('cart')));
  // eslint-disable-next-line no-unused-vars
  const [delivStatus, setDelivStatus] = useState(JSON.parse(localStorage.getItem("orderType")));
  const [sum, setSum] = useState(() => {
    let temp = 0;
    for (let key in cartList) temp += (cartList[key].price * cartList[key].quantity);
    if (JSON.parse(localStorage.getItem("orderType")) === "true") temp = temp + 3; // Если платная доставка + 3 руб
    return temp;
  });
  const [isVisibleError, setVisibleError] = useState(false);
  const [ErrorText, setErrorText] = useState("");
  const navigate = useNavigate()

  function changeSum(v) {
    let temp = 0;
    for (let key in cartList) temp += (cartList[key].price * cartList[key].quantity);
    if ((JSON.parse(localStorage.getItem("orderType")) === "true") || v === 3) temp = temp + 3; // Если платная доставка + 3 руб
    if (v === -3) {
      temp = 0;
      for (let key in cartList) temp += (cartList[key].price * cartList[key].quantity);
    }
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
    if (localStorage.getItem("currentUser") === null) { // Проверка на авторизацию
      setErrorText("Войдите в аккаунт для соверешения покупки");
      setVisibleError(true);
      return 1;
    }

    if (!cartList || cartList.length === 0) {
      setErrorText("Выберите хотя бы один товар");
      setVisibleError(true);
      return 1;
    }
    localStorage.setItem("orderType", JSON.stringify(delivStatus))
    navigate('/order')
  }

  function selectFoo(e) {
    if(e.target.value === "true") changeSum(3);
    else changeSum(-3)
    setDelivStatus(e.target.value);
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
      {isVisibleError && <PopUp callClose={setVisibleError} message={ErrorText} title={"Ошибка"}/>}
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
        <form name="form">
          <select defaultValue={JSON.parse(localStorage.getItem("orderType"))} name="select" className={styles.select} onChange={e => selectFoo(e)}>
            <option value="false">Личная встреча - Станция метро Октябрьская, Минск</option>
            <option value="true">Платная доставка - 3,00 р.</option>
          </select>
        </form>
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

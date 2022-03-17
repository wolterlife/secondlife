import React, {useState} from "react";
import styles from './CartPopUp.module.css';
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const CartPopUp = props => {
  const navigate = useNavigate();
  const [cartList] = useState(JSON.parse(localStorage.getItem('cart')));
  const [sum, setSum] = useState(() => {
    let temp = 0;
    for (let key in cartList) temp += (cartList[key].price * cartList[key].quantity);
    return temp;
  });

  function changeSum() {
    let temp = 0;
    for (let key in cartList) temp += (cartList[key].price * cartList[key].quantity);
    setSum(temp);
  }

  function removeItem(item) {
    cartList.splice(cartList.indexOf(item), 1);
    localStorage.setItem("cart", JSON.stringify(cartList));
    changeSum();
  }

  function incCounter(item) { // Счётчик количества товара в корзине
    item.quantity++;
    localStorage.setItem("cart", JSON.stringify(cartList)) // Сохранение данных
    changeSum()
  }

  function decCounter(item) { // Счётчик количества товара в корзине
    if (item.quantity === 1) return 0 // Если счётчик = 1, не уменьшать его
    item.quantity--;
    localStorage.setItem("cart", JSON.stringify(cartList)) // Сохранение данных
    changeSum()
  }

  const res = cartList?.map(item => // Блок отдельного элемента корзины
    <div key={item.id} className={styles.card}>
      <img src={`/img/Header/${item?.img[0]}.webp`} className={styles.cardImg} alt="Товар"/>
      <div className={styles.cardRight}>
        <div className={styles.cardTopBlock}>
          <p className={styles.cardName}>{item.name}</p>
          <input
            className={styles.crossBlack}
            alt="Закрыть"
            src="/img/close-cross.jpg"
            type="image"
            onClick={() => removeItem(item)}
          />
        </div>
        <p className={styles.cardPrice}>{item.price},00р.</p>
        <div className={styles.countContainer}>
          <button onClick={() => decCounter(item)} className={styles.countButtonFirst}>-</button>
          <p className={styles.countText}>{cartList[cartList.indexOf(item)].quantity}</p>
          <button onClick={() => incCounter(item)} className={styles.countButtonSecond}>+</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className={styles.CartPopUp}>
      <div className={styles.container}>
        <div className={styles.containerBlack}>
          <input
            className={styles.crossWhite}
            alt="Закрыть"
            src="/img/close-cross-white.png"
            type="image"
            onClick={() => props.callCartVisible(false)}
          />
          <p className={styles.textWhite}>Корзина</p>
        </div>
        <div className={styles.cartList}>
          {res}
        </div>
        <div className={styles.cartBottom}>
          <p className={styles.sumText}>Сумма</p>
          <p className={styles.sumTotal}>{sum},00р.</p>
          <div className={styles.buttonContainer}>
            <button onClick={() => navigate("/cart-list")} className={styles.button} type="submit">Смотреть корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPopUp;

CartPopUp.propTypes = {
  callCartVisible: PropTypes.func.isRequired,
}

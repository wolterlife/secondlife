import React, {useState} from "react";
import styles from './CartPopUp.module.css';
import PropTypes from "prop-types";

const CartPopUp = props => {
  const cartList = JSON.parse(localStorage.getItem('cart'));
  // eslint-disable-next-line no-unused-vars
  const [sum, setSum] = useState(() => {
    let temp = 0;
    for (let key in cartList) {
      temp += (cartList[key].price * cartList[key].quantity);
    }
  return temp;
  });



  const res = cartList.map(item => // Блок отдельного элемента корзины
    <div key={item.id} className={styles.card}>
      <img src={`/img/Catalog/${item?.img[0]}.png`} className={styles.cardImg} alt="Товар"/>
      <div className={styles.cardRight}>
        <p className={styles.cardName}>{item.name}</p>
        <p className={styles.cardPrice}>{item.price},00р.</p>
        <div className={styles.countContainer}>
          <button className={styles.countButtonFirst}>-</button>
          <p className={styles.countText}>{item.quantity}</p>
          <button className={styles.countButtonSecond}>+</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className={styles.CartPopUp}>
      <div className={styles.container}>
        <div className={styles.containerBlack}>
          <input
            className={styles.cross}
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
        <p className={styles.sumText}>Сумма</p>
        <p className={styles.sumTotal}>{sum},00р.</p>
      </div>
    </div>
  )
}

export default CartPopUp;

CartPopUp.propTypes = {
  callCartVisible: PropTypes.func.isRequired,
}

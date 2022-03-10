import React from "react";
import styles from './CartPopUp.module.css';
import PropTypes from "prop-types";

const CartPopUp = props => {
  // eslint-disable-next-line no-unused-vars
  const cartList = localStorage.getItem('cart');

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
      </div>
    </div>
  )
}

export default CartPopUp;

CartPopUp.propTypes = {
  callCartVisible: PropTypes.func.isRequired,
}

/* eslint-disable react/prop-types */
import React from "react";
import styles from './PopUpOrder.module.css'

const PopUpOrder = props => {
  const res = props.order.map(item =>
    <div key={item.id} className={styles.itemContainer}>
      <p>{item.name}</p>
      <div className={styles.rightContainer}>
        <img src={`/img/Header/${item?.img[0]}.webp`} className={styles.itemImg} alt="Товар"/>
        <p className={styles.textQuantity}>x{item.quantity}</p>
      </div>
    </div>
  )

  let cartList = props.order;
  let sum = 0;
  for (let key in cartList) sum += (cartList[key].price * cartList[key].quantity);
  console.log(sum);

  return (
    <div className={styles.PopUpOrder}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <p className={styles.form__text}>Заказ на сумму: {sum} BYN</p>
          <input
            className={styles.img}
            alt="Закрыть"
            src="/img/close-cross.jpg"
            type="image"
            onClick={() => props.setPopUpVisible(false)}
          />
        </div>
        <div>{res}</div>
      </div>
    </div>
  )
}

export default PopUpOrder;

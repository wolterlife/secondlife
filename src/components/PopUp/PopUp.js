import React from "react";
import styles from './PopUp.module.css';
import propTypes from 'prop-types';

const PopUp = props => {
  return (
    <div className={styles.PopUpOrder}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <p className={styles.form__text}>Ошибка</p>
          <input
            className={styles.img}
            alt="Закрыть"
            src="img/close-cross.jpg"
            type="image"
            onClick={() => props.callClose(false)}
          />
        </div>
        <p style={{textAlign: "center"}}>{props.message}</p>
      </div>
    </div>
  );
};

export default PopUp;

PopUp.propTypes = {
  callClose: propTypes.func.isRequired,
  message: propTypes.string.isRequired,
}

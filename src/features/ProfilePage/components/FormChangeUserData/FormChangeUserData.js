import React from "react";
import styles from './FormChangeUserData.module.css';

const FormChangeUserData = () => {
  return (
    <form className={styles.form}>
      <div className={styles.line}>
        <div className={styles.labelAndInput}>
          <label className={styles.label} htmlFor="firstName">Имя</label>
          <input className={styles.input} name="firstName" type="text"/>
        </div>
        <div className={styles.labelAndInputSecond}>
          <label className={styles.label} htmlFor="firstName">Фамилия</label>
          <input className={styles.input} name="firstName" type="text"/>
        </div>
      </div>

      <div className={styles.line}>
        <div className={styles.labelAndInput}>
          <label className={styles.label} htmlFor="firstName">Эл. почта</label>
          <input className={styles.input} name="firstName" type="email"/>
        </div>
        <div className={styles.labelAndInputSecond}>
          <label className={styles.label} htmlFor="firstName">Телефон</label>
          <input className={styles.input} name="firstName" type="tel"/>
        </div>
      </div>
      <div className={styles.buttonsSections}>
        <input className={styles.buttonLeft} type="button" value="Сбросить" />
        <input className={styles.buttonRight} type="button" value="Обновить" />
      </div>
    </form>
  )
}

export default FormChangeUserData;

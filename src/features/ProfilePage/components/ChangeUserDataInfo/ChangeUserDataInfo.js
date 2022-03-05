import React from "react";
import styles from './ChangeUserDataInfo.module.css';
import FormChangeUserData from "../FormChangeUserData";

const ChangeUserDataInfo = () => {
  const currEmail = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className={styles.container}>
      <p className={styles.textMyAccount}>Мой аккаунт</p>
      <p className={styles.textSecondLine}>Просмотрите и отредактируйте сведения о себе.</p>
      <p className={styles.textAccount}>Аккаунт</p>
      <p className={styles.textSecond}>Обновите и отредактируйте информацию, которой вы делитесь с сообществом.</p>
      <p className={styles.textSecondWithOutSpace}>Эл. почта для входа:</p>
      <p className={styles.textSecondWithOutSpace}>{currEmail}</p>
      <p className={styles.textSecondWithOutSpaceGray}>Адрес эл. почты, используемый для входа, нельзя изменить</p>
      <FormChangeUserData />
    </div>
  )
}

export default ChangeUserDataInfo;

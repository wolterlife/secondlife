/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import styles from './FormChangeUserData.module.css';
import {database, onValue, ref, set, push, remove} from "../../../../util/firebase";
import PopUp from "../../../../components/PopUp";
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

const FormChangeUserData = props => {
  const navigate = useNavigate();
  const [formFirstName, setFormFirstName] = useState("");
  const [formSecondName, setSecondName] = useState("");
  const [formEmail, setFormEmail] = useState(JSON.parse(localStorage.getItem("currentUser")));
  const [formPhone, setFormPhone] = useState("");
  const [oldDataMails, setOldDataMails] = useState([]);
  const [isVisibleError, setVisibleError] = useState(false);
  const [ErrorText, setErrorText] = useState("");
  const [ErrorTitle, setErrorTitle] = useState("");
  const [oldDataPASS, setOldDataPass] = useState([])

  useEffect(() => { // Получение cписка почт
    onValue(ref(database, 'users/'), snapshot => {
      if (snapshot.val() !== null) setOldDataMails(Object.values(snapshot.val()));
    });
  }, []);

  useEffect(() => { // Получение cписка почт
    onValue(ref(database, 'usersAndPass/'), snapshot => {
      if (snapshot.val() !== null) setOldDataPass(Object.values(snapshot.val()));
    });
  }, []);

  const resetFoo = () => {
    let oldMail = JSON.parse(localStorage.getItem("currentUser")); // Получение старой почты для замены
    let oldPass = oldDataPASS[oldDataPASS.findIndex(target => target.email === oldMail)].pass
    console.log(oldDataPASS);
    let idxUserPass = oldDataPASS.findIndex(target => target.email === oldMail)
    console.log(idxUserPass);
    console.log([{pass: oldPass, email: formEmail}]);
  }

  const updateFoo = () => {
    let oldMail = JSON.parse(localStorage.getItem("currentUser")); // Получение старой почты для замены
    if (formEmail !== "") { // Проверка  почты на пустой ввод
      if (formEmail.includes("@")) { // Проверка почты на валидность
        if (!Object.values(oldDataMails).includes(formEmail) || formEmail !== localStorage.getItem("currentUser")) { // Проверка почты на уникальность
          let userInfoObj = {
            formEmail,
            formPhone,
            formFirstName,
            formSecondName,
          }

          let idxUserPass = oldDataPASS.findIndex(target => target.email === oldMail)
          console.log(idxUserPass);
          let oldPass = oldDataPASS[oldDataPASS.findIndex(target => target.email === oldMail)].pass
          let newObjForPass = [{oldPass, formEmail}]
          /* ----------------------------------
               Добавить смену данных в бд userPass userInfo
             ----------------------------------
          */

          set(ref(database, 'users/' + oldDataMails.indexOf(oldMail)), formEmail); // Добавление в БД почт
          set(ref(database, 'usersAndPass/' + idxUserPass), {pass: oldPass, email: formEmail}); // Добавление в БД паролей с почтами
          set(ref(database, 'usersInfo/' + idxUserPass), userInfoObj); // Добавление в БД users info
          localStorage.setItem('currentUser', JSON.stringify(formEmail)); // Добавление данных в локальную память браузера

          setErrorTitle("Информация");
          setErrorText("Данные успешно изменены!");
          setVisibleError(true);
          props.callChangeTopEmail(formEmail);
        } else {
          setErrorTitle("Ошибка");
          setErrorText("Данный адрес уже занят");
          setVisibleError(true);
        }
      } else {
        setErrorTitle("Ошибка");
        setErrorText("Введите корректную почту");
        setVisibleError(true);
      }
    } else {
      setErrorTitle("Ошибка");
      setErrorText("Заполните все поля");
      setVisibleError(true);
    }
  }

  return (
    <form className={styles.form}>
      {isVisibleError && <PopUp callClose={setVisibleError} message={ErrorText} title={ErrorTitle}/>}
      <div className={styles.line}>
        <div className={styles.labelAndInput}>
          <label className={styles.label} htmlFor="firstName">Имя</label>
          <input className={styles.input} name="firstName" type="text"
                 onChange={event => setFormFirstName(event.target.value)}/>
        </div>
        <div className={styles.labelAndInputSecond}>
          <label className={styles.label} htmlFor="firstName">Фамилия</label>
          <input className={styles.input} name="firstName" type="text"
                 onChange={event => setSecondName(event.target.value)}/>
        </div>
      </div>

      <div className={styles.line}>
        <div className={styles.labelAndInput}>
          <label className={styles.label} htmlFor="firstName">Эл. почта</label>
          <input className={styles.input} name="firstName" type="email"
                 onChange={event => setFormEmail(event.target.value)} defaultValue={formEmail}/>
        </div>
        <div className={styles.labelAndInputSecond}>
          <label className={styles.label} htmlFor="firstName">Телефон</label>
          <input className={styles.input} name="firstName" type="tel"
                 onChange={event => setFormPhone(event.target.value)}/>
        </div>
      </div>
      <div className={styles.buttonsSections}>
        <input className={styles.buttonLeft} type="button" value="Сбросить" onClick={resetFoo}/>
        <input className={styles.buttonRight} type="button" value="Обновить" onClick={updateFoo}/>
      </div>
    </form>
  )
}

export default FormChangeUserData;

FormChangeUserData.propTypes = {
  callChangeTopEmail: PropTypes.func.isRequired,
}


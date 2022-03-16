/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import {Formik, Field, Form} from 'formik';
import './FormOrder.css';
import {useNavigate} from "react-router-dom";
import {database, onValue, ref} from "../../../../util/firebase";
import PopUp from "../../../../components/PopUp";
import styles from "../../../ProfilePage/components/FormChangeUserData/FormChangeUserData.module.css";


const FormOrder = () => {
  const navigate = useNavigate();
  const [oldUsersInfo, setOldUsersInfo] = useState([]);
  const [isVisibleError, setVisibleError] = useState(false);
  const [ErrorText, setErrorText] = useState("");
  const [TitleText, setTitleText] = useState("");

  // ############################## Данные с БД #####################################################
  useEffect(() => { // Получение cписка почт
    onValue(ref(database, 'users/'), snapshot => {
      if (snapshot.val() !== null) setOldDataMails(Object.values(snapshot.val()));
    });
  }, []);

  useEffect(() => { // Получение cписка почт с паролями
    onValue(ref(database, 'usersAndPass/'), snapshot => {
      if (snapshot.val() !== null) setOldDataPass(Object.values(snapshot.val()));
    });
  }, []);

  useEffect(() => { // Получение cписка доп инфы
    onValue(ref(database, 'usersInfo/'), snapshot => {
      if (snapshot.val() !== null) setOldDataInfo(Object.values(snapshot.val()));
    });
  }, []);
  // ###############################################################################################

  // ############################## Инициация значений формы #######################################
  const [oldDataMails, setOldDataMails] = useState([]);
  const [oldDataPASS, setOldDataPass] = useState([])
  const [oldDataInfo, setOldDataInfo] = useState([]);

  const [formFirstName, setFormFirstName] = useState(() => { // Получение данных для автозаполнения
    if (JSON.parse(localStorage.getItem("userInfo"))?.formFirstName === undefined) return ""
    else return JSON.parse(localStorage.getItem("userInfo"))?.formFirstName;
  });

  const [formSecondName, setFormSecondName] = useState(() => { // Получение данных для автозаполнения
    if (JSON.parse(localStorage.getItem("userInfo"))?.formSecondName === undefined) return ""
    else return JSON.parse(localStorage.getItem("userInfo"))?.formSecondName;
  });

  const [formEmail, setFormEmail] = useState(() => { // Получение данных для автозаполнения
    if (JSON.parse(localStorage.getItem("currentUser")) === undefined) return ""
    else return JSON.parse(localStorage.getItem("currentUser"));
  });

  const [formPhone, setFormPhone] = useState(() => { // Получение данных для автозаполнения
    if (JSON.parse(localStorage.getItem("userInfo"))?.formPhone === undefined) return ""
    else return JSON.parse(localStorage.getItem("userInfo"))?.formPhone;
  });

  const [formDest, setFormDest] = useState("");

  // ########################################################################################

  function createOrder(values) {
    console.log(values);
    console.log('rere')
  }

  return (
    <div className="FormOrder__container">
      {isVisibleError && <PopUp callClose={setVisibleError} message={ErrorText} title={TitleText}/>}
      <div className="FormOrderCenter">
        <p className="FormOrder__largeText">Оформление заказа</p>
        <div>
          <div className="FormOrder__labelAndInput">
            <label className="Formik__label" htmlFor="firstName">Имя</label>
            <input className="Formik__input" name="firstName" type="text"
                   value={formFirstName?.toString()}
                   defaultValue={oldDataInfo[oldDataPASS.findIndex(target => target.email === JSON.parse(localStorage.getItem("currentUser")))]?.formFirstName}
                   onChange={event => setFormFirstName(event.target.value)}/>
          </div>
          <div className="FormOrder__labelAndInput">
            <label className="Formik__label" htmlFor="secondName">Фамилия</label>
            <input className="Formik__input" name="secondName" type="text"
                   value={formSecondName?.toString()}
                   defaultValue={oldDataInfo[oldDataPASS.findIndex(target => target.email === JSON.parse(localStorage.getItem("currentUser")))]?.formSecondName}
                   onChange={event => setFormSecondName(event.target.value)}/>
          </div>
        </div>
          <div className="FormOrder__labelAndInput">
            <label className="Formik__label" htmlFor="email">Эл. почта</label>
            <input className="Formik__input" name="email" type="email"
                   value={formEmail?.toString()}
                   onChange={event => setFormEmail(event.target.value)}/>
          </div>
          <div className="FormOrder__labelAndInput">
            <label className="Formik__label" htmlFor="tel">Телефон</label>
            <input className="Formik__input" name="tel" type="tel"
                   value={formPhone?.toString()}
                   defaultValue={oldDataInfo[oldDataPASS.findIndex(target => target.email === JSON.parse(localStorage.getItem("currentUser")))]?.formPhone}
                   onChange={event => setFormPhone(event.target.value)}
            />
          </div>
        <div className="FormOrder__labelAndInput">
          <label className="Formik__label" htmlFor="address">Адрес доставки</label>
          <input className="Formik__input" name="address" type="text"
                 value={formDest?.toString()}
                 onChange={event => setFormDest(event.target.value)}
          />
        </div>
          <button className="FormOrder__button" type="button" onClick={() => console.log('rere')}>Сделать заказ</button>
      </div>
    </div>
  )
}

export default FormOrder;

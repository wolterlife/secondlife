import React, {useEffect, useState} from "react";
import styles from './FormChangeUserData.module.css';
import {database, onValue, ref, set} from "../../../../util/firebase";
import PopUp from "../../../../components/PopUp";
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";

const FormChangeUserData = props => {
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

  const [oldDataMails, setOldDataMails] = useState([]);
  const [isVisibleError, setVisibleError] = useState(false);
  const [ErrorText, setErrorText] = useState("");
  const [ErrorTitle, setErrorTitle] = useState("");
  const [oldDataPASS, setOldDataPass] = useState([])
  const [oldDataInfo, setOldDataInfo] = useState([]);
  const navigate = useNavigate();

  const admFoo = () => {
    navigate("/admin");
  }

  const exitFoo = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    navigate('/');
    window.scrollBy(0, -2000);
    window.scrollBy(0, -2000);
  }

  const resetFoo = () => {
    let oldMail = JSON.parse(localStorage.getItem("currentUser")); // Получение старой почты для замены
    let idxUserPass = oldDataPASS.findIndex(target => target.email === oldMail)
    setFormFirstName(oldDataInfo[idxUserPass].formFirstName); // Установка значений по умолчанию
    setFormSecondName(oldDataInfo[idxUserPass].formSecondName);
    setFormPhone(oldDataInfo[idxUserPass].formPhone);
    setFormEmail(oldDataInfo[idxUserPass].formEmail);
  }

  const updateFoo = () => {
    let oldMail = JSON.parse(localStorage.getItem("currentUser")); // Получение старой почты для замены
    if (formEmail !== "") { // Проверка  почты на пустой ввод
      if (formEmail.includes("@")) { // Проверка почты на валидность
        if (!Object.values(oldDataMails).includes(formEmail) || formEmail !== localStorage.getItem("currentUser")) { // Проверка почты на уникальность
          let userInfoObj = { // Создание объекта, который будет отправляться в БД
            formEmail,
            formPhone,
            formFirstName,
            formSecondName,
          }

          localStorage.setItem("userInfo", JSON.stringify(userInfoObj)); // Хранение данных о пользователе локально для автозаполения
          let idxUserPass = oldDataPASS.findIndex(target => target.email === oldMail) // Индексы для поиска в БД
          let oldPass = oldDataPASS[oldDataPASS.findIndex(target => target.email === oldMail)].pass
          set(ref(database, 'users/' + oldDataMails.indexOf(oldMail)), formEmail); // Добавление в БД почт
          set(ref(database, 'usersAndPass/' + idxUserPass), {pass: oldPass, email: formEmail}); // Добавление в БД паролей с почтами
          set(ref(database, 'usersInfo/' + idxUserPass), userInfoObj); // Добавление в БД users info
          localStorage.setItem('currentUser', JSON.stringify(formEmail)); // Добавление данных в локальную память браузера
          setErrorTitle("Информация");
          setErrorText("Данные успешно изменены!");
          setVisibleError(true);
          props.callChangeTopEmail(formEmail); // Изменение почты вверху страницы
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
                 value={formFirstName?.toString()}
                 defaultValue={oldDataInfo[oldDataPASS.findIndex(target => target.email === JSON.parse(localStorage.getItem("currentUser")))]?.formFirstName}
                 onChange={event => setFormFirstName(event.target.value)}/>
        </div>
        <div className={styles.labelAndInputSecond}>
          <label className={styles.label} htmlFor="secondName">Фамилия</label>
          <input className={styles.input} name="secondName" type="text"
                 value={formSecondName?.toString()}
                 defaultValue={oldDataInfo[oldDataPASS.findIndex(target => target.email === JSON.parse(localStorage.getItem("currentUser")))]?.formSecondName}
                 onChange={event => setFormSecondName(event.target.value)}/>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.labelAndInput}>
          <label className={styles.label} htmlFor="email">Эл. почта</label>
          <input className={styles.input} name="email" type="email"
                 value={formEmail?.toString()}
                 onChange={event => setFormEmail(event.target.value)}/>
        </div>
        <div className={styles.labelAndInputSecond}>
          <label className={styles.label} htmlFor="tel">Телефон</label>
          <input className={styles.input} name="tel" type="tel"
                 value={formPhone?.toString()}
                 defaultValue={oldDataInfo[oldDataPASS.findIndex(target => target.email === JSON.parse(localStorage.getItem("currentUser")))]?.formPhone}
                 onChange={event => setFormPhone(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.buttonsSections}>
        <input className={styles.buttonExit} type="button" value="Выход" onClick={exitFoo}/>
        <div>
          <input className={styles.buttonAdmin} type="button" value="Админ" onClick={admFoo}/>
          <input className={styles.buttonLeft} type="button" value="Сбросить" onClick={resetFoo}/>
          <input className={styles.buttonRight} type="button" value="Обновить" onClick={updateFoo}/>
        </div>
      </div>
    </form>
  )
}

export default FormChangeUserData;

FormChangeUserData.propTypes = {
  callChangeTopEmail: PropTypes.func.isRequired,
}


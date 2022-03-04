import React, {useEffect, useState} from "react";
import {Formik, Field, Form} from 'formik';
import './FormRegistration.css';
import {useNavigate} from "react-router-dom";
import {database, set, onValue, ref} from "../../../../util/firebase";
import PopUp from "../../../../components/PopUp";

const FormRegistration = () => {
  const navigate = useNavigate();
  const [oldDataMails, setOldDataMails] = useState();
  const [oldUsersAll, setOldUsersAll] = useState();
  const [isVisibleError, setVisibleError] = useState(false);
  const [ErrorText, setErrorText] = useState("");

  useEffect(() => { // Получение cписка почт
    onValue(ref(database, 'users/'), snapshot => {
      if (snapshot.val() !== null) setOldDataMails(Object.values(snapshot.val()));
    });
  }, []);

  useEffect(() => { // Получение данных из базы данных
    onValue(ref(database, 'usersAndPass/'), snapshot => {
      if (snapshot.val() !== null) setOldUsersAll(Object.values(snapshot.val()));
    });
  }, []);


  function createAcc(values) {
    if (values.email !== "" && values.pass !== "") { // Проверка на пустой ввод
      if (!Object.values(oldDataMails).includes(values.email)) { // Проверка на уникальность и пустоты почты
        oldDataMails.push(values.email)
        oldUsersAll.push(values);
        set(ref(database, 'users/'), oldDataMails); // Добавление в БД почт
        set(ref(database, 'usersAndPass/'), oldUsersAll) // Добавление в БД пользователей
        localStorage.setItem('currentUser', JSON.stringify(values.email)); // Хранение в локальной памяти данных о текущем пользователе
        navigate('/'); // Перенаправление
      } else {
        setErrorText("Данный адрес уже занят");
        setVisibleError(true);
      }
    } else {
      setErrorText("Заполните все поля");
      setVisibleError(true);
    }
  }

  return (
    <div className="FormRegistration__container">
      {isVisibleError && <PopUp callClose={setVisibleError} message={ErrorText} title="Ошибка"/>}
      <div className="FormRegistrationCenter">
        <p className="FormRegistration__largeText">Зарегистрироваться</p>
        <div className="FormRegistration__textWithLink">
          <p className="textWithLink__first">Уже есть аккаунт?</p>
          <button onClick={() => navigate('/login')} className="textWithLink__second">Войти</button>
        </div>
        <div>
          <Formik
            initialValues={{
              email: '',
              pass: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 400));
              createAcc(values);
            }}
          >
            <Form className="FormRegistration__inside">
              <label className="Formik__label" htmlFor="email">Эл. почта</label>
              <Field
                className="Formik__input"
                id="email"
                name="email"
                type="email"
              />

              <label className="Formik__label" htmlFor="pass">Пароль</label>
              <Field
                className="Formik__input"
                id="pass"
                name="pass"
                placeholder=""
                type="password"
              />

              <button className="FormRegistration__button" type="submit">Зарегистрироваться</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default FormRegistration;

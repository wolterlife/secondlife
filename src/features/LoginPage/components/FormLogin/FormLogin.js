import React, {useEffect, useState} from "react";
import {Formik, Field, Form} from 'formik';
import './FormLogin.css';
import {useNavigate} from "react-router-dom";
import {database, onValue, ref} from "../../../../util/firebase";
import PopUp from "../../../../components/PopUp";


const FormLogin = () => {
  const navigate = useNavigate();
  const [oldUsersAll, setOldUsersAll] = useState();
  const [isVisibleError, setVisibleError] = useState(false);
  const [ErrorText, setErrorText] = useState("");

  useEffect(() => { // Получение данных из базы данных
    onValue(ref(database, 'usersAndPass/'), snapshot => {
      if (snapshot.val() !== null) setOldUsersAll(Object.values(snapshot.val()));
    });
  }, []);

  function loginAcc(values) {
    let isAccess = false;
    for (let key in oldUsersAll) { // Проверка авторизации
      if (oldUsersAll[key].email === values.email && oldUsersAll[key].pass === values.pass) isAccess = true;
    }
    if (isAccess) {
      localStorage.setItem('currentUser', JSON.stringify(values.email));
      navigate('/')
    } else {
      setErrorText("Имя пользователя или пароль введены неверно");
      setVisibleError(true);
    }
  }

  return (
    <div className="FormLogin__container">
      {isVisibleError && <PopUp callClose={setVisibleError} message={ErrorText} />}
      <div className="FormLoginCenter">
        <p className="FormLogin__largeText">Войти</p>
        <div className="FormLogin__textWithLink">
          <p className="textWithLink__first">Впервые на сайте?</p>
          <button onClick={() => navigate('/registration')} className="textWithLink__second">Зарегистрироваться</button>
        </div>
        <div>
          <Formik
            initialValues={{
              email: '',
              pass: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 400));
              loginAcc(values);
            }}
          >
            <Form className="FormLogin__inside">
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

              <button className="FormLogin__button" type="submit">Войти</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default FormLogin;

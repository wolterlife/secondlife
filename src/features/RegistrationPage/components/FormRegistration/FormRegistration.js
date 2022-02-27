import React from "react";
import {Formik, Field, Form} from 'formik';
import './FormRegistration.css';
import {useNavigate} from "react-router-dom";

const FormRegistration = () => {
  const navigate = useNavigate();
  return (
    <div className="FormRegistration__container">
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
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
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

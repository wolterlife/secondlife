import React from "react";
import {Formik, Field, Form} from 'formik';
import './FormLogin.css';

const FormLogin = () => {
  return (
    <div className="FormLogin__container">
      <div className="FormLoginCenter">
        <p className="FormLogin__largeText">Войти</p>
        <div className="FormLogin__textWithLink">
          <p className="textWithLink__first">Впервые на сайте?</p>
          <button className="textWithLink__second">Зарегистрироваться</button>
        </div>
        <div>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
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

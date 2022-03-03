import React from "react";
import './FormContact.css'
import {Field, Form, Formik} from "formik";

const FormContact = () => {

  function sendForm(values) {
    if (values.email !== "" && values.message !== "") {
      console.log(values);
    }
    else console.log('Заполните все обязательные поля');
  }

  return (
    <div className="formContact">
      <p className="formContact__title">Свяжитесь с нами</p>
      <div>
        <Formik
          initialValues={{
            firstName: '',
            secondName: '',
            email: '',
            message: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 400));
            sendForm(values);
          }}
        >
          <Form className="FormContact__inside">
            <label className="FormikContact__label" htmlFor="firstName">Имя</label>
            <Field
              className="FormikContact__input"
              id="firstName"
              name="firstName"
              type="firstName"
            />

            <label className="FormikContact__label" htmlFor="secondName">Фамилия</label>
            <Field
              className="FormikContact__input"
              id="secondName"
              name="secondName"
              type="secondName"
            />

            <label className="FormikContact__label" htmlFor="email">Эл. почта *</label>
            <Field
              className="FormikContact__input"
              id="email"
              name="email"
              type="email"
            />

            <label className="FormikContact__label" htmlFor="message">Напишите сообщение *</label>
            <Field
              component="textarea"
              rows="3"
              className="FormikContact__input--large"
              id="message"
              name="message"
              placeholder=""
              type="message"
            />

            <button className="FormContact__button" type="submit">Отправить</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default FormContact;

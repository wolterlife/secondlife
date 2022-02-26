import React from "react";
import './ListQuestions.css';

const ListQuestions = () => {
  return (
    <div className="ListQuestions">
      <h1 className="container__question">Доставка</h1>
      <div className="outDiv">
        <p className="container__answer">Получить заказ можно в Минске при личной встрече.<br/>
          Доставка по Беларуси осуществляется через европочту / белпочту по полной предоплате. Отправим в течении 1-3
          дней
          и предоставим трек-код для отслеживания посылки! </p>
      </div>
      <h1 className="container__question">Бронь</h1>
      <div className="outDiv"><p className="container__answer">Забронировать вещь на сутки Вы можете следующим образом:
        Скинуть предоплату на
        карту в размере 50-100% от стоимости вещи. На следующие сутки бронь сгорает.
      </p>
      </div>
      <h1 className="container__question">Примерка</h1>
      <div className="outDiv"><p className="container__answer">Есть примерка в Минске, станция метро Октябрьская. Точный
        адрес отсылаем после
        выбранной даты и времени встречи.</p>
      </div>
      <h1 className="container__question">Оплата</h1>
      <div className="outDiv"><p className="container__answer">Оплата возможна наличными и переводом на карту. При
        пересылке оплата 100%. Личная
        встреча отплата <br/> при встрече
        Оплата при пересылке осуществляется 100% переводом за выбранную(ые) вещь. Оплата при личной встрече
        осуществляется переводом на карту или наличными.</p>
      </div>
      <h1 className="container__bottom-text">
        Остались вопросы задавайте в окне контакты или в социальных сетях! :)
      </h1>
    </div>
  )
}

export default ListQuestions;

import React from "react";
import './ShortList.css';

const ShortList = () => {
  const servProducts = [ // 12 (id11)
    {
      id: 0,
      name: "Сумка",
      price: 45,
      desFirst: "Черная базовая сумка",
      desSecond: "Кожзам",
      img: ["22", "22.1"]
    }, {
      id: 1,
      name: "Топ с длинными рукавами",
      price: 35,
      desFirst: "Топ в черном и фиолетовом цвете",
      desSecond: "Размер S,M.",
      img: ["24", "24.1"]
    }, {
      id: 2,
      name: "Кофта",
      price: 50,
      desFirst: "Приятная к телу кофта на замке с принтом.",
      desSecond: "Размер S,M,L.",
      img: ["23", "23.1"]
    },

  ]

  const res = servProducts.map(item =>
    <div key={item.id} className="list__card">
      <div className="card_img-container">
        <img className="card__img--front" src={`img/Catalog/${item.img[0]}.png`} alt=""/>
        <img className="card__img--behind" src={`img/Catalog/${item.img[1]}.png`} alt=""/>
      </div>
      <p className="card__title">{item.name}</p>
      <p className="card__price">{item.price},00 руб</p>
    </div>
  );

  return (
    <div className="list">
      {res}
    </div>
  )
}

export default ShortList;

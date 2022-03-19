import React, {useEffect, useState} from "react";
import './ProductList.css';
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import {database, onValue, ref} from "../../util/firebase";

const ProductList = props => {
  const navigate = useNavigate();
  const [servProducts, setProductList] = useState([]);

  useEffect(() => { // Получение списка товаров. Slice оставляет только первые 12
    onValue(ref(database, 'productsAll/'), snapshot => {
      if (snapshot.val() !== null && props.full === false) setProductList(Object.values(snapshot.val()).slice(0,12));
      if (snapshot.val() !== null && props.full === true) setProductList(Object.values(snapshot.val()));
    });
  }, []);

  function selectItem(id) {
    navigate(`/item/${id}`);
  }

  const res = servProducts.map(item =>
    <div key={item.id} id={item.id} className="list__card" onClick={() => selectItem(item.id)}>
      <div className="card_img-container">
        <img className="card__img--front" src={`/img/Header/${item.img[0]}.webp`} alt=""/>
        <img className="card__img--behind" src={`/img/Header/${item.img[1]}.webp`} alt=""/>
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

ProductList.propTypes = {
  full: PropTypes.bool.isRequired,
}

export default ProductList;

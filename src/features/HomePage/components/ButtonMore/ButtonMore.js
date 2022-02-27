import React from "react";
import './ButtonMore.css';
import {useNavigate} from "react-router-dom";

const ButtonMore = () => {
  const navigate = useNavigate();
  return (
    <div className="button" onClick={() => navigate('shop')}>
      <p className="button__title">Ещё...</p>
    </div>
  )
}

export default ButtonMore

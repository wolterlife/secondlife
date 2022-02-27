import React from "react";
import './CloseButton.css';
import {useNavigate} from "react-router-dom";

const CloseButton = () => {
  const navigate = useNavigate();

  const navBack = () => {
    navigate('/')
  }

  return (
    <div className="closeButtonContainer">
      <input className="closeButton" type="image" src="img/close-cross.jpg" alt="Закрыть" onClick={navBack}/>
    </div>
  )
}

export default CloseButton

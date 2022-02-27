import React from "react";
import './CloseButton.css';

const CloseButton = () => {
  return (
    <div className="closeButtonContainer">
      <input className="closeButton" type="image" src="img/close-cross.jpg" alt="Закрыть"/>
    </div>
  )
}

export default CloseButton

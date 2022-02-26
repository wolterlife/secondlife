import React from "react";
import './ButtonMore.css';

const ButtonMore = () => {
  return (
    <div className="button" onClick={() => console.log('Go to the shop...')}>
      <p className="button__title">Ещё...</p>
    </div>
  )
}

export default ButtonMore

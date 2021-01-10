import React from "react";

const Counter = props => {
  return (
    <div className="stepper-input">
      <a href="#" className="decrement" onClick={props.handleClickDecrement}>–</a>
      <input
        type="number"
        className="quantity"
        value={props.productQuantity}
        onChange={props.handleChangeInput}
      />
      <a href="#" className="increment" onClick={props.handleClickIncrement}>+</a>
    </div>
  );
}

export default Counter;

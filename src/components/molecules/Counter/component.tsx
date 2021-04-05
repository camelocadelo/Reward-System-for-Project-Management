import React, { useState, useEffect } from 'react';
import './index.scss';
import { CounterProps } from './types';

function Counter(props: CounterProps): JSX.Element {
  const { onChangeQuantity } = props;
  const [quantity, setQuantity] = useState<number>(0);

  const handleReduce = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    onChangeQuantity(quantity);
  }, [quantity]);

  return (
    <div className="counterContainer">
      <div
        className="counter"
        style={{ cursor: quantity > 0 ? 'pointer' : 'auto' }}
        onClick={handleReduce}
      >
        -
      </div>
      <div className="counter"> {quantity} </div>
      <div className="counter" style={{ cursor: 'pointer' }} onClick={handleIncrease}>
        +
      </div>
    </div>
  );
}

export default Counter;

import React from 'react';
import './index.scss';
import { CounterProps } from './types';

function Counter(props: CounterProps): JSX.Element {
  const { onChangeQuantity, propQuantity } = props;
  // const [quantity, setQuantity] = useState<number>(0);

  const handleReduce = () => {
    if (propQuantity > 0) {
      onChangeQuantity(propQuantity - 1);
    }
  };

  const handleIncrease = () => {
    onChangeQuantity(propQuantity + 1);
  };

  // useEffect(() => {
  //   onChangeQuantity(quantity);
  // }, [quantity]);

  return (
    <div className="counterContainer">
      <div
        className="counter"
        style={{ cursor: propQuantity > 0 ? 'pointer' : 'auto' }}
        onClick={handleReduce}
      >
        -
      </div>
      <div className="counter"> {propQuantity} </div>
      <div className="counter" style={{ cursor: 'pointer' }} onClick={handleIncrease}>
        +
      </div>
    </div>
  );
}

export default Counter;

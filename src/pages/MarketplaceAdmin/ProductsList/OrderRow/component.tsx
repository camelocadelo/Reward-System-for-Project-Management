import React from 'react';
import { OrderRowProps } from './types';

function OrderRow(props: OrderRowProps): JSX.Element {
  const { name, chosenSize, pk, quantity, status } = props;
  return (
    <tr className="table-row" style={{ justifyContent: 'space-around' }}>
      <td className="table-cell" style={{ margin: 0 }}>
        {name}
      </td>
      <td className="table-cell" style={{ margin: 0 }}>
        {status}
      </td>
      <td className="table-cell" style={{ margin: 0 }}>
        {quantity}
      </td>
      <td className="table-cell" style={{ margin: 0 }}>
        {chosenSize}
      </td>
    </tr>
  );
}

export default OrderRow;

import React from 'react';
import { OrderRowProps } from './types';
import SizeTag from 'components/atoms/SizeTag/component';

function OrderRow(props: OrderRowProps): JSX.Element {
  const { name, chosenSize, pk, quantity, status } = props;
  return (
    <tr className="table-row" style={{ justifyContent: 'space-around' }}>
      <td className="table-cell" style={{ margin: 0, width: '100px' }}>
        {name}
      </td>
      <td className="table-cell" style={{ margin: 0, width: '100px' }}>
        {status}
      </td>
      <td className="table-cell" style={{ margin: 0, width: '100px' }}>
        {quantity}
      </td>
      <td className="table-cell" style={{ margin: 0, width: '100px', textAlign: 'right' }}>
        <div style={{ width: '50%', justifyContent: 'flex-end', display: 'flex' }}>
          <SizeTag size={chosenSize.toLocaleLowerCase()} />
        </div>
      </td>
    </tr>
  );
}

export default OrderRow;

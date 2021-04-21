import React from 'react';
import { MarketplaceOrdersProps } from './types';
import { columns } from './consts';
// import './index.scss';
import OrderRow from 'pages/MarketplaceAdmin/ProductsList/OrderRow/component';

function MarketplaceOrdersTable(props: MarketplaceOrdersProps): JSX.Element {
  const { marketplaceOrders } = props;

  return (
    <div className="marketplace-prizes-table">
      <table>
        <tr
          style={{
            width: '1200px',
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '23px',
          }}
        >
          {columns.map((c, i) => (
            <th
              className="table-header"
              // style={{
              //   marginLeft: '60px',
              //   marginRight: '60px',
              // }}
              key={i}
            >
              {c.title}
            </th>
          ))}
        </tr>
        <tbody className="table-body" style={{ maxHeight: '250px', overflow: 'scroll' }}>
          {marketplaceOrders &&
            marketplaceOrders.map((p: any) => (
              <OrderRow
                key={p.pk}
                pk={p.pk}
                name={p.product_name}
                chosenSize={p.chosen_size}
                quantity={p.quantity}
                status={p.purchase_status}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketplaceOrdersTable;

import React from 'react';
import { MarketplaceProductsProps } from './types';
import { columns } from './consts';
// import './index.scss';
import ProductRow from 'pages/MarketplaceAdmin/ProductsList/ProductRow/component';

function MarketplacePrizesTable(props: MarketplaceProductsProps): JSX.Element {
  const { marketplaceProducts } = props;

  return (
    <div className="marketplace-prizes-table">
      <table>
        <tr
          style={{
            width: '1500px',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '23px',
          }}
        >
          <th
            className="table-header"
            style={{
              width: '450px',
              marginLeft: '60px',
              marginRight: '60px',
            }}
          >
            Name
          </th>
          {columns.map((c, i) => (
            <th
              className="table-header"
              style={{
                width: '280px',
                marginLeft: '60px',
                marginRight: '60px',
              }}
              key={i}
            >
              {c.title}
            </th>
          ))}
        </tr>
        <tbody className="table-body">
          {marketplaceProducts &&
            marketplaceProducts.map((p: any, i: number) => (
              <ProductRow key={i} name={p.name} description={p.description} price={p.price} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketplacePrizesTable;

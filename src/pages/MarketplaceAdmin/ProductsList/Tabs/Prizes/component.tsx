import React from 'react';
import { MarketplaceProductsProps } from './types';
import { columns } from './consts';
// import './index.scss';
import ProductRow from 'pages/MarketplaceAdmin/ProductsList/ProductRow/component';

function MarketplacePrizesTable(props: MarketplaceProductsProps): JSX.Element {
  const { marketplaceProducts, onDeleteProduct } = props;

  const handleProductDelete = (pk: number) => {
    onDeleteProduct(pk);
  };

  return (
    <div className="marketplace-prizes-table">
      <table>
        <tr
          style={{
            maxWidth: '1200px',
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
        <tbody className="table-body" style={{ maxHeight: '250px', overflow: 'scroll' }}>
          {marketplaceProducts &&
            marketplaceProducts.map((p: any) => (
              <ProductRow
                photo={p.photo}
                key={p.pk}
                pk={p.pk}
                name={p.name}
                description={p.description}
                price={p.price}
                category={p.category}
                sizes_available={p.sizes_available}
                onProductDelete={handleProductDelete}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarketplacePrizesTable;

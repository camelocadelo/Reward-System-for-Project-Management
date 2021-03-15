import React from 'react';
import { ProductRowProps } from './types';
import './index.scss';
// import TagItem from 'components/atoms/TagItem/component';
import editIcon from 'assets/images/editproduct.png';
import deleteIcon from 'assets/images/trashproduct.png';
import bookPhoto from 'assets/images/Dummy.jpg';

function ProductRow(props: ProductRowProps): JSX.Element {
  const { name, description, price, category, sizes_available, pk, onProductDelete } = props;

  const handleProductDelete = () => {
    onProductDelete(pk);
  };

  return (
    <tr className="table-row">
      <td
        className="table-cell"
        style={{ width: '400px', justifyContent: 'flex-start', textAlign: 'start' }}
      >
        <div style={{ marginRight: '15px' }}>
          <img
            src={bookPhoto}
            alt="edit"
            width="50px"
            height="50px"
            style={{ borderRadius: '50%', marginBottom: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div> {name} </div>
          <div style={{ marginTop: '10px' }}>
            <span className="typography__variant-subtext"> {description} </span>
          </div>
        </div>
      </td>
      <td className="table-cell"> {price} </td>
      <td className="table-cell"> {category} </td>
      <td className="table-cell">
        {sizes_available.map((s: any) => (
          <div key={s}>
            <span>{s}</span>
          </div>
        ))}
      </td>
      <td className="table-cell">
        <img
          src={editIcon}
          alt="edit"
          // width="90px"
          // height="90px"
          // style={{ borderRadius: '50%', marginBottom: '10px' }}
        />
      </td>
      <td className="table-cell">
        <img
          src={deleteIcon}
          alt="delete"
          onClick={handleProductDelete}
          style={{ cursor: 'pointer' }}
          // width="90px"
          // height="90px"
          // style={{ borderRadius: '50%', marginBottom: '10px' }}
        />
      </td>
    </tr>
  );
}

export default ProductRow;

import React from 'react';
import { SizeTagProps } from './types';
import './index.scss';

function SizeTag(props: SizeTagProps): JSX.Element {
  const { isSelected, size, onClickSize } = props;

  const onClickingSize = () => {
    onClickSize(size);
  };

  return !isSelected ? (
    <div
      className="size-tag"
      style={{
        border: '1px solid #FFB200',
        color: '#FFB200',
        fontSize: '15px',
        cursor: 'pointer',
      }}
      onClick={onClickingSize}
    >
      {size}
    </div>
  ) : (
    <div
      className="size-tag"
      style={{ border: 'none', backgroundColor: '#FFF5CC', color: '#FFB200', fontSize: '15px' }}
      onClick={onClickingSize}
    >
      {size}
    </div>
  );
}

export default SizeTag;

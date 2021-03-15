import React from 'react';
import './index.scss';
import { AddImageButtonProps } from './types';
import AddImageIcon from 'assets/images/add_image.png';

function AddImageButton(props: AddImageButtonProps) {
  const { text, onAddImage } = props;
  return (
    <button className="add-image-button" onClick={onAddImage}>
      <img src={AddImageIcon} style={{ marginRight: '5px' }} />
      <span className="typography__variant-subtext" style={{ color: '#282828' }}>
        {text}
      </span>
    </button>
  );
}

export default AddImageButton;

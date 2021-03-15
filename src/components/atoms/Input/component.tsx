import React from 'react';
import './index.scss';
import { InputProps } from './types';

function Input(props: InputProps): JSX.Element {
  const { label, onInputChange, name, value, placeholder, type } = props;
  return (
    <div>
      <span className="typography__variant-subtext" style={{ fontSize: '16px', color: '#282828' }}>
        {label}
      </span>
      <input
        className="inputText"
        onChange={onInputChange}
        style={{ marginTop: '5px' }}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default Input;

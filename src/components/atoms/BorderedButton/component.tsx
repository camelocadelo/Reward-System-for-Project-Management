import React from 'react';
import './index.scss';
import { BorderedButtonProps } from './types';

function BorderedButton(props: BorderedButtonProps): JSX.Element {
  const { onSendBonuses, text, color } = props;
  return (
    <button
      onClick={onSendBonuses}
      className="blue-button"
      style={{ color: color, border: `1px solid ${color}` }}
    >
      {text}
    </button>
  );
}

export default BorderedButton;

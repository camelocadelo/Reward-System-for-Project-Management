import React from 'react';
import './index.scss';
import { BlueButtonProps } from './types';

function BlueButton(props: BlueButtonProps): JSX.Element {
  const { onSendBonuses } = props;
  return (
    <button onClick={onSendBonuses} className="blue-button">
      Send bonuses
    </button>
  );
}

export default BlueButton;

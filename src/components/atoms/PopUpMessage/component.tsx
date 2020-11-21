import React from 'react';
import { PopUpMessageProps } from './types';
import './index.scss';

function PopUpMessage(props: PopUpMessageProps): JSX.Element {
  const { message } = props;
  return <div className="popup-message"> {message} </div>;
}

export default PopUpMessage;

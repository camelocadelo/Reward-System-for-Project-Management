import React from 'react';
import './index.scss';
import { MainButtonProps } from './types';

function MainButton(props: MainButtonProps): JSX.Element {
  const { onCreateProject, buttonText } = props;
  return (
    <button onClick={onCreateProject} className="main-button">
      {buttonText}
    </button>
  );
}

export default MainButton;

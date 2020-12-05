import React from 'react';
import './index.scss';
import { MainButtonProps } from './types';

function MainButton(props: MainButtonProps): JSX.Element {
  const { onCreateProject, buttonText, bgColor } = props;
  return (
    <button onClick={onCreateProject} className="main-button" style={{ backgroundColor: bgColor }}>
      {buttonText}
    </button>
  );
}

export default MainButton;

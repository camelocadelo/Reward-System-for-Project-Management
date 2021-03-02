import React from 'react';
import './index.scss';
import { MainButtonProps } from './types';

function MainButton(props: MainButtonProps): JSX.Element {
  const { onCreateProject, buttonText, bgColor, textColor } = props;
  return (
    <button onClick={onCreateProject} className="main-button" style={{ backgroundColor: bgColor }}>
      <span className="typography__variant-xsmall" style={{ color: textColor }}>
        {buttonText}
      </span>
    </button>
  );
}

export default MainButton;

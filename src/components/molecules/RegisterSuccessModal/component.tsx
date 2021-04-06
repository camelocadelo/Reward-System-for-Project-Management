import React from 'react';
import './index.scss';
import MainButton from 'components/atoms/MainButton/component';
import { RegisterSuccessModalProps } from './types';
/*  TODO: check if registration text is fit */

function RegisterSuccessModal(props: RegisterSuccessModalProps): JSX.Element {
  const { onClickModalOk, titleText, bodyText } = props;
  return (
    <div className="register-success-modal">
      <div className="register-modal-body">
        <span> {titleText} </span>
        <span> {bodyText} </span>
      </div>
      <MainButton buttonText="Ok" onCreateProject={onClickModalOk} />
    </div>
  );
}

export default RegisterSuccessModal;

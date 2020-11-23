import React from 'react';
import './index.scss';
import MainButton from 'components/atoms/MainButton/component';
import { RegisterSuccessModalProps } from './types';

function RegisterSuccessModal(props: RegisterSuccessModalProps): JSX.Element {
  const { onClickModalOk } = props;
  return (
    <div className="register-success-modal">
      <div className="register-modal-body">
        <span> You have successfully registered! </span>
        <span> Check your email and activate your account </span>
      </div>
      <MainButton buttonText="Ok" onCreateProject={onClickModalOk} />
    </div>
  );
}

export default RegisterSuccessModal;

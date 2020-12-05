import React from 'react';
import './index.scss';
import MainButton from 'components/atoms/MainButton/component';
import { LogOutModalProps } from './types';
import BorderedButton from 'components/atoms/BorderedButton/component';

function LogOutModal(props: LogOutModalProps): JSX.Element {
  const { onClickModalOk, onClickCancel } = props;
  return (
    <div className="logout-modal">
      <div className="logout-modal-body">
        <span> Are you sure you want to end session? </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
        <div style={{ marginRight: '50px' }}>
          <MainButton buttonText="Yes" onCreateProject={onClickModalOk} />
        </div>
        <BorderedButton text="Cancel" color="red" onSendBonuses={onClickCancel} />
      </div>
    </div>
  );
}

export default LogOutModal;

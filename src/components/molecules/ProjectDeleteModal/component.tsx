import React from 'react';
import './index.scss';
import MainButton from 'components/atoms/MainButton/component';
import { DeleteModalProps } from './types';
import BorderedButton from 'components/atoms/BorderedButton/component';

function DeleteModal(props: DeleteModalProps): JSX.Element {
  const { onClickModalOk, onClickCancel, text } = props;
  return (
    <div className="project-delete-modal">
      <div className="project-delete-modal-body">
        <span> {text} </span>
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

export default DeleteModal;

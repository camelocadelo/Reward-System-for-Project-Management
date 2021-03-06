import React, { useCallback, useEffect } from 'react';
import './index.scss';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { FormValues, FormInputs, ReducePointsModalProps } from './types';
import Close from 'assets/images/close.png';

function ReducePointsModal(props: ReducePointsModalProps): JSX.Element {
  const { onCloseModal, onReducePointsFormSubmit } = props;

  const { handleSubmit, register } = useForm<FormValues>({
    mode: 'onChange',
  });

  return (
    <div className="project-modal">
      <div className="project-modal-header">
        <div></div>
        <div style={{ cursor: 'pointer' }}>
          <img src={Close} alt="close" onClick={onCloseModal} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onReducePointsFormSubmit)}>
        <div className="input-wrp">
          <span className=""> How much bonuses you want to reduce? </span>
          <input
            name={FormInputs.bonus_amount}
            id={FormInputs.bonus_amount}
            type="text"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register({
              required: 'Required',
            })}
            placeholder="Enter the amount"
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button
            className={classNames(['main-button typography__variant-subtext'])}
            style={{ marginTop: '32px', fontFamily: 'DM Sans' }}
            type="submit"
          >
            Reduce
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReducePointsModal;

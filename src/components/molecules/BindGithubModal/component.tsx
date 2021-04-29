import React, { useCallback, useEffect } from 'react';
import './index.scss';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { FormValues, FormInputs, BindGithubModalProps } from './types';
import Close from 'assets/images/close.png';

function BindGithubModal(props: BindGithubModalProps): JSX.Element {
  const { onCloseModal, onGithubFormSubmit } = props;

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
      <form onSubmit={handleSubmit(onGithubFormSubmit)}>
        <div className="input-wrp">
          <span className=""> Binding with Github </span>
          <input
            name={FormInputs.githubLink}
            id={FormInputs.githubLink}
            type="text"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register({
              required: 'Required',
            })}
            placeholder="Enter the link to repo "
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button
            className={classNames(['main-button typography__variant-subtext'])}
            style={{ marginTop: '32px', fontFamily: 'DM Sans' }}
            type="submit"
          >
            Bind
          </button>
        </div>
      </form>
    </div>
  );
}

export default BindGithubModal;

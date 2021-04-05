import React, { useCallback, useEffect } from 'react';
import './index.scss';
import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues, FormInputs, BindModalProps } from './types';
import Close from 'assets/images/close.png';
import slackActions from 'store/slack/actions';
import { connect } from 'react-redux';

function BindModal(props: BindModalProps): JSX.Element {
  const { onCloseModal, bindSlackChannel, slackChannelState } = props;

  const { handleSubmit, register } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onFormSubmit = useCallback<SubmitHandler<FormValues>>(
    (values) => {
      bindSlackChannel({
        code: values.slackCode,
      });
    },
    [bindSlackChannel]
  );

  useEffect(() => {
    if (slackChannelState) {
      onCloseModal();
    }
  }, [slackChannelState, onCloseModal]);

  return (
    <div className="project-modal">
      <div className="project-modal-header">
        <div></div>
        <div style={{ cursor: 'pointer' }}>
          <img src={Close} alt="close" onClick={onCloseModal} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="input-wrp">
          <span className=""> Slack Channel </span>
          <input
            name={FormInputs.slackCode}
            id={FormInputs.slackCode}
            type="text"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register({
              required: 'Required',
            })}
            placeholder="Enter your Slack Code"
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button
            className={classNames(['main-button typography__variant-subtext'])}
            style={{ marginTop: '32px', fontFamily: 'DM Sans' }}
            type="submit"
          >
            Bind Slack
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    slackChannelState: state.slackReducer.slackChannelState.data,
  };
};

const mapDispatchToProps = {
  bindSlackChannel: slackActions.bindSlackChannel,
};

export default connect(mapStateToProps, mapDispatchToProps)(BindModal);

import React, { useCallback, useEffect } from 'react';
import './index.scss';
import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues, FormInputs, UserInfoModalProps } from './types';
import Close from 'assets/images/close.png';
import userActions from 'store/user/actions';
import { connect } from 'react-redux';

function UserInfoModal(props: UserInfoModalProps): JSX.Element {
  const { onCloseModal, onChangeUserInfo, changedUserInfoData } = props;

  const { handleSubmit, register } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onFormSubmit = useCallback<SubmitHandler<FormValues>>(
    (values) => {
      onChangeUserInfo({
        first_name: values.firstName,
        last_name: values.lastName,
        username: values.userName,
        email: values.email,
      });
    },
    [onChangeUserInfo]
  );

  useEffect(() => {
    if (changedUserInfoData) {
      onCloseModal();
    }
  }, [changedUserInfoData, onCloseModal]);

  return (
    <div className="user-info-modal">
      <div className="user-info-modal-header">
        <div></div>
        <div style={{ cursor: 'pointer' }}>
          <img src={Close} alt="close" onClick={onCloseModal} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="input-wrp">
          <span className=""> First Name </span>
          <input
            name={FormInputs.FirstName}
            id={FormInputs.FirstName}
            type="text"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register()}
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="input-wrp mt-8">
          <span className=""> Last Name </span>
          <input
            name={FormInputs.LastName}
            id={FormInputs.LastName}
            type="text"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register()}
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="input-wrp" style={{ marginTop: '8px' }}>
          <span className=""> Username </span>
          <input
            name={FormInputs.UserName}
            id={FormInputs.UserName}
            type="text"
            className="inputText typography__variant-text my-8"
            placeholder="Enter username"
            required
            ref={register()}
          />
        </div>
        <div className="input-wrp mt-8">
          <span className=""> Email </span>
          <input
            name={FormInputs.Email}
            id={FormInputs.Email}
            type="text"
            className="inputText typography__variant-text my-8 mr-8"
            ref={register()}
            placeholder="Enter email"
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button
            className={classNames(['main-button typography__variant-subtext'])}
            style={{ marginTop: '32px', fontFamily: 'DM Sans', fontSize: '16px' }}
            type="submit"
          >
            Change information
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    changedUserInfoData: state.userReducer.changeUserInfo.data,
  };
};

const mapDispatchToProps = {
  onChangeUserInfo: userActions.changeUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoModal);

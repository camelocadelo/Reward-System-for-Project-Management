/* TODO: add input validation, response to errors from back */
/* TODO: how to show errors from backend */
/* TODO: rename HomePage to LoginPage */

import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import authActions from 'store/auth/actions';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames';
import './index.scss';
import { FormValues, FormInputs, RegisterFormInputs, RegisterFormValues } from './types/FormData';
import { useHistory } from 'react-router-dom';
import fireGreen from 'assets/images/fireGreen.png';
import lightBulb from 'assets/images/lightBulb.png';
import present from 'assets/images/present.png';
import RegisterSuccessModal from 'components/molecules/RegisterSuccessModal/component';

function HomePage(props: any) {
  const {
    onGetUser,
    userData,
    userLoading,
    onRegister,
    loginErrorMessage,
    emailErrorMessage,
    registerData,
    registerLoading,
  } = props;
  const history = useHistory();
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const [loginError, setLoginError] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [regEmailError, setRegEmailError] = useState('');
  const [isRegEmailError, setIsRegEmailError] = useState(false);

  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  const { handleSubmit, register } = useForm<FormValues>({
    mode: 'onChange',
  });

  const { handleSubmit: registerHandleSubmit, register: registerMethod } = useForm<
    RegisterFormValues
  >({
    mode: 'onChange',
  });

  const onFormSubmit = useCallback<SubmitHandler<FormValues>>(
    (values) => {
      return onGetUser({ email: values.username, password: values.password });
    },
    [onGetUser]
  );

  useEffect(() => {
    if (loginErrorMessage) {
      setLoginError(true);
      setErrMessage('Invalid credentials');
      console.log('the error: ', loginErrorMessage);
    }
  }, [loginErrorMessage]);

  useEffect(() => {
    if (emailErrorMessage) {
      setIsRegEmailError(true);
      setRegEmailError('Use your NU email');
      console.log('the email email error: ', emailErrorMessage);
    }
  }, [emailErrorMessage]);

  const onRegisterFormSubmit = useCallback<SubmitHandler<RegisterFormValues>>(
    (values) => {
      return onRegister({
        email: values.email,
        username: values.username,
        password: values.password,
        first_name: values.first_name,
        last_name: values.last_name,
      });
    },
    [onRegister]
  );

  useEffect(() => {
    if (userData && !userLoading) {
      console.log('the user data: ', userData);
      history.push('/profile');
    }
  }, [userData, userLoading, history]);

  useEffect(() => {
    if (registerData && !registerLoading) {
      setIsRegisterSuccess(true);
      console.log('the register data: ', registerData);
    }
  }, [registerData, registerLoading]);

  const handleCloseModal = () => {
    setIsRegisterSuccess(false);
    setIsRegistration(false);
  };

  return (
    <div className="home-page-container">
      <div className={isRegisterSuccess ? 'home-page-modal' : 'home-page'}>
        <div className="auth d-flex">
          <div className="auth-left d-flex justify-content-center align-items-center">
            <div className="auth-left_content d-flex justify-content-center px-16">
              <div className="types-div d-flex flex-column">
                <span className="types-text d-flex align-self-center" style={{ fontWeight: 500 }}>
                  Boost enthusiasm in your team&apos;s work by
                </span>
                <div className="types-list">
                  <div className="types-item d-flex mt-24 mb-32">
                    <img src={lightBulb} alt="light" width="33px" height="33px" />
                    <span className="item-text align-self-center ml-24">
                      encouraging creative ideas
                    </span>
                  </div>
                  <div className="types-item d-flex mb-32">
                    <img src={present} alt="present" width="33px" height="33px" />
                    <span className="item-text align-self-center ml-24">
                      exchanging bonuses for prizes
                    </span>
                  </div>
                  <div className="types-item d-flex mb-32">
                    <img src={fireGreen} alt="fire" width="33px" height="33px" />
                    <span className="item-text align-self-center ml-24"> tracing performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="auth-right">
            <div className="auth-choose d-flex">
              <button
                style={{ fontFamily: 'DM Sans' }}
                className={classNames([!isRegistration && 'active'])}
                onClick={() => setIsRegistration(false)}
              >
                Authorization
              </button>
              <button
                style={{ fontFamily: 'DM Sans' }}
                className={classNames([isRegistration && 'active'])}
                onClick={() => setIsRegistration(true)}
              >
                Registration
              </button>
            </div>
            {isRegistration ? (
              <div className="auth-form">
                <span style={{ fontWeight: 500, marginBottom: 32 }} className="title">
                  Registration
                </span>
                <form onSubmit={registerHandleSubmit(onRegisterFormSubmit)}>
                  <div className="input-wrp mt-24">
                    <span className="">Email</span>
                    <input
                      name={RegisterFormInputs.Email}
                      id={RegisterFormInputs.Email}
                      type="text"
                      className="inputText typography__variant-text my-8 mr-8"
                      ref={registerMethod({
                        required: 'Required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'Invalid email pattern',
                        },
                      })}
                      placeholder="Enter email"
                      required
                    />
                    {isRegEmailError && <span style={{ color: 'red' }}> {regEmailError} </span>}
                  </div>
                  <div className="input-wrp mt-8">
                    <span className="">Username</span>
                    <input
                      name={RegisterFormInputs.Username}
                      id={RegisterFormInputs.Username}
                      type="text"
                      className="inputText typography__variant-text my-8 mr-8"
                      ref={registerMethod()}
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="input-wrp" style={{ marginTop: '8px' }}>
                    <span className="">Password</span>
                    <input
                      name={FormInputs.Password}
                      id={FormInputs.Password}
                      type="password"
                      className="inputText typography__variant-text my-8"
                      placeholder="Enter password"
                      required
                      ref={registerMethod()}
                    />
                  </div>
                  <div className="input-wrp mt-8">
                    <span className="">First Name</span>
                    <input
                      name={RegisterFormInputs.Firstname}
                      id={RegisterFormInputs.Firstname}
                      type="text"
                      className="inputText typography__variant-text my-8 mr-8"
                      ref={registerMethod()}
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="input-wrp mt-8">
                    <span className="">Last Name</span>
                    <input
                      name={RegisterFormInputs.Lastname}
                      id={RegisterFormInputs.Lastname}
                      type="text"
                      className="inputText typography__variant-text my-8 mr-8"
                      ref={registerMethod()}
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                  <button
                    className={classNames(['auth_button typography__variant-subtext'])}
                    style={{ marginTop: '32px', fontFamily: 'DM Sans' }}
                    type="submit"
                  >
                    Register
                  </button>
                </form>
              </div>
            ) : (
              <div className="auth-form">
                <span style={{ fontWeight: 500, marginBottom: 32 }} className="title">
                  Authorization
                </span>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                  <div className="input-wrp mt-24">
                    <span className="">Email</span>
                    <input
                      name={FormInputs.Username}
                      id={FormInputs.Username}
                      type="text"
                      className="inputText typography__variant-text my-8 mr-8"
                      ref={register({
                        required: 'Required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'Invalid email pattern',
                        },
                      })}
                      placeholder="Enter username"
                      required
                    />
                  </div>
                  <div className="input-wrp" style={{ marginTop: '24px' }}>
                    <span className="">Password</span>
                    <input
                      name={FormInputs.Password}
                      id={FormInputs.Password}
                      type="password"
                      className="inputText typography__variant-text my-8"
                      placeholder="Enter password"
                      required
                      ref={register()}
                    />
                    {loginError && <span style={{ color: 'red' }}> {errMessage} </span>}
                  </div>
                  <button
                    className={classNames(['auth_button typography__variant-subtext'])}
                    style={{ marginTop: '32px', fontFamily: 'DM Sans' }}
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      {isRegisterSuccess && (
        <RegisterSuccessModal
          titleText="You have successfully registered"
          bodyText="Check your email to activate your account"
          onClickModalOk={handleCloseModal}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userLoading: state.authReducer.login.loading,
    userData: state.authReducer.login.data,
    registerData: state.authReducer.register.data,
    registerLoading: state.authReducer.register.loading,
    loginErrorMessage: state.authReducer.login.errorMessage,
    emailErrorMessage: state.authReducer.register.errorMessage,
  };
};

const mapDispatchToProps = {
  onGetUser: authActions.login,
  onRegister: authActions.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));

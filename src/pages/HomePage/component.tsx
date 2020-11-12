import React, { FC, useEffect, useCallback } from 'react';
import { useAction, useAtom } from '@reatom/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { is } from 'remote-data-ts';
import classNames from 'classnames';
import './index.scss';

import { FormValues, FormInputs } from './types/FormData';
import { atoms, actions } from 'store/auth';
import { useHistory } from 'react-router-dom';

export const HomePage: FC = () => {
  const history = useHistory();
  const loginState = useAtom(atoms.login);
  const login = useAction((email: string, password: string) =>
    actions.loginRequest({
      email,
      password,
    })
  );

  const { handleSubmit, register } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onFormSubmit = useCallback<SubmitHandler<FormValues>>(
    (values) => {
      return login(values.username, values.password);
    },
    [login]
  );

  useEffect(() => {
    if (is.success(loginState)) {
      history.push('/project');
    }
  }, [loginState, history]);

  return (
    <div className="home-page">
      <h1> Домашняя страница </h1>
      <div className="auth-form">
        <span style={{ fontWeight: 500, marginBottom: 32 }} className="title mb-32">
          Аuthorization
        </span>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="input-wrp">
            <span className="">Username</span>
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
          </div>
          <button
            className={classNames(['auth_button typography__variant-subtext'])}
            style={{ marginTop: '32px' }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

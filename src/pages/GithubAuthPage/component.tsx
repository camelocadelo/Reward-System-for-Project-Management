import React, { useEffect, useState } from 'react';
import { MainTemplate } from 'components/organisms/MainTemplate';
import { useLocation } from 'react-router-dom';
import './index.scss';
import githubAuth from 'assets/images/githubAuth.svg';
import MainButton from 'components/atoms/MainButton/component';
import integrationActions from 'store/integration/actions';
import { connect } from 'react-redux';
import { GithubAuthPageProps } from './types';
import { FormInputs } from './types';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { FormValues } from './types';

function GithubAuthPage(props: GithubAuthPageProps): JSX.Element {
  const { sendGithubCode, sendGitToken } = props;
  const location = useLocation();
  const my_access_token = localStorage.getItem('access_token');

  console.log('the location naa: ', location);
  const [code, setCode] = useState('');
  const my_pk = localStorage.getItem('pk');
  useEffect(() => {
    if (location.search) {
      setCode(location.search.replace('?code=', ''));
    }
  }, [location.search]);
  console.log('profile location: ', location);
  console.log('the code sobsna: ', code);
  const handleBindGithub = () => {
    sendGithubCode({ code: code }, my_access_token);
  };
  const { handleSubmit, register } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onTokenSubmit = (form: any) => {
    sendGitToken(
      {
        personal_access_token: form.gitToken,
      },
      my_access_token
    );
  };

  return (
    <MainTemplate>
      <div className="git-page-container">
        {/*<div className="code-container">*/}
        <div className="input-wrp">
          <img src={githubAuth} alt="Authorized" style={{ maxWidth: '300px' }} />
          <div
            style={{
              display: 'flex',
              width: 'fit-content',
              // flexGrow: 0.7,
              flexDirection: 'column',
              marginTop: '70px',
            }}
          >
            <p style={{ color: '#696969', width: '47%' }}>
              You have successfully authenticated. To proceed with binding your Github account,
              click the button below
            </p>
            <input
              style={{ marginTop: '10px' }}
              value={code}
              type="text"
              className="inputText typography__variant-text"
            />
            <div style={{ width: 'fit-content', marginTop: '7px' }}>
              <MainButton
                textColor="white"
                buttonText="Connect"
                onCreateProject={handleBindGithub}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '50%',
            alignItems: 'flex-start',
          }}
        >
          <form onSubmit={handleSubmit(onTokenSubmit)}>
            <div className="input-wrp" style={{ display: 'flex', flexDirection: 'column' }}>
              <div>
                <span className=""> Send Git Personal Token </span>
              </div>
              <div style={{ width: '100%' }}>
                <input
                  name={FormInputs.gitToken}
                  id={FormInputs.gitToken}
                  type="text"
                  className="inputText typography__variant-text my-8 mr-8"
                  ref={register({
                    required: 'Required',
                  })}
                  placeholder="Enter the token"
                  required
                />
              </div>
            </div>
            <div style={{ width: '100%' }}>
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
      </div>
      {/*</div>*/}
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    sentGithubCode: state.integrationReducer?.sentGithubCode?.data,
  };
};

const mapDispatchToProps = {
  sendGithubCode: integrationActions.sendGithubCode,
  sendGitToken: integrationActions.sendGitToken,
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(GithubAuthPage);

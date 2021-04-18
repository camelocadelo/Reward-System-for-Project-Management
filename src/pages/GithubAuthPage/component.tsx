import React, { useEffect, useState } from 'react';
import { MainTemplate } from 'components/organisms/MainTemplate';
import { useLocation } from 'react-router-dom';
import './index.scss';
import githubAuth from 'assets/images/githubAuth.svg';
import MainButton from 'components/atoms/MainButton/component';
import integrationActions from 'store/integration/actions';
import { connect } from 'react-redux';
import { GithubAuthPageProps } from './types';

function GithubAuthPage(props: GithubAuthPageProps): JSX.Element {
  const { sendGithubCode, sentGithubCode } = props;
  const location = useLocation();
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
    sendGithubCode({ code: code, pk: my_pk });
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
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(GithubAuthPage);

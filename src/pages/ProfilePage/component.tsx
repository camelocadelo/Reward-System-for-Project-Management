/*TODO: add types props (ProjectPageType.IProps) */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import userActions from 'store/user/actions';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
import ProfileCard from 'components/molecules/ProfileCard/component';

function ProfilePage(props: any) {
  const { userInfoData, onGetUserInfo } = props;

  useEffect(() => {
    onGetUserInfo();
  }, []);

  const handleChangeUserInfo = () => {
    console.log('HANDLE CHANGE USER INFO');
  };

  const handleAddGithub = () => {
    console.log('HANDLE ADD GITHUB');
  };

  const handleAddSlack = () => {
    console.log('HANDLE ADD SLACK');
  };

  const handleAddJira = () => {
    console.log('HANDLE ADD JIRA');
  };

  const handleSendBonuses = () => {
    console.log('HANDLE SEND BONUSES');
  };

  console.log('the userinfo data: ', userInfoData);

  return (
    <MainTemplate>
      <div className="profile-page">
        {userInfoData && (
          <ProfileCard
            firstName={userInfoData.first_name}
            lastName={userInfoData.last_name}
            userName={userInfoData.username}
            email={userInfoData.email}
            accountBonuses={userInfoData.account_bonus}
            onChangeUserInfo={handleChangeUserInfo}
            onAddGithub={handleAddGithub}
            onAddSlack={handleAddSlack}
            onAddJira={handleAddJira}
            onSendBonuses={handleSendBonuses}
          />
        )}
      </div>
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userInfoData: state.userReducer.userInfo.data,
  };
};

const mapDispatchToProps = {
  onGetUserInfo: userActions.getUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

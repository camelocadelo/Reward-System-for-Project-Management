import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import userActions from 'store/user/actions';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
import ProfileCard from 'components/molecules/ProfileCard/component';
import { ProfilePageProps } from './types';
import UserInfoModal from 'components/molecules/UserInfoModal/component';
import UserActivityTable from 'components/molecules/UserActivityTable/component';

function ProfilePage(props: ProfilePageProps) {
  const { userInfoData, onGetUserInfo, userActivitiesData, onGetUserActivities } = props;
  const [userInfoModal, setUserInfoModal] = useState<boolean>(false);

  useEffect(() => {
    onGetUserInfo();
    onGetUserActivities();
  }, []);

  const handleChangeUserInfo = () => {
    setUserInfoModal(true);
  };

  const handleModalClose = () => {
    setUserInfoModal(false);
    if (userInfoData) {
      localStorage.setItem('username', userInfoData.username);
    }
    onGetUserInfo();
    onGetUserActivities();
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

  return (
    <MainTemplate>
      <div className={userInfoModal ? 'profile-page-modal' : 'profile-page'}>
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
        {userActivitiesData && (
          <div style={{ marginTop: '40px' }}>
            <UserActivityTable userActivityState={userActivitiesData} />
          </div>
        )}
      </div>
      {userInfoModal && <UserInfoModal onCloseModal={handleModalClose} />}
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userInfoData: state.userReducer.userInfo.data,
    userActivitiesData: state.userReducer.userActivities.data,
  };
};

const mapDispatchToProps = {
  onGetUserInfo: userActions.getUserInfo,
  onGetUserActivities: userActions.getUserActivities,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

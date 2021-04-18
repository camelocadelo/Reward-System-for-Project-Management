import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import userActions from 'store/user/actions';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
import ProfileCard from 'components/molecules/ProfileCard/component';
import { ProfilePageProps } from './types';
import UserInfoModal from 'components/molecules/UserInfoModal/component';
import UserActivityTable from 'components/molecules/UserActivityTable/component';
import { useLocation } from 'react-router-dom';

function ProfilePage(props: ProfilePageProps) {
  const { userInfoData, onGetUserInfo, userActivitiesData, onGetUserActivities } = props;
  const [userInfoModal, setUserInfoModal] = useState<boolean>(false);
  const [code, setCode] = useState<string | null>(null);

  const location = useLocation();
  useEffect(() => {
    if (location.search) {
      setCode(location.search.replace('?code=', ''));
    }
  }, [location.search]);
  console.log('profile location: ', location);
  console.log('the code sobsna: ', code);

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

  /* TODO: add addGithub method after back*/
  const handleAddGithub = () => {
    console.log('HANDLE ADD GITHUB');
  };

  /* TODO: add addSlack method after back*/
  const handleAddSlack = () => {
    console.log('HANDLE ADD SLACK');
  };

  /*TODO: add addJira method after back */
  const handleAddJira = () => {
    console.log('HANDLE ADD JIRA');
  };

  /* TODO: add sendBonuses method after back*/
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

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
import integrationActions from 'store/integration/actions';
import BindTelegramProfileModal from 'components/molecules/BindTelegramProfileModal/component';
import BindSlackProfileModal from 'components/molecules/BindSlackProfileModal/component';
import ProjectDeleteModal from 'components/molecules/ProjectDeleteModal/component';

function ProfilePage(props: ProfilePageProps) {
  const {
    userInfoData,
    onGetUserInfo,
    userActivitiesData,
    onGetUserActivities,
    onBindTelegramProfile,
    onBindSlackProfile,
    onUnbindSlackProfile,
    onUnbindTelegramProfile,
    onUnbindGit,
  } = props;
  const [userInfoModal, setUserInfoModal] = useState<boolean>(false);
  const [code, setCode] = useState<string | null>(null);

  const [isTelegramModal, setIsTelegramModal] = useState(false);
  const [isSlackModal, setIsSlackModal] = useState(false);

  const [isUnbindSlack, setIsUnbindSlack] = useState(false);
  const [isUnbindTelegram, setIsUnbindTelegram] = useState(false);
  const [isUnbindGit, setIsUnbindGit] = useState(false);

  const my_access_token = localStorage.getItem('access_token');

  const location = useLocation();
  useEffect(() => {
    if (location.search) {
      setCode(location.search.replace('?code=', ''));
    }
  }, [location.search]);
  console.log('profile location: ', location);
  console.log('the code sobsna: ', code);

  const TelegramFormData = new FormData();

  const SlackFormData = new FormData();

  const my_pk = localStorage.getItem('pk');

  useEffect(() => {
    onGetUserInfo(my_pk);
    onGetUserActivities(my_pk, my_access_token);
  }, []);

  const handleChangeUserInfo = () => {
    setUserInfoModal(true);
  };

  const handleModalClose = () => {
    setUserInfoModal(false);
    if (userInfoData) {
      localStorage.setItem('username', userInfoData.username);
    }
    onGetUserInfo(my_pk);
    onGetUserActivities(my_pk, my_access_token);
  };

  /* TODO: add addGithub method after back*/
  const handleAddGithub = () => {
    console.log('HANDLE ADD GITHUB');
  };

  const handleAddSlack = (form: any) => {
    SlackFormData.append('code', form.slackProfileCode);
    onBindSlackProfile(SlackFormData, my_access_token, {
      onSuccess: () => {
        setIsSlackModal(false);
        onGetUserInfo && onGetUserInfo(my_pk);
      },
    });
    console.log('HANDLE ADD SLACK');
  };

  const handleAddTelegram = (form: any) => {
    TelegramFormData.append('code', form.telegramProfileCode);
    onBindTelegramProfile(TelegramFormData, my_access_token, {
      onSuccess: () => {
        setIsTelegramModal(false);
        onGetUserInfo && onGetUserInfo(my_pk);
      },
    });
    console.log('HANDLE ADD JIRA');
  };

  const handleSendBonuses = () => {
    console.log('HANDLE SEND BONUSES');
  };
  console.log(isTelegramModal, isSlackModal);

  const openDeleteSlack = () => {
    setIsUnbindSlack(true);
  };

  const openSlack = () => {
    setIsSlackModal(true);
  };

  const handleUnbindSlack = () => {
    onUnbindSlackProfile &&
      onUnbindSlackProfile(my_access_token, {
        onSuccess: () => {
          setIsUnbindSlack(false);
          onGetUserInfo && onGetUserInfo(my_pk);
        },
      });
  };

  const handleUnbindGit = () => {
    onUnbindGit &&
      onUnbindGit(my_access_token, {
        onSuccess: () => {
          setIsUnbindGit(false);
          onGetUserInfo && onGetUserInfo(my_pk);
        },
      });
  };

  const openTelegram = () => {
    setIsTelegramModal(true);
  };

  const openDeleteTelegram = () => {
    setIsUnbindTelegram(true);
  };

  const handleUnbindTelegram = () => {
    onUnbindTelegramProfile &&
      onUnbindTelegramProfile(my_access_token, {
        onSuccess: () => {
          setIsUnbindTelegram(false);
          onGetUserInfo && onGetUserInfo(my_pk);
        },
      });
  };

  return (
    <MainTemplate>
      <div
        className={
          userInfoModal || isSlackModal || isTelegramModal || isUnbindSlack || isUnbindTelegram
            ? 'profile-page-modal'
            : 'profile-page'
        }
      >
        {userInfoData && (
          <ProfileCard
            firstName={userInfoData.first_name}
            lastName={userInfoData.last_name}
            userName={userInfoData.username}
            email={userInfoData.email}
            accountBonuses={userInfoData.account_bonus}
            onChangeUserInfo={handleChangeUserInfo}
            onAddGithub={handleAddGithub}
            onAddSlack={userInfoData.isSlackBind ? openDeleteSlack : openSlack}
            onAddTelegram={userInfoData.isTelegramBind ? openDeleteTelegram : openTelegram}
            onSendBonuses={handleSendBonuses}
            isGithubBound={userInfoData.isGithubBind}
            onUnbindGithub={() => setIsUnbindGit(true)}
          />
        )}
        {userActivitiesData && userActivitiesData.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <UserActivityTable userActivityState={userActivitiesData} />
          </div>
        )}
      </div>
      {userInfoModal && <UserInfoModal onCloseModal={handleModalClose} />}
      {isTelegramModal && (
        <BindTelegramProfileModal
          onCloseModal={() => setIsTelegramModal(false)}
          onTelegramProfileFormSubmit={handleAddTelegram}
        />
      )}
      {isSlackModal && (
        <BindSlackProfileModal
          onCloseModal={() => setIsSlackModal(false)}
          onSlackProfileFormSubmit={handleAddSlack}
        />
      )}
      {isUnbindSlack && (
        <ProjectDeleteModal
          text="Are you sure you want to unbind your account from Slack?"
          onClickCancel={() => setIsUnbindSlack(false)}
          onClickModalOk={handleUnbindSlack}
        />
      )}
      {isUnbindTelegram && (
        <ProjectDeleteModal
          text="Are you sure you want to unbind your account from Telegram?"
          onClickCancel={() => setIsUnbindTelegram(false)}
          onClickModalOk={handleUnbindTelegram}
        />
      )}
      {isUnbindGit && (
        <ProjectDeleteModal
          text="Are you sure you want to unbind your account from Git?"
          onClickCancel={() => setIsUnbindGit(false)}
          onClickModalOk={handleUnbindGit}
        />
      )}
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
  onBindTelegramProfile: integrationActions?.bindTelegramProfile,
  onBindSlackProfile: integrationActions.bindSlackProfile,
  onUnbindSlackProfile: integrationActions.unbindSlackProfile,
  onUnbindTelegramProfile: integrationActions.unbindTelegramProfile,
  onUnbindGit: integrationActions.unbindGitProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

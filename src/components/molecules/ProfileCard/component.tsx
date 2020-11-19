import React from 'react';
import { ProfileCardProps } from './types';
import './index.scss';
import ProfilePhoto from 'assets/images/profileAron.jpg';
import MoreInfo from 'assets/images/moreInfo.png';
import GithubIcon from 'assets/images/githubIcon.png';
import TelegramIcon from 'assets/images/telegramIcon.png';
import JiraIcon from 'assets/images/jiraIcon.png';
import BlueButton from 'components/atoms/BlueButton/component';

function ProfileCard(props: ProfileCardProps): JSX.Element {
  const {
    firstName,
    lastName,
    userName,
    email,
    accountBonuses,
    onChangeUserInfo,
    onSendBonuses,
    // onAddGithub,
    // onAddSlack,
    // onAddJira,
  } = props;
  return (
    <div className="profile-card">
      <div className="profile-card-top">
        <div className="profile-card-bottom" style={{ marginRight: '90px' }}>
          <img
            src={ProfilePhoto}
            alt="Profile"
            width="90px"
            height="90px"
            style={{ borderRadius: '50%', marginBottom: '10px' }}
          />
          <span className="typography__variant-h2" style={{ marginBottom: '8px' }}>
            {firstName} {lastName}
          </span>
          <span className="typography__variant-subtext" style={{ marginBottom: '6px' }}>
            @{userName}
          </span>
          <span className="typography__variant-subtext"> {email} </span>
        </div>
        <div>
          <img
            width="18px"
            // height="4px"
            src={MoreInfo}
            alt="Change Info"
            onClick={onChangeUserInfo}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className="profile-card-bottom">
        <span className="typography__variant-coloredtext"> {accountBonuses} </span>
        <span className="typography__variant-subtext"> Bonuses </span>
        <div style={{ marginTop: '18px' }} className="profile-card-footer">
          <BlueButton onSendBonuses={onSendBonuses} />
          <div>
            <img
              src={JiraIcon}
              alt="Add Jira"
              width="20px"
              style={{ marginRight: '10px', cursor: 'pointer' }}
            />
            <img
              src={GithubIcon}
              alt="Add Github"
              width="20px"
              style={{ marginRight: '10px', cursor: 'pointer' }}
            />
            <img src={TelegramIcon} alt="Add Telegram" width="20px" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

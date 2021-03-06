import React, { useState, useRef } from 'react';
import { ProfileCardProps } from './types';
import './index.scss';
import ProfilePhoto from 'assets/images/profileAron.jpg';
import MoreInfo from 'assets/images/moreInfo.png';
import GithubIcon from 'assets/images/githubIcon.png';
// import TelegramIcon from 'assets/images/telegramIcon.png';
import JiraIcon from 'assets/images/jiraIcon.png';
import TelegramIcon from 'assets/images/telegram-icon.png';
// import BorderedButton from 'components/atoms/BorderedButton/component';
import PopUpMessage from 'components/atoms/PopUpMessage/component';
import { useOutsideClick } from 'hooks/useOutsideClick';
import SlackIcon from 'assets/images/slackIcon.png';

function ProfileCard(props: ProfileCardProps): JSX.Element {
  const {
    firstName,
    lastName,
    userName,
    email,
    accountBonuses,
    onChangeUserInfo,
    onAddSlack,
    onAddTelegram,
    onUnbindGithub,
    isGithubBound,
  } = props;

  console.log('iii: ', isGithubBound);
  const ref = useRef<HTMLDivElement>(null);
  const [isChangeUserInfo, setIsChangeUserInfo] = useState<boolean>(false);

  const handleMoreClick = () => {
    setIsChangeUserInfo(true);
  };

  useOutsideClick(ref, () => {
    isChangeUserInfo && setIsChangeUserInfo(false);
  });

  const onClickPopUpMessage = () => {
    setIsChangeUserInfo(false);
    onChangeUserInfo();
  };

  return (
    <div className="profile-card-container">
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
              src={MoreInfo}
              alt="Change Info"
              onClick={handleMoreClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="profile-card-bottom">
          <span className="typography__variant-coloredtext"> {accountBonuses} </span>
          <span className="typography__variant-subtext"> Bonuses </span>
          <div style={{ marginTop: '18px' }} className="profile-card-footer">
            {/* <BorderedButton text="Send bonuses" onSendBonuses={onSendBonuses} color="#02A0FC" /> */}
            <div>
              <img
                src={TelegramIcon}
                alt="Add Telegram"
                width="20px"
                style={{ marginRight: '10px', cursor: 'pointer' }}
                onClick={onAddTelegram}
              />
              {isGithubBound ? (
                <img
                  src={GithubIcon}
                  alt="Add Github"
                  width="20px"
                  style={{ marginRight: '10px', cursor: 'pointer' }}
                  onClick={onUnbindGithub}
                />
              ) : (
                <a
                  href="https://github.com/login/oauth/authorize?client_id=01bd74491b2142e0a049"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GithubIcon}
                    alt="Add Github"
                    width="20px"
                    style={{ marginRight: '10px', cursor: 'pointer' }}
                    // onClick={onAddGithub}
                  />
                </a>
              )}
              <img
                src={SlackIcon}
                alt="Add Slack"
                width="40px"
                style={{ cursor: 'pointer' }}
                onClick={onAddSlack}
              />
            </div>
          </div>
        </div>
      </div>
      {isChangeUserInfo && (
        <div ref={ref} style={{ height: 'fit-content' }} onClick={onClickPopUpMessage}>
          <PopUpMessage message="Change my profile information" />
        </div>
      )}
    </div>
  );
}

export default ProfileCard;

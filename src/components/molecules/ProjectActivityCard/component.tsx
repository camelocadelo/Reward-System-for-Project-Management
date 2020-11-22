import React from 'react';
import TagItem from 'components/atoms/TagItem/component';
import { ProjectActivityCardProps } from './types';
import './index.scss';

function ProjectActivityCard(props: ProjectActivityCardProps): JSX.Element {
  const { eventType, username, timestamp, eventBonus, gitType, gitMeta, message } = props;

  const shortenMessage = (message: any) => {
    let newMessage = message;
    if (message.length > 38) {
      newMessage = message.slice(0, 38) + '. . .';
    }
    return newMessage;
  };

  return (
    <div className="project-activity-card">
      <TagItem
        bgColor={
          eventType === 'Telegram' ? '#CCF8FE' : eventType === 'GitHub' ? '#FFF5CC' : '#E2FBD7'
        }
        tag={eventType}
        color={
          eventType === 'Telegram' ? '#02A0FC' : eventType === 'GitHub' ? '#FFB200' : '#34B53A'
        }
      />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <span className="typography__variant-h2" style={{ marginRight: '100px' }}>
          {username}
        </span>
        <span className="typography__variant-h2" style={{ color: '#FF3A29' }}>
          + {eventBonus}
        </span>
      </div>
      <div className="typography__variant-subtext" style={{ marginBottom: '84px', width: '70%' }}>
        <span> {eventType === 'GitHub' ? `${gitType}: ${gitMeta}` : shortenMessage(message)} </span>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ fontSize: '14px' }}> {timestamp} </span>
      </div>
    </div>
  );
}

export default ProjectActivityCard;

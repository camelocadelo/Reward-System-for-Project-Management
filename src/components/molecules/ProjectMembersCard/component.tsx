import React, { useRef, useState } from 'react';
import { ProjectMembersCardProps } from './types';
import './index.scss';
import MoreInfo from 'assets/images/moreInfo.png';
import { membersColors } from 'components/molecules/ProjectMembersCard/consts';
import deleteIcon from 'assets/images/trashproduct.png';
import PopUpMessage from 'components/atoms/PopUpMessage/component';
import { useOutsideClick } from 'hooks/useOutsideClick';

function ProjectMembersCard(props: ProjectMembersCardProps): JSX.Element {
  const { members, onDeleteMember, onSettingTeamLead } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isSetTeamLead, setIsSetTeamLead] = useState<boolean>(false);
  const handleMoreClick = () => {
    setIsSetTeamLead(true);
  };
  useOutsideClick(ref, () => {
    // isSetTeamLead && setIsSetTeamLead(false);
  });

  const onClickPopUpMessage = () => {
    setIsSetTeamLead(false);
    onSettingTeamLead();
  };
  return (
    <div className={'project-members-card-container'}>
      <div className="project-members-card">
        <div className="project-members-card-header">
          <div style={{ marginRight: '125px' }}>
            <span className="typography__variant-h2"> Members </span>
          </div>
          <div>
            <img
              src={MoreInfo}
              alt="more"
              style={{ cursor: 'pointer' }}
              className="image"
              onClick={handleMoreClick}
            />
          </div>
        </div>
        <div>
          {members?.map((m, index) => (
            <div
              key={m.pk}
              className="project-member"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <span> {m.username} </span>
              <img
                src={deleteIcon}
                alt={'Delete team member'}
                width={'20px'}
                onClick={() => onDeleteMember(m.username)}
              />
            </div>
          ))}
        </div>
      </div>
      {isSetTeamLead && (
        <div ref={ref} style={{ height: 'fit-content', zIndex: 100 }} onClick={onClickPopUpMessage}>
          <PopUpMessage message="Set team lead" />
        </div>
      )}
    </div>
  );
}

export default ProjectMembersCard;

import React, { useRef, useState } from 'react';
import { ProjectMembersCardProps } from './types';
import './index.scss';
import MoreInfo from 'assets/images/moreInfo.png';
import { membersColors } from 'components/molecules/ProjectMembersCard/consts';
import deleteIcon from 'assets/images/trashproduct.png';
import PopUpMessage from 'components/atoms/PopUpMessage/component';
import { useOutsideClick } from 'hooks/useOutsideClick';
import TagItem from 'components/atoms/TagItem/component';
import BorderedButton from 'components/atoms/BorderedButton/component';

function ProjectMembersCard(props: ProjectMembersCardProps): JSX.Element {
  const { members, onDeleteMember, onSettingTeamLead, onReducePoints, onDeleteTeamLead } = props;
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

  const handleReducePoints = (username: any) => {
    onReducePoints(username);
  };

  const isAdmin = localStorage.getItem('is_admin');
  const isOrgOwner = localStorage.getItem('is_organizationOwner');
  const isManager = localStorage.getItem('is_manager');
  console.log(isAdmin, isOrgOwner, isManager);

  return (
    <div className={'project-members-card-container'}>
      <div className="project-members-card">
        <div className="project-members-card-header">
          <div style={{ marginRight: '420px' }}>
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '520px',
                }}
              >
                <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                  <span style={{ marginRight: '5px' }}> {m.username} </span>
                  {m.is_team_lead && (
                    <TagItem tag={'Team Lead'} bgColor="#FDFD96" color={'black'} />
                  )}
                  {m.is_team_lead && (
                    <div onClick={onDeleteTeamLead} style={{ marginLeft: '5px' }}>
                      <TagItem tag={'Delete'} bgColor="#FFE5D3" color={'red'} />
                    </div>
                  )}
                </div>
                <div style={{ textAlign: 'right', width: '100%' }}>
                  <span className="typography__variant-coloredtext" style={{ marginRight: '10px' }}>
                    {m.account_bonus} points
                  </span>
                </div>
                {isAdmin === 'true' ||
                  isManager === 'true' ||
                  (isOrgOwner === 'true' && (
                    <div style={{ marginRight: '10px' }}>
                      <BorderedButton
                        text="Reduce points"
                        onSendBonuses={() => handleReducePoints(m.username)}
                        color="#02A0FC"
                      />
                    </div>
                  ))}
              </div>
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

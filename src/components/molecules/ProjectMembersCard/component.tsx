import React from 'react';
import { ProjectMembersCardProps } from './types';
import './index.scss';
import MoreInfo from 'assets/images/moreInfo.png';
import { membersColors } from 'components/molecules/ProjectMembersCard/consts';

function ProjectMembersCard(props: ProjectMembersCardProps): JSX.Element {
  const { members } = props;

  return (
    <div className="project-members-card">
      <div className="project-members-card-header">
        <div style={{ marginRight: '125px' }}>
          <span className="typography__variant-h2"> Members </span>
        </div>
        <div>
          <img src={MoreInfo} alt="more" style={{ cursor: 'pointer' }} className="image" />
        </div>
      </div>
      <div>
        {members?.map((m, index) => (
          <div key={m.pk} className="project-member">
            <div>
              <span> {m.username} </span>
              {/*<div*/}
              {/*  style={{*/}
              {/*    backgroundColor: membersColors[index % 4],*/}
              {/*    borderRadius: '10px',*/}
              {/*    height: '10px',*/}
              {/*    marginTop: '5px',*/}
              {/*  }}*/}
              {/*>wtf</div>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectMembersCard;

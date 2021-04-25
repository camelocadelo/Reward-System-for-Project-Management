import React, { useEffect, useState } from 'react';
import { MainTemplate } from 'components/organisms/MainTemplate';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import projectActions from 'store/project/actions';
import { ProjectDetailPageProps } from './types';
import ProjectActivityCard from 'components/molecules/ProjectActivityCard/component';
import { ProjectActivityResponse } from 'store/project/types';
import './index.scss';
import MainButton from 'components/atoms/MainButton/component';
import AddTeamMember from 'components/molecules/AddTeamMember/component';
import ProjectMembersCard from 'components/molecules/ProjectMembersCard/component';

function ProjectDetailPage(props: ProjectDetailPageProps): JSX.Element {
  /*  TODO: warning  */
  const { id } = useParams();
  const {
    projectActivitiesState,
    onGetProjectActivities,
    onGetProjectMembers,
    projectMembersState,
  } = props;

  const [isAddTeamMember, setIsAddTeamMember] = useState(false);

  console.log('on get project members: ', projectMembersState);

  useEffect(() => {
    id && onGetProjectActivities && onGetProjectActivities(id);
    id && onGetProjectMembers && onGetProjectMembers(parseInt(id, 10));
  }, [id, onGetProjectActivities, onGetProjectMembers]);

  const isAdmin = localStorage.getItem('is_admin');
  const isOrgOwner = localStorage.getItem('is_organizationOwner');
  const isManager = localStorage.getItem('is_manager');

  const isShowButton = isAdmin === 'true' || isOrgOwner === 'true' || isManager === 'true';

  const handleAddTeamMember = () => {
    setIsAddTeamMember(true);
  };

  const handleCloseAddTeamMember = () => {
    setIsAddTeamMember(false);
  };

  return (
    <MainTemplate>
      {/* {projectActivitiesState && (
        <div style={{ marginBottom: '20px' }}>
          <span className="typography__variant-h1"> {projectActivitiesState[0].project_name} </span>
        </div>
      )} */}
      {projectActivitiesState && (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{ display: 'flex', flexDirection: 'row' }}
            className="project-detail-card-container"
          >
            {projectActivitiesState.map((p: ProjectActivityResponse) => (
              <div key={p.pk} style={{ marginRight: '20px' }} className="project-detail-card">
                <ProjectActivityCard
                  key={p.pk}
                  eventType={p.event_type}
                  username={p.username}
                  timestamp={p.timestamp}
                  eventBonus={p.event_bonus}
                  gitType={p.type}
                  gitMeta={p.metaData}
                  message={p.message}
                />
              </div>
            ))}
          </div>
          {/*<div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '22px' }}>*/}
          {/*  {projectActivitiesState.length > 3 && <MainButton buttonText="See All" />}*/}
          {/*</div>*/}
        </div>
      )}
      {isShowButton && (
        <div style={{ marginBottom: '22px' }}>
          {isAddTeamMember ? (
            <div style={{ width: '450px' }}>
              <AddTeamMember pk={parseInt(id, 10)} onClose={handleCloseAddTeamMember} />
            </div>
          ) : (
            <div style={{ width: '250px' }}>
              <MainButton onCreateProject={handleAddTeamMember} buttonText="+ Add Team Member" />
            </div>
          )}
        </div>
      )}
      {projectMembersState && <ProjectMembersCard members={projectMembersState} />}
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    projectActivitiesState: state.projectReducer.projectActivities.data,
    projectMembersState: state.projectReducer.projectMembers.data,
  };
};

const mapDispatchToProps = {
  onGetProjectActivities: projectActions.getProjectActivities,
  onGetProjectMembers: projectActions.getProjectMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailPage);

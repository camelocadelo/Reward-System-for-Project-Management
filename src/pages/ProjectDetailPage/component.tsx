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
import ProjectDeleteModal from 'components/molecules/ProjectDeleteModal/component';
import { DEFAULT_NOTIFICATION_DATA } from 'components/molecules/Notification/consts';
import useNotification from 'components/molecules/Notification/useNotification';
import withNotificationProvider from 'components/molecules/Notification/withNotificationProvider';
import TeamLeadModal from 'components/molecules/TeamLeadModal/component';

function ProjectDetailPage(props: ProjectDetailPageProps): JSX.Element {
  /*  TODO: warning  */
  const { id } = useParams();
  const notification = useNotification();
  const {
    projectActivitiesState,
    onGetProjectActivities,
    onGetProjectMembers,
    projectMembersState,
    onRemoveTeamMember,
    onSetTeamLead,
    projectStatistics,
    onGetStatistics,
  } = props;

  const [isAddTeamMember, setIsAddTeamMember] = useState(false);
  useEffect(() => {
    id && onGetProjectActivities && onGetProjectActivities(id);
    id && onGetProjectMembers && onGetProjectMembers(parseInt(id, 10));
    id && onGetStatistics && onGetStatistics({ pk: id, time_frame: '2_weeks' });
  }, [id, onGetProjectActivities, onGetProjectMembers, onGetStatistics]);

  const isAdmin = localStorage.getItem('is_admin');
  const isOrgOwner = localStorage.getItem('is_organizationOwner');
  const isManager = localStorage.getItem('is_manager');
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
  const [deleteMemberUsername, setDeleteMemberUsername] = useState<string>('');
  const [isTeamLeadModal, setIsTeamLeadModal] = useState<boolean>(false);

  const isShowButton = isAdmin === 'true' || isOrgOwner === 'true' || isManager === 'true';

  const handleAddTeamMember = () => {
    setIsAddTeamMember(true);
  };

  const handleCloseAddTeamMember = () => {
    setIsAddTeamMember(false);
  };

  const handleDeleteMember = (username: any) => {
    setIsDeleteModal(true);
    setDeleteMemberUsername(username);
  };
  const handleModalOk = () => {
    onRemoveTeamMember &&
      onRemoveTeamMember(
        { pk: parseInt(id, 10), username: deleteMemberUsername },
        {
          onSuccess: () => {
            setIsDeleteModal(false);
            notification.add({
              ...DEFAULT_NOTIFICATION_DATA,
              title: 'Team member deleted successfully!',
            });
            onGetProjectActivities(id);
            onGetProjectMembers(id);
          },
          onError: () => {
            console.log('the one error part');
          },
        }
      );
  };
  const handleSettingTeamLead = () => {
    setIsTeamLeadModal(true);
  };
  const handleTeamLeadFormSubmit = (form: any) => {
    onSetTeamLead(
      {
        pk: id,
        username: form.username,
      },
      {
        onSuccess: () => {
          setIsTeamLeadModal(false);
          notification.add({
            ...DEFAULT_NOTIFICATION_DATA,
            title: 'Project team lead set successfully!',
          });
          onGetProjectActivities(id);
          onGetProjectMembers(id);
        },
        onError: () => {
          console.log('the one error part');
        },
      }
    );
  };

  console.log('PROJECT STATTATAT: ', projectStatistics);

  return (
    <MainTemplate>
      <div className={isTeamLeadModal ? 'project-detail-page-modal' : 'project-detail-page'}>
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
        {projectMembersState && (
          <ProjectMembersCard
            members={projectMembersState}
            onDeleteMember={handleDeleteMember}
            onSettingTeamLead={handleSettingTeamLead}
          />
        )}
      </div>
      {isDeleteModal && (
        <ProjectDeleteModal
          text="Are you sure you want to delete this member from the project?"
          onClickCancel={() => setIsDeleteModal(false)}
          onClickModalOk={handleModalOk}
        />
      )}
      {isTeamLeadModal && (
        <TeamLeadModal
          onCloseModal={() => setIsTeamLeadModal(false)}
          onTeamLeadFormSubmit={handleTeamLeadFormSubmit}
        />
      )}
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    projectActivitiesState: state.projectReducer.projectActivities.data,
    projectMembersState: state.projectReducer.projectMembers.data,
    projectStatistics: state.projectReducer.projectStatistics.data,
  };
};

const mapDispatchToProps = {
  onGetProjectActivities: projectActions.getProjectActivities,
  onGetProjectMembers: projectActions.getProjectMembers,
  onRemoveTeamMember: projectActions.removeTeamMember,
  onSetTeamLead: projectActions.setTeamLead,
  onGetStatistics: projectActions.getStatistics,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNotificationProvider(ProjectDetailPage));

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
import BindTelegramProfileModal from 'components/molecules/BindTelegramProfileModal/component';
import BindSlackProfileModal from 'components/molecules/BindSlackProfileModal/component';
import integrationActions from 'store/integration/actions';
import StatisticsTable from 'components/molecules/StatisticsTable/component';

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
    projectStatisticsData,
    onGetStatistics,
    onBindTelegramProject,
  } = props;

  const [isAddTeamMember, setIsAddTeamMember] = useState(false);
  useEffect(() => {
    id && onGetProjectActivities && onGetProjectActivities(id);
    id && onGetProjectMembers && onGetProjectMembers(parseInt(id, 10));
    id && onGetStatistics && onGetStatistics({ pk: id, time_frame: '1_week' });
  }, [id, onGetProjectActivities, onGetProjectMembers, onGetStatistics]);
  const y_axis =
    projectStatisticsData?.yAxis?.Git && Object.keys(projectStatisticsData?.yAxis?.Git);
  console.log(y_axis, 'hey');

  const resultArray: any[] = [];

  const helperFunction = (tableData: any) => {
    const members = projectStatisticsData?.members;
    console.log('memebers: ', members);
    y_axis.forEach((y) => {
      const dataEntry: {
        [key: string]: string;
      } = {};
      dataEntry['name'] = y;
      members.forEach((m: string) => {
        const memberObjData = tableData.find((obj: any) => obj.hasOwnProperty(m));
        dataEntry[m] = memberObjData[m]['Slack'][y];
      });
      resultArray.push(dataEntry);
    });
  };
  projectStatisticsData &&
    projectStatisticsData.state &&
    helperFunction(projectStatisticsData.state);

  console.log('the ress: ', resultArray);
  //
  // useEffect(() => {
  //   if (projectStatisticsData && projectStatisticsData.length > 0) {
  //     const arrayVersion = projectStatisticsData[0][firstMemeber];
  //     console.log('hhh', arrayVersion);
  //   }
  // }, [projectStatisticsData]);

  const isAdmin = localStorage.getItem('is_admin');
  const isOrgOwner = localStorage.getItem('is_organizationOwner');
  const isManager = localStorage.getItem('is_manager');
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
  const [deleteMemberUsername, setDeleteMemberUsername] = useState<string>('');
  const [isTeamLeadModal, setIsTeamLeadModal] = useState<boolean>(false);

  const [isSlackModal, setIsSlackModal] = useState(false);
  const [isTelegramModal, setIsTelegramModal] = useState(false);
  const [isGithubModal, setIsGithubModal] = useState(false);

  const TelegramFormData = new FormData();

  const SlackFormData = new FormData();

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
  const handleAddSlackChannel = (form: any) => {
    SlackFormData.append('code', form.slackProfileCode);
    onBindSlackProfile(SlackFormData);
    console.log('HANDLE ADD SLACK');
  };

  /*TODO: add addJira method after back */
  const handleAddTelegramChat = (form: any) => {
    TelegramFormData.append('code', form.telegramProfileCode);
    onBindTelegramProject && onBindTelegramProject(TelegramFormData);
    console.log('HANDLE ADD JIRA');
  };
  return (
    <MainTemplate>
      <div
        className={
          isTeamLeadModal || isTelegramModal || isSlackModal
            ? 'project-detail-page-modal'
            : 'project-detail-page'
        }
      >
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
          </div>
        )}
        {isShowButton && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
              maxWidth: '1200px',
            }}
          >
            <MainButton
              buttonText={'+ Bind Slack'}
              onCreateProject={() => setIsSlackModal(true)}
              bgColor={'#34B53A'}
            />
            <MainButton
              buttonText={'+ Bind Telegram'}
              onCreateProject={() => setIsTelegramModal(true)}
              bgColor={'#34B53A'}
            />
            <MainButton
              buttonText={'+ Bind Github'}
              onCreateProject={() => setIsGithubModal(true)}
              bgColor={'#34B53A'}
            />
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
        <div style={{ display: 'flex', maxWidth: '1200px' }}>
          {projectMembersState && (
            <ProjectMembersCard
              members={projectMembersState}
              onDeleteMember={handleDeleteMember}
              onSettingTeamLead={handleSettingTeamLead}
            />
          )}
          {resultArray && resultArray.length > 0 && (
            <div style={{ marginBottom: '30px', width: 'fit-content' }}>
              <div style={{ textAlign: 'center' }}> Telegram Chart </div>
              <StatisticsTable data={resultArray} />
            </div>
          )}
        </div>
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
      {isTelegramModal && (
        <BindTelegramProfileModal
          onCloseModal={() => setIsTelegramModal(false)}
          onTelegramProfileFormSubmit={handleAddTelegramChat}
        />
      )}
      {isSlackModal && (
        <BindSlackProfileModal
          onCloseModal={() => setIsSlackModal(false)}
          onSlackProfileFormSubmit={handleAddSlackChannel}
        />
      )}
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    projectActivitiesState: state.projectReducer.projectActivities.data,
    projectMembersState: state.projectReducer.projectMembers.data,
    projectStatisticsData: state.projectReducer.projectStatistics.data,
  };
};

const mapDispatchToProps = {
  onGetProjectActivities: projectActions.getProjectActivities,
  onGetProjectMembers: projectActions.getProjectMembers,
  onRemoveTeamMember: projectActions.removeTeamMember,
  onSetTeamLead: projectActions.setTeamLead,
  onGetStatistics: projectActions.getStatistics,
  onBindTelegramProject: integrationActions.bindTelegramProject,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNotificationProvider(ProjectDetailPage));

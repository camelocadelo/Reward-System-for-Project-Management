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
import BindGithubModal from 'components/molecules/BindGithubModal/component';
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
    onBindSlackProject,
    bindSlackProject,
    projectBindInfo,
    getProjectBindInfo,
    unbindSlackProject,
    unbindTelegramProject,
    bindRepoToProject,
    projectGitStatisticsData,
    projectSlackStatisticsData,
    onGetGitStatistics,
    onGetSlackStatistics,
  } = props;

  console.log('bin info: ', projectBindInfo);

  const [isAddTeamMember, setIsAddTeamMember] = useState(false);
  useEffect(() => {
    id && onGetProjectActivities && onGetProjectActivities(id);
    id && onGetProjectMembers && onGetProjectMembers(parseInt(id, 10));
    id && onGetStatistics && onGetStatistics({ pk: id, time_frame: '1_week' });
    id && onGetSlackStatistics && onGetSlackStatistics({ pk: id, time_frame: '1_week' });
    id && onGetGitStatistics && onGetGitStatistics({ pk: id, time_frame: '1_week' });
    id && getProjectBindInfo && getProjectBindInfo(id);
  }, [id, onGetProjectActivities, onGetProjectMembers]);
  const y_telegram_axis =
    projectStatisticsData?.yAxis?.Git && Object.keys(projectStatisticsData?.yAxis?.Git);

  const y_slack_axis =
    projectSlackStatisticsData?.yAxis?.Git && Object.keys(projectSlackStatisticsData?.yAxis?.Git);

  const y_git_axis =
    projectGitStatisticsData?.yAxis?.Git && Object.keys(projectGitStatisticsData?.yAxis?.Git);

  const [isUnbindSlackModal, setIsUnbindSlackModal] = useState(false);
  const [isUnbindTelegramModal, setIsUnbindTelegramModal] = useState(false);
  const [isUnbindGithubModal, setIsUnbindGithubModal] = useState(false);

  const TelegramResultArray: any[] = [];
  const GithubResultArray: any[] = [];
  const SlackResultArray: any[] = [];

  const membersArray = projectStatisticsData?.members;

  const helperFunction = (tableData: any) => {
    const members = projectStatisticsData?.members;
    console.log('memebers: ', members);
    y_telegram_axis.forEach((y) => {
      const dataEntry: {
        [key: string]: string;
      } = {};
      dataEntry['name'] = y;
      members.forEach((m: string) => {
        const memberObjData = tableData.find((obj: any) => obj.hasOwnProperty(m));
        dataEntry[m] = memberObjData[m]['Telegram'][y];
      });
      TelegramResultArray.push(dataEntry);
    });
  };
  const helperSlackFunction = (tableData: any) => {
    const members = projectSlackStatisticsData?.members;
    console.log('memebers: ', members);
    y_slack_axis.forEach((y) => {
      const dataEntry: {
        [key: string]: string;
      } = {};
      dataEntry['name'] = y;
      members.forEach((m: string) => {
        const memberObjData = tableData.find((obj: any) => obj.hasOwnProperty(m));
        dataEntry[m] = memberObjData[m]['Slack'][y];
      });
      SlackResultArray.push(dataEntry);
    });
  };
  const helperGithubFunction = (tableData: any) => {
    const members = projectGitStatisticsData?.members;
    console.log('memebers: ', members);
    y_git_axis.forEach((y) => {
      const dataEntry: {
        [key: string]: string;
      } = {};
      dataEntry['name'] = y;
      members.forEach((m: string) => {
        const memberObjData = tableData.find((obj: any) => obj.hasOwnProperty(m));
        dataEntry[m] = memberObjData[m]['Git'][y];
      });
      GithubResultArray.push(dataEntry);
    });
  };

  projectStatisticsData &&
    projectStatisticsData.state &&
    helperFunction(projectStatisticsData.state);
  projectSlackStatisticsData &&
    projectSlackStatisticsData.state &&
    helperSlackFunction(projectSlackStatisticsData.state);
  projectGitStatisticsData &&
    projectGitStatisticsData.state &&
    helperGithubFunction(projectGitStatisticsData.state);

  // console.log('the telegram: ', TelegramResultArray);

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
    id && onGetProjectMembers && onGetProjectMembers(parseInt(id, 10));
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
    onBindSlackProject &&
      onBindSlackProject(SlackFormData, id, {
        onSuccess: () => {
          console.log('scucsef');
          setIsSlackModal(false);
          id && getProjectBindInfo && getProjectBindInfo(id);
        },
      });
    console.log('HANDLE ADD SLACK');
  };

  const handleAddGithubRepo = (form: any) => {
    bindRepoToProject(
      { id: id, repo: form.githubLink },
      {
        onSuccess: () => {
          setIsGithubModal(false);
          id && getProjectBindInfo && getProjectBindInfo(id);
        },
      }
    );
  };

  useEffect(() => {
    if (bindSlackProject) {
      setIsSlackModal(false);
    }
  }, [bindSlackProject]);

  /*TODO: add addJira method after back */
  const handleAddTelegramChat = (form: any) => {
    TelegramFormData.append('code', form.telegramProfileCode);
    onBindTelegramProject &&
      onBindTelegramProject(TelegramFormData, id, {
        onSuccess: () => {
          console.log('scucsef');
          setIsTelegramModal(false);
          id && getProjectBindInfo && getProjectBindInfo(id);
        },
      });
    console.log('HANDLE ADD JIRA');
  };

  const handleAddSlackModal = () => {
    setIsSlackModal(true);
  };

  const handleDeleteSlackModal = () => {
    setIsUnbindSlackModal(true);
  };

  const handleAddTelegramModal = () => {
    setIsTelegramModal(true);
  };

  const handleDeleteTelegramModal = () => {
    setIsUnbindTelegramModal(true);
  };

  const handleAddGithubModal = () => {
    setIsGithubModal(true);
  };

  const handleDeleteGithubModal = () => {
    setIsUnbindGithubModal(true);
  };

  const handleUnbindSlack = () => {
    id &&
      unbindSlackProject(id, {
        onSuccess: () => {
          setIsUnbindSlackModal(false);
          id && getProjectBindInfo && getProjectBindInfo(id);
        },
      });
  };

  const handleUnbindTelegram = () => {
    id &&
      unbindTelegramProject(id, {
        onSuccess: () => {
          setIsUnbindTelegramModal(false);
          id && getProjectBindInfo && getProjectBindInfo(id);
        },
      });
  };

  const handleChangeTelegramFrame = (timeFrame: any) => {
    id && onGetStatistics && onGetStatistics({ pk: id, time_frame: timeFrame });
    projectStatisticsData &&
      projectStatisticsData.state &&
      helperFunction(projectStatisticsData.state);
  };

  const handleChangeSlackFrame = (timeFrame: any) => {
    id && onGetSlackStatistics && onGetSlackStatistics({ pk: id, time_frame: timeFrame });
    projectSlackStatisticsData &&
      projectSlackStatisticsData.state &&
      helperSlackFunction(projectSlackStatisticsData.state);
  };

  const handleChangeGitFrame = (timeFrame: any) => {
    id && onGetGitStatistics && onGetGitStatistics({ pk: id, time_frame: timeFrame });
    projectGitStatisticsData &&
      projectGitStatisticsData.state &&
      helperGithubFunction(projectGitStatisticsData.state);
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
              buttonText={projectBindInfo?.isSlackBind ? 'Unbind Slack' : '+ Bind Slack'}
              onCreateProject={
                projectBindInfo?.isSlackBind ? handleDeleteSlackModal : handleAddSlackModal
              }
              bgColor={'#34B53A'}
            />
            <MainButton
              buttonText={projectBindInfo?.isTelegramBind ? 'Unbind Telegram' : '+ Bind Telegram'}
              onCreateProject={
                projectBindInfo?.isTelegramBind ? handleDeleteTelegramModal : handleAddTelegramModal
              }
              bgColor={'#34B53A'}
            />
            <MainButton
              buttonText={projectBindInfo?.isGithubBind ? 'Unbind Github' : '+ Bind Github'}
              onCreateProject={
                projectBindInfo?.isGithubBind ? handleDeleteGithubModal : handleAddGithubModal
              }
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
        <div style={{ display: 'flex', maxWidth: '1100px', justifyContent: 'space-between' }}>
          <div>
            {projectMembersState && (
              <ProjectMembersCard
                members={projectMembersState}
                onDeleteMember={handleDeleteMember}
                onSettingTeamLead={handleSettingTeamLead}
              />
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '30px', width: 'fit-content' }}>
              {/*<div style={{ textAlign: 'center' }}> Telegram Chart </div>*/}
              <StatisticsTable
                members={membersArray}
                projectPK={id}
                chartType={'Telegram'}
                onChangeTimeFrame={handleChangeTelegramFrame}
                data={TelegramResultArray}
              />
            </div>
            <div style={{ marginBottom: '30px', width: 'fit-content' }}>
              {/*<div style={{ textAlign: 'center' }}> Slack Chart </div>*/}
              <StatisticsTable
                members={membersArray}
                projectPK={id}
                chartType={'Slack'}
                onChangeTimeFrame={handleChangeSlackFrame}
                data={SlackResultArray}
              />
            </div>
            <div style={{ marginBottom: '30px', width: 'fit-content' }}>
              {/*<div style={{ textAlign: 'center' }}> Github Chart </div>*/}
              <StatisticsTable
                members={membersArray}
                projectPK={id}
                chartType={'Git'}
                onChangeTimeFrame={handleChangeGitFrame}
                data={GithubResultArray}
              />
            </div>
          </div>
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
      {isGithubModal && (
        <BindGithubModal
          onCloseModal={() => setIsGithubModal(false)}
          onGithubFormSubmit={handleAddGithubRepo}
        />
      )}
      {isUnbindSlackModal && (
        <ProjectDeleteModal
          text="Are you sure you want unbind from Slack?"
          onClickCancel={() => setIsUnbindSlackModal(false)}
          onClickModalOk={handleUnbindSlack}
        />
      )}
      {isUnbindTelegramModal && (
        <ProjectDeleteModal
          text="Are you sure you want unbind from Telegram?"
          onClickCancel={() => setIsUnbindTelegramModal(false)}
          onClickModalOk={handleUnbindTelegram}
        />
      )}
      {isUnbindGithubModal && (
        <ProjectDeleteModal
          text="Are you sure you want unbind from Github?"
          onClickCancel={() => setIsUnbindGithubModal(false)}
          onClickModalOk={handleModalOk}
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
    bindSlackProject: state.integrationReducer.bindSlackProject.data,
    projectBindInfo: state.projectReducer.projectBindInfo.data,
    projectSlackStatisticsData: state.projectReducer.projectSlackStatistics.data,
    projectGitStatisticsData: state.projectReducer.projectGitStatistics.data,
  };
};

const mapDispatchToProps = {
  onGetProjectActivities: projectActions.getProjectActivities,
  onGetProjectMembers: projectActions.getProjectMembers,
  onRemoveTeamMember: projectActions.removeTeamMember,
  onSetTeamLead: projectActions.setTeamLead,
  onGetStatistics: projectActions.getStatistics,
  onBindTelegramProject: integrationActions?.bindTelegramProject,
  onBindSlackProject: integrationActions.bindSlackProject,
  getProjectBindInfo: projectActions.getProjectBindInfo,
  unbindTelegramProject: integrationActions.unbindTelegramProject,
  unbindSlackProject: integrationActions.unbindSlackProject,
  bindRepoToProject: integrationActions.bindRepoToProject,
  onGetSlackStatistics: projectActions.getSlackStatistics,
  onGetGitStatistics: projectActions.getGitStatistics,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNotificationProvider(ProjectDetailPage));

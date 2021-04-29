import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import projectActions from 'store/project/actions';
import ProjectCard from 'components/molecules/ProjectCard/component';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
import MainButton from 'components/atoms/MainButton/component';
import ProjectModal from 'components/molecules/ProjectModal/component';
import { ProjectPageProps } from './types';
import { DEFAULT_NOTIFICATION_DATA } from 'components/molecules/Notification/consts';
import useNotification from 'components/molecules/Notification/useNotification';
import withNotificationProvider from 'components/molecules/Notification/withNotificationProvider';
import { useHistory, withRouter } from 'react-router-dom';
import ProjectDeleteModal from 'components/molecules/ProjectDeleteModal/component';

function ProjectPage(props: ProjectPageProps): JSX.Element {
  const [isCreateModal, setIsCreateModal] = useState<boolean>(false);
  const { onGetUserProjects, userProjectsState, createProject, deleteProject } = props;
  const history = useHistory();
  console.log('the hist: ', history);
  const [deleteProjectPk, setDeleteProjectPk] = useState<number | null>(null);
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

  //dont forget to set delete project pk again to null after successful delete

  const notification = useNotification();

  const my_pk = localStorage.getItem('pk');

  console.log('commit');
  const handleOpenModal = () => {
    setIsCreateModal(true);
  };

  const handleCloseModal = () => {
    setIsCreateModal(false);
  };

  useEffect(() => {
    onGetUserProjects(my_pk);
  }, []);
  // const handleProjectFormSubmit = (values: any) => {
  //   console.log('the values of handle project form: ', values);
  // };

  const handleProjectFormSubmit = (values: any) => {
    createProject(
      {
        name: values.projectName,
        telegram_bonus: parseInt(values.telegramBonus, 10),
        git_bonus: parseInt(values.gitBonus, 10),
        slack_bonus: parseInt(values.slackBonus, 10),
      },
      {
        onSuccess: () => {
          setIsCreateModal(false);
          console.log('DUCCESS');
          notification.add({
            ...DEFAULT_NOTIFICATION_DATA,
            title: 'Project created successfully!',
            // description: 'Приз создан успешно',
          });
          setTimeout(() => {
            history?.push('/projects');
          }, 200);
          onGetUserProjects(my_pk);
          // setPageLoading(false);
          console.log('success 2');
        },
        onError: () => {
          console.log('the one error part');
        },
      }
    );
  };
  const handleModalCancel = () => {
    setIsDeleteModal(false);
  };
  const handleModalOk = () => {
    deleteProjectPk &&
      deleteProject &&
      deleteProject(deleteProjectPk, {
        onSuccess: () => {
          setIsDeleteModal(false);
          console.log('DUCCESS');
          notification.add({
            ...DEFAULT_NOTIFICATION_DATA,
            title: 'Project deleted successfully!',
            // description: 'Приз создан успешно',
          });
          setTimeout(() => {
            history?.push('/projects');
          }, 200);
          onGetUserProjects();
          // setPageLoading(false);
          console.log('success 2');
        },
        onError: () => {
          console.log('the one error part');
        },
      });
  };
  const handleDeleteProject = (projectPK: number) => {
    console.log('the deleteing project pk: ', projectPK);
    setIsDeleteModal(true);
    setDeleteProjectPk(projectPK);
  };

  const isAdmin = localStorage.getItem('is_admin');
  const isOrgOwner = localStorage.getItem('is_organizationOwner');
  const isManager = localStorage.getItem('is_manager');

  const isShowButton = isAdmin === 'true' || isOrgOwner === 'true' || isManager === 'true';
  return (
    <MainTemplate>
      <div className={isCreateModal ? 'project-page-modal' : 'project-page'}>
        {isShowButton && (
          <div
            style={{
              width: 'fit-content',
              marginTop: '32px',
              marginLeft: '10px',
              marginBottom: '25px',
            }}
          >
            <MainButton onCreateProject={handleOpenModal} buttonText="Create Project" />
          </div>
        )}
        {userProjectsState && (
          <div className="project-list">
            {userProjectsState.map((p: any) => (
              <div key={p.pk} style={{ marginRight: '40px' }} className="project-item">
                <ProjectCard
                  teamLead="Team 1"
                  name={p.name}
                  projectPK={p.pk}
                  deleteProjectProps={handleDeleteProject}
                />
              </div>
            ))}
          </div>
        )}
        {userProjectsState && userProjectsState.length === 0 && (
          <span className="typography__variant-subtext" style={{ fontSize: '22px' }}>
            You are not a member of any project yet
          </span>
        )}
      </div>
      {isCreateModal && (
        <ProjectModal
          onCloseModal={handleCloseModal}
          onProjectFormSubmit={handleProjectFormSubmit}
        />
      )}
      {isDeleteModal && (
        <ProjectDeleteModal
          text="Are you sure you want to delete this project?"
          onClickCancel={handleModalCancel}
          onClickModalOk={handleModalOk}
        />
      )}
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    userProjectsState: state.projectReducer.userProjects.data,
  };
};

const mapDispatchToProps = {
  onGetUserProjects: projectActions.getProjects,
  createProject: projectActions.createProject,
  deleteProject: projectActions.deleteProject,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withNotificationProvider(ProjectPage)));

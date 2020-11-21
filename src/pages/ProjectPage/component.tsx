import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import projectActions from 'store/project/actions';
import ProjectCard from 'components/molecules/ProjectCard/component';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
import MainButton from 'components/atoms/MainButton/component';
import ProjectModal from 'components/molecules/ProjectModal/component';
import { ProjectPageProps } from './types';

function ProjectPage(props: ProjectPageProps): JSX.Element {
  const [isCreateModal, setIsCreateModal] = useState<boolean>(false);
  const { onGetUserProjects, userProjectsState } = props;

  const handleOpenModal = () => {
    setIsCreateModal(true);
  };

  const handleCloseModal = () => {
    setIsCreateModal(false);
  };

  useEffect(() => {
    onGetUserProjects();
  }, []);

  const isAdmin = localStorage.getItem('is_admin');
  const isOrgOwner = localStorage.getItem('is_organizationOwner');
  const isManager = localStorage.getItem('is_manager');

  const isShowButton = isAdmin === 'true' || isOrgOwner === 'true' || isManager === 'true';

  return (
    <MainTemplate>
      <div className={isCreateModal ? 'project-page-modal' : 'project-page'}>
        {userProjectsState && (
          <div className="project-list">
            {userProjectsState.map((p: any) => (
              <div key={p.pk} style={{ marginRight: '40px' }}>
                <ProjectCard teamLead="Team 1" name={p.name} projectPK={p.pk} />
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
      {isShowButton && (
        <div style={{ width: '140px', marginTop: '32px', marginLeft: '10px' }}>
          <MainButton onCreateProject={handleOpenModal} buttonText="Create Project" />
        </div>
      )}
      {isCreateModal && <ProjectModal onCloseModal={handleCloseModal} />}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);

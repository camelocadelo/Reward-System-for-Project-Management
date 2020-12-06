import React, { useState } from 'react';
import { ProjectCardProps } from './types';
import { Link } from 'react-router-dom';
import TagItem from 'components/atoms/TagItem/component';
import './index.scss';
import DeleteIcon from 'assets/images/trash.png';
import ProjectDeleteModal from 'components/molecules/ProjectDeleteModal/component';
import projectActions from 'store/project/actions';
import { connect } from 'react-redux';

function ProjectCard(props: ProjectCardProps): JSX.Element {
  const { projectPK, name, teamLead, onDeleteProject, deletedProjectState } = props;
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const isAdmin = localStorage.getItem('is_admin');
  const isOrgOwner = localStorage.getItem('is_organizationOwner');
  const isManager = localStorage.getItem('is_manager');

  const isShowButton = isAdmin === 'true' || isOrgOwner === 'true' || isManager === 'true';

  const handleDeleteProject = () => {
    setIsDeleteModal(true);
  };

  const handleModalOk = () => {
    setIsDeleteModal(false);
    onDeleteProject && projectPK && onDeleteProject(projectPK);
    //todo
  };

  const handleModalCancel = () => {
    setIsDeleteModal(false);
  };

  console.log('the delete rpoejct: ', deletedProjectState);

  return (
    <>
      <div className="project-card">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TagItem tag={teamLead} bgColor="#FFE5D3" />
          {isShowButton && (
            <img
              src={DeleteIcon}
              alt="delete"
              style={{ cursor: 'pointer' }}
              width="19px"
              height="21px"
              onClick={handleDeleteProject}
            />
          )}
        </div>
        <div style={{ marginTop: '18px', marginBottom: '18px' }}>
          <span className="typography__variant-h2" style={{ fontWeight: 400 }}>
            {name}
          </span>
        </div>
        <Link to={`/projects/${projectPK}`} style={{ textDecoration: 'none' }}>
          <span className="project-card-link"> View project </span>
        </Link>
      </div>
      {isDeleteModal && (
        <ProjectDeleteModal onClickCancel={handleModalCancel} onClickModalOk={handleModalOk} />
      )}
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    deleteProjectState: state.projectReducer.deletedProjectState.data,
  };
};

const mapDispatchToProps = {
  onDeleteProject: projectActions.deleteProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);

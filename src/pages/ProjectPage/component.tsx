import React, { useState } from 'react';
import ProjectCard from 'components/molecules/ProjectCard/component';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
import MainButton from 'components/atoms/MainButton/component';
import ProjectModal from 'components/molecules/ProjectModal/component';

function ProjectPage(): JSX.Element {
  const [isCreateModal, setIsCreateModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsCreateModal(true);
  };

  const handleCloseModal = () => {
    setIsCreateModal(false);
  };

  return (
    <MainTemplate>
      <div className={isCreateModal ? 'project-page-modal' : 'project-page'}>
        <div className="project-list">
          <div style={{ marginRight: '40px' }}>
            <ProjectCard teamLead="Team 1" name="Project 1" projectPK={1} />
          </div>
          <div style={{ marginRight: '40px' }}>
            <ProjectCard teamLead="Team 1" name="Project 1" projectPK={1} />
          </div>
          <div>
            <ProjectCard teamLead="Team 1" name="Project 1" projectPK={1} />
          </div>
        </div>
        <div style={{ width: '140px', marginTop: '32px', marginLeft: '10px' }}>
          <MainButton onCreateProject={handleOpenModal} buttonText="Create Project" />
        </div>
      </div>
      {isCreateModal && <ProjectModal onCloseModal={handleCloseModal} />}
    </MainTemplate>
  );
}

export default ProjectPage;

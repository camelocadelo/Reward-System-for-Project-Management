import React from 'react';
import ProjectCard from 'components/molecules/ProjectCard/component';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';

function ProjectPage(): JSX.Element {
  return (
    <MainTemplate>
      <div className="project-page">
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
    </MainTemplate>
  );
}

export default ProjectPage;

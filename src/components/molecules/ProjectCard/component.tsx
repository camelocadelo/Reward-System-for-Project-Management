import React from 'react';
import { ProjectCardProps } from './types';
import { Link } from 'react-router-dom';
import TagItem from 'components/atoms/TagItem/component';
import './index.scss';

function ProjectCard(props: ProjectCardProps): JSX.Element {
  const { projectPK, name, teamLead } = props;

  return (
    <div className="project-card">
      <TagItem tag={teamLead} bgColor="#FFE5D3" />
      <div style={{ marginTop: '18px', marginBottom: '18px' }}>
        <span className="typography__variant-h2" style={{ fontWeight: 400 }}>
          {name}
        </span>
      </div>
      <Link to={`/projects/${projectPK}`} style={{ textDecoration: 'none' }}>
        <span className="project-card-link"> View project </span>
      </Link>
    </div>
  );
}

export default ProjectCard;

import React, { useEffect } from 'react';
import { MainTemplate } from 'components/organisms/MainTemplate';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import projectActions from 'store/project/actions';
import { ProjectDetailPageProps } from './types';
import ProjectActivityCard from 'components/molecules/ProjectActivityCard/component';
import { ProjectActivityResponse } from 'store/project/types';
import './index.scss';

function ProjectDetailPage(props: ProjectDetailPageProps): JSX.Element {
  /*  TODO: warning  */
  const { id } = useParams();
  const { projectActivitiesState, onGetProjectActivities } = props;

  useEffect(() => {
    id && onGetProjectActivities && onGetProjectActivities(id);
  }, []);

  console.log('THE PROJECT ACTIVITIES STATE: ', projectActivitiesState);

  console.log('the id: ', id);
  return (
    <MainTemplate>
      {/* {projectActivitiesState && (
        <div style={{ marginBottom: '20px' }}>
          <span className="typography__variant-h1"> {projectActivitiesState[0].project_name} </span>
        </div>
      )} */}
      {projectActivitiesState && (
        <div style={{ display: 'flex' }} className="project-detail-card-container">
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
      )}
      <div> </div>
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    projectActivitiesState: state.projectReducer.projectActivities.data,
  };
};

const mapDispatchToProps = {
  onGetProjectActivities: projectActions.getProjectActivities,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailPage);

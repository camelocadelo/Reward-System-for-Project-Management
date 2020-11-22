import React, { useEffect } from 'react';
import { MainTemplate } from 'components/organisms/MainTemplate';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import projectActions from 'store/project/actions';
import { ProjectDetailPageProps } from './types';

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
      {projectActivitiesState && (
        <span className="typography__variant-h1"> {projectActivitiesState[0].project_name} </span>
      )}
      <div> Project Detail Page {id} </div>
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

import React from 'react';
import { MainTemplate } from 'components/organisms/MainTemplate';
import { useParams } from 'react-router-dom';

function ProjectDetailPage(): JSX.Element {
  /*  TODO: warning  */
  const { id } = useParams();
  console.log('the id: ', id);
  return (
    <MainTemplate>
      <div> Project Detail Page {id} </div>
    </MainTemplate>
  );
}

export default ProjectDetailPage;

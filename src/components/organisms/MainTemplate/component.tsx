import React, { FC } from 'react';
import { Sidebar } from 'components/organisms/Sidebar';
import './index.scss';

export const MainTemplate: FC = (props: any) => {
  const { children } = props;

  return (
    <div className="main-template">
      <Sidebar />
      <div className="main-template-body"> {children} </div>
    </div>
  );
};

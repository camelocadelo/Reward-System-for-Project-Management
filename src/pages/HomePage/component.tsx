import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

export const HomePage: FC = () => {
  return (
    <div>
      <Helmet titleTemplate="Домашняя страница" />
      <h1> Домашняя страница </h1>
    </div>
  );
};

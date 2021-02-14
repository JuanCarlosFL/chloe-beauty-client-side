import { linkRoutes } from 'core/router';
import React from 'react';
import { Link } from 'react-router-dom';

export const RecoverPasswordScene: React.FC = () => {
  return (
    <>
      <h1>Recover password Scene</h1>
      <Link to={linkRoutes.lolayltyList('3')}>Navigate to Loyalties</Link>
    </>
  );
};

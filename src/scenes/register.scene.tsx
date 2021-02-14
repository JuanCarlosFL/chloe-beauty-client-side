import { linkRoutes } from 'core/router';
import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScene: React.FC = () => {
  return (
    <>
      <h1>Register Scene</h1>
      <Link to={linkRoutes.treatmentList('1')}>Navigate to Treatment</Link>
    </>
  );
};

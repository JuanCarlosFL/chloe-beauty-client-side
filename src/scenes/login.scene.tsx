import { linkRoutes } from 'core/router';
import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScene: React.FC = () => {
  return (
    <>
      <h1>Login Scene</h1>
      <p>
        <Link to={linkRoutes.register}>Navigate to register</Link>
      </p>
      <Link to={linkRoutes.recoverPassword}>Navigate to recover password</Link>
    </>
  );
};

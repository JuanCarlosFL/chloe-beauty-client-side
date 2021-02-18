import { linkRoutes } from 'core/router';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { isValidLogin } from './login.api';
import { LoginComponent } from './login.component';
import { LoginVM } from './login.vm';

export const LoginContainer: React.FC = () => {
  const history = useHistory();

  const loginSucceded = (isValid: boolean): void => {
    if (isValid) {
      history.push(linkRoutes.menu);
    } else {
      alert('invalid');
    }
  };

  const handleLogin = (login: LoginVM) => {
    isValidLogin(login.username, login.password).then(resolve =>
      loginSucceded(resolve)
    );
  };

  const handleRecoverPassword = () => {
    history.push(linkRoutes.recoverPassword);
  };

  const handleRegister = () => {
    history.push(linkRoutes.register);
  }

  return (
    <>
      <LoginComponent
        onLogin={handleLogin}
        onRecoverPassword={handleRecoverPassword}
        onRegister={handleRegister}
      />
    </>
  );
};

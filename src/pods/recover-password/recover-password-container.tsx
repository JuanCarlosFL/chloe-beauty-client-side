import { linkRoutes } from 'core/router';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { RecoverPasswordComponent } from './recover-password-component';
import { isValidLogin } from './recover-password.api';
import { RecoverPasswordVM } from './recover-password.vm';

export const RecoverPasswordContainer: React.FC = () => {
  const history = useHistory();

  const loginSucceded = (isValid: boolean): void => {
    if (isValid) {
      history.push(linkRoutes.menu);
    } else {
      alert('invalid');
    }
  };

  const handleLogin = (login: RecoverPasswordVM) => {
    isValidLogin(
      login.username,
      login.password,
      login.repeatPassword
    ).then(resolve => loginSucceded(resolve));
  };

  const handleCancel = () => {
    history.push(linkRoutes.login);
  };

  return (
    <>
      <RecoverPasswordComponent onLogin={handleLogin} onCancel={handleCancel} />
    </>
  );
};

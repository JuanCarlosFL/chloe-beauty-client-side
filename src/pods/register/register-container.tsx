import { linkRoutes } from 'core/router';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterComponent } from './register-component';
import { isValidRegister } from './register.api';
import { RegisterVM } from './register.vm';

export const RegisterContainer: React.FC = () => {
  const history = useHistory();

  const registerSucceded = (isValid: boolean): void => {
    if (isValid) {
      history.push(linkRoutes.menu);
    } else {
      alert('invalid');
    }
  };

  const handleLogin = (login: RegisterVM) => {
    isValidRegister(
      login.username,
      login.lastname,
      login.email,
      login.password,
      login.repeatPassword
    ).then(resolve => registerSucceded(resolve));
  };

  const handleCancel = () => {
    history.push(linkRoutes.login);
  };

  return (
    <>
      <RegisterComponent onLogin={handleLogin} onCancel={handleCancel} />
    </>
  );
};

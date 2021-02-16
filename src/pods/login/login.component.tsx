import { Button, Grid, TextField, withStyles } from '@material-ui/core';
import { LoginVM } from './login.vm';
import React, { useState } from 'react';
import img from '../../assets/logo-imagen-chloe.jpeg';
import { createEmptyLogin } from './login.vm';

const ForgotPasswordButton = withStyles(() => ({
  root: {
    color: 'primary',
    justifyContent: 'start',
    fontSize: '12px',
  },
}))(Button);

interface Props {
  onLogin: (login: LoginVM) => void;
}

export const LoginComponent: React.FC<Props> = props => {
  const { onLogin } = props;
  const [login, setLogin] = useState<LoginVM>(createEmptyLogin());

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        alignItems="center"
        direction="column"
        justify="center"
        style={{ padding: '10' }}
      >
        <form
          onSubmit={e => {
            e.preventDefault();
            onLogin(login);
          }}
        >
          <div style={{ height: 30 }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 400,
              minWidth: 350,
            }}
          >
            <Grid container justify="center">
              <img src={img} width={200} alt="logo chloe's beauty" />
            </Grid>
            <TextField
              label="Usuario"
              margin="normal"
              value={login.username}
              onChange={e => setLogin({ ...login, username: e.target.value })}
            />
            <TextField
              label="Contraseña"
              margin="normal"
              type="password"
              value={login.password}
              onChange={e => setLogin({ ...login, password: e.target.value })}
            />

            <ForgotPasswordButton color="primary" style={{ marginTop: '10px' }}>
              ¿Olvidó la contraseña?
            </ForgotPasswordButton>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ marginTop: '15px' }}
            >
              Iniciar sesión
            </Button>
            <div style={{ height: 20 }} />
            <Button
              color="secondary"
              variant="contained"
              style={{ marginTop: '10px' }}
            >
              Regístrate
            </Button>
          </div>
        </form>
      </Grid>
    </div>
  );
};

export const isValidRegister = (
  username: string,
  lastname: string,
  email: string,
  password: string,
  repeatPassword: string
): Promise<boolean> =>
  new Promise(resolve => {
    resolve(password === repeatPassword);
  });

export const isValidLogin = (
  username: string,
  password: string,
  repeatPassword: string
): Promise<boolean> =>
  new Promise(resolve => {
    resolve(username === 'admin' && password === repeatPassword);
  });

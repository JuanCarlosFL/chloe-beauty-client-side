export const isValidLogin = (
  username: string,
  password: string
): Promise<boolean> =>
  new Promise(resolve => {
    resolve(username === 'admin' && password === 'test');
  });

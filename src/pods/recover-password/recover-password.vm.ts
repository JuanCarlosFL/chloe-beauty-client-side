export interface RecoverPasswordVM {
  username: string;
  password: string;
  repeatPassword: string;
}

export const createEmptyLogin = (): RecoverPasswordVM => ({
  username: '',
  password: '',
  repeatPassword: '',
});

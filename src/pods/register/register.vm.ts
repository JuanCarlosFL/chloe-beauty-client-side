export interface RegisterVM {
  username: string;
  lastname: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const createEmptyRegister = (): RegisterVM => ({
  username: '',
  lastname: '',
  email: '',
  password: '',
  repeatPassword: '',
});

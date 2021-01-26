export interface AuthState {
  email: string;
  password: string;
}

export const state = (): AuthState => ({
  email: '',
  password: '',
});

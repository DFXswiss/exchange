export const AuthUrl = { signMessage: 'auth/signMessage', signIn: 'auth/signIn' };

export interface SignMessage {
  message: string;
}

export interface SignIn {
  accessToken: string;
}

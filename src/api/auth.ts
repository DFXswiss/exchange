export const Auth = { signMessage: 'auth/signMessage', signIn: 'auth/signIn' };

export interface SignMessage {
  message: string;
}

export interface SignIn {
  accessToken: string;
}

export const UserUrl = { get: 'user/detail', change: 'user' };

export interface User {
  mail?: string;
  kycDataComplete?: boolean;
  ref?: string;
}

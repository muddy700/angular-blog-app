export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  name?: string;
  password: string;
  phoneNumber?: string;
  gender?: string;
  confirmed?: boolean;
  blocked?: boolean;
  avatarUrl?: string;
  createdAt?: string;
  upatedAt?: string;
}

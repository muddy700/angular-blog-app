export interface User {
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
}

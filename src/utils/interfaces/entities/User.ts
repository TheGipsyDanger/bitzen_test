export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  profile_photo_url: string;
  type: IUserType;
}

export interface IUserType {
  id: number;
  description: string;
}

export interface IUserData {
  message: string;
  user: IUser;
  token: string;
}

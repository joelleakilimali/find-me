export interface IRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ISignin {
  email: string;
  password: string;
}
export interface iUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  email?: string;
  img?: string;
  address?: string;
  phoneNumber?: string;
  status?: number;
  createdAt?: Date;
  updatedAt?: Date;
  verified?: boolean;
  password?: string;
}
export interface IComment {
  id?: string;
  user?: iUser;
  content: string;
  post?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IPost {
  id?: string;
  image: IImage;
  title: string;
  description: string;
  user?: iUser;
  createdAt?: string;
  updatedAt?: string;
}

export interface IImage {
  _id: string;
  key: string;
  path: string;
}

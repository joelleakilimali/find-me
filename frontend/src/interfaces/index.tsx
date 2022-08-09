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
export interface CommentElement {
  image?: string;
  title?: string;
  description?: string;
  comment?: string;
}

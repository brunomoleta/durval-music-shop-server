import {ILogin} from "./user";

export interface IEmail {
  email: string;
}

export interface IPassword {
  password: string;
  confirmPassword: string;
}


export interface ISignUp extends ILogin {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}


export interface IName extends Pick<ISignUp, 'firstName' | 'lastName'> {}
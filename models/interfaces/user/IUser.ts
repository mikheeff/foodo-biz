import { IResponse } from '~/models/interfaces/IResponse';

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IRegistrationResponse extends IResponse {
  user: IUser;
}

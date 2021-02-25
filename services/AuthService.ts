import axios from 'axios';
import { IRegisterPayload } from '~/models/interfaces/user/IRegisterPayload';
import Util from '~/services/util/Util';
import { IRegistrationResponse, IUser } from '~/models/interfaces/user/IUser';

export default class AuthService {
  static registerUser(payload: IRegisterPayload): Promise<IUser> {
    return axios.post<IRegistrationResponse>(Util.getRestApiUrl('auth/register'), payload)
      .then(res => res.data.user);
  }
}

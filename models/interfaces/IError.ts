import StatusCode from '~/models/enums/StatusCode';

export interface IError {
  status: StatusCode;
  message: string | null;
}

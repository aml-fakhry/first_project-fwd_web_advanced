import { AppErrorCode } from './app-error-code.model';
import { AppError } from './app-error-model';

export interface AppHttpResponseError {
  code?: AppErrorCode;
  source?: string;
  title?: AppError;

  detail?: string;
}

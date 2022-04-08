import { AppHttpResponseError } from './app-http-response-error.model';

export interface AppHttpResponse {
  data?: unknown;
  errors?: AppHttpResponseError[];
}

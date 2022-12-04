import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { toast } from 'react-toastify';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';

const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
const REQUEST_TIMEOUT = 5000;

const statusErrors = new Set([StatusCodes.BAD_REQUEST, StatusCodes.NOT_FOUND]);

const shouldDisplayError = (response: AxiosResponse) => statusErrors.has(response.status);


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if(token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if(error.response && shouldDisplayError(error.response)) {
        toast.warn(`${error.response.data.error} ${'Try refreshing this page later.'}`);
      }

      throw error;
    }
  );

  return api;
};

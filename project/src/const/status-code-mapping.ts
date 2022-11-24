import { StatusCodes } from 'http-status-codes';

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  //[StatusCodes.UNAUTHORIZED]: true, TODO нужно ли показывать эту ошибку, если в приложении нет приватных маршрутов? Отключила
  [StatusCodes.NOT_FOUND]: true
} as const;

import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  success: boolean;
  statusCode: number;
  errorMessage?: string;
  message: string;
  error?: TError;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

import { ExtractNextBody, ExtractNextParams, ExtractNextResponse } from 'next-ts-api';
import { GET as GET_1 } from '../app/api/auth/google/callback/route';
import { GET as GET_2 } from '../app/api/auth/session/route';

export type ApiRoutes = {
  'auth/google/callback': {
    GET: {
      response: ExtractNextResponse<typeof GET_1>
      params: ExtractNextParams<typeof GET_1>
    },
  };
  'auth/session': {
    GET: {
      response: ExtractNextResponse<typeof GET_2>
      params: ExtractNextParams<typeof GET_2>
    },
  };
};

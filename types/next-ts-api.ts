import type { ExtractNextBody, ExtractNextQuery, ExtractNextResponse, ExtractNextParams } from 'next-ts-api';
import { GET as GET_1 } from '../app/api/auth/google/callback/route';
import { GET as GET_2 } from '../app/api/auth/session/route';
import { GET as GET_3 } from '../app/api/conversations/route';

export type ApiRoutes = {
  'auth/google/callback': {
    GET: {
      response: ExtractNextResponse<typeof GET_1>
      query: ExtractNextQuery<typeof GET_1>
      params: ExtractNextParams<typeof GET_1>
    },
  };
  'auth/session': {
    GET: {
      response: ExtractNextResponse<typeof GET_2>
      query: ExtractNextQuery<typeof GET_2>
      params: ExtractNextParams<typeof GET_2>
    },
  };
  'conversations': {
    GET: {
      response: ExtractNextResponse<typeof GET_3>
      query: ExtractNextQuery<typeof GET_3>
      params: ExtractNextParams<typeof GET_3>
    },
  };
};

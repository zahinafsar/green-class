import type { ExtractNextBody, ExtractNextQuery, ExtractNextResponse, ExtractNextParams } from 'next-ts-api';
import { GET as GET_1 } from '../app/api/auth/google/callback/route';
import { GET as GET_2 } from '../app/api/auth/session/route';
import { GET as GET_3 } from '../app/api/conversations/route';
import { GET as GET_4 } from '../app/api/google/[courseId]/route';
import { GET as GET_5 } from '../app/api/google/route';
import { GET as GET_6 } from '../app/api/messages/route';

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
  'google/[courseId]': {
    GET: {
      response: ExtractNextResponse<typeof GET_4>
      query: ExtractNextQuery<typeof GET_4>
      params: ExtractNextParams<typeof GET_4>
    },
  };
  'google': {
    GET: {
      response: ExtractNextResponse<typeof GET_5>
      query: ExtractNextQuery<typeof GET_5>
      params: ExtractNextParams<typeof GET_5>
    },
  };
  'messages': {
    GET: {
      response: ExtractNextResponse<typeof GET_6>
      query: ExtractNextQuery<typeof GET_6>
      params: ExtractNextParams<typeof GET_6>
    },
  };
};

'use server';

import { google } from 'googleapis';
import { cookies } from 'next/headers';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:4200/api/auth/google/callback"
);

export const getAuthUrl = async () => {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/classroom.courses.readonly',
      'https://www.googleapis.com/auth/classroom.rosters.readonly',
      'https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly'
    ],
  });
};

export const getGoogleOauthToken = async (code: string) => {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens;
}

export const createClassroomClient = async () => {
  const cookieStore = await cookies();
  const access_token = cookieStore.get('google_access_token')?.value;
  oauth2Client.setCredentials({ access_token });
  return google.classroom({
    version: 'v1',
    auth: oauth2Client
  });
}
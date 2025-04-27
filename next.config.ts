import type { NextConfig } from "next";
import { nextTsApi } from 'next-ts-api/config'
const withTsApi = nextTsApi();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withTsApi(nextConfig);

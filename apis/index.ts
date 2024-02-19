import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

export default client;

// export const runtime = "edge";

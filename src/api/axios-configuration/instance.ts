import { ACCESS_TOKEN_KEY } from "@/constants";
import axios from "axios";

const axiosPublicInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 20000,
});

const axiosPrivateInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 20000,
});

axiosPrivateInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`;

  return config;
});

const axiosCoingeckoInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  timeout: 20000,
  headers: {
    "x-cg-demo-api-key": import.meta.env.CG_DEMO_API_KEY,
  },
});

export { axiosPrivateInstance, axiosCoingeckoInstance, axiosPublicInstance };

import { axiosInstance } from "../axios-configuration/instance";
import type {
  SignInRequestType,
  SignInResponseType,
  SignUpRequestType,
  SignUpResponseType,
} from "./auth.models";

export const authApi = {
  URL: "/auth",

  signIn: async (payload: SignInRequestType): Promise<SignInResponseType> => {
    try {
      const response = await axiosInstance.post<SignInResponseType>(
        `${authApi.URL}/signin`,
        payload
      );

      return response.data;
    } catch (error) {
      console.log("----SOME ERROR");
      throw error;
    }
  },

  signUp: async (payload: SignUpRequestType): Promise<SignUpResponseType> => {
    try {
      const response = await axiosInstance.post<SignUpResponseType>(
        `${authApi.URL}/signup`,
        payload
      );

      return response.data;
    } catch (error) {
      console.log("----SOME ERROR");
      throw error;
    }
  },
};

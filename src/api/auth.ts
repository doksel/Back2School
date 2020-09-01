import axios, { AxiosRequestConfig } from "axios";
import { setHeader } from "./index";


export type SignInType = {}
export type SignUpType = {}

export default {
  signIn: async (value: SignInType) => {
    let config: AxiosRequestConfig = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/auth/sign-in`,
      headers: setHeader(),
      data: value
    };

    const data = await axios(config);

    return data;
  },

  signUp: async (value: SignUpType) => {
    let config: AxiosRequestConfig = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/auth/sign-up`,
      headers: setHeader(),
      data: value
    };

    const data = await axios(config);

    return data;
  }
};
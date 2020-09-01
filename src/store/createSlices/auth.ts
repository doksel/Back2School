import { createSlice } from "@reduxjs/toolkit";
import api from "../../api";

import { AppDispatchType } from "../index";

export type SignInType = {}
export type SignUpType = {}
export type ForgotPasswordType = {}

export type ProfileType = {
  firstName: string;
  lastName: string;
  email: string;
};

export type AccountType = {
  profile: ProfileType | null;
  token: string | null;
  isLoading: boolean;
  error: string;
};

const initialState: AccountType = {
  profile: null,
  token: null,
  isLoading: false,
  error: ""
};

const authSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setStateValue(state, { payload }) {
      return {
        ...state,
        [payload.type]: payload.data
      };
    },
    signInSuccess(state, { payload }) {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token
      };
    },
    signUpSuccess(state, { payload }) {
      return {
        ...state,
        token: { ...payload.token }
      };
    },
    forgotPasswordSuccess(state, { payload }) {
      return {
        ...state,
        token: { ...payload.token }
      };
    },
    signOut(state) {
      localStorage.removeItem("token");
      return {
        ...state,
        ...initialState
      };
    }
  }
});

export const {
  setStateValue,
  signInSuccess,
  signUpSuccess,
  forgotPasswordSuccess,
  signOut
} = authSlice.actions;

export default authSlice.reducer;

export const signIn = (value: SignInType) => async (
  dispatch: AppDispatchType
) => {
  try {
    dispatch(setStateValue({ type: "isLoading", data: true }));
    const { data } = await api.auth.signIn(value);

    dispatch(signInSuccess(data));
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(setStateValue({ type: "error", data: error.response.data.error }));
  }
  dispatch(setStateValue({ type: "isLoading", data: false }));
};

export const signUp = (value: SignUpType) => async (
  dispatch: AppDispatchType
) => {
  try {
    dispatch(setStateValue({ type: "isLoading", data: true }));
    const { data } = await api.auth.signUp(value);

    dispatch(signUpSuccess(data));
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(setStateValue({ type: "error", data: false }));
  }
  dispatch(setStateValue({ type: "isLoading", data: false }));
};

export const forgotPassword = (value: ForgotPasswordType) => async (
  dispatch: AppDispatchType
) => {
  try {
    dispatch(setStateValue({ type: "isLoading", data: true }));
    const { data } = await api.auth.signUp(value);

    dispatch(forgotPasswordSuccess(data));
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(setStateValue({ type: "error", data: false }));
  }
  dispatch(setStateValue({ type: "isLoading", data: false }));
};

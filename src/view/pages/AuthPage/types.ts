import { FormEvent } from "react";

export type LoginPagePropsType = {};

export type LoginFormType = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: string;
};

export type RegisterPagePropsType = {};

export type RegisterFormType = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: string;
};

import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import Form from "./Form";

import {LoginPagePropsType} from "../types";

let LoginPage: React.FC<LoginPagePropsType> = () => {
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<{}> = useSelector;

  const isLoading = useTypedSelector(state => state);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  useEffect(() => {
    return () => {
      dispatch({ type: "RESET_FORM" });
    };
  }, []);

  return (
    <div>
      <Form onSubmit={formSubmit} loading={false} error="error" />
    </div>
  );
};

export default LoginPage;
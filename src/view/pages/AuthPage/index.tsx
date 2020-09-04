import React from "react";
import { Route } from "react-router-dom";

import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";

const AuthPage: React.FC = () => {
  return (
    <>
      <Route path="/auth/login" exact render={() => <LoginPage />} />
      <Route path="/auth/register" exact render={() => <RegisterPage />} />
    </>
  );
};

export default AuthPage;

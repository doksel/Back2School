import React from "react";
import LoginFacebook from "react-facebook-login";
import { appIdFacebookLogin } from "../../../helpers/constants";

import styles from "./styles.module.scss";

const FacebookLogin = () => {
  const onSuccess = (response: any) => {
    console.log("onSuccess", response);
  };

  const onClick = (response: any) => {
    console.log("onFailure", response);
  };

  return (
    <div className="facebookLogin">
      <LoginFacebook
        appId={appIdFacebookLogin}
        autoLoad={false}
        fields="name,email,picture"
        onClick={onClick}
        callback={onSuccess}
      />
    </div>
  );
};

export default FacebookLogin;

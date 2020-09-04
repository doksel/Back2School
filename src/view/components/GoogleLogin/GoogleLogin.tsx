import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { clientIdGoogleLogin } from "../../../helpers/constants";

import styles from './styles.module.scss';

const  LoginGoogle = () => {
    const onSuccess = (response: any) => {
        console.log("onSuccess",response);
    }

    const onFailure = (response: any) => {
        console.log("onFailure",response);
    }

    return (
      <div className="loginGoogle">
          <GoogleLogin
            clientId={clientIdGoogleLogin}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
  
  export default LoginGoogle;
  
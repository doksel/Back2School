import React from 'react';

import MultiDatePicker from "../../common/MultiDatePicker/MultiDatePicker";
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin';
import FacebookLogin from '../../components/FacebookLogin/FacebookLogin';
import Button from "../../common/Button/Button";

const  MainPage = () => {
  return (
    <div className="MainPage">
      MainPage
      <MultiDatePicker/>
      <GoogleLogin/>
      <FacebookLogin/>
      <Button variant="contained" custom >Button</Button>
    </div>
  );
}

export default MainPage;

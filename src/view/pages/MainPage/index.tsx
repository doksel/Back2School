import React from 'react';

import MultiDatePicker from "../../common/MultiDatePicker";
import GoogleLogin from '../../components/GoogleLogin';
import FacebookLogin from '../../components/FacebookLogin';
import Button from "../../common/Button/index";

const  MainPage = () => {
  return (
    <div className="MainPage">
      MainPage
      <MultiDatePicker/>
      <GoogleLogin/>
      <FacebookLogin/>
      <Button variant="outlined">Button</Button>
    </div>
  );
}

export default MainPage;

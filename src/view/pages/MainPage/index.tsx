import React from 'react';

import MultiDatePicker from "../../common/MultiDatePicker";
import GoogleLogin from '../../components/GoogleLogin';
import FacebookLogin from '../../components/FacebookLogin';

const  MainPage = () => {
  return (
    <div className="MainPage">
      MainPage
      <MultiDatePicker/>
      <GoogleLogin/>
      <FacebookLogin/>
    </div>
  );
}

export default MainPage;

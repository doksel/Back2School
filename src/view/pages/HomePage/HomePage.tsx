import React from "react";

import MultiDatePicker from "../../common/MultiDatePicker/MultiDatePicker";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import FacebookLogin from "../../components/FacebookLogin/FacebookLogin";
import Button from "../../common/Button/Button";
import Loader from "../../common/Loader/Loader";
import MainLoader from "../../common/MainLoader/MainLoader";
import RadioButton from "../../common/Radiobutton/Radiobutton";
import Checkbox from "../../common/Checkbox/Checkbox";
import Rating from "../../common/Rating/Rating";
import Selecter from "../../common/Selecter/Selecter";

const MainPage: React.FC = () => {
  return (
    <div className="MainPage">
      MainPage
      <MainLoader loading={false} />
      <Loader />
      <MultiDatePicker />
      <GoogleLogin />
      <FacebookLogin />
      <Button variant="contained" custom>
        Button
      </Button>
      <RadioButton label="RadioButton" ariaLabel="gender1" name="gender" row />
      <Checkbox name="checkbox" label="Checkbox" />
      <Rating name="simple-controlled" label="Rating" />
      <Selecter />
    </div>
  );
};

export default MainPage;

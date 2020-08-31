import React from "react";

import Button from "../../../common/Button";

import {LoginFormType} from "../types";

const Form: React.FC<LoginFormType> = ({ loading, onSubmit, error }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
    </form>
  );
};

export default Form;
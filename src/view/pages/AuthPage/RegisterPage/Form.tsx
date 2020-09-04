import React from "react";

import Button from "../../../common/Button/Button";

import { RegisterFormType } from "../types";

const Form: React.FC<RegisterFormType> = ({ loading, onSubmit, error }) => {
  return <form onSubmit={onSubmit} autoComplete="off"></form>;
};

export default Form;

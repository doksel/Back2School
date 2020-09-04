import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";

import styles from "./styles.module.scss";

type PropsType = {
  custom?: boolean;
};

const Input: React.FC<TextFieldProps & PropsType> = ({
  custom,
  required,
  id,
  label,
  defaultValue,
}) => (
  <div className="input">
    <TextField
      required={required}
      id={id}
      label={label}
      defaultValue={defaultValue}
      className={custom ? styles.button : ""}
    />
  </div>
);

export default Input;

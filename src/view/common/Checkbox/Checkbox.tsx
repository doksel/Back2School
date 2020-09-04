import React from "react";
import { FormControlLabel, Checkbox as CheckboxMain } from "@material-ui/core";

import styles from "./styles.module.scss";

type PropsType = {
  label?: string;
  name: string;
  custom?: boolean;
  handleChange?: () => void;
};

const Checkbox: React.FC<PropsType> = ({ name, label, handleChange }) => (
  <div className={styles.checkbox}>
    <FormControlLabel
      control={
        <CheckboxMain
          name={name}
          className={styles.button}
          onChange={handleChange}
        />
      }
      label={label}
    />
  </div>
);

export default Checkbox;

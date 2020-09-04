import React from "react";
import {
  FormControlLabel,
  Checkbox as CheckboxMain,
  CheckboxProps,
} from "@material-ui/core";

import styles from "./styles.module.scss";

type PropsType = {
  label?: string;
  custom?: boolean;
};

const Checkbox: React.FC<CheckboxProps & PropsType> = ({
  name,
  label,
  custom,
}) => {
  return (
    <div className="checkbox">
      <FormControlLabel
        control={
          <CheckboxMain name={name} className={custom ? styles.button : ""} />
        }
        label={label}
      />
    </div>
  );
};

export default Checkbox;

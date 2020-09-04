import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormControlLabelProps,
} from "@material-ui/core";

import styles from "./styles.module.scss";

type PropsType = {
  custom?: boolean;
  handleChange: () => void;
  ariaLabel: string;
};

const RadioButton: React.FC<FormControlLabelProps & PropsType> = ({
  handleChange,
  value,
  name,
  label,
  ariaLabel,
}) => {
  return (
    <div className="radioButton">
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          aria-label={ariaLabel}
          name={name}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButton;

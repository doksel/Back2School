import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroupProps,
} from "@material-ui/core";

import { optionsRadioButton } from "../../../helpers/fakeValues";

import styles from "./styles.module.scss";

type OptionsRadioButtonType = {
  value: string;
  label: string;
};

type PropsType = {
  label?: string;
  name: string;
  row?: boolean;
  ariaLabel?: string;
  options?: Array<OptionsRadioButtonType>;
  handleChange?: () => void;
};

const RadioButton: React.FC<PropsType> = ({
  handleChange,
  name,
  label,
  ariaLabel,
  options = [],
  row,
}) => {
  const [value, setValue] = React.useState("male");

  const handleSelectValue: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.radioButton}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          row={row}
          aria-label={ariaLabel}
          name={name}
          value={value}
          onChange={handleSelectValue}
        >
          {optionsRadioButton.map((option) => (
            <FormControlLabel
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default RadioButton;

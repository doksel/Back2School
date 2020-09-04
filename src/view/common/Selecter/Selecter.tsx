import React from "react";
import {
  makeStyles,
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
  NativeSelect,
} from "@material-ui/core";

import styles from "./styles.module.scss";

const Selecter: React.FC = () => {
  const [state, setState] = React.useState({
    age: "",
  });

  const handleChange: (
    event: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>
  ) => void = (event) => {
    const name = event.target.name;

    name &&
      setState({
        ...state,
        [name]: event.target.value,
      });
  };

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          className={styles.selectEmpty}
          value={state.age}
          name="age"
          onChange={handleChange}
          inputProps={{ "aria-label": "age" }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
    </div>
  );
};
export default Selecter;

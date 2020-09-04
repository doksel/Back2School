import React from "react";
import RatingMain from "@material-ui/lab/Rating";
import { Typography, Box } from "@material-ui/core";

import styles from "./styles.module.scss";

type PropsType = {
  name?: string;
  readOnly?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<{}>, value: number) => void;
};

const Rating: React.FC<PropsType> = ({
  name = "Rating",
  readOnly,
  label,
  onChange,
}) => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <div className={styles.rating}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">{label}</Typography>
        <RatingMain
          name={name}
          value={value}
          readOnly={readOnly}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
};
export default Rating;

import React from "react";
import { Button as MainButton, ButtonProps } from "@material-ui/core";

import styles from "./styles.module.scss";

type PropsType = {
  custom?: boolean;
};

const Button: React.FC<ButtonProps & PropsType> = ({
  variant,
  color,
  custom,
  children,
  disabled,
  onClick,
}) => (
  <div className={styles.wrapper}>
    <MainButton
      variant={variant}
      color={color}
      className={custom ? styles.button : ""}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </MainButton>
  </div>
);

export default Button;

import React from 'react';
import { Button as MainButton } from '@material-ui/core';

import styles from './styles.module.scss';

type PropsType = {
  variant?: "text" | "outlined" | "contained" | undefined;
  color?:"inherit" | "primary" | "secondary" | "default" | undefined
};

const  Button: React.FC<PropsType> = ({variant,  color, children}) => {
  console.log(variant,  color);
  
  return (
    <div className={styles.button}>
      <MainButton variant={variant} color={color} className={styles.button}>
        {children}
      </MainButton>
    </div>
  );
}

export default Button;

import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ className, children, ...rest }) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;

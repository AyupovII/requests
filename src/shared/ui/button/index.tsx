import { FC, ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type TButton = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButton> = ({ children, className, variant = 'primary', size = 'medium', ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
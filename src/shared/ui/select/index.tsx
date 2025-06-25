import { FC } from 'react';
import styles from './styles.module.scss';
type TOption = {
  value: string;
  label: string;
};

type TSelectProps = {
  value: string;
  options: TOption[];
  onChange: (value: string) => void;
  id: string;
  name: string;
  label: string
};

export const Select: FC<TSelectProps> = ({ id, name, value, options, onChange, label }) => {
  return (
    <div className={styles.select}>
      <label htmlFor={id}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        name={name}
      >
        {options.map((option) => (
          <option
            key={option.value}
            className={styles.option}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>

  );
};
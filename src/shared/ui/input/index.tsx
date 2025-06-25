import { FC, InputHTMLAttributes } from "react"
import styles from './styles.module.scss'
type TInput = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>
export const Input: FC<TInput> = ({ id,  label, ...props }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
      />
    </div>
  )
};
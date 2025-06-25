import { FC, TextareaHTMLAttributes } from "react"
import styles from './styles.module.scss'

type TTextarea = {
  id: string
  rows?: number
  label: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>
export const Textarea: FC<TTextarea> = ({ id, label, rows = 4, ...props }) => {
  return (
    <div className={styles.textarea}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        {...props}
        rows={rows}
      />
    </div>
  )
};
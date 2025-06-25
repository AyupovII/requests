import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type TMain = {
  children: ReactNode
}
export const Main: FC<TMain> = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

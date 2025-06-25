import { FC } from "react";

import styles from "./styles.module.scss";

type THeader = {
  link: string
}
export const Header: FC<THeader> = () => {
  
  return (
    <header className={styles.header}>
      <h1>Тестовое задание</h1>
    </header>
  )
}
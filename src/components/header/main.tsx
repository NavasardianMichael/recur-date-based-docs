import { FC } from 'react'
import Logo from 'assets/images/logo.png'
import styles from './styles.module.css'

type Props = {

}

export const Header: FC<Props> = () => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.logo}>
        <img src={Logo} alt="recur-date-based logo" />
      </div>
      <div className={styles.name}>
        <h1 style={{ margin: 0, textAlign: 'left' }}>Docs of recur-date-based package</h1>
      </div>
    </header>
  )
}
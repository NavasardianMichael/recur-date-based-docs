import { FC } from 'react'
import Logo from 'assets/images/logo-with-text.png'
import styles from './styles.module.css'

type Props = {}

export const Header: FC<Props> = () => {
  return (
    <header className={styles.header} role='banner'>
      <div className={styles.logo}>
        <img src={Logo} alt='recur-date-based logo' />
      </div>
      <div className={styles.name}>
        <h1 style={{ margin: 0, textAlign: 'left' }}>
          Documentation &amp; API of <br />
          NPM package recur-date-based
        </h1>
      </div>
    </header>
  )
}

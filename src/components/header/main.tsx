import { FC } from 'react'
import Logo from 'assets/images/logo.png'
import styles from './styles.module.css'

type Props = {

}

export const Header: FC<Props> = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img src={Logo} alt='logo' />
        </div>
        <div className={styles.name}>
            <h1>Recurring Dates Generator</h1>
        </div>
    </div>
  )
}
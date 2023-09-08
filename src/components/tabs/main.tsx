import { FC } from 'react'
import styles from './styles.module.css'

type Props = {

}

export const Tabs: FC<Props> = ({  }) => {
  return (
    <div className={styles.tabs}>
        <button className={styles.trigger}>
            Docs
        </button>
        <button className={styles.trigger}>
            Playground
        </button>
    </div>
  )
}
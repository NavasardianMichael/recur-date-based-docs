import { FC, memo } from 'react'
import styles from './styles.module.css'

type Props = {

}

export const Playground: FC<Props> = memo(({  }) => {
  return (
    <div className={styles.playground}>
      Playground
    </div>
  )
})
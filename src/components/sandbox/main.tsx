import { FC, useState } from 'react'
import styles from './styles.module.css'
import { INITIAL_STATE } from 'helpers/constants'

type Props = {

}

export const Sandbox: FC<Props> = () => {
  const [configs, setConfigs] = useState(JSON.stringify(INITIAL_STATE, undefined, 4))
  
  return (
    <div className={styles.sandbox}>
        <textarea
          rows={20}
          value={configs}
          onChange={(e) => setConfigs(e.currentTarget.value)} 
        />
    </div>
  )
}
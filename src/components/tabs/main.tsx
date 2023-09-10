import { FC, useState } from 'react'
import styles from './styles.module.css'
import { combineClassNames } from 'helpers/commons'
import { Docs } from 'components/docs/main'
import { Playground } from 'components/playground/main'

type Props = {

}

export const Tabs: FC<Props> = ({  }) => {

  const [activeTab, setActiveTab] = useState<1 | 2>(1)

  const handleTabChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const name = +e.currentTarget.name as typeof activeTab
    setActiveTab(name)
  }

  return (
    <>
      <div className={styles.tabs}>
          <button
            name="1"
            onClick={handleTabChange}
            className={combineClassNames(styles.trigger, activeTab === 1 ? styles.active : '')}
          >
            Docs
          </button>
          <button
            name="2"
            onClick={handleTabChange}
            className={combineClassNames(styles.trigger, activeTab === 2 ? styles.active : '')}
          >
            Playground
          </button>
          <div className={styles.rowFill}></div>
      </div>
      <div className={styles.content}>
        {
          activeTab === 1 ?
          <Docs /> :
          <Playground />
        }
      </div>
    </>
  )
}
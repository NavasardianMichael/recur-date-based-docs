import { FC, memo, useRef, useState } from 'react'
import styles from './styles.module.css'
import { genRecurDateBasedList } from 'recur-date-based'

type Props = {

}

export const Playground: FC<Props> = memo(({  }) => {

  const codeRef = useRef<HTMLElement>(null)
  
  const handleRunCode = () => {
    const text = codeRef.current?.textContent

    if(!text) return;
    
    console.log(text.split('\n  '));
    
    
  }

  return (
    <div className={styles.playground}>
      <div className={styles.editor}>
        <pre>
          <code ref={codeRef} contentEditable>
            {
`genRecurDateBasedList({
  start: '2023-09-06T16:30:00',
  interval: 1,
  intervalType: 'hour',
  numericTimezone: 6,
  direction: 'backward',
  end: 5,
  // exclude: ({ date }) => date > new Date(),
  extend: {
    timeStr: ({ dateStr }) => dateStr.split('T')[1]
  },
  onError: (error) => {
    // do some stuff...
    console.log(error.message);
  }
})`              
            }
          </code>
        </pre>
        <button className={styles.applyButton} onClick={handleRunCode}>
          run
        </button>
      </div>
      <div className={styles.result}>
        {}
      </div>
    </div>
  )
})
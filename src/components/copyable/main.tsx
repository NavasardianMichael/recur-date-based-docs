import { FC, useState, useRef, useEffect } from 'react'
import { PropsWithOptionalChildren } from 'helpers/types'
import { combineClassNames } from 'helpers/commons'
import CopyIcon from 'assets/images/copy-icon.svg'
import CheckMarkIcon from 'assets/images/check-mark.svg'
import styles from './styles.module.css'

export const Copyable: FC<PropsWithOptionalChildren> = ({ children }) => {

    const [copied, setCopied] = useState(false)
    const copiedTimeout = useRef<NodeJS.Timeout>()
    const contentRef = useRef<HTMLDivElement>(null)
  
    const handleCopy = () => {
      navigator.clipboard.writeText(contentRef?.current?.textContent as string)
      setCopied(true)
  
      copiedTimeout.current = setTimeout(() => setCopied(false), 2000)
    }
  
    useEffect(() => {
      return () => {copied && clearTimeout(copiedTimeout.current)}
    }, [copied])
  

    return (
        <div className={styles.copyable}>
            <div className={combineClassNames(styles.installBlock, copied ? styles.disabled : '')} onClick={handleCopy}>
                <img 
                    className={styles.copyIcon} 
                    src={copied ? CheckMarkIcon : CopyIcon} 
                    alt='copy icon'
                />
                <div ref={contentRef}>{children}</div>
            </div>
        </div>
    )
}
import { FC } from 'react'
import styles from './styles.module.css'

type Props = {
  children: string
}

export const InlineCode: FC<Props> = ({ children }) => (
  <code className={styles.inlineCode}>{children.trim()}</code>
)

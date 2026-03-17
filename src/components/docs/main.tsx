import { FC, memo } from 'react'
import styles from './styles.module.css'
import { DocsNav } from './DocsNav'
import { DocsAbout } from './DocsAbout'
import { DocsGettingStarted } from './DocsGettingStarted'
import { DocsApiReference } from './DocsApiReference'
import { DocsUsage } from './DocsUsage'
import { DocsGotchas } from './DocsGotchas'
import { DocsRoadmap } from './DocsRoadmap'
import { DocsContributing } from './DocsContributing'
import { DocsLicense } from './DocsLicense'
import { DocsContact } from './DocsContact'

type Props = {}

export const Docs: FC<Props> = memo(() => {
  return (
    <article className={styles.docs}>
      <DocsNav />
      <DocsAbout />
      <DocsGettingStarted />
      <DocsApiReference />
      <DocsUsage />
      <DocsGotchas />
      <DocsRoadmap />
      <DocsContributing />
      <DocsLicense />
      <DocsContact />
    </article>
  )
})

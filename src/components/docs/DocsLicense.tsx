import { FC, memo } from 'react'

export const DocsLicense: FC = memo(() => (
  <section aria-labelledby='license'>
    <h2 id='license'>License</h2>
    <p>Distributed under the MIT License</p>
  </section>
))

DocsLicense.displayName = 'DocsLicense'

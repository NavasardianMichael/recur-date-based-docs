import { FC, memo } from 'react'
import { Copyable } from 'components/copyable/main'
import { CodeBlock } from 'components/code-block/CodeBlock'

export const DocsGettingStarted: FC = memo(() => (
  <section aria-labelledby='getting-started'>
    <h2 id='getting-started'>Getting Started</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Copyable>
        <CodeBlock language='bash'>{`npm install recur-date-based@latest`}</CodeBlock>
      </Copyable>
      <Copyable>
        <CodeBlock language='bash'>{`pnpm add recur-date-based@latest`}</CodeBlock>
      </Copyable>
      <Copyable>
        <CodeBlock language='bash'>{`yarn add recur-date-based@latest`}</CodeBlock>
      </Copyable>
    </div>
  </section>
))

DocsGettingStarted.displayName = 'DocsGettingStarted'

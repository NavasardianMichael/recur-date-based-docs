import { FC, memo } from 'react'

export const DocsNav: FC = memo(() => (
  <nav aria-label='Table of contents'>
    <details open>
      <summary>Table of Contents</summary>
      <ol>
        <li>
          <a href='#about-the-project'>About The Project</a>
        </li>
        <li>
          <a href='#getting-started'>Getting Started</a>
        </li>
        <li>
          <a href='#api-reference'>API Reference</a>
        </li>
        <li>
          <a href='#usage'>Usage & Examples</a>
        </li>
        <li>
          <a href='#gotchas'>Gotchas & Notes</a>
        </li>
        <li>
          <a href='#roadmap'>Roadmap</a>
        </li>
        <li>
          <a href='#contributing'>Contributing</a>
        </li>
        <li>
          <a href='#license'>License</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ol>
    </details>
  </nav>
))

DocsNav.displayName = 'DocsNav'

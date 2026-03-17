import { FC, memo } from 'react'

export const DocsRoadmap: FC = memo(() => (
  <section aria-labelledby='roadmap'>
    <h2 id='roadmap'>Roadmap</h2>
    <div> &#10003; Extended props</div>
    <div> &#10003; Exclude (filter) functionality</div>
    <div> &#10003; Error handling</div>
    <div> &#10003; Custom error handling</div>
    <div> &#10003; Custom timezone</div>
    <div> &#10003; Repeating to backward</div>
    <div> &#10003; Formatting (e.g. YYYY-MM-DD HH:mm:ss)</div>
    <div> &#10003; Cron rules (5-field expressions)</div>
    <div>
      {' '}
      &#10003; Proper timezone handling (wall-clock date, correct utcDate)
    </div>
    <div> &#10003; Exported utility constants and types</div>
    <div> &#10003; JSDoc documentation</div>
    <p>
      See the{' '}
      <a href='https://github.com/NavasardianMichael/recur-date-based/issues'>
        open issues
      </a>{' '}
      for a full list of proposed features (and known issues).
    </p>
  </section>
))

DocsRoadmap.displayName = 'DocsRoadmap'

import { FC, memo } from 'react'
import { InlineCode } from 'components/code-block/InlineCode'

export const DocsGotchas: FC = memo(() => (
  <section aria-labelledby='gotchas'>
    <h2 id='gotchas'>Gotchas & Notes</h2>
    <ul>
      <li>
        <b>Timezones and DST</b>: <InlineCode>date</InlineCode> and{' '}
        <InlineCode>dateStr</InlineCode> represent the wall-clock time in
        the target timezone (default: machine timezone, or{' '}
        <InlineCode>numericTimeZone</InlineCode> when set).{' '}
        <InlineCode>utcDate</InlineCode> is the corresponding UTC moment.
      </li>
      <li>
        <b>timeZone vs numericTimeZone</b>: Avoid defining{' '}
        <InlineCode>timeZone</InlineCode> inside{' '}
        <InlineCode>localeString.formatOptions</InlineCode> when you also
        use <InlineCode>numericTimeZone</InlineCode>, otherwise results may
        be inconsistent.
      </li>
      <li>
        <b>Error handling</b>: If <InlineCode>onError</InlineCode> is
        provided, configuration and runtime errors are routed there and do
        not throw. If it is omitted, invalid input (e.g. bad cron or{' '}
        <InlineCode>end</InlineCode>) will throw.
      </li>
      <li>
        <b>Large ranges</b>: When using a very large numeric{' '}
        <InlineCode>end</InlineCode> together with heavy{' '}
        <InlineCode>extend</InlineCode> callbacks, be mindful of
        performance—it iterates once per occurrence.
      </li>
    </ul>
  </section>
))

DocsGotchas.displayName = 'DocsGotchas'

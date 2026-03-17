import { FC, memo } from 'react'
import { Copyable } from 'components/copyable/main'
import { CodeBlock } from 'components/code-block/CodeBlock'
import { InlineCode } from 'components/code-block/InlineCode'

export const DocsAbout: FC = memo(() => (
  <section aria-labelledby='about-the-project'>
    <h2 id='about-the-project'>About The Project</h2>
    <p>
      <b>At a glance</b>: <InlineCode>recur-date-based</InlineCode>{' '}
      generates recurring dates (step-based or cron) and lets you attach
      strongly-typed extra properties to each occurrence.
    </p>
    <Copyable>
      <CodeBlock language='typescript'>{`import { genRecurDateBasedList } from 'recur-date-based'

genRecurDateBasedList({
  start: '2024-01-01',
  end: 5,
  rules: [{ unit: 'day', portion: 1 }],
  extend: {
    isWeekend: ({ date }) => [0, 6].includes(date.getDay()),
  },
})`}</CodeBlock>
    </Copyable>
    <p>
      The project provides a unique functionality related to JavaScript
      dates. It allows to generate recurring dates based on a certain input
      shape. Its name is in harmony with its essence: the exported function
      gives an opportunity to generate additional properties based on the
      date of the current iteration.
    </p>
    <p>
      There are some recurring date utilities, such as{' '}
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.npmjs.com/package/moment-recur'
      >
        moment-recur
      </a>{' '}
      available on NPM, but the{' '}
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.npmjs.com/package/moment'
      >
        moment
      </a>{' '}
      is a must, which is not the most lightweight one. So I didn't find any
      package that really suited my needs, when I ran into the problem of
      providing such functionality․
      <p>
        {' '}
        Eventually I created this enhanced one, which is{' '}
        <b>function-based</b>, <b>fully-typed</b>, very <b>lightweight</b>{' '}
        and{' '}
        <b>
          doesn't require additional mapping for generation of extra
          properties.
        </b>
      </p>
      recur-date-based supports
      <ul>
        <li>both step-based and cron patterns for recurrence</li>
        <li>filtering and extending the output</li>
        <li>both forward and backward direction</li>
        <li>custom timezone</li>
        <li>locale</li>
        <li>formatting</li>
        <li>error handling</li>
      </ul>
    </p>
    <p>
      If you have some idea about the next features of the current package,
      please suggest changes by forking this repo and creating a pull
      request or opening an issue.
    </p>
  </section>
))

DocsAbout.displayName = 'DocsAbout'

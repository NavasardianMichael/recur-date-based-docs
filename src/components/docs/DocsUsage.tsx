import { FC, memo } from 'react'
import { Copyable } from 'components/copyable/main'
import { CodeBlock } from 'components/code-block/CodeBlock'
import { InlineCode } from 'components/code-block/InlineCode'
import styles from './styles.module.css'

export const DocsUsage: FC = memo(function DocsUsage() {
  return (
    <section aria-labelledby='usage'>
        <h2 id='usage'>Usage & Examples</h2>
        <p>
          The examples below cover the most common flows: step-based rules, cron
          expressions, TypeScript usage with exported constants and types,
          extending occurrences with extra props, and timezone-aware
          backfilling.
        </p>
        <h3>formatDate</h3>
        <p>
          Formats a <InlineCode>Date</InlineCode> using a supported format
          string from <InlineCode>OUTPUT_FORMATS</InlineCode>.
        </p>
        <Copyable>
          <CodeBlock language='typescript'>{`import { formatDate } from 'recur-date-based'

formatDate(new Date('2024-03-15'), 'YYYY-MM-DD') // "2024-03-15"
formatDate(new Date('2024-03-15T09:30:00'), 'YYYY-MM-DD HH:MM') // "2024-03-15 09:30"
formatDate(new Date('2024-01-15'), 'MMMM DD, YYYY', 'en-US') // "January 15, 2024"`}</CodeBlock>
        </Copyable>
        <h3>Format Tokens</h3>
        <p>
          Use these tokens in <InlineCode>outputFormat</InlineCode> or with{' '}
          <InlineCode>formatDate</InlineCode>:
        </p>
        <div className={`${styles.typesList} ${styles.fitContent}`}>
          <table className={styles.paramsTable}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>YYYY</td>
                <td>4-digit year</td>
              </tr>
              <tr>
                <td>YY</td>
                <td>2-digit year</td>
              </tr>
              <tr>
                <td>MM</td>
                <td>2-digit month</td>
              </tr>
              <tr>
                <td>M</td>
                <td>Month (no leading zero)</td>
              </tr>
              <tr>
                <td>DD</td>
                <td>2-digit day</td>
              </tr>
              <tr>
                <td>D</td>
                <td>Day (no leading zero)</td>
              </tr>
              <tr>
                <td>HH</td>
                <td>
                  Hour (24h, or 12h if format contains <InlineCode> A</InlineCode>)
                </td>
              </tr>
              <tr>
                <td>SS</td>
                <td>Seconds</td>
              </tr>
              <tr>
                <td>SSS</td>
                <td>Milliseconds</td>
              </tr>
              <tr>
                <td>A</td>
                <td>AM/PM</td>
              </tr>
              <tr>
                <td>EEE</td>
                <td>Weekday short (locale)</td>
              </tr>
              <tr>
                <td>EEEE</td>
                <td>Weekday long (locale)</td>
              </tr>
              <tr>
                <td>MMM</td>
                <td>Month short (locale)</td>
              </tr>
              <tr>
                <td>MMMM</td>
                <td>Month long (locale)</td>
              </tr>
              <tr>
                <td>DDD</td>
                <td>Day of year (3-digit)</td>
              </tr>
              <tr>
                <td>Z</td>
                <td>Timezone offset (+HH:mm)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Popular Examples</h3>
        <p>
          <b>Step-based, daily:</b>
        </p>
        <Copyable>
          <CodeBlock language='typescript'>{`genRecurDateBasedList({
  start: '2024-01-01',
  end: 2,
  rules: [{ unit: 'day', portion: 1 }],
  outputFormat: 'YYYY-MM-DD',
  numericTimeZone: 4,
})`}</CodeBlock>
        </Copyable>
        <p>Result:</p>
        <Copyable>
          <CodeBlock language='json'>{`[
  {
    "dateStr": "2024-01-01",
    "date": "2024-01-01T00:00:00.000Z",
    "utcDate": "2024-01-01T00:00:00.000Z"
  },
  {
    "dateStr": "2024-01-02",
    "date": "2024-01-02T00:00:00.000Z",
    "utcDate": "2024-01-02T00:00:00.000Z"
  }
]`}</CodeBlock>
        </Copyable>
        <p>
          <b>Cron: Every Monday, Tuesday and Wednesday at 9am:</b>
        </p>
        <Copyable>
          <CodeBlock language='typescript'>{`genRecurDateBasedList({
  start: '2024-01-03',
  end: '2024-01-11',
  rules: '0 9 * * 1-3',
  outputFormat: 'EEEE, D MMM YYYY HH:MM:SS',
  numericTimeZone: 3,
})`}</CodeBlock>
        </Copyable>
        <p>Result:</p>
        <Copyable>
          <CodeBlock language='json'>{`[
  {
    "dateStr": "Wednesday, 3 Jan 2024 09:00:00",
    "date": "2024-01-03T05:00:00.000Z",
    "utcDate": "2024-01-03T06:00:00.000Z"
  },
  {
    "dateStr": "Monday, 8 Jan 2024 09:00:00",
    "date": "2024-01-08T05:00:00.000Z",
    "utcDate": "2024-01-08T06:00:00.000Z"
  },
  {
    "dateStr": "Tuesday, 9 Jan 2024 09:00:00",
    "date": "2024-01-09T05:00:00.000Z",
    "utcDate": "2024-01-09T06:00:00.000Z"
  },
  {
    "dateStr": "Wednesday, 10 Jan 2024 09:00:00",
    "date": "2024-01-10T05:00:00.000Z",
    "utcDate": "2024-01-10T06:00:00.000Z"
  }
]`}</CodeBlock>
        </Copyable>
        <p>
          <b>Using exported constants (TypeScript):</b>
        </p>
        <Copyable>
          <CodeBlock language='typescript'>{`import {
  genRecurDateBasedList,
  DIRECTIONS,
  INTERVAL_UNITS,
  type T_CoreInitialArgs,
} from 'recur-date-based'

const args: T_CoreInitialArgs = {
  start: '2024-01-01',
  end: 5,
  rules: [{ unit: INTERVAL_UNITS.day, portion: 1 }],
  direction: DIRECTIONS.forward,
}

genRecurDateBasedList(args)`}</CodeBlock>
        </Copyable>
        <p>
          <b>With filter and extend:</b>
        </p>
        <Copyable>
          <CodeBlock language='typescript'>{`genRecurDateBasedList({
  start: '2024-01-01',
  end: 10,
  rules: [{ unit: 'day', portion: 1 }],
  filter: ({ date }) => date.getDay() !== 0,
  extend: {
    dayOfWeek: ({ date }) => date.getDay(),
    isLeapYear: ({ date }) => {
      const y = date.getFullYear();
      return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    },
  },
})`}</CodeBlock>
        </Copyable>
        <p>
          You can also spell out the generic explicitly so that the returned
          list has a precise item type: the base shape{' '}
          <InlineCode>{`{ date: Date; utcDate: Date; dateStr: string }`}</InlineCode>{' '}
          intersected with the type you provide in the generic argument.
        </p>
        <Copyable>
          <CodeBlock language='typescript'>{`const list = genRecurDateBasedList<{
  dayOfWeek: number
  isLeapYear: boolean
}>({
  start: '2024-01-01',
  end: 10,
  rules: [{ unit: 'day', portion: 1 }],
  extend: {
    dayOfWeek: ({ date }) => date.getDay(),
    isLeapYear: ({ date }) => {
      const y = date.getFullYear();
      return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    },
  },
})`}</CodeBlock>
        </Copyable>
        {/* Sandbox block commented out for now */}
        <p>Check out a detailed example with multiple rules.</p>
        <Copyable>
          <CodeBlock language='typescript'>{`import { genRecurDateBasedList } from 'recur-date-based'

genRecurDateBasedList({
  start: '2024-01-01T00:00:00',
  end: '2024-03-15T00:00:00',
  rules: [
    {
      unit: 'month',
      portion: 1
    },
    {
      unit: 'day',
      portion: 3
    },
    {
      unit: 'hour',
      portion: 4
    },
  ],
  localeString: {
    lang: 'en-US',
    formatOptions: {
      hourCycle: 'h24'
    }
  },
  // filtering only upcoming dates
  filter: ({ date }) => date > new Date(),
  extend: {
    isMonday: ({ date }) => date.getDay() === 1,
  }
})`}</CodeBlock>
        </Copyable>

        <h3>Result Shape</h3>
        <p>
          Each result item contains three date representations, plus any keys
          from <InlineCode>extend</InlineCode>:
        </p>
        <div className={`${styles.typesList} ${styles.fitContent}`}>
          <table className={styles.paramsTable}>
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <InlineCode>dateStr</InlineCode>
                </td>
                <td>
                  <InlineCode>string</InlineCode>
                </td>
                <td>
                  The wall-clock date/time as a formatted string. Controlled by{' '}
                  <InlineCode>outputFormat</InlineCode> or{' '}
                  <InlineCode>localeString</InlineCode>.
                </td>
              </tr>
              <tr>
                <td>
                  <InlineCode>date</InlineCode>
                </td>
                <td>
                  <InlineCode>Date</InlineCode>
                </td>
                <td>
                  The same wall-clock date/time as a JS{' '}
                  <InlineCode>Date</InlineCode> object.{' '}
                  <InlineCode>date.getHours()</InlineCode> returns the same hour
                  shown in <InlineCode>dateStr</InlineCode>.
                  <br />
                  <b>Note:</b> <InlineCode>JSON.stringify</InlineCode> calls{' '}
                  <InlineCode>.toISOString()</InlineCode>, which outputs the
                  internal UTC epoch (with the <InlineCode>Z</InlineCode>{' '}
                  suffix). This may look different from{' '}
                  <InlineCode>dateStr</InlineCode>, but they represent the
                  same wall-clock moment.
                </td>
              </tr>
              <tr>
                <td>
                  <InlineCode>utcDate</InlineCode>
                </td>
                <td>
                  <InlineCode>Date</InlineCode>
                </td>
                <td>
                  The actual UTC instant, computed as wall-clock time minus{' '}
                  <InlineCode>numericTimeZone</InlineCode>. Only differs from{' '}
                  <InlineCode>date</InlineCode> when{' '}
                  <InlineCode>numericTimeZone</InlineCode> is
                  explicitly set to a value different from the machine timezone.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <b>Tip:</b> <InlineCode>dateStr</InlineCode> and{' '}
          <InlineCode>date</InlineCode> always agree.{' '}
          <InlineCode>utcDate</InlineCode> only differs when{' '}
          <InlineCode>numericTimeZone</InlineCode> is set to a value that
          differs from the machine timezone.
        </p>

        <p>
          Check out the result of the multi-rule example above. Since no{' '}
          <InlineCode>numericTimeZone</InlineCode> is set,{' '}
          <InlineCode>date</InlineCode> and <InlineCode>utcDate</InlineCode> are
          identical (both default to the machine timezone). The{' '}
          <InlineCode>date</InlineCode> JSON value uses the{' '}
          <InlineCode>Z</InlineCode> suffix because{' '}
          <InlineCode>JSON.stringify</InlineCode> calls{' '}
          <InlineCode>.toISOString()</InlineCode>, but{' '}
          <InlineCode>dateStr</InlineCode> shows the wall-clock time via{' '}
          <InlineCode>toLocaleString</InlineCode>. This was compiled in the time
          zone GMT+4.
        </p>

        <Copyable>
          <CodeBlock language='json'>{`[
    {
        "dateStr": "1/1/2024, 00:00:00",
        "date": "2023-12-31T20:00:00.000Z",
        "utcDate": "2023-12-31T20:00:00.000Z",
        "isMonday": true
    },
    {
        "dateStr": "2/4/2024, 04:00:00",
        "date": "2024-02-04T00:00:00.000Z",
        "utcDate": "2024-02-04T00:00:00.000Z",
        "isMonday": false
    },
    {
        "dateStr": "3/7/2024, 08:00:00",
        "date": "2024-03-07T04:00:00.000Z",
        "utcDate": "2024-03-07T04:00:00.000Z",
        "isMonday": false
    }
]`}</CodeBlock>
        </Copyable>

        <p>
          Check out another example with <InlineCode>direction</InlineCode> set
          to <InlineCode>'backward'</InlineCode> and with applied custom{' '}
          <InlineCode>numericTimeZone</InlineCode>. The example was compiled in
          the time zone GMT+4.
        </p>

        <Copyable>
          <CodeBlock language='typescript'>{`import { genRecurDateBasedList, DIRECTIONS, INTERVAL_UNITS } from 'recur-date-based'

genRecurDateBasedList({
  start: '2024-04-08T18:45:23',
  end: 3,
  rules: [{ unit: INTERVAL_UNITS.day, portion: 2 }],
  direction: DIRECTIONS.backward,
  numericTimeZone: 3,
  onError: (error) => {
    console.log(error.message);
  },
})`}</CodeBlock>
        </Copyable>

        <p>Check out the result.</p>

        <Copyable>
          <CodeBlock language='json'>{`[
    {
        "dateStr": "2024-04-08T18:45:23",
        "date": "2024-04-08T14:45:23.000Z",
        "utcDate": "2024-04-08T15:45:23.000Z"
    },
    {
        "dateStr": "2024-04-06T18:45:23",
        "date": "2024-04-06T14:45:23.000Z",
        "utcDate": "2024-04-06T15:45:23.000Z"
    },
    {
        "dateStr": "2024-04-04T18:45:23",
        "date": "2024-04-04T14:45:23.000Z",
        "utcDate": "2024-04-04T15:45:23.000Z"
    }
]`}</CodeBlock>
        </Copyable>
    </section>
  )
})

import { FC, memo } from "react";
import { Copyable } from "components/copyable/main";
import styles from "./styles.module.css";

type Props = {};

export const Docs: FC<Props> = memo(() => {
  return (
    <div className={styles.docs}>
      <details open>
        <summary>Table of Contents</summary>
        <ol>
          <li>
            <a href="#about-the-project">About The Project</a>
          </li>
          <li>
            <a href="#getting-started">Getting Started</a>
          </li>
          <li>
            <a href="#api-reference">API Reference</a>
          </li>
          <li>
            <a href="#usage">Usage & Examples</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#contributing">Contributing</a>
          </li>
          <li>
            <a href="#license">License</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ol>
      </details>

      <h2 id="about-the-project">About The Project</h2>
      <p>
        The project provides a unique functionality related to JavaScript dates.
        It allows to generate recurring dates based on a certain input shape.
        Its name is in harmony with its essence: the exported function gives an
        opportunity to generate additional properties based on the date of the
        current iteration.
      </p>
      <p>
        There are some recurring date utilities, such as{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.npmjs.com/package/moment-recur"
        >
          moment-recur
        </a>{" "}
        available on NPM, but the{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.npmjs.com/package/moment"
        >
          moment
        </a>{" "}
        is a must, which is not the most lightweight one. So I didn't find any
        package that really suited my needs, when I ran into the problem of
        providing such functionality․ Eventually I created this enhanced one,
        which is <b>function-based</b>, <b>fully-typed</b>, very{" "}
        <b>lightweight</b> and{" "}
        <b>
          doesn't require additional mapping for generation of extra properties
        </b>{" "}
        .
      </p>
      <p>
        If you have some idea about the next features of the current package,
        please suggest changes by forking this repo and creating a pull request
        or opening an issue.
      </p>
      <h2 id="getting-started">Getting Started</h2>
      <Copyable>
        <pre style={{ padding: "1rem", margin: 0 }}>
          <code>{`# npm
npm install recur-date-based@latest

# pnpm
pnpm add recur-date-based@latest

# yarn
yarn add recur-date-based@latest`}</code>
        </pre>
      </Copyable>
      <h2 id="api-reference">API Reference</h2>
      <h3>Exports</h3>
      <table className={styles.paramsTable}>
        <thead>
          <tr>
            <th>Export</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>genRecurDateBasedList</code></td>
            <td><code>(args?) ={`>`} T_CoreReturnType[]</code></td>
            <td>Main function to generate recurring dates</td>
          </tr>
          <tr>
            <td><code>formatDate</code></td>
            <td><code>(date, format, locale?) ={`>`} string</code></td>
            <td>Format a date using a supported output format</td>
          </tr>
          <tr>
            <td><code>OUTPUT_FORMATS</code></td>
            <td><code>readonly string[]</code></td>
            <td>List of supported format strings</td>
          </tr>
          <tr>
            <td><code>T_OutputFormat</code></td>
            <td>type</td>
            <td>Union of all supported format strings</td>
          </tr>
          <tr>
            <td><code>T_Rules</code></td>
            <td>type</td>
            <td>Step-based rules or cron string</td>
          </tr>
        </tbody>
      </table>
      <h3>genRecurDateBasedList Parameters</h3>
      <p>
        Here are presented all the available parameters the exported function
        accepts.
      </p>
      <div className={styles.typesList}>
        <table className={styles.paramsTable}>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>start</td>
              <td>
                <code>string | Date</code>
              </td>
              <td>
                Start of the occurrence: date object (a valid instance of the
                <code>Date</code> constructor) or a valid string representation
                of date (e.g. 11/28/2024).
              </td>
              <td>today</td>
            </tr>
            <tr>
              <td>end</td>
              <td>
                <code>number | string | Date</code>
              </td>
              <td>
                End of the occurrence: a date object (a valid instance of the{' '}
                <code>Date</code> constructor) or a valid string representation
                of date (e.g. 11/28/2024) or number of occurrences (max 99_999).
              </td>
              <td>
                <code>10</code>
              </td>
            </tr>
            <tr>
              <td>rules</td>
              <td style={{ minWidth: 600 }}>
                <code>
                  T_Rule[] | string
                  <br />
                  Step-based: Array{`<{`} unit: 'millisecond' | 'minute' | 'hour' |
                  'day' | 'week' | 'month' | 'year', portion: number {`}>`}
                  <br />
                  Cron: 5-field string (minute hour dayOfMonth month dayOfWeek)
                </code>
              </td>
              <td>
                Step-based rules or cron expression. Cron format:{' '}
                <code>minute hour dayOfMonth month dayOfWeek</code> (e.g.{' '}
                <code>0 9 * * 1-5</code> for weekdays at 9am).
              </td>
              <td style={{ minWidth: 122 }}>
                <code>
                  {`[{`}
                  <br />
                  &emsp;&emsp;unit: 'day',
                  <br />
                  &emsp;&emsp;portion: 1
                  <br />
                  {`}]`}
                </code>
              </td>
            </tr>
            <tr>
              <td>outputFormat</td>
              <td>
                <code>T_OutputFormat</code>
              </td>
              <td>
                Format string for <code>dateStr</code>. Use one of{' '}
                <code>OUTPUT_FORMATS</code> (e.g. <code>YYYY-MM-DD</code>,{' '}
                <code>YYYY-MM-DD HH:MM</code>).
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>numericTimeZone</td>
              <td>
                <code>number</code>
              </td>
              <td>
                A numeric representation of the timezone, based on which the
                output will be formatted. Take into account that the provided
                value must in a specific range (-12 to 12).
              </td>
              <td>user's timezone</td>
            </tr>
            <tr>
              <td>direction</td>
              <td>
                <code>'forward' | 'backward'</code>
              </td>
              <td>
                Indicates whether dates repeat in the future or in the past.
              </td>
              <td>
                <code>'forward'</code>
              </td>
            </tr>
            <tr>
              <td>localeString.lang</td>
              <td>
                <code>Intl.LocalesArgument</code>
              </td>
              <td>
                The first argument which is passed to the{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"
                >
                  Date.toLocaleString
                </a>{" "}
                function.
              </td>
              <td>
                <code>null</code>
              </td>
            </tr>
            <tr>
              <td>localeString.formatOptions</td>
              <td>
                <code>Intl.DateTimeFormatOptions</code>
              </td>
              <td>
                The second argument which is passed to the{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"
                >
                  Date.toLocaleString
                </a>{" "}
                function.
                <br />
                Avoid the conflict of defining both <code>timeZone</code> in
                formatOptions and the <code>numericTimeZone</code> properties
                simultaneously. Either provide <code>timeZone</code> property in{" "}
                <code>localeString.formatOptions</code> or define the timezone
                using the property <code>numericTimeZone</code>. Otherwise, the
                result is not guaranteed to be correct.
              </td>
              <td>
                <code>null</code>
              </td>
            </tr>
            <tr>
              <td>filter</td>
              <td>
                <code>
                  {"(args: { date: Date, utcDate: Date, dateStr: string }) => boolean"}
                </code>
              </td>
              <td>
                Custom filter function. The date will be excluded from the
                result if the callback returns <code>false</code>, otherwise it
                will be included.
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>extend</td>
              <td>
                <code>{`Record<string, (args: { date: Date, utcDate: Date, dateStr: string }) => unknown>`}</code>
              </td>
              <td>
                Extend each occurrence with custom properties. Each key maps to a
                function that receives <code>date</code>, <code>utcDate</code>,
                and <code>dateStr</code> of the current iteration. Return values
                become the corresponding keys in the output.
              </td>
              <td>
                <code>{`{}`}</code>
              </td>
            </tr>
            <tr>
              <td>onError</td>
              <td>
                <code>(error: Error) ={`>`} unknown</code>
              </td>
              <td>
                A callback to handle any error occurred during the recurring
                process.
              </td>
              <td>
                <code>null</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 id="usage">Usage & Examples</h2>
      <h3>formatDate</h3>
      <p>
        Formats a <code>Date</code> using a supported format string from{' '}
        <code>OUTPUT_FORMATS</code>.
      </p>
      <Copyable>
        <pre>
          <code className={styles.demoCode}>
            {`import { formatDate } from 'recur-date-based'

formatDate(new Date('2024-03-15'), 'YYYY-MM-DD') // "2024-03-15"
formatDate(new Date('2024-03-15T09:30:00'), 'YYYY-MM-DD HH:MM') // "2024-03-15 09:30"
formatDate(new Date('2024-01-15'), 'MMMM DD, YYYY', 'en-US') // "January 15, 2024"`}
          </code>
        </pre>
      </Copyable>
      <h3>Format Tokens</h3>
      <p>
        Use these tokens in <code>outputFormat</code> or with <code>formatDate</code>:
      </p>
      <table className={styles.paramsTable}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>YYYY</code></td><td>4-digit year</td></tr>
          <tr><td><code>YY</code></td><td>2-digit year</td></tr>
          <tr><td><code>MM</code></td><td>2-digit month</td></tr>
          <tr><td><code>M</code></td><td>Month (no leading zero)</td></tr>
          <tr><td><code>DD</code></td><td>2-digit day</td></tr>
          <tr><td><code>D</code></td><td>Day (no leading zero)</td></tr>
          <tr><td><code>HH</code></td><td>Hour (24h, or 12h if format contains <code> A</code>)</td></tr>
          <tr><td><code>SS</code></td><td>Seconds</td></tr>
          <tr><td><code>SSS</code></td><td>Milliseconds</td></tr>
          <tr><td><code>A</code></td><td>AM/PM</td></tr>
          <tr><td><code>EEE</code></td><td>Weekday short (locale)</td></tr>
          <tr><td><code>EEEE</code></td><td>Weekday long (locale)</td></tr>
          <tr><td><code>MMM</code></td><td>Month short (locale)</td></tr>
          <tr><td><code>MMMM</code></td><td>Month long (locale)</td></tr>
          <tr><td><code>DDD</code></td><td>Day of year (3-digit)</td></tr>
          <tr><td><code>Z</code></td><td>Timezone offset (+HH:mm)</td></tr>
        </tbody>
      </table>
      <h3>Popular Examples</h3>
      <p><b>Step-based, daily:</b></p>
      <Copyable>
        <pre>
          <code className={styles.demoCode}>
            {`genRecurDateBasedList({
  start: '2024-01-01',
  end: 5,
  rules: [{ unit: 'day', portion: 1 }],
  outputFormat: 'YYYY-MM-DD',
})`}
          </code>
        </pre>
      </Copyable>
      <p><b>Cron: weekdays at 9am:</b></p>
      <Copyable>
        <pre>
          <code className={styles.demoCode}>
            {`genRecurDateBasedList({
  start: '2024-01-01',
  end: '2024-01-31',
  rules: '0 9 * * 1-5',
})`}
          </code>
        </pre>
      </Copyable>
      <p><b>With filter and extend:</b></p>
      <Copyable>
        <pre>
          <code className={styles.demoCode}>
            {`genRecurDateBasedList({
  start: '2024-01-01',
  end: 10,
  rules: [{ unit: 'day', portion: 1 }],
  filter: ({ date }) => date.getDay() !== 0,
  extend: {
    dayOfWeek: ({ date }) => date.getDay(),
    iso: ({ dateStr }) => dateStr,
  },
})`}
          </code>
        </pre>
      </Copyable>
      <a
        target="_blank"
        href="https://codesandbox.io/p/sandbox/react-typescript-forked-5qmyxf?file=%2Fsrc%2FApp.tsx%3A5%2C23"
        rel="noreferrer"
      >
        Check out the playground in Codesandbox!
      </a>
      <p>Check out a detailed example with multiple rules.</p>
      <Copyable>
        <pre>
          <code className={styles.demoCode}>
            {`import { genRecurDateBasedList } from 'recur-date-based'

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
})`}
          </code>
        </pre>
      </Copyable>

      <p>
        The result is an array consisting of objects, which include{" "}
        <code>date</code>, <code>utcDate</code>, <code>dateStr</code>{" "}
        properties, and the extended ones as well. Check out the result.
      </p>

      <Copyable>
        <pre>
          <code className={styles.demoCode}>
            {`[
    {
        "dateStr": "1/1/2024, 00:00:00",
        "date": "2024-01-01T00:00:00.000Z",
        "utcDate": "2023-12-31T20:00:00.000Z",
        "isMonday": true
    },
    {
        "dateStr": "2/4/2024, 04:00:00",
        "date": "2024-02-04T04:00:00.000Z",
        "utcDate": "2024-02-04T00:00:00.000Z",
        "isMonday": false
    },
    {
        "dateStr": "3/7/2024, 08:00:00",
        "date": "2024-03-07T08:00:00.000Z",
        "utcDate": "2024-03-07T04:00:00.000Z",
        "isMonday": false
    }
]`}
          </code>
        </pre>
      </Copyable>

      <p>
        Check out another example with <code>direction</code> set to{" "}
        <code>'backward'</code> and with applied custom{" "}
        <code>numericTimeZone</code>. The example was compiled in the time zone
        GMT+4.
      </p>

      <Copyable>
        <pre>
          <code className={styles.demoCode}>
            {`import { genRecurDateBasedList } from 'recur-date-based'

genRecurDateBasedList({
  start: new Date(),
  end: 3,
  rules: [{ unit: 'day', portion: 2 }],
  direction: 'backward',
  numericTimeZone: 3,
  onError: (error) => {
    console.log(error.message);
  },
})`}
          </code>
        </pre>
      </Copyable>

      <p>
        Check out the result. Pay attention to the the `dateStr` format. In case
        of missing `localeString` property, the date will be formatted to{" "}
        <b>yyyy-mm-ddThh:mm:ss</b> .
      </p>

      <Copyable>
        <pre>
          <code className={styles.demoCode}>
            {`[
    {
        "dateStr": "2024-04-04T18:45:23",
        "date": "2024-04-04T18:45:23.977Z",
        "utcDate": "2024-04-04T15:45:23.977Z"
    },
    {
        "dateStr": "2024-04-06T18:45:23",
        "date": "2024-04-06T18:45:23.977Z",
        "utcDate": "2024-04-06T15:45:23.977Z"
    },
    {
        "dateStr": "2024-04-08T18:45:23",
        "date": "2024-04-08T18:45:23.977Z",
        "utcDate": "2024-04-08T15:45:23.977Z"
    }
]`}
          </code>
        </pre>
      </Copyable>
      <h2 id="roadmap">Roadmap</h2>
      <div> &#10003; Extended props</div>
      <div> &#10003; Exclude (filter) functionality</div>
      <div> &#10003; Error handling</div>
      <div> &#10003; Custom error handling</div>
      <div> &#10003; Custom timezone</div>
      <div> &#10003; Repeating to backward</div>
      <div> &#10003; Short formatting (outputFormat, formatDate, OUTPUT_FORMATS)</div>
      <div> &#10003; Cron rules (5-field expressions)</div>
      <p>
        See the{" "}
        <a href="https://github.com/NavasardianMichael/recur-date-based/issues">
          open issues
        </a>{" "}
        for a full list of proposed features (and known issues).
      </p>
      <h2 id="contributing">Contributing</h2>
      <p>
        Contributions are what make the open source community such an amazing
        place to learn, inspire, and create. Any contributions you make are{" "}
        <strong>greatly appreciated</strong>.
      </p>
      <p>
        If you have a suggestion that would make this better, please fork the{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/NavasardianMichael/recur-date-based"
        >
          Github Repository
        </a>{" "}
        and create a pull request. You can also simply open an issue with the
        tag &quot;enhancement&quot;. Don't forget to give the project a star!
        Thanks again!
      </p>
      <ol>
        <li>Fork the Project</li>
        <li>
          Create your Feature Branch -{" "}
          <code>git checkout -b feature/short-description</code>
        </li>
        <li>
          Commit your Changes -{" "}
          <code>git commit -m 'Provided some amazing feature'</code>
        </li>
        <li>
          Push to the Branch -{" "}
          <code>git push origin feature/short-description</code>
        </li>
        <li>Open a Pull Request</li>
      </ol>
      <h2 id="license">License</h2>
      <p>Distributed under the MIT License</p>
      <h2 id="contact">Contact</h2>
      <p>
        Email -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:navasardianmichael@gmail.com"
        >
          navasardianmichael@gmail.com
        </a>
      </p>
      <p>
        LinkedIn -{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/michael-navasardyan"
        >
          https://linkedin.com/in/michael-navasardyan
        </a>
      </p>
      <p>
        Project -{" "}
        <a href="https://github.com/NavasardianMichael/recur-date-based">
          https://github.com/NavasardianMichael/recur-date-based
        </a>
      </p>
    </div>
  );
});

import { FC, memo } from 'react'
import { Copyable } from 'components/copyable/main'
import { CodeBlock } from 'components/code-block/CodeBlock'
import { InlineCode } from 'components/code-block/InlineCode'
import styles from './styles.module.css'

type Props = {}

export const Docs: FC<Props> = memo(() => {
  return (
    <article className={styles.docs}>
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

      <section aria-labelledby='api-reference'>
        <h2 id='api-reference'>API Reference</h2>
        <h3>Exports</h3>
        <p>
          This package exposes <b>functions</b>, <b>constants</b> and{' '}
          <b>TypeScript types</b> that you can import individually as needed.
          Exported functions and other utilities are documented with{' '}
          <b>JSDoc</b> in the source for inline editor hints and better DX.
        </p>
        <div className={styles.typesList}>
          <table className={styles.paramsTable}>
            <thead>
              <tr>
                <th>Function</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>genRecurDateBasedList</td>
                <td>
                  <CodeBlock language='typescript'>{`<T extends object = {}>(args?: T_CoreInitialArgs & { extend?: Record<string, (args: { date: Date; utcDate: Date; dateStr: string }) => unknown> }) => T_CoreReturnType<T>[]`}</CodeBlock>
                </td>
                <td>
                  Main function to generate recurring dates. When{' '}
                  <InlineCode>extend</InlineCode> is provided,{' '}
                  <InlineCode>T</InlineCode> is inferred from your extension
                  schema so the return type is fully typed.
                </td>
              </tr>
              <tr>
                <td>formatDate</td>
                <td>
                  <CodeBlock language='typescript'>{`(date: Date, format: T_OutputFormat, locale?: Intl.LocalesArgument) => string`}</CodeBlock>
                </td>
                <td>Format a date using a supported output format</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Constants</h3>
        <div className={styles.typesList}>
          <table className={styles.paramsTable}>
            <thead>
              <tr>
                <th style={{ width: '30%', whiteSpace: 'nowrap' }}>Constant</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: '30%', whiteSpace: 'nowrap' }}>OUTPUT_FORMATS</td>
                <td>
                  <details>
                    <summary>
                      Array of supported <InlineCode>outputFormat</InlineCode>{' '}
                      strings (expand to see all)
                    </summary>
                    <ul>
                      <li>
                        <b>1. Date-only: US slash (MM/DD)</b>
                      </li>
                      <li>
                        <InlineCode>MM/DD/YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/D/YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/DD/YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/D/YYYY</InlineCode>
                      </li>
                      <li>
                        <b>2. Date-only: EU slash (DD/MM)</b>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/MM/YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/M/YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/M/YYYY</InlineCode>
                      </li>
                      <li>
                        <b>3. Date-only: ISO dash (YYYY-MM-DD)</b>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DD</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-D</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM</InlineCode>
                      </li>
                      <li>
                        <b>4. Date-only: EU/US dash</b>
                      </li>
                      <li>
                        <InlineCode>DD-MM-YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D-MM-YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-DD-YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-DD-YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-D-YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-D-YYYY</InlineCode>
                      </li>
                      <li>
                        <b>5. Date-only: YYYY slash</b>
                      </li>
                      <li>
                        <InlineCode>YYYY/MM/DD</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY/MM/D</InlineCode>
                      </li>
                      <li>
                        <b>6. Date-only: text month (MMM / MMMM)</b>
                      </li>
                      <li>
                        <InlineCode>MMM DD, YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM D, YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM DD, YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM D, YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM YYYY</InlineCode>
                      </li>
                      <li>
                        <b>7. Date-only: weekday + date</b>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM DD, YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM D, YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, DD MMM YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, D MMM YYYY</InlineCode>
                      </li>
                      <li>
                        <b>8. Date-only: day-month-year text</b>
                      </li>
                      <li>
                        <InlineCode>DD MMM YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMM YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD MMMM YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMMM YYYY</InlineCode>
                      </li>
                      <li>
                        <b>9. Date+time: DD/D MMM YYYY</b>
                      </li>
                      <li>
                        <InlineCode>DD MMM YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMM YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD MMM YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMM YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD MMM YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMM YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD MMM YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMM YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <b>10. Date+time: DD/D MMMM YYYY</b>
                      </li>
                      <li>
                        <InlineCode>DD MMMM YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMMM YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD MMMM YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMMM YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD MMMM YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMMM YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD MMMM YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D MMMM YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <b>11. Date+time: MMMM DD/D, YYYY</b>
                      </li>
                      <li>
                        <InlineCode>MMMM DD, YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM D, YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM DD, YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM D, YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM DD, YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM D, YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM DD, YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMMM D, YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <b>12. Date+time: EEEE long weekday</b>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM DD, YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM DD, YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM DD, YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM DD, YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM D, YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM D, YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM D, YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, MMMM D, YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, DD MMM YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, DD MMM YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, DD MMM YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, DD MMM YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, D MMM YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, D MMM YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, D MMM YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEEE, D MMM YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <b>13. Date+time: EEE short weekday</b>
                      </li>
                      <li>
                        <InlineCode>EEE, DD MMM YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEE, D MMM YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEE, DD MMM YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEE, D MMM YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEE, DD MMM YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEE, D MMM YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEE, DD MMM YYYY HH:MM:SS.SSS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEE, D MMM YYYY HH:MM:SS.SSS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEE, DD MMM YYYY HH:MM:SS.SSS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>EEE, D MMM YYYY HH:MM:SS.SSS A</InlineCode>
                      </li>
                      <li>
                        <b>14. Date-only: 2-digit year</b>
                      </li>
                      <li>
                        <InlineCode>YY/MM/DD</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY/MM/D</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY-MM-DD</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY-MM-D</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/DD/YY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/D/YY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/M/YY</InlineCode>
                      </li>
                      <li>
                        <b>15. Date-only: compact</b>
                      </li>
                      <li>
                        <InlineCode>YYYYMMDD</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYYDDD</InlineCode>
                      </li>
                      <li>
                        <b>16. Date-only: dot</b>
                      </li>
                      <li>
                        <InlineCode>DD.MM.YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D.MM.YYYY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD.MM.YY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D.MM.YY</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY.MM.DD</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY.MM.D</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D.M.YYYY</InlineCode>
                      </li>
                      <li>
                        <b>17. Date+time: dot</b>
                      </li>
                      <li>
                        <InlineCode>DD.MM.YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D.MM.YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD.MM.YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D.MM.YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD.MM.YY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D.MM.YY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD.MM.YY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D.MM.YY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY.MM.DD HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY.MM.DD HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY.MM.D HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY.MM.D HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D.M.YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D.M.YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <b>18. Time only</b>
                      </li>
                      <li>
                        <InlineCode>HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>HH:MM:SS.SSS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>HH:MM Z</InlineCode>
                      </li>
                      <li>
                        <InlineCode>HH:MM:SS Z</InlineCode>
                      </li>
                      <li>
                        <InlineCode>HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>HH:MM:SS.SSS</InlineCode>
                      </li>
                      <li>
                        <b>19. Date+time: ISO (YYYY-MM-DD)</b>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DDTHH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DDTHH:MMZ</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DDTHH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DDTHH:MM:SS.SSS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DDTHH:MM:SSZ</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DDTHH:MM:SS.SSSZ</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DD HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DD HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DD HH:MM:SS.SSS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-DD HH:MM:SS Z</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-D HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY-MM-D HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <b>20. Date+time: US slash (MM/DD)</b>
                      </li>
                      <li>
                        <InlineCode>MM/DD/YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/D/YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/DD/YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/D/YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/DD/YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/D/YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/DD/YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/D/YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/DD/YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/DD/YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/DD/YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/DD/YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/D/YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/D/YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/D/YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/D/YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <b>21. Date+time: EU slash (DD/MM)</b>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/MM/YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/MM/YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/MM/YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/MM/YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YYYY HH:MM:SS.SSS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YYYY HH:MM:SS.SSS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/M/YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/M/YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/M/YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/M/YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/M/YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/M/YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/M/YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/M/YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <b>22. Date+time: EU/US dash</b>
                      </li>
                      <li>
                        <InlineCode>DD-MM-YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D-MM-YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD-MM-YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D-MM-YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD-MM-YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D-MM-YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD-MM-YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D-MM-YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-DD-YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-DD-YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-D-YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-D-YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-DD-YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-DD-YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-D-YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-D-YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-DD-YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-DD-YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-D-YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-D-YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-DD-YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-DD-YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM-D-YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M-D-YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <b>23. Date+time: YYYY slash</b>
                      </li>
                      <li>
                        <InlineCode>YYYY/MM/DD HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY/MM/DD HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY/MM/D HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YYYY/MM/D HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <b>24. Date+time: MMM DD, YYYY</b>
                      </li>
                      <li>
                        <InlineCode>MMM DD, YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM D, YYYY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM DD, YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM D, YYYY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM DD, YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM D, YYYY HH:MM A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM DD, YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM D, YYYY HH:MM:SS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM DD, YYYY HH:MM:SS.SSS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM D, YYYY HH:MM:SS.SSS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM DD, YYYY HH:MM:SS.SSS A</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MMM D, YYYY HH:MM:SS.SSS A</InlineCode>
                      </li>
                      <li>
                        <b>25. Date+time: 2-digit year</b>
                      </li>
                      <li>
                        <InlineCode>YY/MM/DD HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY/MM/DD HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY/MM/D HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY/MM/D HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY-MM-DD HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY-MM-DD HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY-MM-D HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>YY-MM-D HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/DD/YY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>MM/DD/YY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/D/YY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>M/D/YY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>DD/MM/YY HH:MM:SS</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/M/YY HH:MM</InlineCode>
                      </li>
                      <li>
                        <InlineCode>D/M/YY HH:MM:SS</InlineCode>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', whiteSpace: 'nowrap' }}>DIRECTIONS</td>
                <td>
                  Readonly map of supported recurrence directions:{' '}
                  <InlineCode>DIRECTIONS.forward</InlineCode> and{' '}
                  <InlineCode>DIRECTIONS.backward</InlineCode>.
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', whiteSpace: 'nowrap' }}>INTERVAL_UNITS</td>
                <td>
                  Readonly map of supported interval units for step-based rules:{' '}
                  <InlineCode>INTERVAL_UNITS.millisecond</InlineCode>,{' '}
                  <InlineCode>INTERVAL_UNITS.minute</InlineCode>,{' '}
                  <InlineCode>INTERVAL_UNITS.hour</InlineCode>,{' '}
                  <InlineCode>INTERVAL_UNITS.day</InlineCode>,{' '}
                  <InlineCode>INTERVAL_UNITS.week</InlineCode>,{' '}
                  <InlineCode>INTERVAL_UNITS.month</InlineCode>,{' '}
                  <InlineCode>INTERVAL_UNITS.year</InlineCode>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Types</h3>
        <div className={styles.typesList}>
          <table className={styles.paramsTable}>
            <thead>
              <tr>
                <th style={{ width: '30%', whiteSpace: 'nowrap' }}>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: '30%', whiteSpace: 'nowrap' }}>
                  T_CoreReturnType&lt;T&gt;
                </td>
                <td>
                  Generic return type of an item returned by{' '}
                  <InlineCode>genRecurDateBasedList</InlineCode>. It always
                  contains{' '}
                  <InlineCode>{`{ date: Date; utcDate: Date; dateStr: string }`}</InlineCode>{' '}
                  and is optionally intersected (if such provided) with your
                  custom extension type <InlineCode>T</InlineCode> (built from
                  the <InlineCode>extend</InlineCode> callbacks), so each
                  occurrence can carry additional strongly-typed properties.
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', whiteSpace: 'nowrap' }}>
                  T_CoreInitialArgs
                </td>
                <td>
                  Input parameters type for{' '}
                  <InlineCode>genRecurDateBasedList</InlineCode>. Mirrors the
                  configuration object documented in the parameters table and is
                  useful for annotating reusable args objects.
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', whiteSpace: 'nowrap' }}>
                  T_OutputFormat
                </td>
                <td>
                  Mapped union type of all entries in{' '}
                  <InlineCode>OUTPUT_FORMATS</InlineCode>. Helpful when you want
                  to restrict your own APIs to supported format strings.
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', whiteSpace: 'nowrap' }}>
                  T_IntervalUnit
                </td>
                <td>
                  Mapped union type of all entries in{' '}
                  <InlineCode>INTERVAL_UNITS</InlineCode>. Use it to avoid
                  stringly-typed interval units in your own types.
                </td>
              </tr>
              <tr>
                <td style={{ width: '30%', whiteSpace: 'nowrap' }}>T_Rule</td>
                <td>
                  <InlineCode>{`{ unit: T_IntervalUnit, portion: number }`}</InlineCode>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>
          <InlineCode>genRecurDateBasedList</InlineCode> Parameters
        </h3>
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
                  <InlineCode>string | Date</InlineCode>
                </td>
                <td>
                  Start of the occurrence: date object (a valid instance of the{' '}
                  <InlineCode>Date</InlineCode> constructor) or a valid string
                  representation of date (e.g. 11/28/2024).
                </td>
                <td>today</td>
              </tr>
              <tr>
                <td>end</td>
                <td>
                  <InlineCode>number | string | Date</InlineCode>
                </td>
                <td>
                  End of the occurrence: a date object (a valid instance of the{' '}
                  <InlineCode>Date</InlineCode> constructor) or a valid string
                  representation of date (e.g. 11/28/2024) or number of
                  occurrences (max 99_999).
                </td>
                <td>
                  <InlineCode>10</InlineCode>
                </td>
              </tr>
              <tr>
                <td>rules</td>
                <td style={{ minWidth: 600 }}>
                  <CodeBlock language='typescript'>{`T_Rule[] | string
Step-based: Array<{ unit: 'millisecond' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year', portion: number }>
Cron: 5-field string (minute hour dayOfMonth month dayOfWeek)`}</CodeBlock>
                </td>
                <td>
                  Step-based rules or cron expression. For arrays, each rule is
                  applied in sequence from the previous occurrence (e.g. month
                  then day then hour). For cron, use a 5-field expression{' '}
                  <InlineCode>
                    minute hour dayOfMonth month dayOfWeek
                  </InlineCode>{' '}
                  (e.g. <InlineCode>0 9 * * 1-5</InlineCode> for weekdays at
                  9am); with cron, <InlineCode>end</InlineCode> can be either a
                  max occurrence count or a limiting date.
                </td>
                <td style={{ minWidth: 122 }}>
                  <CodeBlock language='typescript'>{`[{
  unit: 'day',
  portion: 1
}]`}</CodeBlock>
                </td>
              </tr>
              <tr>
                <td>outputFormat</td>
                <td>
                  <InlineCode>T_OutputFormat</InlineCode>
                </td>
                <td>
                  Format string for <InlineCode>dateStr</InlineCode>. Use one of{' '}
                  <InlineCode>OUTPUT_FORMATS</InlineCode> (e.g.{' '}
                  <InlineCode>YYYY-MM-DD</InlineCode>,{' '}
                  <InlineCode>YYYY-MM-DD HH:MM</InlineCode>). When omitted,
                  falls back to <InlineCode>localeString</InlineCode> (if set)
                  or ISO-like <InlineCode>YYYY-MM-DDTHH:MM:SS</InlineCode>.
                </td>
                <td>- (fallback: localeString → ISO)</td>
              </tr>
              <tr>
                <td>numericTimeZone</td>
                <td>
                  <InlineCode>number</InlineCode>
                </td>
                <td>
                  A numeric representation of the timezone (-12 to 12) that
                  controls the wall-clock <InlineCode>date</InlineCode> and{' '}
                  <InlineCode>dateStr</InlineCode>. Use{' '}
                  <InlineCode>0</InlineCode> for UTC. When omitted, the current
                  machine timezone is used.
                </td>
                <td>user's timezone</td>
              </tr>
              <tr>
                <td>direction</td>
                <td>
                  <InlineCode>'forward' | 'backward'</InlineCode>
                </td>
                <td>
                  Indicates whether dates repeat in the future or in the past.
                </td>
                <td>
                  <InlineCode>'forward'</InlineCode>
                </td>
              </tr>
              <tr>
                <td>localeString.lang</td>
                <td>
                  <InlineCode>Intl.LocalesArgument</InlineCode>
                </td>
                <td>
                  The first argument which is passed to the{' '}
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString'
                  >
                    Date.toLocaleString
                  </a>{' '}
                  function.
                </td>
                <td>
                  <InlineCode>null</InlineCode>
                </td>
              </tr>
              <tr>
                <td>localeString.formatOptions</td>
                <td>
                  <InlineCode>Intl.DateTimeFormatOptions</InlineCode>
                </td>
                <td>
                  The second argument which is passed to the{' '}
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString'
                  >
                    Date.toLocaleString
                  </a>{' '}
                  function.
                  <br />
                  Avoid the conflict of defining both{' '}
                  <InlineCode>timeZone</InlineCode> in formatOptions and the{' '}
                  <InlineCode>numericTimeZone</InlineCode> properties
                  simultaneously. Either provide{' '}
                  <InlineCode>timeZone</InlineCode> property in{' '}
                  <InlineCode>localeString.formatOptions</InlineCode> or define
                  the timezone using the property{' '}
                  <InlineCode>numericTimeZone</InlineCode>. Otherwise, the
                  result is not guaranteed to be correct.
                </td>
                <td>
                  <InlineCode>null</InlineCode>
                </td>
              </tr>
              <tr>
                <td>filter</td>
                <td>
                  <InlineCode>
                    {
                      '(args: { date: Date, utcDate: Date, dateStr: string }) => boolean'
                    }
                  </InlineCode>
                </td>
                <td>
                  Custom filter function. If the callback returns{' '}
                  <InlineCode>false</InlineCode>, the occurrence is skipped;
                  otherwise it is included. Runs per generated occurrence before
                  it is added to the final array.
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>extend</td>
                <td>
                  <InlineCode>{`Record<string, (args: { date: Date, utcDate: Date, dateStr: string }) => unknown>`}</InlineCode>
                </td>
                <td>
                  Extend each occurrence with custom properties. Each key maps
                  to a function that receives <InlineCode>date</InlineCode>,{' '}
                  <InlineCode>utcDate</InlineCode>, and{' '}
                  <InlineCode>dateStr</InlineCode> of the current iteration.
                  Return values become the corresponding keys in the output, and
                  TypeScript infers these keys into{' '}
                  <InlineCode>T_CoreReturnType&lt;T&gt;</InlineCode>.
                </td>
                <td>
                  <InlineCode>{`{}`}</InlineCode>
                </td>
              </tr>
              <tr>
                <td>onError</td>
                <td>
                  <InlineCode>{'(error: Error) => unknown'}</InlineCode>
                </td>
                <td>
                  Optional error handler for validation or runtime errors during
                  the recurring process. When provided, errors are passed here
                  instead of being thrown; when omitted, invalid configuration
                  causes an exception.
                </td>
                <td>
                  <InlineCode>null</InlineCode>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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
          Formats a <code>Date</code> using a supported format string from{' '}
          <code>OUTPUT_FORMATS</code>.
        </p>
        <Copyable>
          <CodeBlock language='typescript'>{`import { formatDate } from 'recur-date-based'

formatDate(new Date('2024-03-15'), 'YYYY-MM-DD') // "2024-03-15"
formatDate(new Date('2024-03-15T09:30:00'), 'YYYY-MM-DD HH:MM') // "2024-03-15 09:30"
formatDate(new Date('2024-01-15'), 'MMMM DD, YYYY', 'en-US') // "January 15, 2024"`}</CodeBlock>
        </Copyable>
        <h3>Format Tokens</h3>
        <p>
          Use these tokens in <code>outputFormat</code> or with{' '}
          <code>formatDate</code>:
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
                  Hour (24h, or 12h if format contains <code> A</code>)
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
    "dateStr": "Mon, 1 Jan 2024 04:00:00",
    "date": "2024-01-01T04:00:00.000Z",
    "utcDate": "2024-01-01T00:00:00.000Z"
  },
  {
    "dateStr": "Tue, 2 Jan 2024 04:00:00",
    "date": "2024-01-02T04:00:00.000Z",
    "utcDate": "2024-01-02T00:00:00.000Z"
  }
]`}</CodeBlock>
        </Copyable>
        <p>
          <b>Cron: Every Monday, Wednesday and Friday at 9am:</b>
        </p>
        <Copyable>
          <CodeBlock language='typescript'>{`genRecurDateBasedList({
  start: '2024-01-03',
  end: '2024-01-11',
  rules: '0 9 * * 1-3',
  outputFormat: 'EEEE, D MMM YYYY HH:MM:SS',
})`}</CodeBlock>
        </Copyable>
        <p>Result:</p>
        <Copyable>
          <CodeBlock language='json'>{`[
  {
    "dateStr": "Wednesday, 3 Jan 2024 09:00:00",
    "date": "2024-01-03T09:00:00.000Z",
    "utcDate": "2024-01-03T05:00:00.000Z"
  },
  {
    "dateStr": "Monday, 8 Jan 2024 09:00:00",
    "date": "2024-01-08T09:00:00.000Z",
    "utcDate": "2024-01-08T05:00:00.000Z"
  },
  {
    "dateStr": "Tuesday, 9 Jan 2024 09:00:00",
    "date": "2024-01-09T09:00:00.000Z",
    "utcDate": "2024-01-09T05:00:00.000Z"
  },
  {
    "dateStr": "Wednesday, 10 Jan 2024 09:00:00",
    "date": "2024-01-10T09:00:00.000Z",
    "utcDate": "2024-01-10T05:00:00.000Z"
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
        <a
          target='_blank'
          href='https://codesandbox.io/p/sandbox/react-typescript-forked-5qmyxf?file=%2Fsrc%2FApp.tsx%3A5%2C23'
          rel='noreferrer'
        >
          Check out the playground in Codesandbox!
        </a>
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

        <p>
          The result is an array consisting of objects, which include{' '}
          <code>date</code> (wall-clock Date in target timezone — use normal
          getters like <code>getHours()</code>, <code>getDay()</code>),{' '}
          <code>utcDate</code> (the actual UTC moment — wall-clock minus{' '}
          <code>numericTimeZone</code> offset), and <code>dateStr</code> (string
          representation of <code>date</code>), plus the extended ones as well.
          Check out the result.
        </p>

        <Copyable>
          <CodeBlock language='json'>{`[
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
]`}</CodeBlock>
        </Copyable>

        <p>
          Check out another example with <code>direction</code> set to{' '}
          <code>'backward'</code> and with applied custom{' '}
          <code>numericTimeZone</code>. The example was compiled in the time
          zone GMT+4.
        </p>

        <Copyable>
          <CodeBlock language='typescript'>{`import { genRecurDateBasedList, DIRECTIONS, INTERVAL_UNITS } from 'recur-date-based'

genRecurDateBasedList({
  start: new Date(),
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
]`}</CodeBlock>
        </Copyable>
      </section>

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

      <section aria-labelledby='contributing'>
        <h2 id='contributing'>Contributing</h2>
        <p>
          Contributions are what make the open source community such an amazing
          place to learn, inspire, and create. Any contributions you make are{' '}
          <strong>greatly appreciated</strong>.
        </p>
        <p>
          If you have a suggestion that would make this better, please fork the{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/NavasardianMichael/recur-date-based'
          >
            Github Repository
          </a>{' '}
          and create a pull request. You can also simply open an issue with the
          tag &quot;enhancement&quot;. Don't forget to give the project a star!
          Thanks again!
        </p>
        <ol>
          <li>Fork the Project</li>
          <li>
            Create your Feature Branch -{' '}
            <code>git checkout -b feature/short-description</code>
          </li>
          <li>
            Commit your Changes -{' '}
            <code>git commit -m 'Provided some amazing feature'</code>
          </li>
          <li>
            Push to the Branch -{' '}
            <code>git push origin feature/short-description</code>
          </li>
          <li>Open a Pull Request</li>
        </ol>
      </section>

      <section aria-labelledby='license'>
        <h2 id='license'>License</h2>
        <p>Distributed under the MIT License</p>
      </section>

      <section aria-labelledby='contact'>
        <h2 id='contact' style={{ marginBottom: 4, marginTop: 4 }}>
          Contact
        </h2>
        <p style={{ marginBottom: 4, marginTop: 4 }}>
          Email -{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='mailto:navasardianmichael@gmail.com'
          >
            navasardianmichael@gmail.com
          </a>
        </p>
        <p style={{ marginBottom: 4, marginTop: 4 }}>
          LinkedIn -{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://linkedin.com/in/michael-navasardyan'
          >
            https://linkedin.com/in/michael-navasardyan
          </a>
        </p>
        <p style={{ marginBottom: 4, marginTop: 4 }}>
          Project -{' '}
          <a href='https://github.com/NavasardianMichael/recur-date-based'>
            https://github.com/NavasardianMichael/recur-date-based
          </a>
        </p>
      </section>
    </article>
  )
})

import { FC, memo } from 'react'
import { CodeBlock } from 'components/code-block/CodeBlock'
import { InlineCode } from 'components/code-block/InlineCode'
import styles from './styles.module.css'

export const DocsApiReference: FC = memo(function DocsApiReference() {
  return (
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
                <td>- (fallback: localeString â†’ ISO)</td>
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
                <td>â€”</td>
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
  )
})
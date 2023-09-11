import { FC, memo } from 'react'
import { Copyable } from 'components/copyable/main'
import styles from './styles.module.css'

type Props = {

}

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
        <li><a href="#usage">Usage</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
      </ol>
    </details>

    <h2 id="about-the-project">About The Project</h2>
    <p>The project provides a unique functionality related to JavaScript dates. It allows to generate recurring dates based on a certain input shape. Its name is in harmony with its essence: the exported function gives an opportunity to generate additional properties based on the date of the current iteration.</p>
    <p>There are some recurring date utilities, such as <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/recurring-date">recurring-date</a> and <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/moment-recur">moment-recur</a> available on NPM. But the first is className based and for second the <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/moment">moment</a> is a must. So I didn't find any package that really suited my needs, when I ran into the problem of providing such functionality․ Eventually I created this enhanced one, which is function based, suitable for TypeScript, and does not need additional mapping for extra properties.</p>
    <p>If you have some idea about the next features of the current package, please suggest changes by forking this repo and creating a pull request or opening an issue.</p>
    <h2 id="getting-started">Getting Started</h2>
    <Copyable>
      <div style={{padding: '1rem'}}>npm install recur-date-based</div>
    </Copyable>
    <p>Here are presented all the available parameters the exported function accepts.</p>
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
    <td><code>string | Date</code></td>
    <td>The start date or its any string representation.</td>
    <td>today</td>
    </tr>
    <tr>
    <td>end</td>
    <td><code>number | string</code></td>
    <td>Number of occurrences or the start date or any string representation of it. The number larger than 99999 will is not applicable (will cause an error).</td>
    <td><code>100</code></td>
    </tr>
    <tr>
    <td>interval</td>
    <td><code>number</code></td>
    <td>Repeat by a specified interval.</td>
    <td><code>1</code></td>
    </tr>
    <tr>
    <td>intervalType</td>
    <td>
        <code>
        'millisecond' | 
        'minute' | 
        'hour' | 
        'day' | 
        'week' | 
        'month' | 
        'year'
        </code>
    </td>
    <td>Interval unit name.</td>
    <td><code>'day'</code></td>
    </tr>
    <tr>
    <td>numericTimezone</td>
    <td><code>number</code></td>
    <td>A numeric representation of the timezone, based on which the output will be formatted. Take into account that the provided value must in a specific range: -12 to 12.</td>
    <td>user's timezone</td>
    </tr>
    <tr>
    <td>direction</td>
    <td><code>'forward' | 'backward'</code></td>
    <td>Whether dates repeat to the future or the past.</td>
    <td><code>'forward'</code></td>
    </tr>
    <tr>
    <td>localeString.lang</td>
    <td><code>string</code></td>
    <td>The first argument that receives the <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"><code>Date.toLocaleString</code></a> function.</td>
    <td><code>null</code></td>
    </tr>
    <tr>
    <td>localeString.formatOptions</td>
    <td><code>Intl.DateTimeFormatOptions</code></td>
    <td>The second argument that receives the <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"><code>Date.toLocaleString</code></a> function.</td>
    <td><code>null</code></td>
    </tr>
    <tr>
    <td>exclude</td>
    <td><code>{"(args: { date: Date, dateStr: string }) => boolean"}</code></td>
    <td>Custom filter function. The date will be excluded from the result only if the callback for the corresponding date returns <code>true</code> .</td>
    <td><code>null</code></td>
    </tr>
    <tr>
    <td>extend</td>
    <td>
      <code>
        <>
          {`{`} 
          <br/>
          &emsp;&emsp;&emsp;{`[key: string]: (args: {date: Date, dateStr: string}) => unknown`} 
          <br/> 
          {`}`}
        </>
        
      </code>
    </td>
    <td>A container consisting of extra keys. The object accepts functions for its keys. The callback receives an object with <code>date</code> and <code>dateStr</code> properties of the current iteration. This can help to generate extended properties based on current occurrence.</td>
    <td><code>null</code></td>
    </tr>
    <tr>
    <td>onError</td>
    <td><code>(error) ={`>`} unknown</code></td>
    <td>A callback which is triggered when any error occurs.</td>
    <td><code>null</code></td>
    </tr>
    </tbody>
    </table>
    <h2 id="usage">Usage</h2>
    <p>Check out an example.</p>    
<Copyable>
<pre>
  <code className={styles.demoCode}>        
{
`import { genRecurDateBasedList } from 'recur-date-based'

genRecurDateBasedList({
  start: '2022-01-01T00:00:00',
  end: '2022-01-15T00:00:00',
  interval: 3,
  intervalType: 'day',
  localeString: {
    lang: 'en-US',
    formatOptions: {
      hourCycle: 'h24'
    }
  },
  // filtering only upcoming dates
  exclude: ({date, dateStr}) => date < new Date(),
  extend: {
    isMonday: ({date, dateStr}) => date.getDay() === 1,
  }
})`
}
  </code>
</pre>
</Copyable>

<p>
The result is an array consisting of objects. The latters always include <code>dateStr</code> property and extended ones optionally. Check out the result.
</p>

<Copyable>
<pre>
  <code className={styles.demoCode}>
{
`[
  { dateStr: '1/1/2022, 24:00:00', isMonday: false },
  { dateStr: '1/4/2022, 24:00:00', isMonday: false },
  { dateStr: '1/7/2022, 24:00:00', isMonday: false },
  { dateStr: '1/10/2022, 24:00:00', isMonday: true },
  { dateStr: '1/13/2022, 24:00:00', isMonday: false }
]`
}
  </code>
</pre>
</Copyable>

<p>
Check out another example with <code>direction</code> set to <code>'backwards'</code> and with applied custom <code>numericTimezone</code> . The example was compiled in the time zone GMT+4.
</p>


<Copyable>
<pre>
  <code className={styles.demoCode}>    
{
`import { genRecurDateBasedList } from 'recur-date-based'

genRecurDateBasedList({
  start: '2023-09-06T16:30:00',
  end: 5,
  interval: 1,
  intervalType: 'day',
  numericTimezone: 6,
  direction: 'backward',
  extend: {
    timeStr: ({ dateStr }) => dateStr.split('T')[1]
  },
  onError: (error) => {
    // do some stuff...
    console.log(error.message);
  }
})`
}
  </code>
</pre>
</Copyable>

<p>
Check out the result. Pay attention to the the `dateStr` format. In case of missing `localeString` property, the date will be formatted to <b>yyyy-mm-ddThh:mm:ss</b> .
</p>


<Copyable>
<pre>
  <code className={styles.demoCode}>
{
`[
  { dateStr: '2023-09-06T18:30:00', timeStr: '18:30:00' },
  { dateStr: '2023-09-06T17:30:00', timeStr: '17:30:00' },
  { dateStr: '2023-09-06T16:30:00', timeStr: '16:30:00' },
  { dateStr: '2023-09-06T15:30:00', timeStr: '15:30:00' },
  { dateStr: '2023-09-06T14:30:00', timeStr: '14:30:00' }
]`
}
  </code>
</pre>
</Copyable>
    <h2 id="roadmap">Roadmap</h2>
    <div> &#10003; Extended props</div>
    <div> &#10003; Exclude functionality</div>
    <div> &#10003; Error handling</div>
    <div> &#10003; Custom error handling</div>
    <div> &#10003; Custom timezone</div>
    <div> &#10003; Repeating to backward</div>
    <div> &minus;  Short formatting (e.g. dd/mm/yyyy)</div>
    <p>See the <a href="https://github.com/NavasardianMichael/recur-date-based/issues">open issues</a> for a full list of proposed features (and known issues).</p>
    <h2 id="contributing">Contributing</h2>
    <p>Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>.</p>
    <p>If you have a suggestion that would make this better, please fork the <a target="_blank" rel="noreferrer" href="https://github.com/NavasardianMichael/recur-date-based">Github Repository</a> and create a pull request. You can also simply open an issue with the tag &quot;enhancement&quot;.
    Don't forget to give the project a star! Thanks again!</p>
    <ol>
    <li>Fork the Project</li>
    <li>Create your Feature Branch - <code>git checkout -b feature/short-description</code></li>
    <li>Commit your Changes - <code>git commit -m 'Provided some amazing feature'</code></li>
    <li>Push to the Branch - <code>git push origin feature/short-description</code></li>
    <li>Open a Pull Request</li>
    </ol>
    <h2 id="license">License</h2>
    <p>Distributed under the MIT License</p>
    <h2 id="contact">Contact</h2>
    <p>Email - <a target="_blank" rel="noreferrer" href='mailto:navasardianmichael@gmail.com'>navasardianmichael@gmail.com</a></p>
    <p>LinkedIn - <a target="_blank" rel="noreferrer" href='https://linkedin.com/in/michael-navasardyan'>https://linkedin.com/in/michael-navasardyan</a></p>
    <p>Project: <a href="https://github.com/NavasardianMichael/recur-date-based">https://github.com/NavasardianMichael/recur-date-based</a></p>
    </div>
  )
})
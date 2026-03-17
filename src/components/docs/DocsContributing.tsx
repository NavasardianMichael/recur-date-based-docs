import { FC, memo } from 'react'
import { InlineCode } from 'components/code-block/InlineCode'

export const DocsContributing: FC = memo(() => (
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
        <InlineCode>git checkout -b feature/short-description</InlineCode>
      </li>
      <li>
        Commit your Changes -{' '}
        <InlineCode>git commit -m 'Provided some amazing feature'</InlineCode>
      </li>
      <li>
        Push to the Branch -{' '}
        <InlineCode>git push origin feature/short-description</InlineCode>
      </li>
      <li>Open a Pull Request</li>
    </ol>
  </section>
))

DocsContributing.displayName = 'DocsContributing'

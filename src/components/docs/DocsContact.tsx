import { FC, memo } from 'react'

export const DocsContact: FC = memo(() => (
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
))

DocsContact.displayName = 'DocsContact'

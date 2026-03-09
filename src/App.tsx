import { Header } from './components/header/main';
import { Docs } from 'components/docs/main';
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Docs />
      </main>
    </div>
  );
}

export default App;

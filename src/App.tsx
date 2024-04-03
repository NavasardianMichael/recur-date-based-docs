import { Header } from './components/header/main';
import { Docs } from 'components/docs/main';
import styles from './app.module.css'
import { Sandbox } from 'components/sandbox/main';

function App() {
  return (
    <div className={styles.app}>
      <Sandbox />
      <div className={styles.content}>
        <Header />
        <Docs />
      </div>
    </div>
  );
}

export default App;

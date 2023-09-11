import { Header } from './components/header/main';
import { Docs } from 'components/docs/main';
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Docs />
    </div>
  );
}

export default App;

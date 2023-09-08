import { Header } from './components/header/main';
import styles from './app.module.css'
import { Tabs } from 'components/tabs/main';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Tabs />
    </div>
  );
}

export default App;

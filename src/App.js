import styles from './App.module.css';
import Login from './components/Login/Login';
import Waves from './components/UI/Waves/Waves';

function App() {
  return (
    <div className={styles.app}>
      <Login />
      <Waves />
    </div>
  );
}

export default App;

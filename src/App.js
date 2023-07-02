import { useState, useEffect } from 'react';

import styles from './App.module.css';
import Login from './components/Login/Login';
import Waves from './components/UI/Waves/Waves';
import Home from './components/HomePage/Home';

const App = () => {
  const [ isLogin, setIsLogin ] = useState(false);

  useEffect(() => {
    const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storeUserLoggedInInformation === "1") {
      setIsLogin(true);
    }
  }, []);

  const welcomePageHandler = (userAccount) => {
    localStorage.setItem('isLoggedIn', 1);
    setIsLogin(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLogin(false);
  };

  return (
    <div className={styles.app}>
      { isLogin ? <Home onLogout={logoutHandler}/> : <Login onWelcomePage={welcomePageHandler}/> }
      <Waves />
    </div>
  );
}

export default App;

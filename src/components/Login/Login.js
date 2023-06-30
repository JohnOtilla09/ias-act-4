import Card from '../UI/Card/Card';

import styles from './Login.module.css';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <Card>
            <h1>Sign-in</h1>
            <LoginForm/> 
        </Card>
    );
};

export default Login
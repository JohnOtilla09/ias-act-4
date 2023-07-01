import { useState } from 'react';

import styles from './Login.module.css';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Card from '../UI/Card/Card';

const DummyUsers = [
    {
        email: 'Otilla@gmail.com',
        password: '123456789'
    }
];

const Login = (props) => {
    const [ accounts, setAccounts ] = useState(DummyUsers);
    const [ signIn, setSignIn ] = useState(false);

    const AddUserHandler = (userAccount) => {
    
        setAccounts((prevAccounts) => {
            return [userAccount, ...accounts];
        });

        console.log(accounts);
    };

    const signInHandler = () => {
        setSignIn(prevSignIn => !prevSignIn);
    };

    const handleShit = (e) => {
        console.log('data:', e)
    }

    const content = !signIn ? <SignInForm onSub={handleShit}/> : <SignUpForm onAddUser={AddUserHandler}/>;

    return (
        <Card>
            { content }
            <div className={styles.noAccount}>
                Don't have an account? <button onClick={signInHandler}>Sign-up</button>
            </div>
        </Card>
    );
};

export default Login
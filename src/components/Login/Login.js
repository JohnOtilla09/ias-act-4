import { useState } from 'react';

import styles from './Login.module.css';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Card from '../UI/Card/Card';

const DummyUsers = [
    {
        email: 'otilla@gmail.com',
        password: '123456789'
    },
    {
        email: 'sofia@gmail.com',
        password: '123456789'
    }
];

const Login = (props) => {

    const [ accounts, setAccounts ] = useState(DummyUsers);
    const [ signIn, setSignIn ] = useState(false);
    const [ invalidError, setIsInvalidError ] = useState(false);

    const AddUserHandler = (userAccount) => {
        setIsInvalidError(false);

        const isEmailAvailable = accounts.find((user) => user.email === userAccount.email);

        if (isEmailAvailable) {
            setIsInvalidError(true);
            return;
        }

        setAccounts(preAccounts => {
            return [ ...preAccounts, userAccount ];
        });
        props.onWelcomePage();
    };

    console.log(accounts);

    const signInHandler = (userAccount) => {
        setIsInvalidError(false);

        const isEmailAvailable = accounts.find((user) => user.email === userAccount.email && user.password === userAccount.password);
        if (!isEmailAvailable) {
            setIsInvalidError(true);
            return;
        }
        props.onWelcomePage();
    }

    const optionHandler = () => {
        setSignIn(prevSignIn => !prevSignIn);
        setIsInvalidError(false);
    }

    const content = !signIn ? <SignInForm onSignIn={signInHandler} error={invalidError}/> : <SignUpForm onAddUser={AddUserHandler} error={invalidError}/>;

    return (
        <Card>
            { content }
            <div className={styles.noAccount}>
                Don't have an account? <button type='button' onClick={optionHandler}>Sign-up</button>
            </div>
        </Card>
    );
};

export default Login
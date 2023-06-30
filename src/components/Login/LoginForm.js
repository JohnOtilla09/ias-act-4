import Button from '../UI/Button/Button';

import styles from './LoginForm.module.css';

const LoginForm = () => {


    const formSubmitHandler = (event) => {
        event.preventDefault();

    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['input-group']}`}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" autoComplete="false" />
            </div>
            <div className={`${styles['input-group']}`}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" autoComplete="false"/>
            </div>
            <Button>Sign-in</Button>
        </form>
    );
};

export default LoginForm;
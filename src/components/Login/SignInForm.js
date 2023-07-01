import Button from '../UI/Button/Button';

import styles from './FormStyles.module.css';

const SignInForm = (props) => {


    const formSubmitHandler = (event) => {
        event.preventDefault();

        console.log("test")
        const email = event.target.email.value

        console.log(email)

        props.onSub({email})

        
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <h1>Sign-in</h1>
            <div className={`${styles['input-group']}`}>
                <input type="text" id="email" autoComplete="false" placeholder='Email' />
            </div>
            <div className={`${styles['input-group']}`}>
                <input type="password" id="password" autoComplete="false" placeholder='Password'/>
            </div>
            <Button type="submit">Sign-in</Button>
        </form>
    );
};

export default SignInForm;
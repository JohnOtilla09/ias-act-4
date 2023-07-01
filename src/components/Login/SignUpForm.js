import { useRef, useState } from 'react';

import Button from '../UI/Button/Button';
// import useInput from '../hooks/use-input';

import styles from './FormStyles.module.css';

const isValidEmail = value => value.includes('@') && value.includes('.com');
const isValidPassword = (value1, value2) => {
  if (value1 === value2 && value1.trim().length > 8 && value2.trim().length > 8) {
    return true;
  } else {
    return false;
  }
}

const SignUpForm = (props) => {
    const [ formInputValidity, setFormInputValidity ] = useState({
      email: true,
      password: true,
      confirmPassword: true
    });

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        const enmteredConfirmPassword = confirmPasswordRef.current.value;

        const enteredEmailIsValid = isValidEmail(enteredEmail);
        const enteredPasswordIsValid = isValidPassword(enteredPassword, enmteredConfirmPassword);

        setFormInputValidity({
          email: enteredEmailIsValid,
          password: enteredPasswordIsValid,
          confirmPassword: enteredPasswordIsValid,
        });

        if (!formInputValidity){
          return;
        }

        props.onAddUser({
          email: enteredEmail,
          password: enteredPassword
        });

        emailRef.current.value = '';
        passwordRef.current.value = '';
        confirmPasswordRef.current.value = '';

        setFormInputValidity({
          email: true,
          password: true,
          confirmPassword: true,
        });
    };

    const emailInputGroupStyles = !formInputValidity.email ? `${styles["input-group"]} ${styles.invalid}` : `${styles["input-group"]}`;
    const passwordInputGroupStyles = !formInputValidity.password ? `${styles["input-group"]} ${styles.invalid}` : `${styles["input-group"]}`;

    return (
      <form onSubmit={formSubmitHandler}>
        <h1>Sign-Up</h1>

        <div className={emailInputGroupStyles}>
          <input
            type="text"
            id="email"
            ref={emailRef}
            autoComplete="false"
            placeholder="Email"
          />
          {!formInputValidity.email && <p>Please enter a valid email</p>}
        </div>
        <div className={passwordInputGroupStyles}>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            autoComplete="false"
            placeholder="Password"
          />
          {!formInputValidity.password && <p>Please re-enter your password</p>}
        </div>
        <div className={passwordInputGroupStyles}>
          <input
            type="password"
            id="confirm-password"
            ref={confirmPasswordRef}
            autoComplete="false"
            placeholder="Confirm Password"
          />
          {!formInputValidity.confirmPassword && (
            <p>Please re-enter your password</p>
          )}
        </div>
        <Button>Sign-up</Button>
      </form>
    );
};

export default SignUpForm;
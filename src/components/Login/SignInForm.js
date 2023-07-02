import Button from '../UI/Button/Button';
import useInput from '../hooks/use-input';

import styles from './FormStyles.module.css';

const SignInForm = (props) => {
    const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: enteredEmailHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: inputEmailBlurHandler,
      reset: emailReset,
    } = useInput((value) => value.includes('@'));

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: enteredPasswordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: inputPasswordBlurHandler,
        reset: passwordReset,
      } = useInput((value) => value.trim().length > 8);

    let formIsValid = false;

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        props.onSignIn({
            email: enteredEmail,
            password: enteredPassword
        });

        emailReset();
        passwordReset();
    }

    const emailInputGroupStyles = enteredEmailHasError ? `${styles["input-group"]} ${styles.invalid}` : `${styles["input-group"]}`;
    const passwordInputGroupStyles = enteredPasswordHasError ? `${styles["input-group"]} ${styles.invalid}` : `${styles["input-group"]}`;
    const invalidEmail = <div className={styles.invalidEmail}>
        <p>Invalid credentials!</p>
    </div>

    return (
      <form onSubmit={formSubmitHandler}>
        <h1>Sign-in</h1>
        { props.error && invalidEmail }
        <div className={emailInputGroupStyles}>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={inputEmailBlurHandler}
            autoComplete="true"
            placeholder="Email"
          />
           { (enteredEmailHasError) && <p>Invalid email.</p> }
        </div>
        <div className={passwordInputGroupStyles}>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={inputPasswordBlurHandler}
            autoComplete="true"
            placeholder="Password"
          />
         { (enteredPasswordHasError) && <p>Invalid password.</p> }
        </div>
        <Button type="submit">Sign-in</Button>
      </form>
    );
};

export default SignInForm;
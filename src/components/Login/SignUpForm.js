import Button from '../UI/Button/Button';
import useInput from '../hooks/use-input';

import styles from './FormStyles.module.css';

const SignUpForm = (props) => {
    const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: inputEmailHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: inputEmailBlurHandler
    } = useInput((value) => value.includes("@"));    

    let formIsValid = false;

    if (enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }
    };

    const emailInputGroupStyles = inputEmailHasError
      ? `${styles["input-group"]} ${styles.invalid}`
      : `${styles["input-group"]}`;

    return (
      <form onSubmit={formSubmitHandler}>
        <h1>Sign-Up</h1>
        <div className={emailInputGroupStyles}>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={inputEmailBlurHandler}
            value={enteredEmail}
            autoComplete="false"
            placeholder="Email"
          />
          { inputEmailHasError && <p>Please enter valid email</p> }
        </div>
        <div className={`${styles['input-group']}`}>
          <input
            type="password"
            id="password"
            autoComplete="false"
            placeholder='Password'
          />
          {/* { inputPasswordHasError && <p>Please enter your password</p> } */}
        </div>
        <div className={`${styles['input-group']}`}>
          <input
            type="password"
            id="confirm-password"
            autoComplete="false"
            placeholder="Confirm Password"
          />
          {/* { inputConfirmPasswordHasError && <p>Please enter your password</p> } */}
        </div>
        <Button>Sign-up</Button>
      </form>
    );
};

export default SignUpForm;
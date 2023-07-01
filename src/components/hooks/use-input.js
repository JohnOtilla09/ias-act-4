import { useState } from "react";

const useInput = (validate) => {
    const [ enteredValue, setEnteredValue ] = useState('');
    const [ isTouched, setIsTouched ] = useState(false);

    const valuesIsValid = validate(enteredValue);
    const hasError = !valuesIsValid && isTouched;

    console.log(enteredValue.includes('@'));

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    return {
        value: enteredValue,
        isvalid: valuesIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler
    };
};

export default useInput;
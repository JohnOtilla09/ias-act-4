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

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isvalid: valuesIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;
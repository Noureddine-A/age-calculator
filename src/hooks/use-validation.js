import React, { useState } from "react";

const useValidation = (validationCheck) => {
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);

  const inputIsValid = validationCheck(input);
  const hasError = !inputIsValid && touched;

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setTouched(true);
  };

  return {
    input,
    touched,
    inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useValidation;

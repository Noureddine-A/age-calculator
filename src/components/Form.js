import React from "react";

import useValidation from "../hooks/use-validation";

import './Form.css';

const Form = (props) => {
  let formIsValid = false;

  const yearValidation = (input) => {
    let currentYear = new Date().getFullYear();

    if (input.trim() !== "" && input < currentYear) {
      return true;
    }

    return false;
  };

  const monthValidation = (input) => {
    if(input.trim() !== "" && input < 13) {
      return true;
    }

    return false;
  };

  const {
    input: monthIsValid,
    touched: monthTouched,
    inputIsValid: monthValid,
    hasError: monthError,
    inputChangeHandler: monthChangeHandler,
    inputBlurHandler: monthBlurHandler,
  } = useValidation(monthValidation);

  const monthInputIsInvalid =
    !monthIsValid && monthTouched
      ? "form__month-input invalid"
      : "form__month-input";

  const {
    input: yearIsValid,
    touched: yearTouched,
    inputIsValid: yearValid,
    hasError: yearError,
    inputChangeHandler: yearChangeHandler,
    inputBlurHandler: yearBlurHandler,
  } = useValidation(yearValidation);

  const yearInputIsInvalid =
    !yearIsValid && yearTouched
      ? "form__year-input invalid"
      : "form__year-input";

  if (monthValid && yearValid) {
    formIsValid = true;
  }

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    let calculatedYear, calculatedMonth;

    calculatedYear = currentYear - yearIsValid;

    if (monthIsValid > currentMonth) {
      calculatedYear--;
      calculatedMonth = 12 - (monthIsValid - currentMonth);
    }

    return {
      ageYear: calculatedYear,
      ageMonth: calculatedMonth,
    };
  };

  const calculateAgeClickHandler = () => {
    const age = calculateAge();
    props.onSettingDay(age);
  };

  return (
    <div className="form__container">
      <form className="form__input-container">
        <div className={monthInputIsInvalid}>
          <label htmlFor="month" id="month" type="number">
            MONTH
          </label>
          <input
            placeholder="MM"
            onChange={monthChangeHandler}
            onBlur={monthBlurHandler}
          ></input>
          {monthError && <p>Enter a valid value</p>}
        </div>
        <div className={yearInputIsInvalid}>
          <label htmlFor="year" id="year" type="number">
            YEAR
          </label>
          <input
            placeholder="YYYY"
            onChange={yearChangeHandler}
            onBlur={yearBlurHandler}
          ></input>
          {yearError && <p>Enter a valid value</p>}
        </div>
      </form>
      <div className="form__button-container">
        <button disabled={!formIsValid} onClick={calculateAgeClickHandler}>Calculate</button>
      </div>
    </div>
  );
};

export default Form;

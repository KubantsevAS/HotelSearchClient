/* eslint-disable no-undef */
import React from "react";
import { Form } from "react-final-form";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { setLogin } from "../../redux/AuthReducer";
import { createInput } from "../../common/utils/formHelper";
import {
  requiredField,
  composeValidators,
  checkLatinText,
  checkEmail,
  minLengthCreator,
} from "../../common/validators";

function LoginForm() {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setLogin());
  };

  const Input = createInput();

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            validate={composeValidators(
              requiredField,
              checkLatinText,
              checkEmail
            )}
            label="Логин"
            type="email"
            styles={styles}
          />
          <Input
            name="password"
            validate={composeValidators(
              requiredField,
              checkLatinText,
              minLengthCreator(8)
            )}
            label="Пароль"
            type="password"
            styles={styles}
          />
          <button type="submit" disabled={submitting} className={styles.btn}>
            Войти
          </button>
        </form>
      )}
    </Form>
  );
}

export default LoginForm;

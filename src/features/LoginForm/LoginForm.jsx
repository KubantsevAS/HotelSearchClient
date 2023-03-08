/* eslint-disable no-undef */
import React from "react";
import { Form } from "react-final-form";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { setLogin } from "../../redux/AuthReducer";
import { CreateInput } from "../../common/formHelper";

function LoginForm() {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setLogin());
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <CreateInput
            name="email"
            // validate={composeValidators(requiredField, checkLatinText, checkEmail)}
            label="Логин"
            type="text"
            styles={styles}
          />
          <CreateInput
            name="password"
            // validate={composeValidators(requiredField, checkLatinText, minLengthCreator(8))}
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

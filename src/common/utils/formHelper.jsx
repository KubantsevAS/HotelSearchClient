import React from "react";

import { Field } from "react-final-form";

// eslint-disable-next-line import/prefer-default-export
export function createInput() {
  return function getInputGenerator({ name, validate, type, label, styles }) {
    return (
      <Field name={name} validate={validate}>
        {({ input, meta }) => {
          const checkErr = meta.error && meta.touched;
          return (
            <div className={styles.field}>
              <label
                className={`${styles.fieldLabel} ${
                  checkErr ? styles.fieldErr : ""
                }`}
              >
                {label}
              </label>
              <input
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...input}
                type={type}
                className={`${styles.input} ${checkErr ? styles.fieldErr : ""}`}
              />
              {checkErr && <span className={styles.error}>{meta.error}</span>}
            </div>
          );
        }}
      </Field>
    );
  };
}

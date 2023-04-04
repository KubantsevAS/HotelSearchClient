export const requiredField = (value) => {
  return !value ? "Обязательное поле для заполнения" : undefined;
};

export const checkLatinText = (value) => {
  return !/[a-z]/i.test(value)
    ? "Поле должно включать латинские символы"
    : undefined;
};

export const checkEmail = (value) => {
  return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
    ? "Введите корректный адрес электронной почты"
    : undefined;
};

export const minLengthCreator = (minLength) => (value) => {
  return value && value.length < minLength
    ? `Минимальная длина: ${minLength} символов`
    : undefined;
};

// Validators compose in one function
export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

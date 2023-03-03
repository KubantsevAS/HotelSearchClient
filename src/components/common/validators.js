export const requiredField = value => {
    return !value ? "Field is required" : undefined;
}

export const checkLatinText = value => {
    return !/[a-z]/i.test(value) ? "Field must only includes latin characters" : undefined;
}

export const checkEmail = value => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? "You must enter a valid E-mail" : undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    return value && value.length < minLength ? `Min length is ${minLength} symbols` : undefined;
}

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

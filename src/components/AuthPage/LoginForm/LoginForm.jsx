import React from 'react'
import { Form } from 'react-final-form'
import { checkEmail, checkLatinText, composeValidators, minLengthCreator, requiredField } from '../../common/validators'
import styles from './LoginForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../../redux/AuthReducer'
import { CreateInput } from '../../common/formhelper'

const LoginForm = () => {

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(setLogin());
    }

    return (
        <Form
            onSubmit={onSubmit}
        >
            {({ handleSubmit, submitError, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <CreateInput
                        name="email"
                        //validate={composeValidators(requiredField, checkLatinText, checkEmail)}
                        label="Логин"
                        type="text"
                        styles={styles}
                    />
                    <CreateInput
                        name="password"
                        //validate={composeValidators(requiredField, checkLatinText, minLengthCreator(8))}
                        label="Пароль"
                        type="password"
                        styles={styles}
                    />
                    <button type="submit" disabled={submitting} className={styles.btn}>
                        Войти
                    </button>
                </form>
            )
            }
        </Form>
    )
}

export default LoginForm;
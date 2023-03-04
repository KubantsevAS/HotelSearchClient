import React from 'react'
import { Form, Field } from 'react-final-form'
import { checkEmail, checkLatinText, composeValidators, minLengthCreator, requiredField } from '../../common/validators'
import styles from './LoginForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../../../redux/AuthReducer'

const LoginForm = () => {

    const auth = useSelector(store => store?.reducer?.AuthReducer?.auth);
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(setLogin());
    }

    const CreateInput = (props) => {
        return (
            <Field name={props.name} validate={props.validate}>
                        {({ input, meta }) =>{ 
                            let checkErr = meta.error && meta.touched;
                            return (
                            <div className={styles.field}>
                                <label className={styles.fieldLabel + ' ' + (checkErr ? styles.fieldErr : '')}>{props.label}</label>
                                <input {...input} type={props.type} className={styles.input + ' ' + (checkErr ? styles.fieldErr : '')}/>
                                {checkErr && <span className={styles.error}>{meta.error}</span>}
                            </div>)
                        }}
                    </Field>
        )
    }

    return (
        <Form
            onSubmit={onSubmit}
        >
            {({ handleSubmit, submitError, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <CreateInput
                        name="email"
                        validate={composeValidators(requiredField, checkLatinText, checkEmail )}
                        label="Логин"
                        type="text"
                    />
                    <CreateInput
                        name="password"
                        validate={composeValidators(requiredField, checkLatinText, minLengthCreator(8))}
                        label="Пароль"
                        type="password"
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
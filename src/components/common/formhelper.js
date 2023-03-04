import { Field } from "react-final-form";

export const CreateInput = (props) => {
    return (
        <Field name={props.name} validate={props.validate}>
            {({ input, meta }) => {
                let checkErr = meta.error && meta.touched;
                return (
                    <div className={props.styles.field}>
                        <label className={props.styles.fieldLabel + ' ' + (checkErr ? props.styles.fieldErr : '')}>{props.label}</label>
                        <input {...input} type={props.type} className={props.styles.input + ' ' + (checkErr ? props.styles.fieldErr : '')} />
                        {checkErr && <span className={props.styles.error}>{meta.error}</span>}
                    </div>)
            }}
        </Field>
    )
}
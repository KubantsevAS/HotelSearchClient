import React from 'react'
import { Form, Field } from 'react-final-form'
import { CreateInput } from '../../../../common/formhelper'
import styles from './FindHotel.module.css'

export default function FindHotel() {

    const onSubmit = () => {
        alert('click')
    }

    return (
        <div className={styles.findForm}>
            <Form
                onSubmit={onSubmit}
            >
                {({ handleSubmit, submitError, submitting, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label className={styles.fieldLabel}>Локация</label>
                            <Field
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="Москва"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.fieldLabel}>Дата заселения</label>
                            <Field
                                name="lastName"
                                component="input"
                                type="text"
                                placeholder="07.07.2020"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.field}>
                            <label className={styles.fieldLabel}>Количество дней</label>
                            <Field
                                name="lastName"
                                component="input"
                                type="text"
                                placeholder="1"
                                className={styles.input}
                            />
                        </div>
                        <button type="submit" disabled={submitting} className={styles.btn}>
                            Найти
                        </button>
                    </form>
                )
                }
            </Form>
        </div>
    )
}

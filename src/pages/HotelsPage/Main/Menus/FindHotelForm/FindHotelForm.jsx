import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import MyDatePicker from "../../../../../features/MyDatePicker/MyDatePicker";
import styles from "./FindHotelForm.module.css";
import { calendarSvg } from "../../../../../images/svgCollector";
import { getHotelsData } from "../../../../../redux/HotelReducer";
import { requiredField } from "../../../../../common/validators";

export default function FindHotel() {
  const dispatch = useDispatch();

  const errorFetchMsg = useSelector(
    (store) => store.reducer.HotelErrorReducer.errorMsg
  );

  const onSubmit = ({ location, date, days }) => {
    const check = date
      .split("-")
      .reverse()
      .map((elem) => +elem);
    check[1] -= 1;
    const checkIn = moment(check).format("YYYY-MM-DD");
    const checkOut = moment(check).add(days, "days").format("YYYY-MM-DD");
    dispatch(getHotelsData({ location, checkIn, checkOut }));
  };

  const calendarIcon = calendarSvg();

  return (
    <div className={styles.findForm}>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Локация</label>
              <Field
                name="location"
                component="input"
                type="text"
                placeholder="Москва"
                className={styles.input}
                validate={requiredField}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Дата заселения</label>
              <Field
                name="date"
                component={MyDatePicker}
                className={styles.input}
                validate={requiredField}
              />
              <div className={styles.calendarIcon}>{calendarIcon}</div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Количество дней</label>
              <Field
                name="days"
                component="input"
                type="text"
                placeholder="1"
                className={styles.input}
                validate={requiredField}
              />
            </div>
            {errorFetchMsg && (
              <div className={styles.errorMsg}>{errorFetchMsg}</div>
            )}
            <button type="submit" disabled={submitting} className={styles.btn}>
              Найти
            </button>
          </form>
        )}
      </Form>
    </div>
  );
}

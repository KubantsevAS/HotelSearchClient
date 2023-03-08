import React from "react";
import { Form, Field } from "react-final-form";
import MyDatePicker from "../../../../../features/MyDatePicker/MyDatePicker";
import styles from "./FindHotel.module.css";
import { calendarSvg } from "../../../../../images/svgCollector";
import { useDispatch } from "react-redux";
import moment from "moment";
import { getHotelsData } from "../../../../../redux/HotelReducer";

export default function FindHotel() {
  const dispatch = useDispatch();

  const onSubmit = ({ location, date, days }) => {
    let check = date
      .split("-")
      .reverse()
      .map((elem) => +elem);
    check[1] -= 1;
    let checkIn = moment(check).format("YYYY-MM-DD");
    let checkOut = moment(check).add(days, "days").format("YYYY-MM-DD");
    dispatch(getHotelsData({ location, checkIn, checkOut }));
  };

  const calendar = calendarSvg();

  return (
    <div className={styles.findForm}>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitError, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Локация</label>
              <Field
                name="location"
                component="input"
                type="text"
                placeholder="Москва"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Дата заселения</label>

              <Field
                name="date"
                component={MyDatePicker}
                className={styles.input}
              />

              <div className={styles.calendarIcon}>{calendar}</div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Количество дней</label>
              <Field
                name="days"
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
        )}
      </Form>
    </div>
  );
}

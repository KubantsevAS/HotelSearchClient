import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { format, isValid } from "date-fns";
import moment from "moment/moment";
import "./MyDatePicker.css";

registerLocale("ru", ru);

export default function MyDatePicker({
  name,
  input,
  input: { value, onChange },
}) {
  const [startDate, setStartDate] = useState(value);

  return (
    <DatePicker
      dateFormat="dd.MM.yyyy"
      locale="ru"
      name={name}
      disabledKeyboardNavigation
      placeholderText={moment().format("DD.MM.YYYY")}
      selected={startDate}
      onChange={(date) => {
        if (isValid(date)) {
          input.onChange(format(new Date(date), "dd-MM-yyyy"));
          setStartDate(date);
        } else {
          input.onChange(null);
        }
      }}
      className="MyDataPickerInput"
    />
  );
}

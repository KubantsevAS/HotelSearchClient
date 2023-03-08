export const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const fullDateFormat = (date) =>
  `${+date[2]} ${months[+date[1] - 1]} ${date[0]}`;

export const makeCorrectDaysText = (dayFormat) => {
  const newArr = dayFormat.toString().split("");

  if (dayFormat < 10) {
    if (dayFormat === 1) {
      return "день";
    }
    if (dayFormat > 1 && dayFormat < 5) {
      return "дня";
    }

    return "дней";
  }
  if (dayFormat > 20) {
    if (+newArr[newArr.length - 1] === 1) {
      return "день";
    }
    if (newArr[newArr.length - 1] > 1 && newArr[newArr.length - 1] < 5) {
      return "дня";
    }

    return "дней";
  }

  return "дней";
};

export const makeCorrectHotelsText = (dayFormat) => {
  const newArr = dayFormat.toString().split("");

  if (dayFormat < 10) {
    if (dayFormat === 1) {
      return "отель";
    }
    if (dayFormat > 1 && dayFormat < 5) {
      return "отеля";
    }

    return "отелей";
  }

  if (dayFormat > 20) {
    if (+newArr[newArr.length - 1] === 1) {
      return "отель";
    }
    if (newArr[newArr.length - 1] > 1 && newArr[newArr.length - 1] < 5) {
      return "отеля";
    }

    return "отелей";
  }

  return "отелей";
};

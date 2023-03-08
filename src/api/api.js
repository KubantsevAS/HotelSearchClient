import axios from "axios";
import {
  baseUrl,
  initialCheckIn,
  initialCheckOut,
  MAX_HOTEL_ITEMS,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const getHotelItems = async (
  location = "Москва",
  checkIn = initialCheckIn,
  checkOut = initialCheckOut
) => {
  const request = await axios
    .get(
      `${baseUrl}location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=${MAX_HOTEL_ITEMS}`
    )
    .then((response) => {
      return { data: response.data, checkIn, checkOut, location };
    });
  return request;
};

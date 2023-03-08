import axios from "axios";
import moment from "moment/moment";
import { MAX_HOTEL_ITEMS } from "./consts";

const baseUrl = "http://engine.hotellook.com/api/v2/cache.json?";

const initialCheckIn = moment().format("YYYY-MM-DD");
const initialCheckOut = moment().add(1, "days").format("YYYY-MM-DD");

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

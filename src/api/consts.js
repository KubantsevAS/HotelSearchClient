import moment from "moment/moment";

export const MAX_HOTEL_ITEMS = 100;

export const baseUrl = "http://engine.hotellook.com/api/v2/cache.json?";

export const initialCheckIn = moment().format("YYYY-MM-DD");
export const initialCheckOut = moment().add(1, "days").format("YYYY-MM-DD");

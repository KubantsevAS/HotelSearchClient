import axios from "axios";
import moment from "moment/moment";

const baseUrl = "http://engine.hotellook.com/api/v2/lookup.json?";
const baseUrlnew = "http://engine.hotellook.com/api/v2/cache.json?"

let initialCheckIn = moment().format('YYYY-MM-DD')
let initialCheckOut = moment().add(21, 'days').format('YYYY-MM-DD')


export const getHotelItems = async (location = 'Moscow', checkIn = initialCheckIn, checkOut = initialCheckOut) => {
    const request = await axios.get(`${baseUrlnew}location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=5`)
        .then(response => {
            //console.log(response.data.results.hotels)
            return {data: response.data, checkIn, checkOut}
        })
    return request
}
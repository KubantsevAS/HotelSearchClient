import axios from "axios";

const baseUrl = "http://engine.hotellook.com/api/v2/lookup.json";

export const HotelApi = {
    getHotelItems () {
        axios.get(`${baseUrl}?query=moscow&lang=ru&lookFor=both&limit=1`)
            .then(response => {
                console.log(response)
                return response
            })
    }
}
import axios from "axios";

const baseUrl = "http://engine.hotellook.com/api/v2/lookup.json";

// export const HotelApi = {
//     getHotelItems() {
//         axios.get(`${baseUrl}?query=moscow&lang=ru&lookFor=both&limit=1`)
//             .then(response => {
//                 console.log(response.data.results)
//                 return response.data.results.hotels
//             })
//     }
// }

export const getHotelItems = async (searchQuery) => {
    const request = await axios.get(`${baseUrl}?query=moscow&lang=ru&lookFor=both&limit=5`)
        .then(response => {
            console.log(response.data.results.hotels)
            return response.data.results.hotels
        })
    return request
}
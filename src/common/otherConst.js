export const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export const fullDateFormat = (date) => `${+date[2]} ${months[+date[1] - 1]} ${date[0]}` 

export const makeCorrectDaysText = (dayFormat) => {
    let newArr = dayFormat.toString().split('');
    
    if (dayFormat < 10) {
        return dayFormat === 1 ? 'день' : dayFormat > 1 && dayFormat < 5 ? `дня` : `дней`
    } else if (dayFormat > 20) {
        return +newArr[newArr.length - 1] === 1 ? 'день' : newArr[newArr.length - 1] > 1 && newArr[newArr.length - 1] < 5 ? `дня` : `дней`
    } else return 'дней'
}
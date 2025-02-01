import AMOUNT_OF_DAYS_IN_WEEK from '../constants/amount-day-in-week.constant'
import WeekDay from '../enums/week-days.enum'

function getWeekDays(firstDayOfWeek: WeekDay) {
    return Array.from({ length: AMOUNT_OF_DAYS_IN_WEEK }).map((_, index) => {
        return (index + firstDayOfWeek) % AMOUNT_OF_DAYS_IN_WEEK
    })
}

export default getWeekDays

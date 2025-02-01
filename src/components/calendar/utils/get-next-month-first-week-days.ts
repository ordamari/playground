import AMOUNT_OF_DAYS_IN_WEEK from '../constants/amount-day-in-week.constant'
import Month from '../enums/month.enum'
import WeekDay from '../enums/week-days.enum'

function getNextMonthFirstWeekDays(
    currentMonth: Month,
    currentYear: number,
    firstDayOfWeek: WeekDay
) {
    const nextMonthFirstDayDate = new Date(currentYear, currentMonth + 1, 1)

    const nextMonthFirstDayDate_weekDay = nextMonthFirstDayDate.getDay()

    const amountOfDaysInNextMonthFirstWeek =
        _getAmountOfDaysInNextMonthFirstWeek(
            nextMonthFirstDayDate_weekDay,
            firstDayOfWeek
        )

    return Array.from({ length: amountOfDaysInNextMonthFirstWeek }).map(
        (_, index) => {
            return index + 1
        }
    )
}

function _getAmountOfDaysInNextMonthFirstWeek(
    nextMonthFirstDayDate_weekDay: WeekDay,
    firstDayOfWeek: WeekDay
) {
    const firstWeekDays = []
    let currentDay = nextMonthFirstDayDate_weekDay

    while (currentDay !== firstDayOfWeek) {
        firstWeekDays.push(currentDay)
        currentDay = _getNextWeekDay(currentDay)
    }

    return firstWeekDays.length
}

function _getNextWeekDay(day: WeekDay) {
    return (day + 1) % AMOUNT_OF_DAYS_IN_WEEK
}

export default getNextMonthFirstWeekDays

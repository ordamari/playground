import AMOUNT_OF_DAYS_IN_WEEK from '../constants/amount-day-in-week.constant'
import Month from '../enums/month.enum'
import WeekDay from '../enums/week-days.enum'

function getPrevMonthLastWeekDays(
    currentMonth: Month,
    currentYear: number,
    firstDayOfWeek: WeekDay
) {
    const lastMonthLastDayDate = new Date(currentYear, currentMonth, 0)
    const lastMonthLastDayDate_weekDay = lastMonthLastDayDate.getDay()
    const amountOfDaysInPrevMonthLastWeek = _getAmountOfDaysInPrevMonthLastWeek(
        lastMonthLastDayDate_weekDay,
        firstDayOfWeek
    )
    const lastMonthLastDayDate_monthDay = lastMonthLastDayDate.getDate()

    return Array.from({ length: amountOfDaysInPrevMonthLastWeek }).map(
        (_, index) => {
            return (
                lastMonthLastDayDate_monthDay -
                amountOfDaysInPrevMonthLastWeek +
                index +
                1
            )
        }
    )
}

function _getAmountOfDaysInPrevMonthLastWeek(
    lastMonthLastDayDate_weekDay: WeekDay,
    firstDayOfWeek: WeekDay
) {
    const lastWeekDays = []
    let currentDay = lastMonthLastDayDate_weekDay

    while (!_checkIsTheLastDayOfWeek(currentDay, firstDayOfWeek)) {
        lastWeekDays.unshift(currentDay)
        currentDay = _getPrevWeekDay(currentDay)
    }

    return lastWeekDays.length
}

function _checkIsTheLastDayOfWeek(
    day: WeekDay,
    firstDayOfWeek: WeekDay
): boolean {
    const normalizedDifference =
        (day - firstDayOfWeek + AMOUNT_OF_DAYS_IN_WEEK) % AMOUNT_OF_DAYS_IN_WEEK

    return normalizedDifference === AMOUNT_OF_DAYS_IN_WEEK - 1
}

function _getPrevWeekDay(day: WeekDay) {
    return (day - 1 + AMOUNT_OF_DAYS_IN_WEEK) % AMOUNT_OF_DAYS_IN_WEEK
}

export default getPrevMonthLastWeekDays

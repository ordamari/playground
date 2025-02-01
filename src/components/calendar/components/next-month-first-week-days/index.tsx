import useCalendarContext from '../../hooks/useCalendarContext'
import getNextMonth from '../../utils/get-next-month'
import getNextMonthFirstWeekDays from '../../utils/get-next-month-first-week-days'
import getNextMonthYear from '../../utils/get-next-month-year'
import MonthDay from '../month-day'

type NextMonthLastWeekDaysProps = {}

function NextMonthLastWeekDays({}: NextMonthLastWeekDaysProps) {
    const { currentMonth, currentYear, firstDayOfWeek, getDayProps } =
        useCalendarContext()
    const nextMonthLastWeekDays = getNextMonthFirstWeekDays(
        currentMonth,
        currentYear,
        firstDayOfWeek
    )

    const nextMonth = getNextMonth(currentMonth)
    const nextMonthYear = getNextMonthYear(currentMonth, currentYear)

    return (
        <>
            {nextMonthLastWeekDays.map((day) => {
                const dayProps =
                    getDayProps && getDayProps(day, nextMonth, nextMonthYear)
                const key = `${nextMonth}-${day}`
                return <MonthDay key={key} day={day} {...dayProps} />
            })}
        </>
    )
}

export default NextMonthLastWeekDays

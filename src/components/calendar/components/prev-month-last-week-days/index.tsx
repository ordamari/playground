import useCalendarContext from '../../hooks/useCalendarContext'
import getPrevMonth from '../../utils/get-prev-month'
import getPrevMonthLastWeekDays from '../../utils/get-prev-month-last-week-days'
import getPrevMonthYear from '../../utils/get-prev-month-year'
import MonthDay from '../month-day'

type PrevMonthLastWeekDaysProps = {}

function PrevMonthLastWeekDays({}: PrevMonthLastWeekDaysProps) {
    const { currentMonth, currentYear, firstDayOfWeek, getDayProps } =
        useCalendarContext()

    const prevMonthLastWeekDays = getPrevMonthLastWeekDays(
        currentMonth,
        currentYear,
        firstDayOfWeek
    )

    const prevMonth = getPrevMonth(currentMonth)
    const prevMonthYear = getPrevMonthYear(currentMonth, currentYear)

    return (
        <>
            {prevMonthLastWeekDays.map((day) => {
                const dayProps =
                    getDayProps && getDayProps(day, prevMonth, prevMonthYear)
                const key = `${prevMonth}-${day}`
                return <MonthDay key={key} day={day} {...dayProps} />
            })}
        </>
    )
}

export default PrevMonthLastWeekDays

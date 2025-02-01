import useCalendarContext from '../../hooks/useCalendarContext'
import getMonthDays from '../../utils/get-month-days'
import MonthDay from '../month-day'

type MonthDaysProps = {}

function MonthDays({}: MonthDaysProps) {
    const { currentMonth, currentYear, getDayProps } = useCalendarContext()
    const monthDays = getMonthDays(currentMonth, currentYear)
    return (
        <>
            {monthDays.map((day) => {
                const dayProps =
                    getDayProps && getDayProps(day, currentMonth, currentYear)
                const key = `${currentMonth}-${day}`
                return <MonthDay key={key} day={day} {...dayProps} />
            })}
        </>
    )
}

export default MonthDays
